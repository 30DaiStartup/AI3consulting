import TestimonialCard from "./TestimonialCard";

export default function SocialProofSection() {
  return (
    <section className="section bg-[var(--light-gray)]/30">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <TestimonialCard
            quote="Zach's AI strategy helped us close a $14,000 deal in half the time. His approach isn't about replacing people—it's about making your best employees unstoppable."
            name="Sarah Johnson"
            title="CEO"
            company="Upstate Analytics"
          />
        </div>
      </div>
    </section>
  );
}
