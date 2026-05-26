type ScheduleCardProps = {
  time: string;
  title: string;
  location: string;
  type: string;
  description: string;
};

const typeColors: Record<string, string> = {
  General: "bg-slate-100 text-slate-700",
  Plenary: "bg-royal-100 text-royal-700",
  Workshop: "bg-gold-500/15 text-amber-700",
  Break: "bg-emerald-100 text-emerald-700",
  Panel: "bg-violet-100 text-violet-700",
  Experience: "bg-rose-100 text-rose-700",
};

export default function ScheduleCard({
  time,
  title,
  location,
  type,
  description,
}: ScheduleCardProps) {
  const badgeClass = typeColors[type] ?? "bg-royal-100 text-royal-700";

  return (
    <article className="group relative flex gap-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-md transition hover:border-royal-200 hover:shadow-luxury sm:p-8 md:ml-4">
      <div className="absolute -left-4 top-10 hidden h-3 w-3 rounded-full border-4 border-white bg-royal-500 shadow-glow md:block" />
      <div className="hidden shrink-0 sm:block">
        <div className="flex h-full w-24 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-navy-900 to-royal-900 px-3 py-4 text-center shadow-glow">
          <span className="text-[10px] uppercase tracking-wider text-royal-300">Time</span>
          <span className="mt-1 font-display text-sm font-bold leading-tight text-white">
            {time}
          </span>
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-3">
          <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${badgeClass}`}>
            {type}
          </span>
          <span className="text-sm font-medium text-royal-600 sm:hidden">{time}</span>
        </div>
        <h3 className="mt-3 font-display text-xl font-bold text-navy-900 transition group-hover:text-royal-600">
          {title}
        </h3>
        <p className="mt-1 flex items-center gap-2 text-sm text-slate-500">
          <svg className="h-4 w-4 shrink-0 text-royal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </article>
  );
}
