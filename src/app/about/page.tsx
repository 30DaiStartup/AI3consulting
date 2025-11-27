import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about AI3 Consulting's approach to AI integration. Founded by an industrial engineer with a decade of experience building AI products.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section bg-[var(--light-gray)]/30">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl mb-6">About AI3 Consulting</h1>
              <p className="text-lg md:text-xl text-[var(--text-secondary)]">
                We're on a mission to help businesses harness the power of AI
                without losing the human touch that makes them unique.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl mb-6">The Story Behind AI3</h2>
                <div className="space-y-4 text-[var(--text-secondary)]">
                  <p>
                    AI3 Consulting was founded on a simple observation: most businesses
                    know AI could help them, but they don't know where to start — and
                    they're rightfully skeptical of one-size-fits-all solutions.
                  </p>
                  <p>
                    With a background in industrial engineering and over a decade of
                    experience working with cutting-edge technologies, I've built
                    dozens of AI products to solve unique business operations
                    challenges. I've seen what works and what doesn't.
                  </p>
                  <p>
                    What works is simple: understand the business deeply, focus on the
                    highest-impact opportunities, build solutions that keep humans in
                    control, and ensure the team can continue improving on their own.
                  </p>
                  <p>
                    That's the AI3 approach. The name reflects our three pillars:
                    <strong> AI, Augmentation, and Autonomy</strong> — technology that
                    amplifies human capabilities while giving your team the tools to
                    operate independently.
                  </p>
                </div>
              </div>

              {/* Visual placeholder */}
              <div className="relative">
                <div className="aspect-square bg-[var(--light-gray)]/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-[var(--navy)] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl font-bold text-white">AI3</span>
                    </div>
                    <div className="flex gap-4 justify-center text-sm text-[var(--text-secondary)]">
                      <span className="px-3 py-1 bg-white rounded-full">AI</span>
                      <span className="px-3 py-1 bg-white rounded-full">Augmentation</span>
                      <span className="px-3 py-1 bg-white rounded-full">Autonomy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="section bg-[var(--navy)] text-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl mb-4 text-white">Our Philosophy</h2>
              <p className="text-lg text-white/70">
                These principles guide every engagement and shape how we build
                solutions for our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Human-in-the-Loop",
                  description:
                    "AI should amplify human capabilities, not replace them. We build systems that keep your team in control while automating the tedious parts of their work.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                },
                {
                  title: "The 80/20 Rule",
                  description:
                    "We focus on the 20% of projects that will solve 80% of your problems. No bloated implementations — just targeted solutions with maximum impact.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                },
                {
                  title: "Knowledge Transfer",
                  description:
                    "We don't create dependency. Every engagement includes comprehensive training so your team can maintain and improve solutions independently.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ),
                },
                {
                  title: "Practical Over Perfect",
                  description:
                    "We prioritize solutions that work in the real world over theoretical perfection. Our goal is measurable impact, not impressive demos.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-8 border border-white/10 rounded-lg hover:border-white/20 transition-colors"
                >
                  <div className="text-[var(--soft-gold)] mb-4">{item.icon}</div>
                  <h3 className="text-xl mb-3 text-white">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Background Section */}
        <section className="section bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl mb-8 text-center">
                Background & Experience
              </h2>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="shrink-0 w-16 h-16 bg-[var(--teal)]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-[var(--teal)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Industrial Engineering Foundation</h3>
                    <p className="text-[var(--text-secondary)]">
                      A background in industrial engineering provides a unique lens for
                      understanding business operations — process optimization, workflow
                      analysis, and systems thinking are second nature.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-16 h-16 bg-[var(--teal)]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-[var(--teal)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">A Decade of Cutting-Edge Tech</h3>
                    <p className="text-[var(--text-secondary)]">
                      Over 10 years of hands-on experience working with emerging
                      technologies, from early machine learning implementations to
                      modern large language models and automation tools.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-16 h-16 bg-[var(--teal)]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-[var(--teal)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Dozens of AI Products Delivered</h3>
                    <p className="text-[var(--text-secondary)]">
                      Built and deployed over 50 AI-powered products across various
                      industries, from document processing systems to predictive
                      analytics platforms to custom workflow automation tools.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-16 h-16 bg-[var(--teal)]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-[var(--teal)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Based in Greenville, SC</h3>
                    <p className="text-[var(--text-secondary)]">
                      Proud to serve businesses in the greater Greenville area while
                      also working with clients nationwide through fully remote
                      engagements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-[var(--light-gray)]/30">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl mb-6">Let's Work Together</h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              Ready to explore how AI can transform your operations? Schedule a
              free consultation to discuss your challenges and opportunities.
            </p>
            <Link href="/contact" className="btn btn-primary text-lg px-8 py-4">
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
