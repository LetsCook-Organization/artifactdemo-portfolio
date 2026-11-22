import { Compass, Cpu, Users } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { PROFILE } from '../data/profile';

const HIGHLIGHT_ICONS = [Cpu, Compass, Users];

export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-[1320px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20"
    >
      <div className="space-y-8">
        <SectionHeader
          index="06"
          kicker="Mindset & Direction"
          title="About Me"
          accent="violet"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Narrative Card */}
          <div className="glass-panel flex flex-col justify-between gap-5 rounded-2xl p-6 sm:p-8 lg:col-span-7">
            <div className="space-y-4">
              {PROFILE.aboutNarrative.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm leading-relaxed text-[#e2e2ea]/90 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="border-t border-white/[0.06] pt-4 font-mono text-xs text-[#849495]">
              <span>Based in </span>
              <span className="text-[#00f2fe]">{PROFILE.location}</span>
              <span> · Dual Undergraduate in AI/ML &amp; Data Science</span>
            </div>
          </div>

          {/* 3 Supporting Cards */}
          <div className="flex flex-col gap-3 lg:col-span-5">
            {PROFILE.aboutHighlights.map((item, idx) => {
              const Icon = HIGHLIGHT_ICONS[idx % HIGHLIGHT_ICONS.length];
              const accentClass = idx === 1 ? 'text-[#d0bcff]' : 'text-[#00f2fe]';
              return (
                <div
                  key={item.label}
                  className="glass-panel rounded-2xl p-5"
                >
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider">
                    <Icon className={`h-4 w-4 ${accentClass}`} aria-hidden="true" />
                    <span className={accentClass}>{item.label}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#b9cacb]">
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
