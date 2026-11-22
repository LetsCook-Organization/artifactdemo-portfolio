import { useEffect } from 'react';
import { ExternalLink, FolderGit2, Layers, X } from 'lucide-react';
import type { ProjectItem } from '../data/projects';
import { ProjectBlueprintVisual } from './ProjectBlueprintVisual';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-[#0c0e13]/80 p-0 backdrop-blur-md sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="glass-panel w-full max-w-2xl rounded-t-3xl bg-[#191c21] p-6 shadow-2xl sm:rounded-3xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#00f2fe]">
              <span>{project.categoryLabel}</span>
              <span className="text-[#849495]" aria-hidden="true">
                ·
              </span>
              <span className="text-[#b9cacb]">{project.statusLabel}</span>
            </div>
            <h3
              id="project-modal-title"
              className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#e2e2ea]"
            >
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#282a30] text-[#b9cacb] transition-colors hover:bg-[#33353b] hover:text-[#e2e2ea] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00f2fe]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5">
          <ProjectBlueprintVisual visualType={project.visualType} title={project.title} />
        </div>

        <div className="mt-5 space-y-4">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#849495]">
              Problem & Focus Space
            </h4>
            <p className="mt-1 text-sm leading-relaxed text-[#e2e2ea]">{project.problemStatement}</p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#849495]">
              Verified Profile Alignment
            </h4>
            <p className="mt-1 flex items-center gap-2 text-sm text-[#d0bcff]">
              <Layers className="h-4 w-4 shrink-0" />
              <span>{project.alignedWith}</span>
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#849495]">
              Topics & Technologies
            </h4>
            <div className="mt-2 flex flex-wrap gap-2 text-xs font-mono text-[#b9cacb]">
              {project.technologies.map((tech, idx) => (
                <span key={tech} className="inline-flex items-center gap-2">
                  <span>{tech}</span>
                  {idx < project.technologies.length - 1 ? (
                    <span className="text-[#849495]" aria-hidden="true">
                      /
                    </span>
                  ) : null}
                </span>
              ))}
            </div>
          </div>

          {project.isEditableSlot && !project.githubUrl && !project.liveUrl ? (
            <div className="rounded-2xl bg-[#111319] p-4 text-xs leading-relaxed text-[#b9cacb]">
              <span className="font-mono font-semibold text-[#00f2fe]">Portfolio Slot Ready:</span>{' '}
              No external repository or live link was attached in the supplied profile. Add{' '}
              <code className="font-mono text-[#e2e2ea]">githubUrl</code> or{' '}
              <code className="font-mono text-[#e2e2ea]">liveUrl</code> in{' '}
              <code className="font-mono text-[#e2e2ea]">src/data/projects.ts</code> to enable
              direct launch links.
            </div>
          ) : null}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#282a30] px-5 text-sm font-medium text-[#e2e2ea] transition-colors hover:bg-[#33353b]"
            >
              <FolderGit2 className="h-4 w-4 text-[#00f2fe]" />
              <span>View Source</span>
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#00f2fe] px-5 text-sm font-semibold text-[#002022] transition-opacity hover:opacity-90"
            >
              <span>Open Live Project</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : null}
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 items-center rounded-full bg-[#282a30] px-5 text-sm font-medium text-[#e2e2ea] transition-colors hover:bg-[#33353b]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
