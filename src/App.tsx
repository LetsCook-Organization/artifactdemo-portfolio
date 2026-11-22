import { useCallback, useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { HeroSection } from './sections/HeroSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { GitHubSection } from './sections/GitHubSection';
import { ActivitiesSection } from './sections/ActivitiesSection';
import { JourneySection } from './sections/JourneySection';
import { SkillsSection } from './sections/SkillsSection';
import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';

const TRACKED_SECTIONS = [
  'home',
  'projects',
  'github',
  'activities',
  'journey',
  'skills',
  'about',
  'contact',
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(sectionId);
  }, []);

  useEffect(() => {
    const elements = TRACKED_SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0 && visible[0].target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-vanguard-grid relative min-h-screen bg-[#111319] text-[#e2e2ea]">
      {/* Skip-to-content accessibility link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-[#00f2fe] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#002022]"
      >
        Skip to main content
      </a>

      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenResume={() => setResumeOpen(true)}
      />

      <main id="main-content" className="relative z-10">
        <HeroSection
          onNavigate={scrollToSection}
          onOpenResume={() => setResumeOpen(true)}
        />
        <ProjectsSection />
        <GitHubSection />
        <ActivitiesSection />
        <JourneySection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
