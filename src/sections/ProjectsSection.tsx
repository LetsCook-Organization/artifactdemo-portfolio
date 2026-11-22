import { useState } from 'react';
import { ArrowRight, ExternalLink, FolderGit2 } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectBlueprintVisual } from '../components/ProjectBlueprintVisual';
import { ProjectModal } from '../components/ProjectModal';
import {
  PROJECT_CATEGORIES,
  PROJECTS,
  type ProjectCategory,
  type ProjectItem,
} from '../data/projects';

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const visibleProjects =
    selectedCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-[1320px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20"
    >
      <div className="space-y-8">
        <SectionHeader
          index="01"
          kicker="Technical Work & Exploration"
          title="Projects & Focus Tracks"
          subtitle="Structured around my verified certifications and collaborative community work. Each slot is ready to connect directly to live deployments and GitHub repositories as projects are published."
          rightSlot={
            <div
              role="tablist"
              aria-label="Filter projects by category"
              className="flex flex-wrap items-center gap-1.5 rounded-full bg-[#191c21] p-1"
            >
              {PROJECT_CATEGORIES.map((category) => {
                const isActive = selectedCategory === category.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`min-h-[38px] whitespace-nowrap rounded-full px-3.5 py-1.5 font-mono text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00f2fe] ${
                      isActive
                        ? 'bg-[#00f2fe] text-[#002022] font-semibold'
                        : 'text-[#b9cacb] hover:text-[#e2e2ea]'
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>
          }
        />

        {/* Alternating Showcase Layout */}
        <div className="space-y-6">
          {visibleProjects.map((project, index) => {
            const isReversed = index % 2 === 1;
            return (
              <article
                key={project.id}
                className="glass-panel-interactive grid grid-cols-1 gap-6 rounded-2xl p-6 lg:grid-cols-12 lg:items-center lg:gap-8 lg:p-8"
              >
                {/* Visual Preview Pane */}
                <div
                  className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <ProjectBlueprintVisual
                    visualType={project.visualType}
                    title={project.title}
                  />
                </div>

                {/* Details Pane */}
                <div
                  className={`flex flex-col justify-between gap-4 lg:col-span-7 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wider">
                      <span className="text-[#00f2fe]">{project.categoryLabel}</span>
                      <span className="text-[#849495]" aria-hidden="true">
                        ·
                      </span>
                      <span className="text-[#b9cacb]">{project.statusLabel}</span>
                    </div>

                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[#e2e2ea]">
                      {project.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-[#b9cacb] sm:text-base">
                      {project.summary}
                    </p>

                    <div className="rounded-xl bg-[#111319]/80 p-3.5 text-xs leading-relaxed text-[#b9cacb]">
                      <span className="font-mono font-semibold text-[#d0bcff]">
                        Problem Focus:{' '}
                      </span>
                      {project.problemStatement}
                    </div>

                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 pt-1 font-mono text-xs text-[#b9cacb]">
                      {project.technologies.map((tech, tIdx) => (
                        <span key={tech} className="inline-flex items-center gap-2.5">
                          <span className="text-[#e2e2ea]">{tech}</span>
                          {tIdx < project.technologies.length - 1 ? (
                            <span className="text-[#849495]" aria-hidden="true">
                              ·
                            </span>
                          ) : null}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Controls — Only real links rendered when present */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="inline-flex h-11 items-center gap-2 rounded-full bg-[#282a30] px-5 text-sm font-medium text-[#e2e2ea] transition-colors hover:bg-[#33353b] hover:text-[#00f2fe] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00f2fe]"
                    >
                      <span>Inspect Blueprint</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-[#191c21] px-4 text-sm font-medium text-[#b9cacb] transition-colors hover:border-[#00f2fe]/40 hover:text-[#e2e2ea]"
                      >
                        <FolderGit2 className="h-4 w-4 text-[#00f2fe]" />
                        <span>GitHub</span>
                      </a>
                    ) : null}

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 items-center gap-2 rounded-full bg-[#00f2fe] px-5 text-sm font-semibold text-[#002022] transition-opacity hover:opacity-90"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
