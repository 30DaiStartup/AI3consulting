import PainPointCard from "./PainPointCard";

export default function PainPointsSection() {
  const painPoints = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Manual Processes",
      description: "Hours lost to repetitive tasks that drain your team's energy and steal time from high-value work.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "AI Fear & Hype",
      description: "Confusion about what AI can actually do, caught between fear of being left behind and skepticism of overpromises.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Tool Overload",
      description: "Dozens of AI tools, no clear path to implementation. Analysis paralysis keeps you stuck.",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        {/* Section header with craft signal */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-mono text-[var(--text-muted)] tracking-widest mb-4">
            01
          </span>
          <h2 className="text-3xl md:text-4xl mb-4">The Problems We Solve</h2>
          <p className="text-lg text-[var(--text-secondary)]">
            You know AI can help your business. You just need someone to show you how—without the jargon.
          </p>
        </div>

        {/* Pain point cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <PainPointCard
              key={index}
              icon={point.icon}
              title={point.title}
              description={point.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
