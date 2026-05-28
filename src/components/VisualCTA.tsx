import Image from "next/image";
import Link from "next/link";
import { homeSections } from "@/data/content";

export default function VisualCTA() {
  const { cta } = homeSections;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-fuchsia-50">
      {/* ============================= */}
      {/* BACKGROUND LIGHT SYSTEM */}
      {/* ============================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* SOFT CENTER GLOW */}
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100 blur-[140px]" />
        <div className="absolute right-[-10%] top-[10%] h-[600px] w-[600px] rounded-full bg-fuchsia-100 blur-[160px]" />
        <div className="absolute left-[-10%] bottom-[-20%] h-[600px] w-[600px] rounded-full bg-cyan-100 blur-[160px]" />
      </div>

      {/* GRID (SUBTLE STRUCTURE) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(#00000010_1px,transparent_1px),linear-gradient(90deg,#00000010_1px,transparent_1px)] bg-[size:90px_90px]" />
      </div>

      {/* ============================= */}
      {/* MAIN VISUAL BACKDROP */}
      {/* ============================= */}

      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2200&auto=format&fit=crop"
          alt="Media Week atmosphere"
          fill
          priority
          className="object-cover opacity-[0.15] saturate-150 contrast-125"
        />

        {/* SOFT FADE FOR READABILITY */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white" />
      </div>

      {/* ============================= */}
      {/* FLOATING LIGHT ACCENTS */}
      {/* ============================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-[400px] w-[120px] rotate-[18deg] bg-gradient-to-b from-cyan-300/30 to-transparent blur-2xl" />

        <div className="absolute right-[10%] top-[10%] h-[500px] w-[120px] -rotate-[18deg] bg-gradient-to-b from-fuchsia-300/30 to-transparent blur-2xl" />
      </div>

      {/* ============================= */}
      {/* CONTENT */}
      {/* ============================= */}

      <div className="relative mx-auto flex min-h-[520px] max-w-6xl flex-col items-center justify-center px-4 py-16 sm:py-24 md:py-28 text-center">
        {/* BADGE */}
        <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-2 shadow-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
            June 12–15, 2026
          </p>
        </div>

        {/* TITLE */}
        <h2 className="mt-6 sm:mt-7 max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-black">
          {cta.title}
        </h2>

        {/* BODY */}
        <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-black/60">
          {cta.body}
        </p>

        {/* CTA BUTTON */}
        <Link
          href={cta.buttonHref}
          className="
            group mt-12 inline-flex items-center gap-3
            rounded-full bg-black
            px-10 py-4
            text-white
            shadow-[0_20px_80px_rgba(0,0,0,0.18)]
            transition-all duration-500
            hover:-translate-y-0.5 hover:scale-[1.03]
            hover:bg-black/90
          "
        >
          {cta.buttonLabel}

          <span className="transition-transform duration-500 group-hover:translate-x-1">
            →
          </span>
        </Link>

        {/* SUBTLE NOTE */}
        <p className="mt-8 text-xs text-black/40">
          Limited slots available — registration closes soon
        </p>
      </div>
    </section>
  );
}