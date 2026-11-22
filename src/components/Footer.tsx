import { ArrowUp, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { BrandMark } from './BrandMark';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.06] bg-[#0c0e13]">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <BrandMark className="h-8 w-8" />
          <div>
            <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-[#e2e2ea]">
              {PROFILE.name}
            </p>
            <p className="font-mono text-xs text-[#849495]">{PROFILE.location}</p>
          </div>
        </div>

        <p className="text-center font-mono text-xs text-[#849495]">
          © {new Date().getFullYear()} {PROFILE.name}. Built with precision & clarity.
        </p>

        <div className="flex items-center gap-3">
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1d2025] text-[#b9cacb] transition-colors hover:bg-[#282a30] hover:text-[#00f2fe] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00f2fe]"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Send email"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1d2025] text-[#b9cacb] transition-colors hover:bg-[#282a30] hover:text-[#00f2fe] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00f2fe]"
          >
            <Mail className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1d2025] text-[#b9cacb] transition-colors hover:bg-[#282a30] hover:text-[#00f2fe] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00f2fe]"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
