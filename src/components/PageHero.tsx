"use client";

import EventImage from "./EventImage";
import VisualBackdrop from "./VisualBackdrop";
import Link from "next/link";

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
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/40">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      {/* Right-side Image */}
      {imageSrc && (
        <div className="absolute right-0 top-0 hidden h-full w-1/2 lg:block">
          <EventImage
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover"
            overlay={false}
            kenBurns
          />

          <div className="absolute inset-0 bg-gradient-to-l from-white via-white/75 via-40% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 to-transparent" />
        </div>
      )}

      {!imageSrc && <VisualBackdrop variant="subtle" />}

      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          {/* LEFT CONTENT */}
          <div className="flex max-w-3xl flex-col items-center text-center sm:items-start sm:text-left">
            {eyebrow && (
              <p className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 shadow-lg shadow-blue-500/10 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                {eyebrow}
              </p>
            )}

            {/* Hero Title */}
            <h1 className="mt-8 font-display text-5xl font-black leading-[0.9] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              {title.split(" ").slice(0, -2).join(" ")}

              <span className="mt-2 block bg-gradient-to-r from-blue-600 via-cyan-500 to-fuchsia-500 bg-clip-text text-transparent">
                {title.split(" ").slice(-2).join(" ")}
              </span>
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-600">
                {subtitle}
              </p>
            )}

            <div className="mt-8 flex items-center gap-4">
              <div className="h-16 w-1 rounded-full bg-gradient-to-b from-blue-500 via-cyan-500 to-fuchsia-500" />

              <p className="max-w-md text-sm leading-relaxed text-slate-500">
                Equipping media ministers, creatives, storytellers, and technical teams
                with the skills, tools, and excellence needed to communicate the Gospel
                effectively.
              </p>
            </div>

            {/* CTA Container */}
            <div className="mt-12 inline-flex flex-col gap-3 rounded-3xl border border-white/60 sm:flex-row">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-fuchsia-500 px-8 py-4 text-sm font-bold text-white shadow-[0_20px_60px_rgba(59,130,246,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                Register Now
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-8 py-4 text-sm font-semibold text-slate-700 backdrop-blur transition hover:border-blue-200 hover:text-blue-600"
              >
                Learn More
              </Link>
            </div>

            {/* Event Metrics */}
            <div className="mt-12 grid w-full max-w-xl grid-cols-3 gap-4">
              <div className="rounded-2xl border border-slate-100 bg-white/80 p-5 text-center shadow-sm backdrop-blur">
                <p className="text-3xl font-black text-slate-900">5+</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                  Tracks
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white/80 p-5 text-center shadow-sm backdrop-blur">
                <p className="text-3xl font-black text-slate-900">2</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                  Days
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white/80 p-5 text-center shadow-sm backdrop-blur">
                <p className="text-3xl font-black text-slate-900">Live</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                  Experience
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FEATURE CARD */}
          <div className="relative hidden lg:block">
            {/* Decorative Glows */}
            <div className="absolute -left-10 top-12 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -right-10 bottom-12 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/70 shadow-[0_40px_120px_rgba(15,23,42,0.12)] backdrop-blur-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-fuchsia-500/10" />

              <div className="relative p-10">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                  Media Experience
                </p>

                <h3 className="mt-5 text-3xl font-black text-slate-900">
                  Creative. Technical. Spiritual.
                </h3>

                <p className="mt-5 text-base leading-relaxed text-slate-600">
                  A transformative environment where media ministers,
                  creatives, storytellers, designers, videographers,
                  photographers and technical teams grow together in excellence.
                </p>

                <div className="mt-10 grid grid-cols-3 gap-4">
                  <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                    <p className="text-2xl font-black text-slate-900">5+</p>
                    <p className="mt-1 text-xs text-slate-500">Tracks</p>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                    <p className="text-2xl font-black text-slate-900">2</p>
                    <p className="mt-1 text-xs text-slate-500">Days</p>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                    <p className="text-2xl font-black text-slate-900">Live</p>
                    <p className="mt-1 text-xs text-slate-500">Experience</p>
                  </div>
                </div>

                <div className="mt-8 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-[1px]">
                  <div className="rounded-3xl bg-white px-6 py-5">
                    <p className="text-sm font-semibold text-slate-900">
                      Excellence in Media Ministry
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Learn practical skills, collaborate with passionate
                      creatives, and discover how media can effectively amplify
                      the Gospel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END RIGHT CARD */}
        </div>
      </div>
    </section>
  );
}