"use client";

import Image from "next/image";

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
  const textColor = variant === "light" ? "#FFFFFF" : "#c0c5cc";
  const goldColor = "#d4a84b";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/logo.png"
        alt="AI3 Bootcamp"
        width={48}
        height={48}
        className="shrink-0"
        priority
      />

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className="text-2xl font-bold tracking-tight"
            style={{ color: goldColor, fontFamily: "var(--font-dm-serif)" }}
          >
            AI3
          </span>
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: textColor }}
          >
            BOOTCAMP
          </span>
        </div>
      )}
    </div>
  );
}
