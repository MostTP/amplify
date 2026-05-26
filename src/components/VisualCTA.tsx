import Image from "next/image";
import Link from "next/link";
import { homeSections } from "@/data/content";

export default function VisualCTA() {
  const { cta } = homeSections;

  return (
    <section className="relative overflow-hidden py-0">
      <div className="relative min-h-[520px] overflow-hidden bg-[#02040F]">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2200&auto=format&fit=crop"
            alt="Media Week atmosphere"
            fill
            priority
            className="
              object-cover
              brightness-[0.28]
              contrast-125
              saturate-125
              scale-105
            "
          />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#02040F]/75" />

        {/* COLOR ATMOSPHERE */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-fuchsia-500/20 mix-blend-soft-light" />

        {/* CENTER GLOW */}
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        {/* LIGHT BEAMS */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[10%] top-[-20%] h-[1200px] w-[240px] rotate-[18deg] bg-gradient-to-b from-cyan-400/20 via-blue-500/5 to-transparent blur-3xl animate-pulse" />

          <div className="absolute right-[10%] top-[-20%] h-[1200px] w-[240px] -rotate-[18deg] bg-gradient-to-b from-fuchsia-400/20 via-fuchsia-500/5 to-transparent blur-3xl animate-pulse" />
        </div>

        {/* FLOATING MEDIA VISUALS */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* CAMERA */}
          <div className="absolute -left-40 top-[10%] hidden xl:block">
            <div className="relative h-[650px] w-[650px]">
              <Image
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1800&auto=format&fit=crop"
                alt="Cinema Camera"
                fill
                className="
                  object-cover
                  opacity-[0.07]
                  blur-[6px]
                  saturate-0
                  brightness-[0.6]
                  contrast-125
                  rotate-[-12deg]
                  scale-125
                  mix-blend-screen
                "
              />
            </div>
          </div>

          {/* STAGE LIGHT */}
          <div className="absolute -right-40 top-[30%] hidden xl:block">
            <div className="relative h-[650px] w-[650px]">
              <Image
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1800&auto=format&fit=crop"
                alt="Stage Lighting"
                fill
                className="
                  object-cover
                  opacity-[0.08]
                  blur-[6px]
                  saturate-0
                  brightness-[0.75]
                  contrast-125
                  rotate-[12deg]
                  scale-125
                  mix-blend-screen
                "
              />
            </div>
          </div>

          {/* HEADPHONES */}
          <div className="absolute left-1/2 top-[-18%] hidden xl:block -translate-x-1/2">
            <div className="relative h-[450px] w-[900px]">
              <Image
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1800&auto=format&fit=crop"
                alt="Studio Headphones"
                fill
                className="
                  object-cover
                  opacity-[0.05]
                  blur-[5px]
                  saturate-0
                  brightness-[0.8]
                  contrast-125
                  scale-125
                  mix-blend-screen
                "
              />
            </div>
          </div>
        </div>

        {/* GRID TEXTURE */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:90px_90px]" />
        </div>

        {/* FILM GRAIN */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

        {/* VIGNETTE */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.88)_100%)]" />

        {/* CONTENT */}
        <div className="grain relative flex min-h-[520px] flex-col items-center justify-center px-4 py-28 text-center">
          {/* DATE BADGE */}
          <div className="inline-flex items-center gap-3 rounded-full border border-gold-400/20 bg-white/[0.04] px-5 py-2 backdrop-blur-2xl">
            <span className="h-2 w-2 rounded-full bg-gold-400 animate-pulse" />

            <p className="text-xs font-bold uppercase tracking-[0.35em] text-gold-300">
              June 12, 2026
            </p>
          </div>

          {/* TITLE */}
          <h2 className="mt-7 max-w-4xl font-display text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {cta.title}
          </h2>

          {/* BODY */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            {cta.body}
          </p>

          {/* CTA BUTTON */}
          <Link
            href={cta.buttonHref}
            className="
              group relative mt-12 inline-flex items-center gap-3
              overflow-hidden rounded-full
              border border-cyan-400/20
              bg-gradient-to-r from-blue-500 via-cyan-400 to-fuchsia-500
              px-12 py-5
              text-lg font-semibold text-white
              shadow-[0_15px_60px_rgba(59,130,246,0.35)]
              transition-all duration-500
              hover:scale-105
              hover:shadow-[0_20px_80px_rgba(59,130,246,0.45)]
            "
          >
            <span className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span className="absolute inset-0 bg-white/10" />
            </span>

            <span className="relative z-10">
              {cta.buttonLabel}
            </span>

            <span
              aria-hidden
              className="relative z-10 transition-transform duration-500 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}