import { useState } from 'react';
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Linkedin,
  Loader2,
  Mail,
  Send,
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { PROFILE } from '../data/profile';
import {
  isEmailRelayConfigured,
  submitContactInquiry,
  type ContactPayload,
  type ContactSubmissionResult,
} from '../services/contactService';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const INITIAL_FORM: ContactPayload = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactSection() {
  const [form, setForm] = useState<ContactPayload>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<ContactSubmissionResult | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const relayConfigured = isEmailRelayConfigured();

  const validate = (values: ContactPayload): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!values.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }
    if (!values.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!EMAIL_PATTERN.test(values.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!values.subject.trim()) {
      nextErrors.subject = 'Please add a subject.';
    }
    if (!values.message.trim()) {
      nextErrors.message = 'Please enter a message.';
    } else if (values.message.trim().length < 10) {
      nextErrors.message = 'Please provide at least 10 characters so I have enough context.';
    }
    return nextErrors;
  };

  const handleChange = (field: keyof ContactPayload, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (submitResult) {
      setSubmitResult(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    setSubmitResult(null);

    const result = await submitContactInquiry(form, PROFILE.email);
    setSubmitResult(result);
    setSubmitting(false);

    if (result.status === 'sent') {
      setForm(INITIAL_FORM);
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      // Fallback ignored if clipboard permissions blocked
    }
  };

  const handleCopyFormattedInquiry = async () => {
    const formatted = `To: ${PROFILE.email}\nSubject: ${form.subject}\nFrom: ${form.name} (${form.email})\n\n${form.message}`;
    try {
      await navigator.clipboard.writeText(formatted);
      setCopiedMessage(true);
      window.setTimeout(() => setCopiedMessage(false), 2400);
    } catch {
      // Clipboard blocked
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-[1320px] px-5 pt-14 pb-20 sm:px-8 lg:px-12 lg:pt-20 lg:pb-24"
    >
      <div className="space-y-8">
        <SectionHeader
          index="07"
          kicker="Collaborations & Opportunities"
          title="Get in Touch"
          subtitle="Open to technical discussions, AI/ML and cloud projects, hackathon teams, student community collaborations, and learning opportunities."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Panel: Direct Channels */}
          <div className="glass-panel flex flex-col justify-between gap-6 rounded-2xl p-6 sm:p-8 lg:col-span-5">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#111319] px-3.5 py-1.5 font-mono text-xs text-[#00f2fe]">
                <span className="h-2 w-2 rounded-full bg-[#00f2fe]" aria-hidden="true" />
                <span>Direct Channels</span>
              </div>

              <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#e2e2ea]">
                Let&apos;s build and learn together.
              </h3>

              <p className="text-sm leading-relaxed text-[#b9cacb]">
                Whether you are forming a hackathon squad, organizing a campus tech session, or
                discussing AI agents and cloud engineering, feel free to reach out directly.
              </p>

              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex min-h-[48px] w-full items-center justify-between gap-3 rounded-xl bg-[#111319] px-4 py-3 text-left transition-colors hover:bg-[#191c21] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00f2fe]"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-[#00f2fe]" aria-hidden="true" />
                    <div className="min-w-0">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-[#849495]">
                        Email (Click to Copy)
                      </p>
                      <p className="truncate font-mono text-sm text-[#e2e2ea]">
                        {PROFILE.email}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-[#00f2fe]">
                    {copiedEmail ? (
                      <span className="inline-flex items-center gap-1">
                        <Check className="h-3.5 w-3.5" /> Copied
                      </span>
                    ) : (
                      <Copy className="h-4 w-4 text-[#849495]" />
                    )}
                  </span>
                </button>

                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[48px] w-full items-center justify-between gap-3 rounded-xl bg-[#111319] px-4 py-3 transition-colors hover:bg-[#191c21] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00f2fe]"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <Linkedin className="h-4 w-4 shrink-0 text-[#d0bcff]" aria-hidden="true" />
                    <div className="min-w-0">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-[#849495]">
                        LinkedIn
                      </p>
                      <p className="truncate font-mono text-sm text-[#e2e2ea]">
                        linkedin.com/in/anmolgola66571
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 shrink-0 text-[#849495]" />
                </a>
              </div>
            </div>

            <div className="rounded-xl bg-[#111319]/80 p-4 text-xs leading-relaxed text-[#849495]">
              <span className="font-mono font-semibold text-[#b9cacb]">Relay Status:</span>{' '}
              {relayConfigured
                ? 'Automated form endpoint is active.'
                : 'No automated form endpoint is configured in this static environment. Form validation runs locally and prepares a direct email dispatch.'}
            </div>
          </div>

          {/* Right Panel: Validated Contact Form */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 lg:col-span-7">
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block font-mono text-xs font-medium uppercase tracking-wider text-[#b9cacb]"
                  >
                    Name <span className="text-[#00f2fe]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    className="h-12 w-full rounded-xl border border-white/10 bg-[#111319] px-4 text-sm text-[#e2e2ea] placeholder-[#849495] focus:border-[#00f2fe] focus:outline-none"
                  />
                  {errors.name ? (
                    <p id="contact-name-error" className="mt-1 text-xs text-[#ffb4ab]">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block font-mono text-xs font-medium uppercase tracking-wider text-[#b9cacb]"
                  >
                    Email <span className="text-[#00f2fe]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    className="h-12 w-full rounded-xl border border-white/10 bg-[#111319] px-4 text-sm text-[#e2e2ea] placeholder-[#849495] focus:border-[#00f2fe] focus:outline-none"
                  />
                  {errors.email ? (
                    <p id="contact-email-error" className="mt-1 text-xs text-[#ffb4ab]">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-1.5 block font-mono text-xs font-medium uppercase tracking-wider text-[#b9cacb]"
                >
                  Subject <span className="text-[#00f2fe]">*</span>
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  placeholder="Hackathon team, project collaboration, or tech discussion"
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                  className="h-12 w-full rounded-xl border border-white/10 bg-[#111319] px-4 text-sm text-[#e2e2ea] placeholder-[#849495] focus:border-[#00f2fe] focus:outline-none"
                />
                {errors.subject ? (
                  <p id="contact-subject-error" className="mt-1 text-xs text-[#ffb4ab]">
                    {errors.subject}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block font-mono text-xs font-medium uppercase tracking-wider text-[#b9cacb]"
                >
                  Message <span className="text-[#00f2fe]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Share context about what you'd like to build or discuss..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  className="w-full rounded-xl border border-white/10 bg-[#111319] p-4 text-sm text-[#e2e2ea] placeholder-[#849495] focus:border-[#00f2fe] focus:outline-none"
                />
                {errors.message ? (
                  <p id="contact-message-error" className="mt-1 text-xs text-[#ffb4ab]">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              {/* Feedback Banner (Sent / Unconfigured / Error) */}
              {submitResult ? (
                <div
                  role="status"
                  className={`rounded-xl p-4 text-sm ${
                    submitResult.status === 'sent'
                      ? 'border border-[#00f2fe]/35 bg-[#00f2fe]/10 text-[#e0fdff]'
                      : submitResult.status === 'error'
                        ? 'border border-[#ffb4ab]/35 bg-[#93000a]/25 text-[#ffb4ab]'
                        : 'border border-[#d0bcff]/30 bg-[#571bc1]/15 text-[#e9ddff]'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    {submitResult.status === 'sent' ? (
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#00f2fe]" />
                    ) : (
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#d0bcff]" />
                    )}
                    <div className="space-y-3">
                      <p className="leading-relaxed">{submitResult.message}</p>
                      {submitResult.mailtoUrl ? (
                        <div className="flex flex-wrap gap-2.5">
                          <a
                            href={submitResult.mailtoUrl}
                            className="inline-flex h-10 items-center gap-2 rounded-full bg-[#00f2fe] px-4 text-xs font-semibold text-[#002022] transition-opacity hover:opacity-90"
                          >
                            <Mail className="h-3.5 w-3.5" />
                            <span>Open in Email Client</span>
                          </a>
                          <button
                            type="button"
                            onClick={handleCopyFormattedInquiry}
                            className="inline-flex h-10 items-center gap-2 rounded-full bg-[#282a30] px-4 text-xs font-medium text-[#e2e2ea] transition-colors hover:bg-[#33353b]"
                          >
                            <Copy className="h-3.5 w-3.5" />
                            <span>{copiedMessage ? 'Message Copied' : 'Copy Formatted Text'}</span>
                          </button>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#00f2fe] px-6 text-sm font-semibold text-[#002022] shadow-[0_0_24px_rgba(0,242,254,0.28)] transition-transform hover:opacity-95 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00f2fe] sm:w-auto"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>{relayConfigured ? 'Send Message' : 'Validate & Prepare Email'}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
