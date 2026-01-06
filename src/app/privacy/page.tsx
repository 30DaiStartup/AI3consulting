import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | AI3 Consulting",
  description: "Privacy Policy for AI3 Consulting and the AI Bootcamp.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="section">
          <div className="container">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <h1>Privacy Policy</h1>
              <p className="text-[var(--text-muted)]">
                Last updated: January 5, 2026
              </p>

              <h2>Introduction</h2>
              <p>
                AI3 Consulting (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy
                and is committed to protecting your personal data. This privacy
                policy explains how we collect, use, and safeguard your
                information when you visit our website or participate in our
                programs.
              </p>

              <h2>Information We Collect</h2>
              <p>We collect information that you provide directly to us:</p>
              <ul>
                <li>
                  <strong>Registration Information:</strong> Name, email
                  address, phone number, company name, and job title when you
                  register for the AI Bootcamp.
                </li>
                <li>
                  <strong>Payment Information:</strong> Billing address and
                  payment details processed securely through Stripe. We do not
                  store your full credit card number.
                </li>
                <li>
                  <strong>Contact Information:</strong> Any information you
                  provide when contacting us through our website or email.
                </li>
                <li>
                  <strong>Quiz and Calculator Data:</strong> Responses to our
                  High-Agency Quiz and ROI Calculator inputs.
                </li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Process your bootcamp registration and payment</li>
                <li>Send you confirmation emails and bootcamp information</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you updates about upcoming cohorts (if you opt in)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information with:
              </p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> We use Stripe for payment
                  processing and Resend for email delivery. These providers have
                  access to your data only to perform services on our behalf.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> If required by law,
                  regulation, or legal process.
                </li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction. All payment transactions are
                encrypted using SSL technology.
              </p>

              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
              </ul>
              <p>
                To exercise these rights, please contact us at{" "}
                <a href="mailto:privacy@ai3consulting.com">
                  privacy@ai3consulting.com
                </a>
                .
              </p>

              <h2>Cookies</h2>
              <p>
                We use essential cookies to ensure our website functions
                properly. We may also use analytics cookies to understand how
                visitors interact with our site. You can control cookie
                preferences through your browser settings.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the &quot;Last updated&quot; date.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions about this privacy policy, please{" "}
                <Link href="/contact">contact us</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
