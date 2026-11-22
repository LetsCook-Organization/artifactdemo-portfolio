import { useEffect } from 'react';
import { ExternalLink, FileText, Mail, X } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { CERTIFICATIONS } from '../data/experience';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-[#0c0e13]/80 p-0 backdrop-blur-md sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="glass-panel w-full max-w-xl rounded-t-3xl bg-[#191c21] p-6 shadow-2xl sm:rounded-3xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-[#00f2fe]">
              Curriculum Vitae & Credentials
            </span>
            <h3
              id="resume-modal-title"
              className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#e2e2ea]"
            >
              {PROFILE.name} — Resume
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close resume dialog"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#282a30] text-[#b9cacb] transition-colors hover:bg-[#33353b] hover:text-[#e2e2ea] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00f2fe]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 space-y-4">
          {PROFILE.resumeUrl ? (
            <div className="rounded-2xl bg-[#111319] p-4">
              <p className="text-sm text-[#e2e2ea]">
                Resume PDF is connected and ready for viewing or download.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={PROFILE.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-[#00f2fe] px-5 text-sm font-semibold text-[#002022] transition-opacity hover:opacity-90"
                >
                  <FileText className="h-4 w-4" />
                  <span>Open Resume PDF</span>
                </a>
                <a
                  href={PROFILE.resumeUrl}
                  download
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-[#282a30] px-5 text-sm font-medium text-[#e2e2ea] transition-colors hover:bg-[#33353b]"
                >
                  <span>Download File</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl bg-[#111319] p-4 space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#d0bcff]">
                <FileText className="h-4 w-4" />
                <span>Standalone Resume PDF Not Attached Yet</span>
              </div>
              <p className="text-sm leading-relaxed text-[#b9cacb]">
                A dedicated resume PDF was not bundled with the LinkedIn profile export. To enable
                direct downloads, place <code className="font-mono text-[#e2e2ea]">resume.pdf</code>{' '}
                in <code className="font-mono text-[#e2e2ea]">/public</code> and set{' '}
                <code className="font-mono text-[#e2e2ea]">resumeUrl: &quot;/resume.pdf&quot;</code>{' '}
                in <code className="font-mono text-[#e2e2ea]">src/data/profile.ts</code>.
              </p>
            </div>
          )}

          <div className="rounded-2xl bg-[#1d2025] p-4 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#849495]">
              Verified Academic & Certification Snapshot
            </h4>
            <ul className="space-y-1.5 text-sm text-[#e2e2ea]">
              {PROFILE.academicSummary.map((item) => (
                <li key={item.institution} className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="font-medium">{item.degree}</span>
                  <span className="font-mono text-xs text-[#00f2fe]">{item.institution}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2 border-t border-white/5 text-xs text-[#b9cacb]">
              {CERTIFICATIONS.length} verified certifications including{' '}
              <span className="text-[#e2e2ea]">Microsoft Certified: Azure Fundamentals</span> and{' '}
              <span className="text-[#e2e2ea]">
                Microsoft Applied Skills: Generate reports with AI research agents
              </span>
              .
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#00f2fe] px-5 text-sm font-semibold text-[#002022] transition-opacity hover:opacity-90"
          >
            <span>View LinkedIn Profile</span>
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${PROFILE.email}?subject=${encodeURIComponent('Resume Request')}`}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#282a30] px-5 text-sm font-medium text-[#e2e2ea] transition-colors hover:bg-[#33353b]"
          >
            <Mail className="h-4 w-4 text-[#00f2fe]" />
            <span>Request via Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}
