import Hero from "@/components/Hero";
import MediaPillars from "@/components/MediaPillars";
import PhotoMarquee from "@/components/PhotoMarquee";
import VisualCTA from "@/components/VisualCTA";
import SectionHeading from "@/components/SectionHeading";
import { homeSections, visuals } from "@/data/content";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { highlight } = homeSections;

  return (
    <main className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(251,207,138,0.22),_transparent_24%),radial-gradient(circle_at_top_right,_rgba(236,72,153,0.08),_transparent_18%),linear-gradient(180deg,_#fffdf8_0%,_#f7efe4_45%,_#f2e7dd_100%)] text-slate-900 antialiased">
      {/* PATTERN OVERLAY LAYER */}
      <div className="pointer-events-none absolute inset-0 opacity-65">
        <div className="absolute inset-0 pattern-dots" />
        <div className="absolute inset-0 pattern-grain" />
        <div className="absolute inset-0 pattern-geo-lines opacity-70" />
      </div>

      {/* DECORATIVE BLURS */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-60 bg-gradient-to-b from-amber-200/40 to-transparent" />
      <div className="pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-28 h-80 w-80 rounded-full bg-fuchsia-100/30 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-56 w-56 -translate-x-1/2 rounded-full bg-white/60 blur-2xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-slate-100/95 to-transparent" />

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