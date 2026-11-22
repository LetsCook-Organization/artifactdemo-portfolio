import type { ProjectItem } from '../data/projects';

interface ProjectBlueprintVisualProps {
  visualType: ProjectItem['visualType'];
  title: string;
}

/**
 * Custom crisp SVG architectural diagrams for project showcase previews.
 * Zero external image dependency — renders reliably at all screen densities.
 */
export function ProjectBlueprintVisual({ visualType, title }: ProjectBlueprintVisualProps) {
  if (visualType === 'ai-agent') {
    return (
      <div className="relative flex h-52 w-full items-center justify-center overflow-hidden rounded-xl bg-[#0c0e13] p-5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-12 -left-12 h-40 w-40 rounded-full bg-[#00f2fe]/12 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-[#571bc1]/20 blur-3xl"
        />
        <svg
          viewBox="0 0 360 150"
          className="relative z-10 h-full w-full max-w-[360px]"
          role="img"
          aria-label={`Architectural schematic for ${title}`}
        >
          <defs>
            <linearGradient id="flow-cyan" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#d0bcff" stopOpacity="0.85" />
            </linearGradient>
          </defs>
          {/* Connection Paths */}
          <path d="M74 75 H132" stroke="url(#flow-cyan)" strokeWidth="1.5" strokeDasharray="4 3" />
          <path d="M222 75 H280" stroke="url(#flow-cyan)" strokeWidth="1.5" strokeDasharray="4 3" />
          <path d="M177 45 V30 H280 V45" stroke="#3a494b" strokeWidth="1.2" fill="none" />
          {/* Node 1: Query */}
          <rect x="10" y="50" width="64" height="50" rx="10" fill="#191c21" stroke="#3a494b" />
          <text x="42" y="72" textAnchor="middle" fill="#b9cacb" fontSize="9" fontFamily="JetBrains Mono, monospace">
            SEARCH
          </text>
          <text x="42" y="87" textAnchor="middle" fill="#00f2fe" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            SOURCES
          </text>
          {/* Node 2: Agent */}
          <rect x="132" y="45" width="90" height="60" rx="12" fill="#1d2025" stroke="#00f2fe" strokeOpacity="0.5" />
          <text x="177" y="71" textAnchor="middle" fill="#e2e2ea" fontSize="10" fontFamily="Space Grotesk, sans-serif" fontWeight="600">
            AI AGENT
          </text>
          <text x="177" y="87" textAnchor="middle" fill="#7bd0ff" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            SYNTHESIS
          </text>
          {/* Node 3: Report */}
          <rect x="280" y="50" width="70" height="50" rx="10" fill="#191c21" stroke="#d0bcff" strokeOpacity="0.45" />
          <text x="315" y="72" textAnchor="middle" fill="#e2e2ea" fontSize="9" fontFamily="JetBrains Mono, monospace">
            REPORT
          </text>
          <text x="315" y="87" textAnchor="middle" fill="#d0bcff" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            OUTPUT
          </text>
        </svg>
      </div>
    );
  }

  if (visualType === 'cloud-azure') {
    return (
      <div className="relative flex h-52 w-full items-center justify-center overflow-hidden rounded-xl bg-[#0c0e13] p-5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 right-0 h-40 w-40 rounded-full bg-[#7bd0ff]/12 blur-3xl"
        />
        <svg
          viewBox="0 0 360 150"
          className="relative z-10 h-full w-full max-w-[360px]"
          role="img"
          aria-label={`Architectural schematic for ${title}`}
        >
          <rect x="30" y="22" width="300" height="106" rx="14" fill="#191c21" stroke="#3a494b" strokeDasharray="3 3" />
          <text x="48" y="42" fill="#7bd0ff" fontSize="9" fontFamily="JetBrains Mono, monospace">
            CLOUD ARCHITECTURE LAYER
          </text>
          <rect x="48" y="56" width="80" height="52" rx="8" fill="#1d2025" stroke="#7bd0ff" strokeOpacity="0.4" />
          <text x="88" y="80" textAnchor="middle" fill="#e2e2ea" fontSize="9.5" fontFamily="Space Grotesk, sans-serif" fontWeight="600">
            AZURE
          </text>
          <text x="88" y="95" textAnchor="middle" fill="#b9cacb" fontSize="8" fontFamily="JetBrains Mono, monospace">
            FUNDAMENTALS
          </text>

          <rect x="140" y="56" width="80" height="52" rx="8" fill="#1d2025" stroke="#00f2fe" strokeOpacity="0.4" />
          <text x="180" y="80" textAnchor="middle" fill="#e2e2ea" fontSize="9.5" fontFamily="Space Grotesk, sans-serif" fontWeight="600">
            COMPUTE
          </text>
          <text x="180" y="95" textAnchor="middle" fill="#00f2fe" fontSize="8" fontFamily="JetBrains Mono, monospace">
            SERVICES
          </text>

          <rect x="232" y="56" width="80" height="52" rx="8" fill="#1d2025" stroke="#d0bcff" strokeOpacity="0.4" />
          <text x="272" y="80" textAnchor="middle" fill="#e2e2ea" fontSize="9.5" fontFamily="Space Grotesk, sans-serif" fontWeight="600">
            AWS SBCL
          </text>
          <text x="272" y="95" textAnchor="middle" fill="#d0bcff" fontSize="8" fontFamily="JetBrains Mono, monospace">
            COMMUNITY
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div className="relative flex h-52 w-full items-center justify-center overflow-hidden rounded-xl bg-[#0c0e13] p-5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-8 h-40 w-40 rounded-full bg-[#d0bcff]/14 blur-3xl"
      />
      <svg
        viewBox="0 0 360 150"
        className="relative z-10 h-full w-full max-w-[360px]"
        role="img"
        aria-label={`Architectural schematic for ${title}`}
      >
        <rect x="35" y="26" width="120" height="98" rx="14" fill="#191c21" stroke="#d0bcff" strokeOpacity="0.45" />
        <text x="95" y="56" textAnchor="middle" fill="#d0bcff" fontSize="9" fontFamily="JetBrains Mono, monospace">
          GDG GLAU
        </text>
        <text x="95" y="76" textAnchor="middle" fill="#e2e2ea" fontSize="11" fontFamily="Space Grotesk, sans-serif" fontWeight="600">
          ANDROID TEAM
        </text>
        <text x="95" y="95" textAnchor="middle" fill="#b9cacb" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
          COLLABORATION
        </text>

        <path d="M155 75 H205" stroke="#00f2fe" strokeWidth="1.5" strokeDasharray="4 3" />

        <rect x="205" y="26" width="120" height="98" rx="14" fill="#1d2025" stroke="#00f2fe" strokeOpacity="0.4" />
        <text x="265" y="56" textAnchor="middle" fill="#00f2fe" fontSize="9" fontFamily="JetBrains Mono, monospace">
          INTEGRATION
        </text>
        <text x="265" y="76" textAnchor="middle" fill="#e2e2ea" fontSize="11" fontFamily="Space Grotesk, sans-serif" fontWeight="600">
          AI + CLOUD
        </text>
        <text x="265" y="95" textAnchor="middle" fill="#b9cacb" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
          DESIGN THINKING
        </text>
      </svg>
    </div>
  );
}
