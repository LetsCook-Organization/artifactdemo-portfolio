export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactSubmissionResult {
  status: 'sent' | 'unconfigured' | 'error';
  message: string;
  mailtoUrl?: string;
}

const CONTACT_ENDPOINT =
  (import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined)?.trim() ||
  (import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined)?.trim() ||
  '';

export function isEmailRelayConfigured(): boolean {
  return CONTACT_ENDPOINT.length > 0;
}

export function buildMailtoHref(recipient: string, payload: ContactPayload): string {
  const subject = encodeURIComponent(payload.subject.trim());
  const body = encodeURIComponent(
    `Hi Anmol,\n\n${payload.message.trim()}\n\n—\nFrom: ${payload.name.trim()}\nReply-to: ${payload.email.trim()}`
  );
  return `mailto:${recipient}?subject=${subject}&body=${body}`;
}

/**
 * Separated contact submission logic.
 * Ready for Formspree, EmailJS, Resend, or a custom /api/contact backend endpoint.
 * Never pretends an email was sent when no endpoint is configured.
 */
export async function submitContactInquiry(
  payload: ContactPayload,
  recipientEmail: string
): Promise<ContactSubmissionResult> {
  if (!CONTACT_ENDPOINT) {
    return {
      status: 'unconfigured',
      message:
        'Automated email relay is not configured yet in this static build. Your message has been validated—use the direct email button below to dispatch it via your mail client.',
      mailtoUrl: buildMailtoHref(recipientEmail, payload),
    };
  }

  try {
    const response = await fetch(CONTACT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return {
        status: 'error',
        message:
          'The email relay returned an error. You can retry or send directly via email below.',
        mailtoUrl: buildMailtoHref(recipientEmail, payload),
      };
    }

    return {
      status: 'sent',
      message: 'Your inquiry has been delivered. Thank you for reaching out.',
    };
  } catch {
    return {
      status: 'error',
      message:
        'Network error while contacting the relay service. Please use the direct email option below.',
      mailtoUrl: buildMailtoHref(recipientEmail, payload),
    };
  }
}
