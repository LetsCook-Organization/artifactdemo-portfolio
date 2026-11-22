import { useEffect, useRef } from 'react';

interface ShaderBackgroundProps {
  className?: string;
}

/**
 * WebGL ambient background faithfully adapted from the imported
 * Google Stitch shader (ANIMATION_2 in code_d52bbbea.html).
 * Respects prefers-reduced-motion and cleans up GL resources on unmount.
 */
export function ShaderBackground({ className = '' }: ShaderBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const syncSize = () => {
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(syncSize);
      resizeObserver.observe(canvas);
    }
    syncSize();

    const gl =
      canvas.getContext('webgl', { alpha: false, antialias: false }) ||
      (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);

    if (!gl) {
      return () => {
        resizeObserver?.disconnect();
      };
    }

    const vsSource = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      void main() {
        vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
        vec2 mouse = (u_mouse.xy / max(u_resolution.xy, vec2(1.0))) * 2.0 - 1.0;

        float t = u_time * 0.35;

        float d1 = length(uv - vec2(sin(t * 0.8) * 0.4, cos(t * 0.6) * 0.3 + 0.1) - mouse * 0.04);
        float d2 = length(uv + vec2(cos(t * 0.7) * 0.5, sin(t * 0.5) * 0.4 - 0.2));

        float wave = sin(d1 * 6.0 - t * 1.5) * 0.5 + sin(d2 * 5.0 + t * 1.2) * 0.5;
        wave += 0.25 * sin(uv.x * 4.0 + uv.y * 3.0 + t);

        vec3 col = vec3(0.027, 0.035, 0.055);
        vec3 cyan = vec3(0.0, 0.94, 0.99);
        vec3 violet = vec3(0.54, 0.36, 0.96);
        vec3 blue = vec3(0.12, 0.42, 0.88);

        float cGlow = smoothstep(0.9, 0.1, d1) * 0.42;
        float vGlow = smoothstep(1.1, 0.2, d2) * 0.35;

        col += cyan * cGlow * (0.6 + 0.4 * wave);
        col += violet * vGlow * (0.7 - 0.3 * wave);
        col += blue * (wave * 0.14 + 0.05);

        float vignette = 1.0 - length(uv * 0.55);
        col *= clamp(vignette, 0.0, 1.0);

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const vs = compileShader(gl.VERTEX_SHADER, vsSource);
    const fs = compileShader(gl.FRAGMENT_SHADER, fsSource);
    const program = gl.createProgram();

    if (!vs || !fs || !program) {
      return () => {
        resizeObserver?.disconnect();
      };
    }

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posLocation);
    gl.vertexAttribPointer(posLocation, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRes = gl.getUniformLocation(program, 'u_resolution');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let rafId = 0;

    const drawFrame = (timeMs: number) => {
      if (!resizeObserver) syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, timeMs * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    if (prefersReducedMotion) {
      drawFrame(2400);
    } else {
      const loop = (t: number) => {
        drawFrame(t);
        rafId = window.requestAnimationFrame(loop);
      };
      rafId = window.requestAnimationFrame(loop);
    }

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver?.disconnect();
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`block h-full w-full ${className}`}
    />
  );
}
