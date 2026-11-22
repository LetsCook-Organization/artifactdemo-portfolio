import { useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { BrandMark } from './BrandMark';
import { PROFILE } from '../data/profile';

export interface NavItem {
  id: string;
  label: string;
  shortLabel: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', shortLabel: 'Home' },
  { id: 'projects', label: 'Projects', shortLabel: 'Work' },
  { id: 'github', label: 'GitHub', shortLabel: 'GitHub' },
  { id: 'activities', label: 'Activities', shortLabel: 'Community' },
  { id: 'journey', label: 'Journey', shortLabel: 'Journey' },
  { id: 'contact', label: 'Contact', shortLabel: 'Contact' },
];

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export function Navbar({ activeSection, onNavigate, onOpenResume }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      {/* Desktop & Mobile Top Navigation (3-Zone Contract) */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/[0.06] bg-[#111319]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
          {/* Zone 1: Brand Mark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex shrink-0 items-center gap-3 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00f2fe]"
          >
            <BrandMark className="h-8 w-8" />
            <span className="font-[family-name:var(--font-display)] text-base font-semibold tracking-tight text-[#e2e2ea]">
              {PROFILE.name}
            </span>
          </a>

          {/* Zone 2: Single-line Navigation Links (Desktop / Tablet) */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-6 md:flex lg:gap-8"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative shrink-0 whitespace-nowrap py-1 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00f2fe] ${
                    isActive
                      ? 'text-[#00f2fe]'
                      : 'text-[#b9cacb] hover:text-[#e2e2ea]'
                  }`}
                >
                  {item.label}
                  {isActive ? (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-[#00f2fe]"
                    />
                  ) : null}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action + Mobile Menu Toggle */}
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-[#00f2fe] px-4 text-xs font-semibold text-[#002022] shadow-[0_0_20px_rgba(0,242,254,0.22)] transition-transform hover:opacity-95 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00f2fe] sm:px-5 sm:text-sm"
            >
              <FileText className="h-4 w-4" />
              <span>Resume</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1d2025] text-[#e2e2ea] transition-colors hover:bg-[#282a30] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00f2fe] md:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Accessible Mobile Navigation Drawer */}
        {mobileMenuOpen ? (
          <nav
            id="mobile-nav-drawer"
            aria-label="Mobile navigation"
            className="border-t border-white/[0.06] bg-[#111319]/95 px-5 py-4 backdrop-blur-xl md:hidden"
          >
            <div className="grid grid-cols-2 gap-2">
              {[
                ...NAV_ITEMS,
                { id: 'skills', label: 'Skills', shortLabel: 'Skills' },
                { id: 'about', label: 'About', shortLabel: 'About' },
              ].map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={`flex min-h-[44px] items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#282a30] text-[#00f2fe]'
                        : 'bg-[#191c21] text-[#b9cacb] hover:text-[#e2e2ea]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00f2fe]" aria-hidden="true" />
                    ) : null}
                  </a>
                );
              })}
            </div>
          </nav>
        ) : null}
      </header>
    </>
  );
}
