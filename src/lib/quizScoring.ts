export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    points: number;
  }[];
}

export interface QuizResult {
  score: number;
  maxScore: number;
  percentage: number;
  level: "low" | "medium" | "high" | "exceptional";
  title: string;
  description: string;
  earnedBadge: boolean;
}

export const BADGE_THRESHOLD = 65;

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "When you encounter a repetitive task in your business, what's your first instinct?",
    options: [
      { text: "Do it myself to make sure it's done right", points: 5 },
      { text: "Delegate it to someone on my team", points: 10 },
      { text: "Look for a tool or process to automate it", points: 20 },
      { text: "Question whether it needs to be done at all", points: 15 },
    ],
  },
  {
    id: 2,
    question: "How do you currently feel about AI tools in your business?",
    options: [
      { text: "Skeptical — they're overhyped and risky", points: 5 },
      { text: "Curious — I've tried a few but not systematically", points: 15 },
      { text: "Overwhelmed — too many options, not sure where to start", points: 10 },
      { text: "Strategic — I'm actively building AI into our operations", points: 20 },
    ],
  },
  {
    id: 3,
    question: "When a new technology or methodology emerges in your industry, you typically:",
    options: [
      { text: "Wait to see if it becomes mainstream before investing time", points: 5 },
      { text: "Read about it but rarely implement quickly", points: 10 },
      { text: "Run small experiments to test its value for my business", points: 20 },
      { text: "Rely on consultants or vendors to guide implementation", points: 10 },
    ],
  },
  {
    id: 4,
    question: "How would you describe your approach to solving business problems?",
    options: [
      { text: "Follow established best practices and proven methods", points: 10 },
      { text: "Combine proven methods with creative experiments", points: 20 },
      { text: "Focus on quick fixes to get things moving", points: 5 },
      { text: "Take time to deeply analyze before any action", points: 15 },
    ],
  },
  {
    id: 5,
    question: "If you had an extra 10 hours per week freed up from automation, you would:",
    options: [
      { text: "Finally catch up on my backlog of work", points: 5 },
      { text: "Spend more time on strategic planning", points: 15 },
      { text: "Look for the next process to automate", points: 20 },
      { text: "Take some well-deserved time off", points: 10 },
    ],
  },
];

export function calculateQuizScore(answers: Record<number, number>): QuizResult {
  const maxScore = quizQuestions.reduce(
    (sum, q) => sum + Math.max(...q.options.map((o) => o.points)),
    0
  );

  const score = Object.values(answers).reduce((sum, points) => sum + points, 0);
  const percentage = Math.round((score / maxScore) * 100);

  let level: QuizResult["level"];
  let title: string;
  let description: string;

  if (percentage >= 85) {
    level = "exceptional";
    title = "AI Pioneer";
    description =
      "You're already thinking like a high-agency leader. The bootcamp will supercharge your automation instincts with practical frameworks.";
  } else if (percentage >= 65) {
    level = "high";
    title = "High-Agency Leader";
    description =
      "You have the mindset for transformation. The bootcamp will give you the tools and systems to act on your instincts.";
  } else if (percentage >= 40) {
    level = "medium";
    title = "Emerging Operator";
    description =
      "You're on the right path. The bootcamp will accelerate your journey from curious to capable.";
  } else {
    level = "low";
    title = "Traditional Operator";
    description =
      "You prefer proven approaches — nothing wrong with that. But if you're ready to evolve, the bootcamp is designed for leaders like you.";
  }

  return {
    score,
    maxScore,
    percentage,
    level,
    title,
    description,
    earnedBadge: percentage >= BADGE_THRESHOLD,
  };
}

export function getLevelColor(level: QuizResult["level"]): string {
  switch (level) {
    case "exceptional":
      return "var(--soft-gold)";
    case "high":
      return "#22c55e"; // green-500
    case "medium":
      return "var(--teal)";
    case "low":
      return "#94a3b8"; // slate-400
  }
}
