import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Registration Confirmed | AI3 Consulting",
  description: "Your seat in the AI Bootcamp is confirmed!",
};

export default function ConfirmationPage() {
  // In production, this would retrieve session data from Stripe
  // const searchParams = useSearchParams();
  // const sessionId = searchParams.get('session_id');

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="section min-h-[70vh] flex items-center">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              {/* Success Icon */}
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg
                  className="w-10 h-10 text-green-600"
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

              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--navy)]">
                You&apos;re In!
              </h1>
              <p className="text-xl text-[var(--text-secondary)] mb-8">
                Your seat in the February 2026 AI Bootcamp is confirmed.
              </p>

              {/* Confirmation Details */}
              <div className="bg-[var(--light-gray)]/50 rounded-lg p-6 mb-8 text-left">
                <h2 className="font-bold text-lg mb-4">Registration Details</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Program</span>
                    <span className="font-semibold">AI Bootcamp</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Date</span>
                    <span className="font-semibold">February 2026</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Location</span>
                    <span className="font-semibold">Greenville, SC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Time</span>
                    <span className="font-semibold">9:00 AM - 3:00 PM daily</span>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8 text-left">
                <h2 className="font-bold text-lg mb-4">Next Steps</h2>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[var(--teal)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </span>
                    <div>
                      <p className="font-semibold">Check your email</p>
                      <p className="text-sm text-[var(--text-secondary)]">
                        We&apos;ve sent a confirmation email with all the details.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[var(--teal)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </span>
                    <div>
                      <p className="font-semibold">Set up Claude</p>
                      <p className="text-sm text-[var(--text-secondary)]">
                        Create a Claude account at{" "}
                        <a
                          href="https://claude.ai"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--teal)] underline"
                        >
                          claude.ai
                        </a>{" "}
                        before the bootcamp.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[var(--teal)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </span>
                    <div>
                      <p className="font-semibold">Prepare your challenges</p>
                      <p className="text-sm text-[var(--text-secondary)]">
                        Think about 3-5 repetitive tasks you&apos;d like to automate.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  disabled
                  className="btn bg-[var(--navy)] text-white opacity-50 cursor-not-allowed"
                  title="Calendar invite coming soon"
                >
                  Add to Calendar (Coming Soon)
                </button>
                <Link
                  href="/"
                  className="btn bg-transparent text-[var(--navy)] border border-[var(--navy)]/20 hover:bg-gray-50"
                >
                  Back to Home
                </Link>
              </div>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-[var(--text-muted)] mb-4">
                  Excited about AI Bootcamp? Share with your network!
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.linkedin.com/sharing/share-offsite/?url=https://ai3consulting.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#0077b5] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/intent/tweet?text=I just registered for the AI3 Bootcamp!&url=https://ai3consulting.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label="Share on X"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
