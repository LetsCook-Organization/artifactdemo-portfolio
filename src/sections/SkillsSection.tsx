import { Award, Cloud, Cpu, Database, Layers } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { SKILL_CATEGORIES } from '../data/skills';
import { CERTIFICATIONS } from '../data/experience';

const CATEGORY_ICONS = [Cpu, Database, Cloud, Layers];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-[1320px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20"
    >
      <div className="space-y-10">
        <SectionHeader
          index="05"
          kicker="Verified Capabilities"
          title="Technology & Skills"
          subtitle="Domains and tools grounded directly in my academic coursework, certifications, and community roles."
        />

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = CATEGORY_ICONS[idx % CATEGORY_ICONS.length];
            const accentClass =
              category.accent === 'cyan'
                ? 'text-[#00f2fe]'
                : category.accent === 'violet'
                  ? 'text-[#d0bcff]'
                  : 'text-[#7bd0ff]';

            return (
              <div
                key={category.id}
                className="glass-panel rounded-2xl p-6 space-y-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[#e2e2ea]">
                      {category.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-[#849495]">{category.subtitle}</p>
                  </div>
                  <Icon className={`h-5 w-5 shrink-0 ${accentClass}`} aria-hidden="true" />
                </div>

                <ul className="space-y-2.5 border-t border-white/[0.06] pt-4">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex flex-col justify-between gap-0.5 sm:flex-row sm:items-center sm:gap-4"
                    >
                      <span className="font-mono text-sm font-medium text-[#e2e2ea]">
                        {item.name}
                      </span>
                      <span className="text-xs text-[#849495]">{item.context}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Verified Certifications Shelf */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-[#00f2fe]">
            <Award className="h-4 w-4" aria-hidden="true" />
            <span>Verified Certifications ({CERTIFICATIONS.length})</span>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="flex flex-col justify-between rounded-xl bg-[#111319] p-4"
              >
                <p className="text-sm font-semibold leading-snug text-[#e2e2ea]">
                  {cert.title}
                </p>
                <p className="mt-2 font-mono text-xs text-[#849495]">{cert.issuerContext}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
