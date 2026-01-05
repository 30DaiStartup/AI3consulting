import Link from "next/link";

export default function QuizPlaceholder() {
  return (
    <section id="quiz" className="section bg-gradient-to-br from-[var(--teal)] to-[#004d5c] text-white">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-mono text-white/50 tracking-widest mb-4">
            06
          </span>
          <h2 className="text-3xl md:text-4xl mb-4">Are You High-Agency Enough?</h2>
          <p className="text-lg text-white/80">
            Take our 5-question quiz to see if you're the kind of leader who gets results.
          </p>
        </div>

        {/* Placeholder card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12 text-center border border-white/20">
            {/* Hexagonal badge preview */}
            <div className="w-24 h-24 mx-auto mb-6 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon
                  points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-[var(--soft-gold)]"
                />
                <text
                  x="50"
                  y="45"
                  textAnchor="middle"
                  className="text-xl font-bold fill-white"
                >
                  ?
                </text>
                <text
                  x="50"
                  y="65"
                  textAnchor="middle"
                  className="text-xs fill-white/70"
                >
                  Your Score
                </text>
              </svg>
            </div>

            <h3 className="text-2xl mb-4">High-Agency Quiz Coming Soon</h3>
            <p className="text-white/70 mb-8 max-w-md mx-auto">
              Discover if you have what it takes to transform your business with AI.
              Score 65+ and you'll earn your High-Agency badge to share on LinkedIn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="btn bg-[var(--soft-gold)] text-[var(--navy)] hover:bg-[var(--gold-hover)]"
              >
                Skip Ahead — Reserve Now
              </Link>
              <Link
                href="/waitlist"
                className="btn bg-transparent text-white border border-white/30 hover:bg-white/10"
              >
                Join the Waitlist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
