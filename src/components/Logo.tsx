"use client";

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: "default" | "light";
}

export default function Logo({
  className = "",
  showText = true,
  variant = "default",
}: LogoProps) {
  const primaryColor = variant === "light" ? "#FFFFFF" : "#0A1D56";
  const accentColor = "#005F73";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Mark */}
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Outer hexagon shape - representing systems/structure */}
        <path
          d="M24 4L42 14V34L24 44L6 34V14L24 4Z"
          stroke={primaryColor}
          strokeWidth="2"
          fill="none"
        />
        {/* Inner triangle - representing AI/intelligence */}
        <path
          d="M24 12L36 30H12L24 12Z"
          fill={accentColor}
          opacity="0.9"
        />
        {/* Center node - representing human element */}
        <circle cx="24" cy="24" r="4" fill={primaryColor} />
        {/* Connection lines - representing integration */}
        <line x1="24" y1="20" x2="24" y2="12" stroke={primaryColor} strokeWidth="1.5" />
        <line x1="21" y1="26" x2="14" y2="29" stroke={primaryColor} strokeWidth="1.5" />
        <line x1="27" y1="26" x2="34" y2="29" stroke={primaryColor} strokeWidth="1.5" />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className="text-2xl font-bold tracking-tight"
            style={{ color: primaryColor, fontFamily: "var(--font-dm-serif)" }}
          >
            AI3
          </span>
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: accentColor }}
          >
            Consulting
          </span>
        </div>
      )}
    </div>
  );
}
