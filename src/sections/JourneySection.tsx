import { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { TIMELINE_ENTRIES, type TimelineEntry } from '../data/experience';

type TimelineFilter = 'all' | 'community' | 'education';

const FILTERS: { id: TimelineFilter; label: string }[] = [
  { id: 'all', label: 'All Milestones' },
  { id: 'community', label: 'Roles & Leadership' },
  { id: 'education', label: 'Education' },
];

function getDotStyle(accent: TimelineEntry['accent']): string {
  if (accent === 'cyan') {
    return 'bg-[#00f2fe] shadow-[0_0_12px_rgba(0,242,254,0.6)]';
  }
  if (accent === 'violet') {
    return 'bg-[#d0bcff] shadow-[0_0_12px_rgba(208,188,255,0.6)]';
  }
  return 'bg-[#7bd0ff] shadow-[0_0_12px_rgba(123,208,255,0.5)]';
}

function getAccentText(accent: TimelineEntry['accent']): string {
  if (accent === 'cyan') return 'text-[#00f2fe]';
  if (accent === 'violet') return 'text-[#d0bcff]';
  return 'text-[#7bd0ff]';
}

export function JourneySection() {
  const [filter, setFilter] = useState<TimelineFilter>('all');

  const filteredEntries = TIMELINE_ENTRIES.filter((entry) => {
    if (filter === 'all') return true;
    if (filter === 'education') return entry.type === 'education';
    return entry.type === 'leadership' || entry.type === 'community';
  });

  return (
    <section
      id="journey"
      className="mx-auto w-full max-w-[1320px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20"
    >
      <div className="space-y-8">
        <SectionHeader
          index="04"
          kicker="Chronological Trajectory"
          title="Journey & Milestones"
          subtitle="Education, campus leadership, and technical community milestones ordered chronologically from my profile."
          accent="violet"
          rightSlot={
            <div
              role="tablist"
              aria-label="Filter journey milestones"
              className="flex flex-wrap items-center gap-1.5 rounded-full bg-[#191c21] p-1"
            >
              {FILTERS.map((item) => {
                const isActive = filter === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setFilter(item.id)}
                    className={`min-h-[38px] whitespace-nowrap rounded-full px-3.5 py-1.5 font-mono text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d0bcff] ${
                      isActive
                        ? 'bg-[#d0bcff] text-[#23005c] font-semibold'
                        : 'text-[#b9cacb] hover:text-[#e2e2ea]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          }
        />

        <div className="relative pl-6 sm:pl-8 before:absolute before:top-2 before:bottom-2 before:left-2 before:w-0.5 before:bg-[#33353b] sm:before:left-2.5">
          <div className="space-y-4">
            {filteredEntries.map((entry) => (
              <div key={entry.id} className="relative">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[22px] top-6 h-3.5 w-3.5 rounded-full sm:-left-[28px] ${getDotStyle(
                    entry.accent
                  )}`}
                />
                <article className="glass-panel-interactive rounded-2xl p-5 sm:p-6">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <span
                      className={`font-mono text-xs font-semibold uppercase tracking-wider ${getAccentText(
                        entry.accent
                      )}`}
                    >
                      {entry.organization}
                    </span>
                    <span className="font-mono text-xs text-[#849495] tabular-nums">
                      {entry.period}
                    </span>
                  </div>

                  <h3 className="mt-1.5 font-[family-name:var(--font-display)] text-lg font-semibold text-[#e2e2ea] sm:text-xl">
                    {entry.role}
                  </h3>

                  <p className="mt-1.5 text-sm leading-relaxed text-[#b9cacb]">
                    {entry.description}
                  </p>

                  {entry.location ? (
                    <p className="mt-2 font-mono text-xs text-[#849495]">{entry.location}</p>
                  ) : null}
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
