"use client";

import { useState } from "react";
import Link from "next/link";
import {
  quizQuestions,
  calculateQuizScore,
  getLevelColor,
  BADGE_THRESHOLD,
  type QuizResult,
} from "@/lib/quizScoring";

type QuizState = "intro" | "questions" | "results";

export default function HighAgencyQuiz() {
  const [state, setState] = useState<QuizState>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [results, setResults] = useState<QuizResult | null>(null);

  const handleStart = () => {
    setState("questions");
    setCurrentQuestion(0);
    setAnswers({});
  };

  const handleAnswer = (points: number) => {
    const questionId = quizQuestions[currentQuestion].id;
    const newAnswers = { ...answers, [questionId]: points };
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const quizResults = calculateQuizScore(newAnswers);
      setResults(quizResults);
      setState("results");
    }
  };

  const handleRetake = () => {
    setState("intro");
    setCurrentQuestion(0);
    setAnswers({});
    setResults(null);
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <section
      id="quiz"
      className="section bg-gradient-to-br from-[var(--teal)] to-[#004d5c] text-white"
    >
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-mono text-white/50 tracking-widest mb-4">
            05
          </span>
          <h2 className="text-3xl md:text-4xl mb-4">Are You High-Agency Enough?</h2>
          <p className="text-lg text-white/80">
            Take our 5-question quiz to see if you have the mindset to transform
            your business with AI.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Intro State */}
          {state === "intro" && (
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

              <h3 className="text-2xl mb-4">Discover Your Agency Level</h3>
              <p className="text-white/70 mb-8 max-w-md mx-auto">
                Answer 5 quick questions about how you approach business
                challenges. Score {BADGE_THRESHOLD}%+ and earn your High-Agency
                badge to share on LinkedIn.
              </p>
              <button
                onClick={handleStart}
                className="btn bg-[var(--soft-gold)] text-[var(--navy)] hover:bg-[var(--gold-hover)] text-lg px-10"
              >
                Start the Quiz
              </button>
            </div>
          )}

          {/* Questions State */}
          {state === "questions" && (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-10 border border-white/20">
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-white/70 mb-2">
                  <span>
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </span>
                  <span>{Math.round(progress)}% complete</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[var(--soft-gold)] transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <h3 className="text-xl md:text-2xl mb-8">
                {quizQuestions[currentQuestion].question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.points)}
                    className="w-full text-left p-4 rounded-lg bg-white/5 border border-white/20
                             hover:bg-white/15 hover:border-[var(--soft-gold)] transition-all
                             focus:outline-none focus:ring-2 focus:ring-[var(--soft-gold)]"
                  >
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-sm font-semibold mr-3">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results State */}
          {state === "results" && results && (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12 text-center border border-white/20">
              {/* Badge */}
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon
                    points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
                    fill={results.earnedBadge ? getLevelColor(results.level) : "transparent"}
                    stroke={getLevelColor(results.level)}
                    strokeWidth="3"
                    className={results.earnedBadge ? "opacity-20" : ""}
                  />
                  <polygon
                    points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
                    fill="none"
                    stroke={getLevelColor(results.level)}
                    strokeWidth="2"
                  />
                  <text
                    x="50"
                    y="48"
                    textAnchor="middle"
                    className="text-2xl font-bold fill-white"
                  >
                    {results.percentage}%
                  </text>
                  <text
                    x="50"
                    y="68"
                    textAnchor="middle"
                    className="text-[10px] fill-white/70 uppercase tracking-wider"
                  >
                    {results.level}
                  </text>
                </svg>
                {results.earnedBadge && (
                  <div className="absolute -top-2 -right-2 bg-[var(--soft-gold)] text-[var(--navy)] text-xs font-bold px-2 py-1 rounded-full">
                    EARNED
                  </div>
                )}
              </div>

              {/* Result title */}
              <h3
                className="text-3xl font-bold mb-2"
                style={{ color: getLevelColor(results.level) }}
              >
                {results.title}
              </h3>
              <p className="text-white/70 mb-8 max-w-md mx-auto">
                {results.description}
              </p>

              {/* Score breakdown */}
              <div className="bg-white/5 rounded-lg p-4 mb-8 inline-block">
                <p className="text-sm text-white/70">
                  You scored{" "}
                  <span className="font-bold text-white">{results.score}</span>{" "}
                  out of{" "}
                  <span className="font-bold text-white">{results.maxScore}</span>{" "}
                  points
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {results.earnedBadge ? (
                  <>
                    <Link
                      href="/register"
                      className="btn bg-[var(--soft-gold)] text-[var(--navy)] hover:bg-[var(--gold-hover)]"
                    >
                      Claim Your Seat
                    </Link>
                    <button
                      onClick={() => {
                        // In a real implementation, this would open a share modal
                        if (navigator.share) {
                          navigator.share({
                            title: "I'm a High-Agency Leader!",
                            text: `I scored ${results.percentage}% on the AI3 High-Agency Quiz. Are you ready to transform your business with AI?`,
                            url: window.location.href,
                          });
                        }
                      }}
                      className="btn bg-transparent text-white border border-white/30 hover:bg-white/10"
                    >
                      Share Your Badge
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/register"
                      className="btn bg-[var(--soft-gold)] text-[var(--navy)] hover:bg-[var(--gold-hover)]"
                    >
                      Level Up at the Bootcamp
                    </Link>
                    <button
                      onClick={handleRetake}
                      className="btn bg-transparent text-white border border-white/30 hover:bg-white/10"
                    >
                      Retake Quiz
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
