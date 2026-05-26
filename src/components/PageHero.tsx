import EventImage from "./EventImage";
import VisualBackdrop from "./VisualBackdrop";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function PageHero({
  title,
  subtitle,
  eyebrow,
  imageSrc,
  imageAlt = "Media Week",
}: PageHeroProps) {
  return (
    <section className="relative min-h-[50vh] overflow-hidden bg-navy-950 pt-32 pb-24 grain">
      {imageSrc && (
        <>
          <EventImage
            src={imageSrc}
            alt={imageAlt}
            className="absolute inset-0 min-h-[50vh]"
            overlay
            kenBurns
          />
          <div className="absolute inset-0 bg-navy-950/75" />
        </>
      )}
      {!imageSrc && (
        <>
          <div className="absolute inset-0 bg-hero-gradient" />
          <VisualBackdrop variant="subtle" />
        </>
      )}
      <div className="media-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-royal-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
