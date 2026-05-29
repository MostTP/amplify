"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { homeSections } from "@/data/content";
import { FloatingLines } from "./backgrounds";

export default function VisualCTA() {
  const { cta } = homeSections;

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <FloatingLines />
      </div>
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2200&auto=format&fit=crop"
          alt="Media Week atmosphere"
          fill
          priority
          className="object-cover opacity-[0.15] saturate-150 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white" />{" "}
      </div>{" "}
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
