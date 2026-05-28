import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { schedule, site, visuals } from "@/data/content";
import { AnimatedGradientBg, MeshGradientBg, NoisePatternBg } from "@/components/backgrounds";

export const metadata = {
  title: `Schedule | ${site.fullTitle}`,
};

export default function SchedulePage() {
const backgrounds = [
  AnimatedGradientBg,
  MeshGradientBg,
  NoisePatternBg,
];
const BackgroundComponent =
  backgrounds[Math.floor(Math.random() * backgrounds.length)];

  return (
    <>
      <PageHero
        eyebrow="Program Line-Up"
        title={schedule.title}
        subtitle={schedule.subtitle}
        imageSrc={visuals.schedule}
        imageAlt="Event stage lighting"
      />

      <section className="relative overflow-hidden bg-white py-24">
        {/* ===================================== */}
        {/* BACKGROUND */}
        {/* ===================================== */}
        <BackgroundComponent />

        {/* ===================================== */}
        {/* CONTENT */}
        {/* ===================================== */}

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* HERO */}
          <div className="mx-auto max-w-5xl text-center">
            {/* BADGE */}
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 shadow-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">
                Media Week 2026
              </span>
            </div>

            {/* TITLE */}
            <h1 className="mt-8 font-display text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Experience The
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Full Schedule
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600">
              Workshops, worship experiences, live production sessions,
              media training, and creative collaboration designed to equip
              the next generation of digital ministers.
            </p>

            {/* STATS */}
            <div className="mt-14 grid gap-5 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  Event Date
                </p>

                <p className="mt-4 text-3xl font-black text-slate-900">
                  {site.date}
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  Venue
                </p>

                <p className="mt-4 text-2xl font-black text-slate-900">
                  {site.location}
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  Access
                </p>

                <p className="mt-4 text-3xl font-black text-cyan-600">
                  Open
                </p>
              </div>
            </div>
          </div>

          {/* ===================================== */}
          {/* FEATURE IMAGE */}
          {/* ===================================== */}

          <div className="relative mx-auto mt-20 max-w-6xl overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
            <div className="relative h-[300px] w-full sm:h-[420px]">
              <Image
                src={visuals.gallery[0].src}
                alt="Workshop session"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute bottom-6 left-6 rounded-3xl border border-white/40 bg-white/80 p-6 shadow-xl backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">
                Featured Session
              </p>

              <h2 className="mt-3 text-2xl font-black text-slate-900">
                Creative Media Training
              </h2>

              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
                Learn storytelling, live production, design,
                photography, digital ministry, and media excellence.
              </p>
            </div>
          </div>

          {/* ===================================== */}
          {/* TIMELINE */}
          {/* ===================================== */}

          <div className="relative mx-auto mt-28 max-w-5xl">
            {/* LINE */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300 via-blue-400 to-transparent md:block" />

            <div className="space-y-8">
              {schedule.tracks.map((item) => (
                <div
                  key={`${item.time}-${item.title}`}
                  className="group relative pl-0 md:pl-20"
                >
                  {/* DOT */}
                  <div className="absolute left-0 top-6 hidden md:flex">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-200 bg-white shadow-md">
                      <div className="h-3 w-3 rounded-full bg-cyan-500" />
                    </div>
                  </div>

                  {/* CARD */}
                  <div
                    className="
                      rounded-[32px]
                      border border-slate-200
                      bg-white
                      p-8
                      shadow-sm
                      transition-all duration-500
                      hover:-translate-y-1
                      hover:shadow-[0_20px_60px_rgba(14,165,233,0.12)]
                    "
                  >
                    <div className="grid gap-8 lg:grid-cols-[180px_1fr]">
                      {/* TIME */}
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-600">
                          Time
                        </p>

                        <h3 className="mt-3 text-3xl font-black text-slate-900">
                          {item.time}
                        </h3>

                        <div className="mt-5 inline-flex rounded-full bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700">
                          {item.type}
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div>
                        <h2 className="text-3xl font-black tracking-tight text-slate-900">
                          {item.title}
                        </h2>

                        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">
                          {item.location}
                        </p>

                        <p className="mt-6 leading-relaxed text-slate-600">
                          {item.description}
                        </p>

                        {/* UNDERLINE */}
                        <div className="mt-8 h-[3px] w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===================================== */}
          {/* CTA */}
          {/* ===================================== */}

          <div className="relative mt-28 overflow-hidden rounded-[40px] border border-slate-200 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-14 text-center shadow-[0_20px_80px_rgba(14,165,233,0.08)]">
            {/* GRID */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
              <div className="h-full w-full bg-[linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-700">
                Join The Experience
              </p>

              <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                Reserve Your Seat For Media Week 2026
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
                Be part of a generation using creativity, media,
                and storytelling to amplify impact and ministry.
              </p>

              <Link
                href="/register"
                className="
                  mt-10 inline-flex items-center gap-3
                  rounded-full
                  bg-slate-900
                  px-8 py-4
                  font-semibold
                  text-white
                  transition-all duration-300
                  hover:scale-105
                  hover:bg-cyan-600
                "
              >
                Reserve Your Seat
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* FOOTNOTE */}
          <p className="mt-12 text-center text-sm text-slate-400">
            Schedule subject to change.
          </p>
        </div>
      </section>
    </>
  );
}