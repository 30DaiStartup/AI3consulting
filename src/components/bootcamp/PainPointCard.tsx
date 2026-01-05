import { ReactNode } from "react";

interface PainPointCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function PainPointCard({
  icon,
  title,
  description,
}: PainPointCardProps) {
  return (
    <div className="group p-8 bg-white border border-[var(--light-gray)] rounded-lg hover:border-[var(--teal)] transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="w-14 h-14 bg-gradient-to-br from-[var(--soft-gold)]/20 to-[var(--teal)]/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <div className="text-[var(--teal)]">{icon}</div>
      </div>
      <h3 className="text-xl mb-3 text-[var(--navy)]">{title}</h3>
      <p className="text-[var(--text-secondary)]">{description}</p>
    </div>
  );
}
