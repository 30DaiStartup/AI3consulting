/**
 * Email Integration (Placeholder)
 *
 * TODO: Set up Resend when ready:
 * 1. Create Resend account at https://resend.com
 * 2. Verify your domain
 * 3. Get API key from Resend Dashboard
 * 4. Add to .env.local:
 *    - RESEND_API_KEY=re_...
 *    - EMAIL_FROM=AI3 Consulting <hello@ai3consulting.com>
 */

// Placeholder - will be replaced with actual Resend client
export const EMAIL_CONFIGURED = false;

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

/**
 * Send an email via Resend
 * Currently logs to console as placeholder
 */
export async function sendEmail(options: EmailOptions): Promise<EmailResult> {
  if (!EMAIL_CONFIGURED) {
    console.log("[Email Placeholder] Would send email:", {
      to: options.to,
      subject: options.subject,
    });
    return {
      success: true,
      messageId: "placeholder-" + Date.now(),
    };
  }

  // TODO: Implement actual Resend email sending
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // const result = await resend.emails.send({...});

  return {
    success: false,
    error: "Email integration pending",
  };
}

/**
 * Send registration confirmation email
 */
export async function sendRegistrationConfirmation(
  email: string,
  firstName: string,
  cohortDate: string
): Promise<EmailResult> {
  return sendEmail({
    to: email,
    subject: "You're Registered for AI3 Bootcamp!",
    html: `
      <h1>Welcome to AI3 Bootcamp, ${firstName}!</h1>
      <p>Your registration is confirmed for ${cohortDate}.</p>
      <p>We'll send you more details as the date approaches.</p>
    `,
    text: `Welcome to AI3 Bootcamp, ${firstName}! Your registration is confirmed for ${cohortDate}.`,
  });
}

/**
 * Send waitlist confirmation email
 */
export async function sendWaitlistConfirmation(
  email: string,
  firstName: string
): Promise<EmailResult> {
  return sendEmail({
    to: email,
    subject: "You're on the AI3 Bootcamp Waitlist",
    html: `
      <h1>Thanks for joining the waitlist, ${firstName}!</h1>
      <p>We'll notify you as soon as seats become available or when we announce new cohort dates.</p>
    `,
    text: `Thanks for joining the waitlist, ${firstName}! We'll notify you when seats become available.`,
  });
}
