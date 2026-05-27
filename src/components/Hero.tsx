import Link from "next/link";
import HeroCollage from "./HeroCollage";
import { IconPlay, IconRec, Waveform } from "./Icons";
import { hero, site } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-24">
      {/* LIGHT FIELD BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-10%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-100 blur-[140px]" />
        <div className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-fuchsia-100 blur-[160px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-100 blur-[160px]" />
      </div>

      {/* SUBTLE GRID */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(#00000010_1px,transparent_1px),linear-gradient(90deg,#00000010_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-28 pt-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* TEXT */}
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-2 shadow-sm lg:mx-0 mx-auto">
              <IconRec className="h-2.5 w-2.5" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
                Live
              </span>
              <Waveform className="ml-1 hidden sm:flex" />
            </div>

            <p className="text-sm font-medium uppercase tracking-[0.3em] text-black/60">
              {site.fullTitle}
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
              {hero.headline}
            </h1>

            <p className="mt-6 max-w-xl text-lg text-black/60 lg:mx-0 mx-auto">
              {hero.subheadline}
            </p>

            <div className="mt-8 inline-flex rounded-2xl border border-black/10 bg-white px-6 py-4 shadow-sm">
              <div>
                <p className="text-xs uppercase tracking-widest text-black/50">
                  Save the Date
                </p>
                <p className="mt-1 text-2xl font-bold text-black">
                  {site.date}
                </p>
                <p className="text-sm text-black/50">
                  {site.locationShort}
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row lg:justify-start justify-center">
              <Link
                href={hero.ctaPrimary.href}
                className="rounded-full bg-black px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-[1.02]"
              >
                {hero.ctaPrimary.label} <IconPlay className="ml-2 inline h-4 w-4" />
              </Link>

              <Link
                href={hero.ctaSecondary.href}
                className="rounded-full border border-black/20 px-8 py-4 font-semibold text-black transition hover:bg-black/5"
              >
                {hero.ctaSecondary.label}
              </Link>
            </div>
          </div>

          {/* VISUAL */}
          <div className="hidden sm:block">
            <HeroCollage />
          </div>
        </div>
      </div>
    </section>
  );
}