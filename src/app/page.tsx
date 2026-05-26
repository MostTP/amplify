import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import MediaPillars from "@/components/MediaPillars";
// import BentoGallery from "@/components/BentoGallery";
import PhotoMarquee from "@/components/PhotoMarquee";
import VisualCTA from "@/components/VisualCTA";
import EventImage from "@/components/EventImage";
import SectionHeading from "@/components/SectionHeading";
import VisualBackdrop from "@/components/VisualBackdrop";
import { homeSections, visuals } from "@/data/content";

export default function Home() {
  const { highlight } = homeSections;

  return (
    <>
      <Hero />
      <PhotoMarquee />
      <MediaPillars />
      {/* <BentoGallery /> */}

      <section className="relative overflow-hidden bg-[#02040F] py-28 grain">
        {/* ===================================== */}
        {/* LUXURY CINEMATIC BACKGROUND */}
        {/* ===================================== */}

        {/* BASE ATMOSPHERE */}
        <VisualBackdrop variant="subtle" />

        {/* GOLD + BLUE AURORA */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-10%] top-[-20%] h-[700px] w-[700px] rounded-full bg-blue-500/20 blur-[140px] animate-aurora-slow" />

          <div className="absolute right-[-10%] top-[10%] h-[650px] w-[650px] rounded-full bg-fuchsia-500/15 blur-[140px] animate-aurora-medium" />

          <div className="absolute bottom-[-25%] left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[180px]" />

          <div className="absolute right-[20%] top-[30%] h-[300px] w-[300px] rounded-full bg-amber-400/10 blur-[100px]" />
        </div>

        {/* CINEMATIC LIGHT BEAMS */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[5%] top-[-20%] h-[1200px] w-[260px] rotate-[22deg] bg-gradient-to-b from-cyan-400/20 via-blue-500/5 to-transparent blur-3xl" />

          <div className="absolute right-[8%] top-[-20%] h-[1200px] w-[260px] -rotate-[20deg] bg-gradient-to-b from-fuchsia-400/15 via-fuchsia-500/5 to-transparent blur-3xl" />
        </div>

        {/* FLOATING LUXURY SHAPES */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[6%] top-[18%] h-44 w-44 rounded-[40px] border border-white/10 bg-white/[0.02] backdrop-blur-3xl rotate-12 animate-float-slow" />

          <div className="absolute right-[10%] top-[35%] h-56 w-56 rounded-full border border-gold-400/10 animate-float-medium" />

          <div className="absolute bottom-[15%] left-[42%] h-28 w-28 rotate-45 bg-gradient-to-br from-cyan-400/10 to-transparent blur-sm animate-float-fast" />
        </div>

        {/* PREMIUM MEDIA IMAGERY */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* CAMERA */}
          <div className="absolute -left-44 top-[10%] hidden xl:block">
            <div className="relative h-[720px] w-[720px]">
              <Image
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1800&auto=format&fit=crop"
                alt="Cinema Camera"
                fill
                className="
            object-cover
            opacity-[0.08]
            blur-[4px]
            saturate-0
            brightness-[0.55]
            contrast-125
            mix-blend-screen
            rotate-[-14deg]
            scale-125
          "
              />
            </div>
          </div>

          {/* HEADPHONES */}
          <div className="absolute -right-40 top-[35%] hidden xl:block">
            <div className="relative h-[650px] w-[650px]">
              <Image
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1800&auto=format&fit=crop"
                alt="Studio Headphones"
                fill
                className="
            object-cover
            opacity-[0.07]
            blur-[4px]
            saturate-0
            brightness-[0.65]
            contrast-125
            mix-blend-screen
            rotate-[18deg]
            scale-125
          "
              />
            </div>
          </div>

          {/* STAGE LIGHTS */}
          <div className="absolute left-1/2 top-[-18%] hidden xl:block -translate-x-1/2">
            <div className="relative h-[520px] w-[1000px]">
              <Image
                src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1800&auto=format&fit=crop"
                alt="Stage Lights"
                fill
                className="
            object-cover
            opacity-[0.06]
            blur-[5px]
            saturate-0
            brightness-[0.75]
            contrast-125
            mix-blend-screen
            scale-125
          "
              />
            </div>
          </div>

          {/* COLOR WASH */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-fuchsia-500/10 mix-blend-soft-light" />
        </div>

        {/* MOVING LIGHT STREAKS */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-20%] top-[15%] h-[2px] w-[500px] rotate-[12deg] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent blur-sm animate-light-streak" />

          <div className="absolute right-[-20%] top-[60%] h-[2px] w-[600px] -rotate-[18deg] bg-gradient-to-r from-transparent via-fuchsia-400/40 to-transparent blur-sm animate-light-streak-delayed" />
        </div>

        {/* PARTICLES */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-white/20 blur-[1px] animate-particle-float"
              style={{
                width: `${Math.random() * 5 + 2}px`,
                height: `${Math.random() * 5 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
              }}
            />
          ))}
        </div>

        {/* GRID + FILM */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:90px_90px]" />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-film-strip opacity-15" />

        {/* FILM GRAIN */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

        {/* VIGNETTE */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.88)_100%)]" />

        {/* ===================================== */}
        {/* CONTENT */}
        {/* ===================================== */}

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div className="order-2 lg:order-1">
              <SectionHeading
                eyebrow="Production Brief"
                title={highlight.title}
                light
                centered={false}
              />

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                {highlight.body}
              </p>

              <ul className="mt-10 space-y-5">
                {highlight.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="group flex gap-4 text-slate-200"
                  >
                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-xs font-bold text-white shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-transform duration-500 group-hover:scale-110">
                      ✓
                    </span>

                    <span className="leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className="
            group mt-12 inline-flex items-center gap-3
            rounded-full border border-white/10
            bg-white/[0.04]
            px-6 py-3
            text-sm font-medium text-slate-200
            backdrop-blur-2xl
            transition-all duration-500
            hover:border-cyan-400/30
            hover:bg-white/[0.08]
            hover:text-white
          "
              >
                Learn more about Media Week

                <span
                  aria-hidden
                  className="transition-transform duration-500 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative order-1 lg:order-2">
              {/* MAIN IMAGE */}
              <div className="relative aspect-square overflow-hidden rounded-[36px] border border-white/15 shadow-[0_30px_100px_rgba(0,0,0,0.6)] sm:aspect-[4/5]">
                <EventImage
                  src={visuals.about}
                  alt="Media team collaboration"
                  kenBurns
                />

                {/* IMAGE OVERLAYS */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#02040F]/80 via-transparent to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-fuchsia-500/10" />
              </div>

              {/* FLOATING MINI CARD */}
              <div className="absolute -bottom-10 -right-4 hidden overflow-hidden rounded-[28px] border border-white/10 bg-black/30 shadow-[0_20px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:block sm:h-44 sm:w-64">
                <Image
                  src={visuals.gallery[4].src}
                  alt="Camera work"
                  width={256}
                  height={176}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                    Live Production
                  </p>

                  <h4 className="mt-1 text-sm font-semibold text-white">
                    Cinematic Storytelling
                  </h4>
                </div>
              </div>

              {/* CORNER ACCENTS */}
              <span className="absolute -left-3 -top-3 h-16 w-16 border-l-2 border-t-2 border-cyan-400/80" />

              <span className="absolute -bottom-3 -right-3 h-16 w-16 border-b-2 border-r-2 border-amber-400/80" />

              {/* IMAGE GLOW */}
              <div className="absolute -bottom-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[100px]" />
            </div>
          </div>
        </div>
      </section>

      <VisualCTA />
    </>
  );
}
