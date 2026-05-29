"use client";

import Link from "next/link";
import { IconPlay } from "./Icons";
import { hero, site } from "@/data/content";

export default function Hero() {
  const [headlinePrefix, headlineAccent] = hero.headline.split(" Through ");

  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-24">

      {/* GRID */}
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div className="h-full w-full bg-[linear-gradient(rgba(59,130,246,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.12)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-28">
        <div className="flex justify-center items-center gap-10">
          {/* TEXT */}
          <div className="text-center w-[calc(100%-20rem)]">

            {/* SUB TEXT */}
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-800">
              {site.fullTitle}
            </p>

            {/* HEADLINE */}
            <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl">
              <span>{headlinePrefix}</span>

              <span className="block bg-gradient-to-r from-blue-700 via-cyan-600 to-purple-700 bg-clip-text text-transparent">
                Through {headlineAccent}
              </span>
            </h1>

            {/* SUBHEADLINE */}
            <p className="w-calc(100%-6rem) mx-auto mt-6 text-lg leading-relaxed text-slate-700 sm:w-[60%]">
              {hero.subheadline}
            </p>

            {/* DATE CARD */}
            <div className="mt-8 inline-flex rounded-2xl border border-slate-300 bg-white px-6 py-4 shadow-lg">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-600">
                  Save the Date
                </p>
                <p className="mt-1 text-2xl font-bold text-slate-950">
                  {site.date}
                </p>
                <p className="text-sm text-slate-700">
                  {site.locationShort}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
              <Link
                href={hero.ctaPrimary.href}
                className="rounded-full bg-slate-950 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-slate-800"
              >
                {hero.ctaPrimary.label}
                <IconPlay className="ml-2 inline h-4 w-4 text-white" />
              </Link>

              <Link
                href={hero.ctaSecondary.href}
                className="rounded-full border border-slate-400 bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                {hero.ctaSecondary.label}
              </Link>
            </div>

            {/* STATS */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-300 bg-white p-5 text-center shadow-md"
                >
                  <p className="text-2xl font-bold text-slate-950 sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-700">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* VISUAL */}
          {/* <div className="relative">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-blue-100/60 via-transparent to-transparent" />
            <HeroCollage />
          </div> */}
        </div>
      </div>
    </section>
  );
}