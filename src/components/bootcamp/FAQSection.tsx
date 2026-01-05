"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What's the refund policy?",
    answer: "Full refund within 14 days of registration, no questions asked. If you're not satisfied by lunch on Day 1, we'll refund your entire investment.",
  },
  {
    question: "What are the prerequisites?",
    answer: "Bring a Mac or PC laptop, sign up for Claude Max ($100/month), and come with your top 3 business pain points identified. No coding experience required.",
  },
  {
    question: "How do the 2 nonprofit seats work?",
    answer: "We reserve 2 seats for qualifying nonprofit organizations at no cost. Apply through our nonprofit application form. In exchange, we ask for a testimonial and video review after completion.",
  },
  {
    question: "What's included in the $5,000 investment?",
    answer: "3 full days of hands-on training, all course materials, lunch each day, 30 days of free alumni portal access, and 2 free hours of consulting in your second month.",
  },
  {
    question: "Is parking available?",
    answer: "Yes, free parking is available at the venue. Full address and parking instructions will be sent in your confirmation email.",
  },
  {
    question: "What's the alumni portal?",
    answer: "A $500/month subscription that includes our prompt library, monthly AI updates, community forum, and exclusive access to new tools and templates. Your first 30 days are included with bootcamp registration.",
  },
  {
    question: "Can I send multiple team members?",
    answer: "Yes! We recommend sending 2-3 key team members for maximum impact. Contact us for group pricing.",
  },
  {
    question: "What if I can't attend the February cohort?",
    answer: "Join our waitlist and we'll notify you when future cohort dates are announced. Your waitlist position secures priority registration.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section bg-[var(--light-gray)]/30">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-mono text-[var(--text-muted)] tracking-widest mb-4">
            04
          </span>
          <h2 className="text-3xl md:text-4xl mb-4">Common Questions</h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Everything you need to know before reserving your seat.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-[var(--light-gray)] rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-[var(--light-gray)]/20 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-[var(--navy)]">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-[var(--teal)] shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-4 text-[var(--text-secondary)]">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
