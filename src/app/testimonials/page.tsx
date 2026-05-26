import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials, site, visuals } from "@/data/content";

export const metadata = {
  title: `Testimonials | ${site.fullTitle}`,
};

export default function TestimonialsPage() {
  const featured = testimonials.items[0];

  return (
    <>
      <PageHero
        eyebrow="From the Control Room"
        title={testimonials.title}
        subtitle={testimonials.subtitle}
        imageSrc={visuals.testimonials}
        imageAlt="Live production"
      />

      <section className="relative overflow-hidden bg-[#020617] py-24">
        {/* BACKGROUND */}
        <div className="absolute inset-0">
          {/* Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_30%)]" />

          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.04]">
            <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:80px_80px]" />
          </div>

          {/* Floating Glow */}
          <div className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[140px]" />
          <div className="absolute right-[-10%] bottom-[0%] h-[500px] w-[500px] rounded-full bg-fuchsia-500/20 blur-[140px]" />

          {/* Luxury Blurs */}
          <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/10 via-fuchsia-500/10 to-cyan-500/10 blur-[180px]" />

          {/* Noise */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

          {/* Film strip */}
          <div className="pointer-events-none absolute inset-y-0 left-6 hidden w-10 border-x border-white/5 lg:block" />
          <div className="pointer-events-none absolute inset-y-0 right-6 hidden w-10 border-x border-white/5 lg:block" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* FEATURED */}
          <div className="relative mb-24 overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-3xl">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-fuchsia-500/10" />

            {/* Animated Light */}
            <div className="absolute -left-20 top-0 h-full w-40 rotate-12 bg-white/5 blur-3xl" />

            <div className="relative grid lg:grid-cols-2">
              {/* IMAGE */}
              <div className="relative min-h-[340px] lg:min-h-full overflow-hidden">
                <Image
                  src={visuals.gallery[3].src}
                  alt="Featured testimonial"
                  fill
                  className="object-cover brightness-[0.7] contrast-125 saturate-125 transition duration-700 hover:scale-105"
                  sizes="50vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-[#020617]" />

                {/* Badge */}
                <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
                    Featured Story
                  </p>
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative flex flex-col justify-center p-10 lg:p-16">
                {/* Quote icon */}
                <div className="absolute right-8 top-6 text-[120px] font-black leading-none text-white/[0.04]">
                  ”
                </div>

                {/* Stars */}
                <div className="flex gap-1 text-2xl text-gold-400">
                  {"★".repeat(featured.rating)}
                </div>

                {/* Quote */}
                <blockquote className="mt-8 font-display text-2xl font-medium leading-relaxed text-white lg:text-4xl">
                  &ldquo;{featured.quote}&rdquo;
                </blockquote>

                {/* Footer */}
                <footer className="mt-10 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-royal-500 to-fuchsia-500 text-lg font-bold text-white shadow-lg">
                    {featured.name.charAt(0)}
                  </div>

                  <div>
                    <p className="font-semibold text-white">
                      {featured.name}
                    </p>
                    <p className="text-sm text-slate-400">
                      {featured.role}
                    </p>
                  </div>
                </footer>
              </div>
            </div>
          </div>

          {/* TESTIMONIAL GRID */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.items.slice(1).map((item, index) => (
              <div
                key={item.name}
                className={`
                  group relative overflow-hidden rounded-[30px]
                  border border-white/10
                  bg-white/[0.04]
                  backdrop-blur-2xl
                  shadow-[0_20px_70px_rgba(0,0,0,0.35)]
                  transition-all duration-700
                  hover:-translate-y-3
                  hover:border-blue-400/30
                  hover:shadow-[0_35px_120px_rgba(59,130,246,0.16)]
                `}
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-fuchsia-500/10 opacity-70" />

                {/* Number */}
                <div className="absolute right-5 top-3 text-7xl font-black text-white/[0.03]">
                  {String(index + 2).padStart(2, "0")}
                </div>

                {/* Card top light */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70" />

                <div className="relative p-8">
                  {/* Stars */}
                  <div className="flex gap-1 text-lg text-gold-400">
                    {"★".repeat(item.rating)}
                  </div>

                  {/* Quote */}
                  <p className="mt-6 leading-relaxed text-slate-300">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  {/* Footer */}
                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-royal-500 to-fuchsia-500 text-sm font-bold text-white">
                      {item.name.charAt(0)}
                    </div>

                    <div>
                      <p className="font-semibold text-white">
                        {item.name}
                      </p>
                      <p className="text-sm text-slate-400">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="relative mt-24 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] px-8 py-16 text-center shadow-[0_30px_120px_rgba(0,0,0,0.4)] backdrop-blur-3xl">
            {/* Background image */}
            <div className="absolute inset-0">
              <Image
                src={visuals.gallery[1].src}
                alt="Stage lights"
                fill
                className="object-cover opacity-20"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/90 via-[#020617]/80 to-[#020617]/95" />

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">
                Join The Experience
              </p>

              <h3 className="mt-4 font-display text-3xl font-bold text-white sm:text-5xl">
                Ready to Write Your Story?
              </h3>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                Step into the production room, sharpen your media skills,
                collaborate with creatives, and become part of a generation
                amplifying the Gospel through excellence and innovation.
              </p>

              <Link
                href="/register"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-royal-500 via-blue-500 to-fuchsia-500 px-10 py-4 text-base font-semibold text-white shadow-[0_10px_50px_rgba(59,130,246,0.45)] transition duration-500 hover:scale-105 hover:brightness-110"
              >
                Register for {site.year}
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}