import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
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

      <section className="relative overflow-hidden bg-white py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ================= MISSION / VISION ================= */}

          <div className="grid gap-10 lg:grid-cols-2">
            {/* MISSION */}
            <article
              className="
  group relative overflow-hidden rounded-[34px]
  border border-white/10
  bg-white/[0.03]
  backdrop-blur-3xl
  shadow-[0_25px_80px_rgba(0,0,0,0.55)]
  transition-all duration-700
  hover:-translate-y-2
  hover:border-cyan-400/30
"
            >
              {/* IMAGE HEADER */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={visuals.pillars.broadcast}
                  alt="Mission"
                  fill
                  className="
        object-cover
        brightness-[0.8]
        contrast-125
        saturate-125
        transition-transform duration-700
        group-hover:scale-105
      "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#02040F] via-black/20 to-transparent" />

                {/* LABEL */}
                <div className="absolute left-5 top-5 rounded-full bg-black/40 px-4 py-2 backdrop-blur-xl border border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                    Mission
                  </p>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-10">
                <h2 className="font-display text-3xl font-bold text-black-100/50">
                  {about.mission.title}
                </h2>

                <p className="mt-5 leading-relaxed text-slate-500">
                  {about.mission.text}
                </p>
              </div>
            </article>

            {/* VISION */}
            <article
              className="
  group relative overflow-hidden rounded-[34px]
  border border-white/10
  bg-white/[0.03]
  backdrop-blur-3xl
  shadow-[0_25px_80px_rgba(0,0,0,0.55)]
  transition-all duration-700
  hover:-translate-y-2
  hover:border-fuchsia-400/30
"
            >
              {/* IMAGE HEADER */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={visuals.pillars.camera}
                  alt="Vision"
                  fill
                  className="
        object-cover
        brightness-[0.8]
        contrast-125
        saturate-125
        transition-transform duration-700
        group-hover:scale-105
      "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#02040F] via-black/20 to-transparent" />

                {/* LABEL */}
                <div className="absolute left-5 top-5 rounded-full bg-black/40 px-4 py-2 backdrop-blur-xl border border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
                    Vision
                  </p>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-10">
                <h2 className="font-display text-3xl font-bold text-black-100/50">
                  {about.vision.title}
                </h2>

                <p className="mt-5 leading-relaxed text-slate-500">
                  {about.vision.text}
                </p>
              </div>
            </article>
          </div>

          {/* ================= VALUES ================= */}

          <div className="mt-28">
            <SectionHeading
              eyebrow="Core Values"
              title="What We Stand For"
              subtitle="Media ministry rooted in excellence, creativity, and spiritual impact."
              light={false}
            />

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {about.values.map((value, i) => (
                <div
                  key={value.title}
                  className="group rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                      0{i + 1}
                    </span>

                    <div className="h-2 w-2 rounded-full bg-cyan-500 opacity-60 group-hover:opacity-100" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {value.description}
                  </p>

                  <div className="mt-6 h-[3px] w-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>

          {/* ================= CTA ================= */}

          <div className="mt-28 overflow-hidden rounded-[36px] border border-slate-200 bg-gradient-to-br from-cyan-50 via-white to-blue-50 shadow-sm">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-[320px] lg:h-full">
                <Image
                  src={visuals.gallery[4].src}
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-10 lg:p-14">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-600">
                  Join the Media Crew
                </p>

                <h3 className="mt-5 text-4xl font-black text-slate-900">
                  Serve with Creativity & Purpose
                </h3>

                <p className="mt-6 leading-relaxed text-slate-600">
                  Become part of a generation using media, storytelling, and
                  technology to amplify the Gospel on campus and beyond.
                </p>

                <Link
                  href="/register"
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-cyan-600"
                >
                  Join the Crew →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
