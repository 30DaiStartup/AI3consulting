"use client";

import Link from "next/link";
import SeatAvailabilityBadge from "./SeatAvailabilityBadge";

interface HeroSectionProps {
  availableSeats?: number;
}

export default function HeroSection({ availableSeats = 8 }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[var(--navy)] to-[#0d2468] text-white">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern
              id="hero-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Hexagonal accent */}
      <div className="absolute top-20 right-10 opacity-10 hidden lg:block">
        <svg width="200" height="200" viewBox="0 0 100 100">
          <polygon
            points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
            fill="none"
            stroke="var(--soft-gold)"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="container relative">
        <div className="min-h-[calc(100vh-5rem)] flex flex-col justify-center py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Tagline badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <span className="text-sm font-medium text-[var(--soft-gold)]">
                Business AI Mastery
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-balance leading-tight">
              Transform Your Business Operations{" "}
              <span className="text-[var(--soft-gold)]">in 3 Days</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              The AI Bootcamp for Leaders Who Get Things Done—12 Seats Only.
              Walk out with deployable AI systems that 10x your team's output.
            </p>

            {/* Seat availability */}
            <div className="mb-8">
              <SeatAvailabilityBadge
                availableSeats={availableSeats}
                className="bg-white/10 border-white/20 text-white"
              />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="#calculator"
                className="btn bg-[var(--soft-gold)] text-[var(--navy)] hover:bg-[var(--gold-hover)] text-lg px-8 py-4 font-semibold"
              >
                Calculate Your ROI
              </Link>
              <Link
                href="#quiz"
                className="btn bg-transparent text-white border-2 border-white/30 hover:bg-white/10 text-lg px-8 py-4"
              >
                Take the High-Agency Quiz
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>February 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Greenville, SC</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>$5,000 Investment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
