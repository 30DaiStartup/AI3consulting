interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  imageUrl?: string;
}

export default function TestimonialCard({
  quote,
  name,
  title,
  company,
  imageUrl,
}: TestimonialCardProps) {
  return (
    <figure className="bg-white p-8 rounded-lg border border-[var(--light-gray)] shadow-sm hover:shadow-md transition-shadow">
      {/* Quote icon */}
      <svg
        className="w-10 h-10 text-[var(--soft-gold)] mb-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      <blockquote className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
        "{quote}"
      </blockquote>

      <figcaption className="flex items-center gap-4">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-[var(--navy)] flex items-center justify-center text-white font-semibold">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <div className="font-semibold text-[var(--navy)]">{name}</div>
          <div className="text-sm text-[var(--text-muted)]">
            {title}, {company}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
