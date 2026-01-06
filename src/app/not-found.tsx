import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="section min-h-[70vh] flex items-center">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              {/* 404 Icon */}
              <div className="w-24 h-24 bg-[var(--light-gray)] rounded-full flex items-center justify-center mx-auto mb-8">
                <svg
                  className="w-12 h-12 text-[var(--text-muted)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold text-[var(--navy)] mb-4">
                404
              </h1>
              <h2 className="text-2xl md:text-3xl mb-4">Page Not Found</h2>
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                Looks like this page got automated out of existence. Let&apos;s get
                you back on track.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="btn bg-[var(--soft-gold)] text-[var(--navy)] hover:bg-[var(--gold-hover)]"
                >
                  Back to Home
                </Link>
                <Link
                  href="/register"
                  className="btn bg-[var(--teal)] text-white hover:bg-[var(--teal)]/90"
                >
                  Register for Bootcamp
                </Link>
                <Link
                  href="/contact"
                  className="btn bg-transparent text-[var(--navy)] border border-[var(--navy)]/20 hover:bg-gray-50"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
