import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import EventImage from "@/components/EventImage";
import { about, site, visuals } from "@/data/content";

export const metadata = {
  title: `About | ${site.fullTitle}`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Behind the Broadcast"
        title={about.title}
        subtitle={about.intro}
        imageSrc={visuals.about}
        imageAlt="Media ministry team"
      />

      <section className="relative overflow-hidden bg-[#02040F] py-28">
        {/* ===================================== */}
        {/* CINEMATIC BACKGROUND */}
        {/* ===================================== */}

        {/* AURORA GLOW */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-10%] top-[-15%] h-[700px] w-[700px] rounded-full bg-blue-500/15 blur-[140px]" />

          <div className="absolute right-[-10%] top-[10%] h-[650px] w-[650px] rounded-full bg-fuchsia-500/10 blur-[140px]" />

          <div className="absolute bottom-[-30%] left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
        </div>

        {/* GRID */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:90px_90px]" />
        </div>

        {/* FILM GRAIN */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

        {/* LIGHT BEAMS */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[8%] top-[-20%] h-[1200px] w-[240px] rotate-[20deg] bg-gradient-to-b from-cyan-400/15 via-blue-500/5 to-transparent blur-3xl" />

          <div className="absolute right-[8%] top-[-20%] h-[1200px] w-[240px] -rotate-[18deg] bg-gradient-to-b from-fuchsia-400/15 via-fuchsia-500/5 to-transparent blur-3xl" />
        </div>

        {/* FLOATING MEDIA VISUALS */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* CAMERA */}
          <div className="absolute -left-40 top-[15%] hidden xl:block">
            <div className="relative h-[650px] w-[650px]">
              <Image
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1800&auto=format&fit=crop"
                alt="Cinema Camera"
                fill
                className="
            object-cover
            opacity-[0.05]
            blur-[6px]
            saturate-0
            brightness-[0.55]
            contrast-125
            rotate-[-12deg]
            scale-125
            mix-blend-screen
          "
              />
            </div>
          </div>

          {/* STAGE LIGHT */}
          <div className="absolute -right-40 top-[35%] hidden xl:block">
            <div className="relative h-[650px] w-[650px]">
              <Image
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1800&auto=format&fit=crop"
                alt="Stage Lighting"
                fill
                className="
            object-cover
            opacity-[0.06]
            blur-[7px]
            saturate-0
            brightness-[0.7]
            contrast-125
            rotate-[12deg]
            scale-125
            mix-blend-screen
          "
              />
            </div>
          </div>
        </div>

        {/* VIGNETTE */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.88)_100%)]" />

        {/* ===================================== */}
        {/* CONTENT */}
        {/* ===================================== */}

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* MISSION + VISION */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* MISSION */}
            <article
              className="
          group relative overflow-hidden rounded-[32px]
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-3xl
          shadow-[0_25px_80px_rgba(0,0,0,0.55)]
          transition-all duration-700
          hover:-translate-y-2
          hover:border-cyan-400/20
        "
            >
              <div className="relative h-56 overflow-hidden">
                <EventImage
                  src={visuals.pillars.broadcast}
                  alt="Mission"
                  overlay
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#02040F] via-transparent to-transparent" />
              </div>

              <div className="p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                  Mission
                </p>

                <h2 className="mt-4 font-display text-3xl font-bold text-white">
                  {about.mission.title}
                </h2>

                <p className="mt-5 leading-relaxed text-slate-300">
                  {about.mission.text}
                </p>
              </div>

              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70" />
            </article>

            {/* VISION */}
            <article
              className="
          group relative overflow-hidden rounded-[32px]
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-3xl
          shadow-[0_25px_80px_rgba(0,0,0,0.55)]
          transition-all duration-700
          hover:-translate-y-2
          hover:border-fuchsia-400/20
        "
            >
              <div className="relative h-56 overflow-hidden">
                <EventImage
                  src={visuals.pillars.camera}
                  alt="Vision"
                  overlay
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#02040F] via-transparent to-transparent" />
              </div>

              <div className="p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
                  Vision
                </p>

                <h2 className="mt-4 font-display text-3xl font-bold text-white">
                  {about.vision.title}
                </h2>

                <p className="mt-5 leading-relaxed text-slate-300">
                  {about.vision.text}
                </p>
              </div>

              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent opacity-70" />
            </article>
          </div>

          {/* VALUES */}
          <div className="mt-28">
            <SectionHeading
              eyebrow="Core Values"
              title="What We Stand For"
              subtitle="Media ministry rooted in excellence, creativity, and spiritual impact."
              light
            />

            <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {about.values.map((value, i) => (
                <div
                  key={value.title}
                  className="
              group relative overflow-hidden rounded-[28px]
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-3xl
              shadow-[0_20px_60px_rgba(0,0,0,0.5)]
              transition-all duration-700
              hover:-translate-y-2
              hover:border-cyan-400/20
            "
                >
                  {/* HEADER */}
                  <div className="relative h-28 overflow-hidden bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-fuchsia-500/20">
                    <div className="absolute inset-0 opacity-20 media-grid" />

                    <span className="absolute bottom-4 left-5 font-display text-5xl font-black text-white/10">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7 text-center">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {value.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-slate-300">
                      {value.description}
                    </p>
                  </div>

                  {/* GLOW */}
                  <div className="absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          {/* CTA PANEL */}
          <div className="mt-28 overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl shadow-[0_25px_100px_rgba(0,0,0,0.55)]">
            <div className="grid items-center lg:grid-cols-2">
              {/* IMAGE */}
              <div className="relative h-[320px] lg:h-full">
                <Image
                  src={visuals.gallery[4].src}
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#02040F]/70 via-transparent to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="relative p-10 lg:p-14">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
                  Join the Media Crew
                </p>

                <h3 className="mt-5 font-display text-4xl font-bold text-white">
                  Serve with Creativity & Purpose
                </h3>

                <p className="mt-6 leading-relaxed text-slate-300">
                  Become part of a generation using media,
                  storytelling, and technology to amplify the Gospel
                  on campus and beyond.
                </p>

                <Link
                  href="/register"
                  className="
              group mt-10 inline-flex items-center gap-3
              rounded-full
              bg-gradient-to-r from-blue-500 via-cyan-400 to-fuchsia-500
              px-8 py-4
              font-semibold text-white
              shadow-[0_10px_40px_rgba(59,130,246,0.35)]
              transition-all duration-500
              hover:scale-105
            "
                >
                  Join the Crew

                  <span className="transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
