import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, FileText, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { ShaderBackground } from '../components/ShaderBackground';
import { BrandMark } from '../components/BrandMark';
import { PROFILE } from '../data/profile';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export function HeroSection({ onNavigate, onOpenResume }: HeroSectionProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PROFILE.roles.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [prefersReducedMotion]);

  const currentRole = PROFILE.roles[roleIndex];

  return (
    <section
      id="home"
      className="relative mx-auto w-full max-w-[1320px] px-5 pt-24 pb-12 sm:px-8 sm:pt-28 lg:px-12 lg:pt-32"
    >
      {/* Main Hero Canvas Shell */}
      <div className="relative overflow-hidden rounded-3xl bg-[#0c0e13] p-6 shadow-2xl sm:p-10 lg:p-12">
        {/* Imported Stitch WebGL Shader */}
        <div className="pointer-events-none absolute inset-0 opacity-65">
          <ShaderBackground />
        </div>

        {/* Ambient Radial Glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#00f2fe]/12 blur-[90px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-[#571bc1]/20 blur-[100px]"
        />

        {/* Hero Split Grid (12-column desktop, stacked mobile/tablet) */}
        <div className="relative z-10 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Typographic Hierarchy & CTAs */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between gap-6 lg:col-span-7"
          >
            <div className="space-y-5">
              {/* Availability Indicator & Location */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#191c21]/85 px-3.5 py-1.5 backdrop-blur-md">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00f2fe] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00f2fe]" />
                  </span>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#00f2fe]">
                    {PROFILE.availabilityLabel}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#b9cacb]">
                  <MapPin className="h-3.5 w-3.5 text-[#7bd0ff]" aria-hidden="true" />
                  <span>{PROFILE.location}</span>
                </span>
              </div>

              {/* Greeting + Name */}
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <span className="h-px w-6 bg-[#00f2fe]" aria-hidden="true" />
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#b9cacb]">
                    {PROFILE.greeting}
                  </span>
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#00f2fe]">
                    {PROFILE.name}
                  </span>
                </div>

                {/* Primary Display Statement */}
                <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.06] tracking-[-0.035em] text-[#e2e2ea] text-balance sm:text-5xl lg:text-6xl">
                  BUILDING.
                  <br />
                  <span className="bg-gradient-to-r from-[#00f2fe] via-[#7bd0ff] to-[#d0bcff] bg-clip-text text-transparent">
                    LEARNING.
                  </span>
                  <br />
                  EXPLORING.
                </h1>
              </div>

              {/* Dynamic Professional Role */}
              <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm">
                <Sparkles className="h-4 w-4 shrink-0 text-[#d0bcff]" aria-hidden="true" />
                <span className="text-[#849495]">Role:</span>
                <span
                  key={currentRole}
                  className="font-semibold text-[#e2e2ea] transition-opacity duration-200"
                >
                  {currentRole}
                </span>
              </div>

              {/* Concise Introduction */}
              <p className="max-w-xl text-sm leading-relaxed text-[#b9cacb] sm:text-base">
                {PROFILE.heroIntro}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('projects');
                }}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#00f2fe] px-6 text-sm font-semibold text-[#002022] shadow-[0_0_24px_rgba(0,242,254,0.3)] transition-transform hover:opacity-95 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00f2fe]"
              >
                <span>Explore Focus & Work</span>
                <ArrowDown className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contact');
                }}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-[#1d2025]/80 px-6 text-sm font-medium text-[#e2e2ea] backdrop-blur-md transition-colors hover:border-[#00f2fe]/40 hover:bg-[#282a30] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00f2fe]"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="h-4 w-4 text-[#00f2fe]" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-[#191c21]/75 px-5 text-sm font-medium text-[#b9cacb] backdrop-blur-md transition-colors hover:border-[#d0bcff]/40 hover:text-[#e2e2ea] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00f2fe]"
              >
                <FileText className="h-4 w-4 text-[#d0bcff]" />
                <span>Resume</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Developer Identity & Academic Matrix Card */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:col-span-5"
          >
            <div className="glass-panel flex h-full flex-col justify-between gap-6 rounded-2xl p-6">
              {/* Profile Header / Avatar Treatment */}
              <div className="flex items-center gap-4">
                {PROFILE.avatarUrl ? (
                  <img
                    src={PROFILE.avatarUrl}
                    alt={PROFILE.name}
                    referrerPolicy="no-referrer"
                    className="h-16 w-16 rounded-2xl object-cover ring-1 ring-[#00f2fe]/40"
                  />
                ) : (
                  <BrandMark className="h-16 w-16 shrink-0" />
                )}
                <div className="min-w-0">
                  <p className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[#e2e2ea]">
                    {PROFILE.name}
                  </p>
                  <p className="mt-0.5 text-xs leading-snug text-[#b9cacb]">
                    Developer · AI/ML &amp; Cloud Community Builder
                  </p>
                </div>
              </div>

              {/* Dual Academic Identity */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[#849495]">
                  <GraduationCap className="h-3.5 w-3.5 text-[#00f2fe]" aria-hidden="true" />
                  <span>Academic Identity</span>
                </div>
                <div className="space-y-2.5">
                  {PROFILE.academicSummary.map((edu) => (
                    <div
                      key={edu.institution}
                      className="rounded-xl bg-[#111319]/85 p-3.5"
                    >
                      <p className="text-sm font-semibold text-[#e2e2ea]">{edu.degree}</p>
                      <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 font-mono text-xs text-[#b9cacb]">
                        <span className="text-[#00f2fe]">{edu.institution}</span>
                        <span aria-hidden="true">·</span>
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Community & Technology Badges (clean unboxed metadata list) */}
              <div className="space-y-2 border-t border-white/[0.06] pt-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#849495]">
                  Active Ecosystem Leadership
                </p>
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium text-[#e2e2ea]">
                  <span className="text-[#00f2fe]">Google Student Ambassador</span>
                  <span className="text-[#849495]" aria-hidden="true">
                    /
                  </span>
                  <span className="text-[#d0bcff]">AWS SBCL</span>
                  <span className="text-[#849495]" aria-hidden="true">
                    /
                  </span>
                  <span>Unstop Campus Champion</span>
                  <span className="text-[#849495]" aria-hidden="true">
                    /
                  </span>
                  <span className="text-[#7bd0ff]">GDG GLAU</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Verified Profile Strip Below Hero Split */}
        <div className="relative z-10 mt-8 grid grid-cols-1 gap-3 border-t border-white/[0.08] pt-6 sm:grid-cols-3">
          {PROFILE.verifiedCounts.map((stat, idx) => {
            const colorClass =
              idx === 0
                ? 'text-[#00f2fe]'
                : idx === 1
                  ? 'text-[#d0bcff]'
                  : 'text-[#7bd0ff]';
            return (
              <div
                key={stat.label}
                className="flex items-baseline justify-between rounded-xl bg-[#111319]/70 px-4 py-3 backdrop-blur-md sm:flex-col sm:items-start sm:gap-1"
              >
                <div className="flex items-baseline gap-2.5">
                  <span
                    className={`font-[family-name:var(--font-display)] text-2xl font-bold tabular-nums ${colorClass}`}
                  >
                    {stat.value}
                  </span>
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#e2e2ea]">
                    {stat.label}
                  </span>
                </div>
                <span className="text-xs text-[#849495]">{stat.context}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
