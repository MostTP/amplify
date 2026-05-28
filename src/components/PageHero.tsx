"use client";

import { useMemo } from "react";
import EventImage from "./EventImage";
import VisualBackdrop from "./VisualBackdrop";
import { getRandomBackground } from "./backgrounds";
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
  const BackgroundComponent = useMemo(() => getRandomBackground(), []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white">
      {/* ===================== */}
      {/* BACKGROUND SYSTEM */}
      {/* ===================== */}
      <div className="absolute inset-0">
        <BackgroundComponent />
      </div>
      \n
      {/* ===================== */}
      {/* IMAGE SIDE PANEL */}
      {/* ===================== */}
      {imageSrc && (
        <div className="absolute right-0 top-0 hidden h-full w-1/2 lg:block">
          <EventImage
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover"
            overlay={false}
            kenBurns
          />

          {/* controlled fade into content */}
          <div className="absolute inset-0 bg-gradient-to-l from-white via-white/60 to-transparent" />
        </div>
      )}
      {/* fallback visual */}
      {!imageSrc && <VisualBackdrop variant="subtle" />}
      {/* ===================== */}
      {/* CONTENT LAYOUT */}
      {/* ===================== */}
      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            {eyebrow && (
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 shadow-sm backdrop-blur-xl">
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
                {eyebrow}
              </p>
            )}

            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            {subtitle && (
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                {subtitle}
              </p>
            )}

            {/* CTA AREA */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/register"
                className="rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-500 px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
              >
                Register Now
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* RIGHT VISUAL CARD (desktop only depth layer) */}
          <div className="hidden lg:block">
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
              {/* inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-fuchsia-500/10" />

              {/* animated highlight strip */}
              <div className="absolute -left-20 top-0 h-full w-40 rotate-12 bg-white/30 blur-2xl" />

              {/* content preview block */}
              <div className="relative p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                  Media Experience
                </p>

                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                  Creative. Technical. Spiritual.
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  A structured environment where media, creativity, and
                  excellence come together to produce impactful content.
                </p>

                {/* mini stats */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-2xl font-bold text-slate-900">5+</p>
                    <p className="text-xs text-slate-500">Tracks</p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-slate-900">2 Days</p>
                    <p className="text-xs text-slate-500">Training</p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-slate-900">Live</p>
                    <p className="text-xs text-slate-500">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
