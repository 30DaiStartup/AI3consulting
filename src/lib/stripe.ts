/**
 * Stripe Integration (Placeholder)
 *
 * TODO: Set up Stripe when ready:
 * 1. Create Stripe account at https://stripe.com
 * 2. Get API keys from Stripe Dashboard
 * 3. Add to .env.local:
 *    - STRIPE_SECRET_KEY=sk_...
 *    - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
 * 4. Create a Product and Price in Stripe Dashboard for the bootcamp ($5,000)
 * 5. Add the price ID to .env.local:
 *    - STRIPE_BOOTCAMP_PRICE_ID=price_...
 */

// Placeholder - will be replaced with actual Stripe client
export const STRIPE_CONFIGURED = false;

export const BOOTCAMP_PRICE = 5000;
export const BOOTCAMP_PRICE_DISPLAY = "$5,000";

export interface CheckoutSessionRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  jobTitle: string;
  painPoints: string[];
}

export interface CheckoutSessionResponse {
  success: boolean;
  sessionId?: string;
  checkoutUrl?: string;
  error?: string;
}

/**
 * Create a Stripe Checkout session
 * Currently returns a placeholder response
 */
export async function createCheckoutSession(
  data: CheckoutSessionRequest
): Promise<CheckoutSessionResponse> {
  if (!STRIPE_CONFIGURED) {
    return {
      success: false,
      error: "Payment processing is not yet configured. Please join the waitlist.",
    };
  }

  // TODO: Implement actual Stripe Checkout session creation
  // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  // const session = await stripe.checkout.sessions.create({...});

  return {
    success: false,
    error: "Stripe integration pending",
  };
}
