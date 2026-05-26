type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  rating: number;
};

export default function TestimonialCard({
  quote,
  name,
  role,
  rating,
}: TestimonialCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-luxury">
      <div className="h-1.5 bg-gradient-to-r from-royal-500 via-royal-400 to-gold-400" />
      <div className="p-8">
        <div className="flex gap-1 text-gold-400">
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} aria-hidden>
              ★
            </span>
          ))}
        </div>
        <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-navy-800">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <footer className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-6">
          <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-royal-500 to-navy-800 font-display text-lg font-bold text-white ring-2 ring-royal-200 transition group-hover:ring-royal-400">
            {name.charAt(0)}
            <span className="absolute inset-0 opacity-0 transition group-hover:opacity-100 shimmer" />
          </div>
          <div>
            <p className="font-semibold text-navy-900">{name}</p>
            <p className="text-sm text-royal-600">{role}</p>
          </div>
        </footer>
      </div>
    </article>
  );
}
