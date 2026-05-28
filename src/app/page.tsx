"use client";

import { useMemo } from "react";
import Hero from "@/components/Hero";
import MediaPillars from "@/components/MediaPillars";
import PhotoMarquee from "@/components/PhotoMarquee";
import VisualCTA from "@/components/VisualCTA";
import SectionHeading from "@/components/SectionHeading";
import { homeSections, visuals } from "@/data/content";
import { getRandomBackground } from "@/components/backgrounds";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { highlight } = homeSections;
  const BackgroundComponent = useMemo(() => getRandomBackground(), []);

  return (
    <main className="relative overflow-hidden bg-white text-slate-900 antialiased">
      {/* RANDOM BACKGROUND */}
      <BackgroundComponent />

      {/* HERO (keep as-is, already strong) */}
      <Hero />


      {/* MARQUEE (lightened wrapper) */}
      <div className="bg-gray-50">
        <PhotoMarquee />
      </div>

      {/* MEDIA PILLARS */}
      <div className="py-20 bg-white">
        <MediaPillars />
      </div>

      {/* ===================================== */}
      {/* HIGHLIGHT SECTION (REDESIGNED) */}
      {/* ===================================== */}

      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white via-amber-50 to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 sm:gap-12 md:gap-16 lg:grid-cols-2">

            {/* TEXT */}
            <div>
              <SectionHeading
                eyebrow="Production Brief"
                title={highlight.title}
                subtitle=""
                light={false}
              />

              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                {highlight.body}
              </p>

              <ul className="mt-10 space-y-5">
                {highlight.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-4">
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold">
                      ✓
                    </span>
                    <span className="text-slate-700">{bullet}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white text-sm font-medium hover:bg-gray-800 transition"
              >
                Learn more
                <span>→</span>
              </Link>
            </div>

            {/* IMAGE */}
            <div className="relative order-first sm:order-last overflow-hidden">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl sm:rounded-2xl shadow-lg">
                <Image
                  src={visuals.about}
                  alt="Media team collaboration"
                  fill
                  className="object-cover"
                  priority

                />
              </div>

              {/* simple accent */}
              <div className="absolute bottom-0 right-0 -mb-6 -mr-6 h-32 w-32 rounded-full bg-blue-100 blur-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gray-50">
        <VisualCTA />
      </div>
    </main>
  );
}