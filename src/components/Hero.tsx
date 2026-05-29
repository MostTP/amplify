"use client";

import Link from "next/link";
import { IconPlay } from "./Icons";
import { hero, site } from "@/data/content";

export default function Hero() {
  const [headlinePrefix, headlineAccent] = hero.headline.split(" Through ");

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50/40 pt-28 sm:pt-32">
      
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute left-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* GRID OVERLAY */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(rgba(59,130,246,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.12)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-28">
        
        {/* CENTER WRAPPER */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

          {/* SUB TEXT */}
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-700 sm:text-sm">
            {site.fullTitle}
          </p>

          {/* HEADLINE */}
          <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">{headlinePrefix}</span>

            <span className="mt-2 block bg-gradient-to-r from-blue-700 via-cyan-600 to-fuchsia-600 bg-clip-text text-transparent">
              Through {headlineAccent}
            </span>
          </h1>

          {/* SUBHEAD */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
            {hero.subheadline}
          </p>

          {/* DATE CARD */}
          <div className="mt-8 inline-flex flex-col items-center rounded-2xl border border-slate-200 bg-white/80 px-6 py-4 shadow-lg backdrop-blur sm:flex-row sm:gap-6">
            <div className="text-center sm:text-left">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Save the Date
              </p>
              <p className="mt-1 text-xl font-bold text-slate-950 sm:text-2xl">
                {site.date}
              </p>
              <p className="text-sm text-slate-600">
                {site.locationShort}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex w-full flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href={hero.ctaPrimary.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.03] hover:bg-slate-800"
            >
              {hero.ctaPrimary.label}
              <IconPlay className="h-4 w-4" />
            </Link>

            <Link
              href={hero.ctaSecondary.href}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-8 py-4 text-sm font-semibold text-slate-900 backdrop-blur transition hover:bg-slate-50"
            >
              {hero.ctaSecondary.label}
            </Link>
          </div>

          {/* STATS */}
          <div className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white/80 p-6 text-center shadow-md backdrop-blur transition hover:-translate-y-1"
              >
                <p className="text-2xl font-bold text-slate-950 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}