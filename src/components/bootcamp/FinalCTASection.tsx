import Link from "next/link";
import SeatAvailabilityBadge from "./SeatAvailabilityBadge";

interface FinalCTASectionProps {
  availableSeats?: number;
}

export default function FinalCTASection({ availableSeats = 8 }: FinalCTASectionProps) {
  return (
    <section className="section bg-gradient-to-br from-[var(--navy)] to-[#0d2468] text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="container relative text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
          Join 12 high-agency leaders for 3 days of intensive, hands-on AI training.
          Walk out with real solutions, not just slides.
        </p>

        {/* Seat availability */}
        <div className="mb-8">
          <SeatAvailabilityBadge
            availableSeats={availableSeats}
            className="bg-white/10 border-white/20 text-white"
          />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/register"
            className="btn bg-[var(--soft-gold)] text-[var(--navy)] hover:bg-[var(--gold-hover)] text-lg px-8 py-4 font-semibold"
          >
            Reserve Your Seat — $5,000
          </Link>
          <Link
            href="/waitlist"
            className="btn bg-transparent text-white border-2 border-white/30 hover:bg-white/10 text-lg px-8 py-4"
          >
            Join the Waitlist
          </Link>
        </div>

        {/* Trust elements */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-white/50">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>14-Day Money-Back Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--soft-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>February 2026 • Greenville, SC</span>
          </div>
        </div>
      </div>
    </section>
  );
}
