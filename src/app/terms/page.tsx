import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | AI3 Consulting",
  description: "Terms of Service for AI3 Consulting and the AI Bootcamp.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="section">
          <div className="container">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <h1>Terms of Service</h1>
              <p className="text-[var(--text-muted)]">
                Last updated: January 5, 2026
              </p>

              <h2>Agreement to Terms</h2>
              <p>
                By registering for the AI Bootcamp or using our website, you
                agree to be bound by these Terms of Service. If you do not agree
                to these terms, please do not use our services.
              </p>

              <h2>AI Bootcamp Registration</h2>
              <p>
                When you register for the AI Bootcamp, you agree to provide
                accurate and complete information. Registration is confirmed
                upon successful payment. Your seat is reserved for the specific
                cohort date indicated at the time of registration.
              </p>

              <h3>Attendance Requirements</h3>
              <ul>
                <li>
                  The bootcamp is an in-person, 3-day intensive program held in
                  Greenville, SC.
                </li>
                <li>
                  Attendees are expected to participate fully in all sessions.
                </li>
                <li>
                  We recommend bringing a laptop with Claude AI account set up
                  before arrival.
                </li>
              </ul>

              <h2>Payment Terms</h2>
              <ul>
                <li>
                  The bootcamp fee is $5,000 USD, payable in full at
                  registration.
                </li>
                <li>
                  All payments are processed securely through Stripe.
                </li>
                <li>
                  Prices are subject to change for future cohorts but are locked
                  in at the time of your registration.
                </li>
              </ul>

              <h2>Cancellation and Refunds</h2>
              <p>
                Please see our{" "}
                <Link href="/refund">Refund Policy</Link> for complete details.
                In summary:
              </p>
              <ul>
                <li>
                  <strong>Full refund:</strong> Cancellations made 14 or more
                  days before the bootcamp start date.
                </li>
                <li>
                  <strong>50% refund:</strong> Cancellations made 7-13 days
                  before the bootcamp start date.
                </li>
                <li>
                  <strong>No refund:</strong> Cancellations made less than 7
                  days before the bootcamp or no-shows.
                </li>
              </ul>

              <h2>Intellectual Property</h2>
              <p>
                All content, materials, and intellectual property provided
                during the bootcamp remain the property of AI3 Consulting.
                Attendees may use materials for their personal and business use
                but may not redistribute, resell, or republish them.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                AI3 Consulting provides educational content and training. We do
                not guarantee specific business results from attending the
                bootcamp. Our liability is limited to the amount you paid for
                the bootcamp.
              </p>

              <h2>Code of Conduct</h2>
              <p>
                We are committed to providing a welcoming and inclusive
                environment. Attendees are expected to:
              </p>
              <ul>
                <li>
                  Treat all participants, instructors, and staff with respect
                </li>
                <li>Engage constructively in discussions and exercises</li>
                <li>Refrain from disruptive behavior</li>
                <li>Respect the confidentiality of other attendees&apos; business information</li>
              </ul>
              <p>
                We reserve the right to remove any attendee who violates this
                code of conduct without refund.
              </p>

              <h2>Photography and Recording</h2>
              <p>
                We may take photographs or video during the bootcamp for
                marketing purposes. By attending, you grant us permission to use
                your likeness in promotional materials. If you prefer not to be
                photographed, please inform us at the start of the bootcamp.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes
                will be posted on this page with an updated &quot;Last updated&quot; date.
                Continued use of our services after changes constitutes
                acceptance of the new terms.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about these terms? Please{" "}
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
