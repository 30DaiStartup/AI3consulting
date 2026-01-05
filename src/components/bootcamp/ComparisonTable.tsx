export default function ComparisonTable() {
  const comparisons = [
    {
      aspect: "Time to Implement",
      without: "6-12 months of trial and error",
      with: "3 days of focused training",
    },
    {
      aspect: "ROI Timeline",
      without: "Uncertain, if ever",
      with: "Start seeing results week 1",
    },
    {
      aspect: "Ongoing Support",
      without: "You're on your own",
      with: "Alumni portal + community",
    },
    {
      aspect: "Team Readiness",
      without: "Fragmented knowledge",
      with: "Your team becomes AI-native",
    },
    {
      aspect: "Risk Level",
      without: "High (wrong tools, wasted budget)",
      with: "Low (proven frameworks)",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-mono text-[var(--text-muted)] tracking-widest mb-4">
            03
          </span>
          <h2 className="text-3xl md:text-4xl mb-4">The Clear Difference</h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Stop fumbling in the dark. Get a proven path to AI transformation.
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="p-4" />
            <div className="p-4 text-center">
              <span className="inline-flex items-center gap-2 text-red-600 font-semibold">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Without AI3 Bootcamp
              </span>
            </div>
            <div className="p-4 text-center">
              <span className="inline-flex items-center gap-2 text-green-600 font-semibold">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                With AI3 Bootcamp
              </span>
            </div>
          </div>

          {comparisons.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 gap-4 ${
                index % 2 === 0 ? "bg-[var(--light-gray)]/30" : "bg-white"
              } rounded-lg`}
            >
              <div className="p-4 font-semibold text-[var(--navy)]">{row.aspect}</div>
              <div className="p-4 text-[var(--text-secondary)]">{row.without}</div>
              <div className="p-4 text-[var(--navy)] font-medium">{row.with}</div>
            </div>
          ))}
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {comparisons.map((row, index) => (
            <div key={index} className="bg-white border border-[var(--light-gray)] rounded-lg p-4">
              <div className="font-semibold text-[var(--navy)] mb-3">{row.aspect}</div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-1 text-red-600 text-xs font-semibold mb-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Without
                  </div>
                  <div className="text-sm text-[var(--text-secondary)]">{row.without}</div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-green-600 text-xs font-semibold mb-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    With
                  </div>
                  <div className="text-sm text-[var(--navy)] font-medium">{row.with}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
