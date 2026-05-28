import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
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

      {/* MAIN SECTION */}
      <section className="relative overflow-hidden bg-[#F8FAFC] py-24 text-slate-900">
        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden bg-white">
          {/* BASE WHITE */}
          <div className="absolute inset-0 bg-white" />

          {/* PATTERN OVERLAY */}
          <div className="absolute inset-0 opacity-65">
            <div className="absolute inset-0 pattern-dots" />
            <div className="absolute inset-0 pattern-grain" />
            <div className="absolute inset-0 pattern-geo-lines opacity-75" />
          </div>

          {/* STRONGER ATMOSPHERIC COLOR BLOBS */}
          <div className="absolute left-[-10%] top-[10%] h-[600px] w-[600px] rounded-full bg-blue-500/18 blur-[120px]" />
          <div className="absolute right-[-10%] bottom-[5%] h-[600px] w-[600px] rounded-full bg-fuchsia-500/16 blur-[120px]" />
          <div className="absolute left-1/2 top-[30%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

          {/* MAIN GRID (NOW CLEARLY VISIBLE) */}
          <div className="absolute inset-0 opacity-[0.12]">
            <div className="h-full w-full bg-[linear-gradient(to_right,rgba(15,23,42,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.14)_1px,transparent_1px)] bg-[size:48px_48px]" />
          </div>

          {/* DOT MATRIX (STRONG TEXTURE LAYER) */}
          <div className="absolute inset-0 opacity-[0.10]">
            <div className="h-full w-full [background-image:radial-gradient(rgba(15,23,42,0.28)_1.2px,transparent_1.2px)] [background-size:14px_14px]" />
          </div>

          {/* SECONDARY DIAGONAL DEPTH LINES */}
          <div className="absolute inset-0 opacity-[0.06] [background-image:repeating-linear-gradient(135deg,rgba(15,23,42,0.12)_0px,rgba(15,23,42,0.12)_1px,transparent_1px,transparent_10px)]" />

          {/* SOFT CENTER LIGHT FOCUS */}
          <div className="absolute left-1/2 top-1/3 h-[750px] w-[750px] -translate-x-1/2 rounded-full bg-blue-400/8 blur-[110px]" />

          {/* EDGE FADE (keeps readability) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(248,250,252,0.92)_100%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* FEATURED */}
          <div className="relative mb-24 overflow-hidden rounded-[36px] border border-slate-200/60 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-fuchsia-500/5" />

            <div className="relative grid lg:grid-cols-2">
              {/* IMAGE */}
              <div className="relative min-h-[340px] lg:min-h-full overflow-hidden">
                <Image
                  src={visuals.gallery[3].src}
                  alt="Featured testimonial"
                  fill
                  className="object-cover brightness-95 contrast-110 saturate-110 transition duration-700 hover:scale-105"
                  sizes="50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-white/60" />

                <div className="absolute left-6 top-6 rounded-full border border-slate-200/60 bg-white/70 px-4 py-2 backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-700">
                    Featured Story
                  </p>
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative flex flex-col justify-center p-10 lg:p-16 text-slate-900">
                <div className="absolute right-8 top-6 text-[120px] font-black leading-none text-slate-200">
                  ”
                </div>

                <div className="flex gap-1 text-2xl text-amber-500">
                  {"★".repeat(featured.rating)}
                </div>

                <blockquote className="mt-8 font-display text-2xl font-medium leading-relaxed lg:text-4xl">
                  “{featured.quote}”
                </blockquote>

                <footer className="mt-10 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-fuchsia-500 text-lg font-bold text-white shadow-lg">
                    {featured.name.charAt(0)}
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">
                      {featured.name}
                    </p>
                    <p className="text-sm text-slate-600">
                      {featured.role}
                    </p>
                  </div>
                </footer>
              </div>
            </div>
          </div>

          {/* GRID */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.items.slice(1).map((item, index) => (
              <div
                key={item.name}
                className="
                  group relative overflow-hidden rounded-[30px]
                  border border-slate-200/60 bg-white/70
                  backdrop-blur-xl shadow-[0_15px_50px_rgba(15,23,42,0.06)]
                  transition-all duration-700
                  hover:-translate-y-2 hover:border-blue-300/50
                  hover:shadow-[0_25px_80px_rgba(59,130,246,0.10)]
                "
              >
                {/* subtle glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-fuchsia-500/5" />

                {/* index */}
                <div className="absolute right-5 top-3 text-7xl font-black text-slate-200">
                  {String(index + 2).padStart(2, "0")}
                </div>

                <div className="relative p-8 text-slate-900">
                  <div className="flex gap-1 text-amber-500 text-lg">
                    {"★".repeat(item.rating)}
                  </div>

                  <p className="mt-6 leading-relaxed text-slate-600">
                    “{item.quote}”
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-fuchsia-500 text-sm font-bold text-white">
                      {item.name.charAt(0)}
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900">
                        {item.name}
                      </p>
                      <p className="text-sm text-slate-500">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="relative mt-24 overflow-hidden rounded-[40px] border border-slate-200/60 bg-white/80 px-8 py-16 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <div className="absolute inset-0">
              <Image
                src={visuals.gallery[1].src}
                alt="Stage lights"
                fill
                className="object-cover opacity-20"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/95" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                Join The Experience
              </p>

              <h3 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-5xl">
                Ready to Write Your Story?
              </h3>

              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
                Step into the production room, sharpen your media skills,
                collaborate with creatives, and become part of a generation
                amplifying the Gospel through excellence and innovation.
              </p>

              <Link
                href="/register"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-fuchsia-500 px-10 py-4 text-white shadow-[0_10px_40px_rgba(59,130,246,0.25)] transition hover:scale-105"
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