import Link from "next/link";
import { hero, site } from "@/data/content";
import HeroCollage from "./HeroCollage";
import VisualBackdrop from "./VisualBackdrop";
import { IconPlay, IconRec, Waveform } from "./Icons";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-hero-gradient pt-24 grain">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-film-strip opacity-60 sm:w-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-film-strip opacity-60 sm:w-10" />
      <VisualBackdrop variant="hero" />
      <div className="media-grid pointer-events-none absolute inset-0 opacity-30" />

      <div className="pointer-events-none absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-royal-500/25 blur-3xl animate-glow" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-56 w-56 rounded-full bg-gold-500/15 blur-3xl animate-pulse-slow" />

      <div className="relative mx-auto max-w-7xl px-4 pb-28 pt-12 sm:px-6 lg:px-8 lg:pb-32 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy column */}
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full glass px-5 py-2 lg:mx-0 mx-auto">
              <IconRec className="h-2.5 w-2.5" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-400">
                Live
              </span>
              <span className="h-4 w-px bg-white/20" />
              <span className="text-xs font-semibold uppercase tracking-widest text-royal-200">
                {hero.eyebrow}
              </span>
              <Waveform className="ml-1 hidden sm:flex" />
            </div>

            <p className="font-display text-sm font-medium uppercase tracking-[0.3em] text-gold-400">
              {site.fullTitle}
            </p>

            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="gradient-text">{hero.headline}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-300 sm:text-xl lg:mx-0 mx-auto">
              {hero.subheadline}
            </p>

            <div className="mt-8 inline-flex rounded-2xl glass px-8 py-4 shadow-luxury lg:mx-0 mx-auto">
              <div>
                <p className="text-xs uppercase tracking-widest text-royal-300">Save the Date</p>
                <p className="mt-1 font-display text-2xl font-bold text-white">{site.date}</p>
                <p className="mt-1 text-sm text-slate-400">{site.locationShort}</p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row lg:justify-start justify-center">
              <Link
                href={hero.ctaPrimary.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-royal-500 to-royal-600 px-8 py-4 font-semibold text-white shadow-glow transition hover:scale-[1.02] hover:brightness-110"
              >
                {hero.ctaPrimary.label}
                <IconPlay className="h-4 w-4" />
              </Link>
              <Link
                href={hero.ctaSecondary.href}
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                {hero.ctaSecondary.label}
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-4 lg:max-w-md">
              {hero.stats.map((stat) => (
                <div key={stat.label} className="glass rounded-xl px-3 py-4 sm:px-4">
                  <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[10px] text-slate-400 sm:text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual column — hidden on very small, shown sm+ */}
          <div className="hidden sm:block">
            <HeroCollage />
          </div>
        </div>

        {/* Mobile-only collage */}
        <div className="mt-12 sm:hidden">
          <HeroCollage />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-white/10 bg-navy-950/80 py-3 backdrop-blur-sm">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span
              key={i}
              className="mx-8 text-xs font-semibold uppercase tracking-[0.3em] text-royal-400/80"
            >
              Broadcast · Capture · Create · Commission · {site.eventTitle} {site.year} ·{" "}
              {site.date} ·
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
