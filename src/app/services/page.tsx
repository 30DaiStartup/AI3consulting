import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI consulting services including discovery audits, custom AI tooling, and comprehensive training packages. Serving businesses in Greenville, SC and nationwide.",
};

const services = [
  {
    number: "01",
    title: "Discovery & Audits",
    description:
      "We start every engagement by understanding your business deeply. Through structured interviews, process observation, and data analysis, we identify the highest-impact opportunities for AI integration.",
    features: [
      "Stakeholder interviews to understand pain points",
      "Process mapping and workflow analysis",
      "Data audit and quality assessment",
      "Opportunity scoring and prioritization",
      "ROI analysis for potential solutions",
    ],
    duration: "1-2 weeks",
    color: "navy",
  },
  {
    number: "02",
    title: "Custom AI Tooling",
    description:
      "We build bespoke AI solutions designed specifically for your workflows. No off-the-shelf software that requires you to change how you work — instead, tools that adapt to your existing processes.",
    features: [
      "Workflow automation with AI decision support",
      "Document processing and data extraction",
      "Custom chatbots and knowledge assistants",
      "Predictive analytics and forecasting",
      "Integration with existing systems",
    ],
    duration: "2-6 weeks",
    color: "teal",
  },
  {
    number: "03",
    title: "Training & Handoff",
    description:
      "We don't just deliver solutions and walk away. We ensure your team is fully equipped to maintain, iterate, and improve on the tools we build together.",
    features: [
      "Comprehensive documentation",
      "Hands-on training sessions",
      "Best practices playbooks",
      "Ongoing support transition plan",
      "Knowledge transfer workshops",
    ],
    duration: "1-2 weeks",
    color: "gold",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section bg-[var(--light-gray)]/30">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl mb-6">Our Services</h1>
              <p className="text-lg md:text-xl text-[var(--text-secondary)]">
                End-to-end AI integration services designed to transform your
                operations. From discovery to deployment to training, we're with
                you every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="section bg-white">
          <div className="container">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.number}
                  className={`grid lg:grid-cols-2 gap-12 items-start ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div
                      className={`text-6xl md:text-8xl font-bold mb-4 ${
                        service.color === "navy"
                          ? "text-[var(--navy)]/10"
                          : service.color === "teal"
                          ? "text-[var(--teal)]/20"
                          : "text-[var(--soft-gold)]/40"
                      }`}
                    >
                      {service.number}
                    </div>
                    <h2 className="text-3xl md:text-4xl mb-4">{service.title}</h2>
                    <p className="text-lg text-[var(--text-secondary)] mb-6">
                      {service.description}
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--light-gray)] rounded-full text-sm">
                      <svg
                        className="w-4 h-4 text-[var(--teal)]"
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
                      <span>Typical duration: {service.duration}</span>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div
                      className={`p-8 rounded-lg ${
                        service.color === "navy"
                          ? "bg-[var(--navy)]"
                          : service.color === "teal"
                          ? "bg-[var(--teal)]"
                          : "bg-[var(--soft-gold)]"
                      }`}
                    >
                      <h3
                        className={`text-lg font-semibold mb-6 ${
                          service.color === "gold"
                            ? "text-[var(--navy)]"
                            : "text-white"
                        }`}
                      >
                        What's included:
                      </h3>
                      <ul className="space-y-4">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <svg
                              className={`w-5 h-5 shrink-0 mt-0.5 ${
                                service.color === "gold"
                                  ? "text-[var(--navy)]"
                                  : "text-white"
                              }`}
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
                            <span
                              className={
                                service.color === "gold"
                                  ? "text-[var(--navy)]/80"
                                  : "text-white/80"
                              }
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="section bg-[var(--light-gray)]/30">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl mb-4">How We Work Together</h2>
              <p className="text-lg text-[var(--text-secondary)]">
                Every engagement follows a proven process designed to deliver
                maximum impact with minimal disruption to your operations.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Discovery Call",
                  description:
                    "Free consultation to understand your challenges and determine if we're a good fit.",
                },
                {
                  step: "2",
                  title: "Deep Dive",
                  description:
                    "Comprehensive audit of your processes, data, and team workflows.",
                },
                {
                  step: "3",
                  title: "Build & Iterate",
                  description:
                    "Rapid development of custom solutions with regular feedback loops.",
                },
                {
                  step: "4",
                  title: "Train & Handoff",
                  description:
                    "Thorough training and documentation so your team owns the solution.",
                },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <div className="text-5xl font-bold text-[var(--teal)]/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p className="text-[var(--text-secondary)]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl mb-12 text-center">
                Frequently Asked Questions
              </h2>

              <div className="space-y-8">
                {[
                  {
                    q: "How long does a typical project take?",
                    a: "Most projects run 2-8 weeks from kickoff to handoff, depending on scope and complexity. We'll provide a detailed timeline during our discovery process.",
                  },
                  {
                    q: "Do you work on-site or remotely?",
                    a: "All of our work can be conducted 100% remotely. We use video calls, screen sharing, and collaborative tools to stay connected throughout the engagement.",
                  },
                  {
                    q: "What size businesses do you work with?",
                    a: "We primarily work with small to medium-sized businesses. Our sweet spot is companies with 10-200 employees who have established processes but haven't yet integrated AI.",
                  },
                  {
                    q: "Will you replace our team with AI?",
                    a: "Absolutely not. Our philosophy centers on human-in-the-loop systems that amplify your team's capabilities, not replace them. We automate tedious tasks so your people can focus on meaningful work.",
                  },
                  {
                    q: "What happens after the project ends?",
                    a: "We provide comprehensive training and documentation so your team can maintain and iterate on the solutions independently. We also offer optional ongoing support packages.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-[var(--light-gray)] pb-8"
                  >
                    <h3 className="text-xl mb-3">{faq.q}</h3>
                    <p className="text-[var(--text-secondary)]">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-[var(--navy)]">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Book a free discovery call to discuss your challenges and explore
              how AI can transform your operations.
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
