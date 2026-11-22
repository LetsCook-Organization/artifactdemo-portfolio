import { Award, Cloud, Code2, Compass, Globe2, Users } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { COMMUNITY_ACTIVITIES } from '../data/experience';

const ACTIVITY_ICONS = [Globe2, Cloud, Code2, Award, Compass, Users];

export function ActivitiesSection() {
  return (
    <section
      id="activities"
      className="mx-auto w-full max-w-[1320px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20"
    >
      <div className="space-y-8">
        <SectionHeader
          index="03"
          kicker="Developer Ecosystem & Campus Leadership"
          title="Activities & Community"
          subtitle="Actively participating in developer ecosystems, campus chapters, and student builder networks across AI, cloud computing, and collaborative engineering."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {COMMUNITY_ACTIVITIES.map((activity, idx) => {
            const Icon = ACTIVITY_ICONS[idx % ACTIVITY_ICONS.length];
            const isCyan = idx % 2 === 0;
            const accentColor = isCyan ? 'text-[#00f2fe]' : 'text-[#d0bcff]';

            return (
              <article
                key={activity.id}
                className="glass-panel-interactive flex flex-col justify-between gap-4 rounded-2xl p-6"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <span className={`font-mono text-xs uppercase tracking-wider ${accentColor}`}>
                      {activity.domain}
                    </span>
                    <Icon className={`h-5 w-5 shrink-0 ${accentColor}`} aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[#e2e2ea]">
                      {activity.title}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-[#b9cacb]">
                      {activity.organization}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-[#b9cacb]">{activity.summary}</p>
                </div>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-white/[0.06] pt-3 font-mono text-xs text-[#849495]">
                  <span className="text-[#e2e2ea]">{activity.period}</span>
                  {activity.location ? (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{activity.location}</span>
                    </>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
