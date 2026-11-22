interface SectionHeaderProps {
  index: string;
  kicker: string;
  title: string;
  subtitle?: string;
  accent?: 'cyan' | 'violet';
  rightSlot?: React.ReactNode;
}

export function SectionHeader({
  index,
  kicker,
  title,
  subtitle,
  accent = 'cyan',
  rightSlot,
}: SectionHeaderProps) {
  const accentText = accent === 'cyan' ? 'text-[#00f2fe]' : 'text-[#d0bcff]';

  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl space-y-2">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.12em]">
          <span className={accentText}>{index}</span>
          <span className="text-[#849495]" aria-hidden="true">
            ·
          </span>
          <span className="text-[#b9cacb]">{kicker}</span>
        </div>
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[#e2e2ea] text-balance sm:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="text-sm leading-relaxed text-[#b9cacb] sm:text-base">{subtitle}</p>
        ) : null}
      </div>
      {rightSlot ? <div className="shrink-0">{rightSlot}</div> : null}
    </div>
  );
}
