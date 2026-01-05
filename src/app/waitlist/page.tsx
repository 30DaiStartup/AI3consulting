import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaitlistForm from "@/components/bootcamp/WaitlistForm";

export const metadata = {
  title: "Join the Waitlist | AI3 Consulting",
  description:
    "Join the waitlist for the next AI Bootcamp cohort. Be the first to know when seats become available.",
};

export default function WaitlistPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[var(--teal)] to-[#004d5c] text-white py-16">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Join the Waitlist
              </h1>
              <p className="text-xl text-white/80">
                Be the first to know when seats become available or when we
                announce new cohort dates.
              </p>
            </div>
          </div>
        </section>

        {/* Waitlist Form */}
        <section className="section">
          <div className="container">
            <div className="max-w-lg mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <WaitlistForm />
              </div>

              {/* Alternative */}
              <div className="mt-8 text-center">
                <p className="text-[var(--text-secondary)] mb-4">
                  Want to secure your spot now?
                </p>
                <Link
                  href="/register"
                  className="btn bg-[var(--soft-gold)] text-[var(--navy)] hover:bg-[var(--gold-hover)]"
                >
                  Register Now — $5,000
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section bg-[var(--light-gray)]/30">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">
                Waitlist FAQ
              </h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold mb-2">
                    How does the waitlist work?
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    When a seat becomes available or we announce a new cohort,
                    we&apos;ll email waitlist members in order. You&apos;ll have 48 hours to
                    claim your spot before we move to the next person.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold mb-2">
                    Is there a cost to join the waitlist?
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    No! The waitlist is completely free. You&apos;ll only pay when
                    you&apos;re ready to register for a bootcamp.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold mb-2">
                    Can I skip the waitlist?
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    If seats are currently available, you can{" "}
                    <Link
                      href="/register"
                      className="text-[var(--teal)] underline"
                    >
                      register directly
                    </Link>
                    . The waitlist is only for when cohorts are sold out.
                  </p>
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
