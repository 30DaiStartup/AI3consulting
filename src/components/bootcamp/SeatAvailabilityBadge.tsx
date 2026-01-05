"use client";

interface SeatAvailabilityBadgeProps {
  totalSeats?: number;
  availableSeats?: number;
  className?: string;
}

export default function SeatAvailabilityBadge({
  totalSeats = 12,
  availableSeats = 8,
  className = "",
}: SeatAvailabilityBadgeProps) {
  const isLowInventory = availableSeats <= 3;
  const isFull = availableSeats === 0;

  if (isFull) {
    return (
      <div
        className={`inline-flex items-center gap-2 px-4 py-2 bg-[var(--navy)] text-white rounded-full ${className}`}
        role="status"
        aria-live="polite"
      >
        <span className="w-2 h-2 bg-[var(--soft-gold)] rounded-full" />
        <span className="text-sm font-semibold">Waitlist Now Open</span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
        isLowInventory
          ? "bg-amber-100 text-amber-800 border border-amber-300"
          : "bg-[var(--teal)]/10 text-[var(--teal)] border border-[var(--teal)]/20"
      } ${className}`}
      role="status"
      aria-live="polite"
    >
      <span
        className={`w-2 h-2 rounded-full ${
          isLowInventory ? "bg-amber-500 animate-pulse" : "bg-[var(--teal)]"
        }`}
      />
      <span className="text-sm font-semibold">
        {availableSeats} of {totalSeats} Seats Remaining
      </span>
    </div>
  );
}
