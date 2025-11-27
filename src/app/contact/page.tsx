import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a free consultation with AI3 Consulting. We help businesses in Greenville, SC and nationwide integrate AI into their operations.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section bg-[var(--light-gray)]/30">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl mb-6">Let's Talk</h1>
              <p className="text-lg md:text-xl text-[var(--text-secondary)]">
                Ready to explore how AI can transform your operations? Fill out
                the form below and we'll schedule a free consultation to discuss
                your challenges and opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl mb-6">Schedule a Consultation</h2>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="lg:pl-12">
                <h2 className="text-2xl mb-6">Get in Touch</h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-[var(--teal)]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Location
                    </h3>
                    <p className="text-[var(--text-secondary)]">
                      Greenville, SC
                      <br />
                      <span className="text-sm">
                        Remote services available nationwide
                      </span>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-[var(--teal)]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Response Time
                    </h3>
                    <p className="text-[var(--text-secondary)]">
                      We typically respond within 24 business hours.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-[var(--teal)]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      What to Expect
                    </h3>
                    <p className="text-[var(--text-secondary)]">
                      A 30-minute discovery call to discuss your challenges,
                      explore opportunities, and determine if we're a good fit
                      to work together.
                    </p>
                  </div>
                </div>

                {/* Quick Info Cards */}
                <div className="mt-12 grid gap-4">
                  <div className="p-6 bg-[var(--light-gray)]/50 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 bg-[var(--teal)] rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
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
                      </span>
                      <span className="font-semibold">Free Consultation</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">
                      No obligation — just a conversation about your needs.
                    </p>
                  </div>

                  <div className="p-6 bg-[var(--light-gray)]/50 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 bg-[var(--teal)] rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
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
                      </span>
                      <span className="font-semibold">100% Remote</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">
                      All work can be conducted remotely, nationwide.
                    </p>
                  </div>

                  <div className="p-6 bg-[var(--light-gray)]/50 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 bg-[var(--teal)] rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
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
                      </span>
                      <span className="font-semibold">Quick Turnaround</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Most projects completed in 2-8 weeks.
                    </p>
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
