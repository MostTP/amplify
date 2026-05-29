"use client";

import { useMemo } from "react";
import Link from "next/link";
import HeroCollage from "./HeroCollage";
import { IconPlay, IconRec, Waveform } from "./Icons";
import { hero, site } from "@/data/content";
import FloatingLines from "./backgrounds/FloatingLines";
import getRandomBackground from "./backgrounds";

export default function Hero() {
  const [headlinePrefix, headlineAccent] = hero.headline.split(" Through ");
  const BackgroundComponent = useMemo(() => getRandomBackground(), []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-24">
      <BackgroundComponent />

      {/* SUBTLE GRID */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(#00000010_1px,transparent_1px),linear-gradient(90deg,#00000010_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
          {/* TEXT */}
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/95 px-5 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm lg:mx-0 mx-auto">
              <IconRec className="h-2.5 w-2.5" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
                Live
              </span>
              <Waveform className="ml-1 hidden sm:flex" />
            </div>

            <p className="text-sm font-medium uppercase tracking-[0.3em] text-black/60">
              {site.fullTitle}
            </p>

            <h1 className="mt-4 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
              <span>{headlinePrefix}</span>
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-fuchsia-500 bg-clip-text text-transparent">
                Through {headlineAccent}
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg text-black/60 lg:mx-0 mx-auto">
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
                <p className="text-sm text-black/50">{site.locationShort}</p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row lg:justify-start justify-center">
              <Link
                href={hero.ctaPrimary.href}
                className="rounded-full bg-black px-8 py-4 font-semibold text-white shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:scale-[1.02]"
              >
                {hero.ctaPrimary.label}{" "}
                <IconPlay className="ml-2 inline h-4 w-4" />
              </Link>

              <Link
                href={hero.ctaSecondary.href}
                className="rounded-full border border-black/20 bg-white px-8 py-4 font-semibold text-black transition hover:bg-black/5"
              >
                {hero.ctaSecondary.label}
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-5 text-center shadow-[0_20px_55px_rgba(15,23,42,0.08)]"
                >
                  <p className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* VISUAL */}
          <div className="block relative">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blue-100/40 via-transparent to-transparent" />
            <HeroCollage />
          </div>
        </div>
      </div>
    </section>
  );
}
