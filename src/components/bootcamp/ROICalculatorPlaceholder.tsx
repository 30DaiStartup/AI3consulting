import Link from "next/link";

export default function ROICalculatorPlaceholder() {
  return (
    <section id="calculator" className="section bg-[var(--light-gray)]/30">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-mono text-[var(--text-muted)] tracking-widest mb-4">
            05
          </span>
          <h2 className="text-3xl md:text-4xl mb-4">See Your Potential ROI</h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Calculate how much time and money you could save with AI-powered operations.
          </p>
        </div>

        {/* Placeholder card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-[var(--navy)] to-[#0d2468] rounded-lg p-8 md:p-12 text-white text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[var(--soft-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl mb-4">ROI Calculator Coming Soon</h3>
            <p className="text-white/70 mb-8 max-w-md mx-auto">
              Our interactive ROI calculator will help you quantify the potential
              savings from automating your most tedious business processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="btn bg-[var(--soft-gold)] text-[var(--navy)] hover:bg-[var(--gold-hover)]"
              >
                Reserve Your Seat Now
              </Link>
              <Link
                href="/contact"
                className="btn bg-transparent text-white border border-white/30 hover:bg-white/10"
              >
                Get a Custom Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
