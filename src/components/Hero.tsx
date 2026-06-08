"use client";

import Link from "next/link";
import { IconPlay } from "./Icons";
import { hero, site } from "@/data/content";

export default function Hero() {
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
          <p className="text-[7px] font-semibold uppercase tracking-[0.35em] text-slate-700">
            {site.fullTitle}
          </p>

          {/* HEADLINE */}
          <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">{site.theme}</span>

            <span className="text-2xl sm:text-4xl mt-2 block bg-gradient-to-r from-blue-700 via-cyan-600 to-fuchsia-600 bg-clip-text text-transparent">
              {hero.headline}
            </span>
          </h1>

          {/* SUBHEAD */}
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-lg">
            {site.scripture}
          </p>

<div className="mt-4 grid gap-4 lg:grid-cols-2">
  {hero.schedule.map((item, index) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Accent */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600" />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col items-start">
          <div className="rounded-full bg-cyan-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-700">
            {item.day}
          </div>

          <h4 className="mt-4 text-xl font-black text-slate-950">
            {item.title}
          </h4>

          <p className="text-start mt-2 text-sm leading-6 text-slate-600">
            {item.note}
          </p>
        </div>

        {item.time && (
          <div className="shrink-0">
            <div className="rounded-2xl bg-slate-950 px-4 py-3 text-center text-white">
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-300">
                Time
              </p>
              <p className="mt-1 text-sm font-bold">
                {item.time}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  ))}
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