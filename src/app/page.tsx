import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[var(--light-gray)]/30 to-white">
          {/* Subtle geometric pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg width="100%" height="100%" className="absolute inset-0">
              <defs>
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="var(--navy)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="container relative">
            <div className="min-h-[calc(100vh-5rem)] flex flex-col justify-center py-20">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--teal)]/10 rounded-full mb-6">
                  <span className="w-2 h-2 bg-[var(--teal)] rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-[var(--teal)]">
                    Serving Greenville, SC & Beyond
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">
                  Transform Your Operations with{" "}
                  <span className="text-[var(--teal)]">Human-Centered AI</span>
                </h1>

                <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-8 max-w-2xl">
                  We help small to medium businesses integrate AI solutions that reduce
                  tedious tasks, increase role satisfaction, and boost productivity &mdash;
                  all while keeping humans in the loop.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn btn-primary text-lg px-8 py-4">
                    Schedule a Consultation
                  </Link>
                  <Link href="/services" className="btn btn-outline text-lg px-8 py-4">
                    View Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="section bg-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl mb-4">
                The 80/20 Approach to AI Integration
              </h2>
              <p className="text-lg text-[var(--text-secondary)]">
                We focus on the 20% of projects that will resolve 80% of your problems.
                No bloated solutions &mdash; just targeted impact.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group p-8 border border-[var(--light-gray)] rounded-lg hover:border-[var(--teal)] transition-colors">
                <div className="w-14 h-14 bg-[var(--teal)]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[var(--teal)]/20 transition-colors">
                  <svg className="w-7 h-7 text-[var(--teal)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl mb-3">Reduce Tedious Tasks</h3>
                <p className="text-[var(--text-secondary)]">
                  Identify and automate repetitive work that drains your team's time and energy,
                  freeing them for higher-value activities.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group p-8 border border-[var(--light-gray)] rounded-lg hover:border-[var(--teal)] transition-colors">
                <div className="w-14 h-14 bg-[var(--teal)]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[var(--teal)]/20 transition-colors">
                  <svg className="w-7 h-7 text-[var(--teal)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl mb-3">Increase Role Satisfaction</h3>
                <p className="text-[var(--text-secondary)]">
                  When employees spend less time on monotonous work, job satisfaction improves.
                  Happy teams are productive teams.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group p-8 border border-[var(--light-gray)] rounded-lg hover:border-[var(--teal)] transition-colors">
                <div className="w-14 h-14 bg-[var(--teal)]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[var(--teal)]/20 transition-colors">
                  <svg className="w-7 h-7 text-[var(--teal)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl mb-3">Boost Productivity</h3>
                <p className="text-[var(--text-secondary)]">
                  Custom AI tooling designed specifically for your workflows. No generic solutions
                  &mdash; just tools that work for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="section bg-[var(--light-gray)]/30">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl mb-6">
                  Human-in-the-Loop Systems
                </h2>
                <p className="text-lg text-[var(--text-secondary)] mb-6">
                  We don't believe in replacing your team with AI. Instead, we build systems
                  that amplify human capabilities, putting your people in control while AI
                  handles the heavy lifting.
                </p>
                <ul className="space-y-4">
                  {[
                    "Discovery through interviews, audits, and observation",
                    "Custom tooling tailored to your specific challenges",
                    "Comprehensive training packages for your team",
                    "2-8 week projects, completely remote",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[var(--teal)] flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-[var(--text-secondary)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto relative">
                  {/* Background circle */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[var(--teal)]/20" />

                  {/* Center hub */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[var(--navy)] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">You</span>
                  </div>

                  {/* Orbiting elements */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[var(--teal)] text-white px-4 py-2 rounded-lg text-sm font-medium">
                    AI Tools
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[var(--teal)] text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Automation
                  </div>
                  <div className="absolute top-1/2 left-4 -translate-y-1/2 bg-[var(--soft-gold)] text-[var(--navy)] px-4 py-2 rounded-lg text-sm font-medium">
                    Training
                  </div>
                  <div className="absolute top-1/2 right-4 -translate-y-1/2 bg-[var(--soft-gold)] text-[var(--navy)] px-4 py-2 rounded-lg text-sm font-medium">
                    Support
                  </div>

                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                    <line x1="200" y1="96" x2="200" y2="152" stroke="var(--teal)" strokeWidth="2" strokeDasharray="4,4" />
                    <line x1="200" y1="248" x2="200" y2="304" stroke="var(--teal)" strokeWidth="2" strokeDasharray="4,4" />
                    <line x1="96" y1="200" x2="152" y2="200" stroke="var(--soft-gold)" strokeWidth="2" strokeDasharray="4,4" />
                    <line x1="248" y1="200" x2="304" y2="200" stroke="var(--soft-gold)" strokeWidth="2" strokeDasharray="4,4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="section bg-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl mb-4">Our Services</h2>
              <p className="text-lg text-[var(--text-secondary)]">
                From discovery to deployment, we provide end-to-end AI integration
                services tailored to your business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="p-8 bg-[var(--navy)] text-white rounded-lg">
                <div className="text-[var(--soft-gold)] text-5xl font-bold mb-4 opacity-50">01</div>
                <h3 className="text-2xl mb-3 text-[var(--soft-gold)]">Discovery & Audits</h3>
                <p className="text-white/70 mb-6">
                  We analyze your operations through interviews, process observation, and
                  data audits to identify high-impact automation opportunities.
                </p>
                <Link href="/services" className="inline-flex items-center gap-2 text-[var(--soft-gold)] hover:gap-3 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Service 2 */}
              <div className="p-8 bg-[var(--teal)] text-white rounded-lg">
                <div className="text-white/30 text-5xl font-bold mb-4">02</div>
                <h3 className="text-2xl mb-3 text-[var(--soft-gold)]">Custom AI Tooling</h3>
                <p className="text-white/70 mb-6">
                  We build bespoke AI solutions that integrate with your existing
                  systems and workflows, designed to solve your specific challenges.
                </p>
                <Link href="/services" className="inline-flex items-center gap-2 text-white hover:gap-3 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Service 3 */}
              <div className="p-8 bg-[var(--soft-gold)] text-[var(--navy)] rounded-lg">
                <div className="text-[var(--navy)]/20 text-5xl font-bold mb-4">03</div>
                <h3 className="text-2xl mb-3">Training & Handoff</h3>
                <p className="text-[var(--navy)]/70 mb-6">
                  We don't just deliver solutions &mdash; we empower your team with
                  comprehensive training to iterate and improve on their own.
                </p>
                <Link href="/services" className="inline-flex items-center gap-2 text-[var(--navy)] hover:gap-3 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Credibility Section */}
        <section className="section bg-[var(--light-gray)]/30">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[var(--navy)] mb-2">10+</div>
                <p className="text-[var(--text-secondary)]">Years of Experience</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[var(--navy)] mb-2">50+</div>
                <p className="text-[var(--text-secondary)]">AI Products Built</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[var(--navy)] mb-2">2-8</div>
                <p className="text-[var(--text-secondary)]">Week Projects</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[var(--navy)] mb-2">100%</div>
                <p className="text-[var(--text-secondary)]">Remote Delivery</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-[var(--navy)]">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl text-white mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how AI can help your business reduce tedious tasks,
              increase satisfaction, and boost productivity.
            </p>
            <Link
              href="/contact"
              className="btn bg-[var(--soft-gold)] text-[var(--navy)] hover:bg-[var(--gold-hover)] text-lg px-8 py-4"
            >
              Schedule Your Free Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
