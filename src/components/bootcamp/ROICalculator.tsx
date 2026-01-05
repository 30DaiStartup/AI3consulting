"use client";

import { useState } from "react";
import Link from "next/link";
import {
  calculateROI,
  formatCurrency,
  formatNumber,
  type ROIInputs,
  type ROIResults,
} from "@/lib/roiCalculator";

const defaultInputs: ROIInputs = {
  hoursPerWeekOnManualTasks: 10,
  hourlyRate: 50,
  numberOfEmployees: 5,
};

export default function ROICalculator() {
  const [inputs, setInputs] = useState<ROIInputs>(defaultInputs);
  const [results, setResults] = useState<ROIResults | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (field: keyof ROIInputs, value: number) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  const handleCalculate = () => {
    const calculatedResults = calculateROI(inputs);
    setResults(calculatedResults);
    setShowResults(true);
  };

  const handleReset = () => {
    setInputs(defaultInputs);
    setResults(null);
    setShowResults(false);
  };

  return (
    <section id="calculator" className="section bg-[var(--light-gray)]/30">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-mono text-[var(--text-muted)] tracking-widest mb-4">
            04
          </span>
          <h2 className="text-3xl md:text-4xl mb-4">Calculate Your ROI</h2>
          <p className="text-lg text-[var(--text-secondary)]">
            See how much time and money you could save by automating your most
            tedious business processes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!showResults ? (
            /* Calculator Form */
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {/* Hours per week */}
                <div>
                  <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                    Hours/week on manual tasks
                  </label>
                  <p className="text-xs text-[var(--text-muted)] mb-3">
                    Per employee average
                  </p>
                  <input
                    type="range"
                    min="1"
                    max="40"
                    value={inputs.hoursPerWeekOnManualTasks}
                    onChange={(e) =>
                      handleInputChange(
                        "hoursPerWeekOnManualTasks",
                        Number(e.target.value)
                      )
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--teal)]"
                  />
                  <div className="text-center mt-2">
                    <span className="text-2xl font-bold text-[var(--teal)]">
                      {inputs.hoursPerWeekOnManualTasks}
                    </span>
                    <span className="text-sm text-[var(--text-muted)] ml-1">
                      hrs
                    </span>
                  </div>
                </div>

                {/* Hourly rate */}
                <div>
                  <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                    Average hourly rate
                  </label>
                  <p className="text-xs text-[var(--text-muted)] mb-3">
                    Fully loaded employee cost
                  </p>
                  <input
                    type="range"
                    min="20"
                    max="200"
                    step="5"
                    value={inputs.hourlyRate}
                    onChange={(e) =>
                      handleInputChange("hourlyRate", Number(e.target.value))
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--teal)]"
                  />
                  <div className="text-center mt-2">
                    <span className="text-2xl font-bold text-[var(--teal)]">
                      ${inputs.hourlyRate}
                    </span>
                    <span className="text-sm text-[var(--text-muted)] ml-1">
                      /hr
                    </span>
                  </div>
                </div>

                {/* Number of employees */}
                <div>
                  <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                    Team size
                  </label>
                  <p className="text-xs text-[var(--text-muted)] mb-3">
                    Employees doing manual work
                  </p>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={inputs.numberOfEmployees}
                    onChange={(e) =>
                      handleInputChange(
                        "numberOfEmployees",
                        Number(e.target.value)
                      )
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--teal)]"
                  />
                  <div className="text-center mt-2">
                    <span className="text-2xl font-bold text-[var(--teal)]">
                      {inputs.numberOfEmployees}
                    </span>
                    <span className="text-sm text-[var(--text-muted)] ml-1">
                      people
                    </span>
                  </div>
                </div>
              </div>

              {/* Live preview */}
              <div className="bg-[var(--light-gray)]/50 rounded-lg p-6 mb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-xs text-[var(--text-muted)] mb-1">
                      Weekly manual hours
                    </p>
                    <p className="text-lg font-bold text-[var(--navy)]">
                      {formatNumber(
                        inputs.hoursPerWeekOnManualTasks *
                          inputs.numberOfEmployees
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] mb-1">
                      Weekly cost
                    </p>
                    <p className="text-lg font-bold text-[var(--navy)]">
                      {formatCurrency(
                        inputs.hoursPerWeekOnManualTasks *
                          inputs.numberOfEmployees *
                          inputs.hourlyRate
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] mb-1">
                      Est. automatable
                    </p>
                    <p className="text-lg font-bold text-[var(--teal)]">40%</p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] mb-1">
                      Yearly savings
                    </p>
                    <p className="text-lg font-bold text-[var(--teal)]">
                      {formatCurrency(
                        inputs.hoursPerWeekOnManualTasks *
                          inputs.numberOfEmployees *
                          inputs.hourlyRate *
                          0.4 *
                          52
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={handleCalculate}
                  className="btn bg-[var(--soft-gold)] text-[var(--navy)] hover:bg-[var(--gold-hover)] text-lg px-10"
                >
                  Calculate My Full ROI
                </button>
              </div>
            </div>
          ) : (
            /* Results Display */
            <div className="bg-gradient-to-br from-[var(--navy)] to-[#0d2468] rounded-lg shadow-lg p-8 md:p-10 text-white">
              {results && (
                <>
                  {/* Headline result */}
                  <div className="text-center mb-10">
                    <p className="text-white/70 mb-2">Your potential yearly savings</p>
                    <p className="text-5xl md:text-6xl font-bold text-[var(--soft-gold)] mb-4">
                      {formatCurrency(results.yearlySavings)}
                    </p>
                    <p className="text-xl text-white/80">
                      That&apos;s{" "}
                      <span className="text-[var(--soft-gold)] font-bold">
                        {results.bootcampROI}x
                      </span>{" "}
                      return on your bootcamp investment
                    </p>
                  </div>

                  {/* Detailed breakdown */}
                  <div className="grid md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white/10 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-[var(--soft-gold)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-6 h-6 text-[var(--soft-gold)]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <p className="text-3xl font-bold mb-1">
                        {formatNumber(results.yearlyHoursSaved)}
                      </p>
                      <p className="text-sm text-white/70">Hours saved yearly</p>
                    </div>

                    <div className="bg-white/10 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-[var(--soft-gold)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-6 h-6 text-[var(--soft-gold)]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <p className="text-3xl font-bold mb-1">
                        {formatCurrency(results.monthlySavings)}
                      </p>
                      <p className="text-sm text-white/70">Monthly savings</p>
                    </div>

                    <div className="bg-white/10 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-[var(--soft-gold)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-6 h-6 text-[var(--soft-gold)]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <p className="text-3xl font-bold mb-1">
                        {results.paybackDays < 365
                          ? `${results.paybackDays} days`
                          : "< 1 year"}
                      </p>
                      <p className="text-sm text-white/70">Payback period</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="text-center space-y-4">
                    <p className="text-white/70">
                      Ready to unlock these savings?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        href="/register"
                        className="btn bg-[var(--soft-gold)] text-[var(--navy)] hover:bg-[var(--gold-hover)]"
                      >
                        Reserve Your Seat — $5,000
                      </Link>
                      <button
                        onClick={handleReset}
                        className="btn bg-transparent text-white border border-white/30 hover:bg-white/10"
                      >
                        Recalculate
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
