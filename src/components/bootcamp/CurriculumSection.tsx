export default function CurriculumSection() {
  const days = [
    {
      day: "Day 1",
      title: "Foundation & Frameworks",
      time: "9 AM – 3 PM",
      topics: [
        "AI fundamentals (no-hype edition)",
        "Prompt mastery & templates",
        "Ethics & human-in-the-loop design",
        "Security essentials",
      ],
      outcome: "Leave with a personalized prompt library",
      color: "bg-[var(--navy)]",
      textColor: "text-white",
      accentColor: "text-[var(--soft-gold)]",
    },
    {
      day: "Day 2",
      title: "Problem-Solving & Prototyping",
      time: "9 AM – 3 PM",
      topics: [
        "Frame your 3 business problems",
        "The workflow ladder: prompt → skill → agent",
        "Hands-on Claude Code sessions",
        "Build your first AI agent",
      ],
      outcome: "Leave with one working agent",
      color: "bg-[var(--teal)]",
      textColor: "text-white",
      accentColor: "text-white/90",
    },
    {
      day: "Day 3",
      title: "Deploy & Scale",
      time: "9 AM – 3 PM",
      topics: [
        "Context engineering mastery",
        "Human approval gates",
        "Bespoke tool development",
        "Live demos & iteration",
      ],
      outcome: "Leave with 2 deployable systems + prompt kit",
      color: "bg-[var(--soft-gold)]",
      textColor: "text-[var(--navy)]",
      accentColor: "text-[var(--navy)]/80",
    },
  ];

  return (
    <section className="section bg-[var(--light-gray)]/30">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-mono text-[var(--text-muted)] tracking-widest mb-4">
            02
          </span>
          <h2 className="text-3xl md:text-4xl mb-4">3 Days to AI Mastery</h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Intensive, hands-on training. No fluff. You'll walk out with real, working solutions.
          </p>
        </div>

        {/* Day cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {days.map((day, index) => (
            <div
              key={index}
              className={`${day.color} ${day.textColor} rounded-lg p-8 transform hover:-translate-y-2 transition-transform`}
            >
              <div className="opacity-30 text-5xl font-bold mb-2">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="text-sm font-medium mb-1 opacity-80">{day.day}</div>
              <h3 className="text-2xl mb-2">{day.title}</h3>
              <p className={`text-sm mb-6 ${day.accentColor}`}>{day.time}</p>

              <ul className="space-y-2 mb-6">
                {day.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-start gap-2 text-sm opacity-90">
                    <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {topic}
                  </li>
                ))}
              </ul>

              <div className={`pt-4 border-t border-current/20 text-sm font-semibold ${day.accentColor}`}>
                {day.outcome}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
