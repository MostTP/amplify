import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { schedule, site, visuals } from "@/data/content";

export const metadata = {
  title: `Schedule | ${site.fullTitle}`,
};

export default function SchedulePage() {
  return (
    <>
      <PageHero
        eyebrow="Program Line-Up"
        title={schedule.title}
        subtitle={schedule.subtitle}
        imageSrc={visuals.schedule}
        imageAlt="Event stage lighting"
      />

      <section className="relative overflow-hidden bg-[#02040F] py-28">
        {/* ========================================= */}
        {/* CINEMATIC BACKGROUND */}
        {/* ========================================= */}

        {/* AURORA GLOW */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-10%] top-[-10%] h-[700px] w-[700px] rounded-full bg-blue-500/15 blur-[150px]" />

          <div className="absolute right-[-10%] top-[20%] h-[650px] w-[650px] rounded-full bg-fuchsia-500/10 blur-[150px]" />

          <div className="absolute bottom-[-30%] left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
        </div>

        {/* GRID */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:90px_90px]" />
        </div>

        {/* FILM GRAIN */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

        {/* LIGHT BEAMS */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[10%] top-[-20%] h-[1200px] w-[240px] rotate-[18deg] bg-gradient-to-b from-cyan-400/20 via-blue-500/5 to-transparent blur-3xl" />

          <div className="absolute right-[10%] top-[-20%] h-[1200px] w-[240px] -rotate-[18deg] bg-gradient-to-b from-fuchsia-400/20 via-fuchsia-500/5 to-transparent blur-3xl" />
        </div>

        {/* FLOATING MEDIA VISUALS */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* CAMERA */}
          <div className="absolute -left-44 top-[15%] hidden xl:block">
            <div className="relative h-[650px] w-[650px]">
              <Image
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1800&auto=format&fit=crop"
                alt="Cinema camera"
                fill
                className="
            object-cover
            opacity-[0.05]
            blur-[7px]
            saturate-0
            brightness-[0.6]
            contrast-125
            rotate-[-14deg]
            scale-125
            mix-blend-screen
          "
              />
            </div>
          </div>

          {/* STAGE LIGHT */}
          <div className="absolute -right-44 top-[35%] hidden xl:block">
            <div className="relative h-[650px] w-[650px]">
              <Image
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1800&auto=format&fit=crop"
                alt="Stage lighting"
                fill
                className="
            object-cover
            opacity-[0.06]
            blur-[7px]
            saturate-0
            brightness-[0.7]
            contrast-125
            rotate-[12deg]
            scale-125
            mix-blend-screen
          "
              />
            </div>
          </div>
        </div>

        {/* VIGNETTE */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.88)_100%)]" />

        {/* ========================================= */}
        {/* CONTENT */}
        {/* ========================================= */}

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* HERO EVENT CARD */}
          <div
            className="
        overflow-hidden rounded-[36px]
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-3xl
        shadow-[0_25px_100px_rgba(0,0,0,0.55)]
      "
          >
            <div className="relative grid md:grid-cols-2">
              {/* IMAGE */}
              <div className="relative min-h-[280px] overflow-hidden md:min-h-[380px]">
                <Image
                  src={visuals.gallery[0].src}
                  alt="Workshop session"
                  fill
                  className="
              object-cover
              brightness-[0.7]
              contrast-125
              saturate-125
              transition-transform duration-1000
              hover:scale-105
            "
                  sizes="50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#02040F]" />
              </div>

              {/* CONTENT */}
              <div className="relative flex flex-col justify-center p-10 lg:p-14">
                {/* LIVE BADGE */}
                <div className="inline-flex w-fit items-center gap-3 rounded-full border border-cyan-400/20 bg-white/[0.04] px-5 py-2 backdrop-blur-2xl">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                    Media Week 2026
                  </span>
                </div>

                {/* DATE */}
                <p className="mt-7 text-sm uppercase tracking-[0.35em] text-fuchsia-300">
                  Event Date
                </p>

                <h2 className="mt-4 font-display text-4xl font-black leading-tight text-white lg:text-5xl">
                  {site.date}
                </h2>

                <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-300">
                  {site.location}
                </p>

                {/* CTA */}
                <Link
                  href="/register"
                  className="
              group mt-10 inline-flex w-fit items-center gap-3
              rounded-full
              bg-gradient-to-r from-blue-500 via-cyan-400 to-fuchsia-500
              px-8 py-4
              font-semibold text-white
              shadow-[0_12px_50px_rgba(59,130,246,0.35)]
              transition-all duration-500
              hover:scale-105
            "
                >
                  Reserve Your Seat

                  <span className="transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                {/* FLOATING GLOW */}
                <div className="absolute -bottom-20 right-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-[100px]" />
              </div>
            </div>
          </div>

          {/* ========================================= */}
          {/* TIMELINE */}
          {/* ========================================= */}

          <div className="relative mt-24">
            {/* LINE */}
            <div className="absolute left-[26px] top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent md:block" />

            <div className="space-y-8">
              {schedule.tracks.map((item) => (
                <div
                  key={`${item.time}-${item.title}`}
                  className="group relative"
                >
                  {/* TIMELINE DOT */}
                  <div className="absolute left-0 top-10 hidden md:flex">
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/20 bg-[#071120] backdrop-blur-2xl">
                      <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]" />

                      <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-ping" />
                    </div>
                  </div>

                  {/* CARD */}
                  <div
                    className="
                md:ml-24 overflow-hidden rounded-[30px]
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-3xl
                shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                transition-all duration-700
                hover:-translate-y-2
                hover:border-cyan-400/20
              "
                  >
                    <div className="grid gap-8 p-8 lg:grid-cols-[180px_1fr] lg:p-10">
                      {/* TIME */}
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-fuchsia-300">
                          Time
                        </p>

                        <h3 className="mt-3 font-display text-3xl font-black text-white">
                          {item.time}
                        </h3>

                        <div className="mt-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                          {item.type}
                        </div>
                      </div>

                      {/* DETAILS */}
                      <div>
                        <h2 className="font-display text-2xl font-bold text-white lg:text-3xl">
                          {item.title}
                        </h2>

                        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">
                          {item.location}
                        </p>

                        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300">
                          {item.description}
                        </p>

                        {/* UNDERLINE */}
                        <div className="mt-8 h-[3px] w-20 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-fuchsia-500 transition-all duration-700 group-hover:w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FOOTNOTE */}
          <p className="mt-16 text-center text-sm text-slate-500">
            Schedule subject to change.
            Update timings in{" "}
            <code className="rounded bg-white/10 px-2 py-1 text-xs text-slate-300">
              src/data/content.ts
            </code>
          </p>
        </div>
      </section>
    </>
  );
}
