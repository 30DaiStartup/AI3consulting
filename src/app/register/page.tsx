import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/bootcamp/RegistrationForm";
import { SeatAvailabilityBadge } from "@/components/bootcamp";
import { BOOTCAMP_PRICE_DISPLAY } from "@/lib/stripe";

export const metadata = {
  title: "Register for AI Bootcamp | AI3 Consulting",
  description:
    "Reserve your seat in the 3-day AI Bootcamp. Transform your business operations with hands-on training in Greenville, SC.",
};

export default function RegisterPage() {
  const availableSeats = 8;

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-b from-[var(--navy)] to-[#0d2468] text-white py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <SeatAvailabilityBadge availableSeats={availableSeats} totalSeats={12} />
              <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
                Reserve Your Seat
              </h1>
              <p className="text-xl text-white/80">
                Join the February 2026 cohort in Greenville, SC
              </p>
            </div>
          </div>
        </section>

        {/* Registration Form + Order Summary */}
        <section className="section">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6">Your Information</h2>
                  <RegistrationForm />
                </div>
              </div>

              {/* Order Summary Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-[var(--light-gray)]/50 rounded-lg p-6 sticky top-24">
                  <h3 className="text-lg font-bold mb-4">Order Summary</h3>

                  {/* Bootcamp Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Program</span>
                      <span className="font-semibold">AI Bootcamp</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Duration</span>
                      <span className="font-semibold">3 Days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Location</span>
                      <span className="font-semibold">Greenville, SC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Date</span>
                      <span className="font-semibold">February 2026</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <div className="flex justify-between text-lg">
                      <span className="font-bold">Total</span>
                      <span className="font-bold text-[var(--navy)]">
                        {BOOTCAMP_PRICE_DISPLAY}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-muted)] mt-1">
                      One-time payment
                    </p>
                  </div>

                  {/* What's Included */}
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-semibold mb-3">What&apos;s Included:</h4>
                    <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                      <li className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0"
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
                        <span>3 days of hands-on training</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0"
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
                        <span>Custom AI implementation roadmap</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0"
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
                        <span>Lifetime access to alumni portal</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0"
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
                        <span>30-day post-bootcamp support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0"
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
                        <span>Lunch and refreshments</span>
                      </li>
                    </ul>
                  </div>

                  {/* Guarantee */}
                  <div className="mt-6 p-4 bg-white rounded-lg border border-green-200">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-green-800">
                          14-Day Money Back Guarantee
                        </p>
                        <p className="text-sm text-green-700">
                          Full refund if you cancel 14+ days before the bootcamp.
                        </p>
                      </div>
                    </div>
                  </div>
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
