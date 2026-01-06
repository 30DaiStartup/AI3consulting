import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Refund Policy | AI3 Consulting",
  description: "Refund Policy for the AI Bootcamp by AI3 Consulting.",
};

export default function RefundPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="section">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg">
                <h1>Refund Policy</h1>
                <p className="text-[var(--text-muted)]">
                  Last updated: January 5, 2026
                </p>

                <p className="lead">
                  We want you to feel confident about your investment in the AI
                  Bootcamp. If your plans change, here&apos;s what you need to know.
                </p>
              </div>

              {/* Refund Tiers */}
              <div className="my-12 grid gap-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-800 mb-2">
                        100% Refund — 14+ Days Before
                      </h3>
                      <p className="text-green-700">
                        Cancel 14 or more days before the bootcamp start date
                        and receive a full refund. No questions asked.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-amber-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-amber-800 mb-2">
                        50% Refund — 7-13 Days Before
                      </h3>
                      <p className="text-amber-700">
                        Cancel between 7 and 13 days before the bootcamp start
                        date and receive a 50% refund ($2,500).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-700 mb-2">
                        No Refund — Less Than 7 Days
                      </h3>
                      <p className="text-gray-600">
                        Cancellations made less than 7 days before the bootcamp
                        or no-shows are not eligible for refunds. However, you
                        may transfer your registration to a future cohort (one
                        time only).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg">
                <h2>How to Request a Refund</h2>
                <p>
                  To request a refund, please{" "}
                  <Link href="/contact">contact us</Link> with your registration
                  details. Include your name, email address, and the cohort date
                  you registered for. We process refunds within 5-7 business
                  days.
                </p>

                <h2>Transfer Policy</h2>
                <p>
                  If you can&apos;t attend your scheduled cohort, you may transfer
                  your registration to a future cohort one time at no additional
                  charge. Transfer requests must be made at least 48 hours
                  before your original bootcamp date.
                </p>

                <h2>Bootcamp Cancellation by AI3</h2>
                <p>
                  In the unlikely event that we need to cancel a bootcamp cohort
                  (due to unforeseen circumstances, insufficient enrollment,
                  etc.), you will receive a full refund or the option to
                  transfer to a future cohort at no additional cost.
                </p>

                <h2>Satisfaction Guarantee</h2>
                <p>
                  We&apos;re confident you&apos;ll find immense value in the bootcamp. If
                  you attend the full 3 days and feel the content didn&apos;t meet
                  your expectations, let us know within 7 days after the
                  bootcamp ends and we&apos;ll work with you to make it right.
                </p>

                <h2>Questions?</h2>
                <p>
                  If you have questions about our refund policy, please don&apos;t
                  hesitate to <Link href="/contact">reach out</Link>. We&apos;re
                  happy to help.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
