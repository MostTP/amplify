import Image from "next/image";
import { homeSections, visuals } from "@/data/content";
import SectionHeading from "./SectionHeading";
import { MediaIcon } from "./Icons";

const pillarImages: Record<string, string> = {
  broadcast: visuals.pillars.broadcast,
  camera: visuals.pillars.camera,
  design: visuals.pillars.design,
  digital: visuals.pillars.digital,
  visuals: visuals.pillars.visuals,
};

type MediaIconName =
  | "broadcast"
  | "camera"
  | "design"
  | "digital"
  | "visuals";

const edgeVisuals = {
  camera:
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop",

  headphones:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop",

  light:
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop",

  speaker:
    "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1600&auto=format&fit=crop",
};

export default function MediaPillars() {
  const { mediaPillars } = homeSections;

  return (
    <section className="relative overflow-hidden bg-[#02040F] py-32">
      {/* ========================================= */}
      {/* CINEMATIC AMBIENT LIGHTING */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-15%] top-[-10%] h-[900px] w-[900px] rounded-full bg-blue-500/20 blur-[180px] animate-aurora-slow" />

        <div className="absolute right-[-10%] top-[-5%] h-[800px] w-[800px] rounded-full bg-fuchsia-500/20 blur-[180px] animate-aurora-medium" />

        <div className="absolute left-1/2 top-[30%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[160px] animate-pulse" />

        <div className="absolute bottom-[-20%] left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[200px] animate-aurora-slow" />
      </div>

      {/* ========================================= */}
      {/* DEPTH + FOG */}
      {/* ========================================= */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#02040F] via-transparent to-[#02040F]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(2,4,15,0.96)_100%)]" />

      {/* ========================================= */}
      {/* GRID */}
      {/* ========================================= */}

      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:90px_90px]" />
      </div>

      {/* ========================================= */}
      {/* LIGHT BEAMS */}
      {/* ========================================= */}

      <div className="absolute left-[-10%] top-[-20%] h-[1200px] w-[300px] rotate-[25deg] bg-gradient-to-b from-cyan-500/20 via-blue-500/5 to-transparent blur-3xl" />

      <div className="absolute right-[-10%] top-[-20%] h-[1200px] w-[300px] -rotate-[25deg] bg-gradient-to-b from-fuchsia-500/20 via-fuchsia-500/5 to-transparent blur-3xl" />

      {/* ========================================= */}
      {/* MOVING LIGHT STREAKS */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-20%] top-[10%] h-[2px] w-[500px] rotate-[12deg] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent blur-sm animate-light-streak" />

        <div className="absolute right-[-20%] top-[50%] h-[2px] w-[600px] -rotate-[18deg] bg-gradient-to-r from-transparent via-fuchsia-400/50 to-transparent blur-sm animate-light-streak-delayed" />

        <div className="absolute left-[20%] bottom-[15%] h-[2px] w-[400px] rotate-[8deg] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent blur-sm animate-light-streak-slow" />
      </div>

      {/* ========================================= */}
      {/* FLOATING PARTICLES */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white/20 blur-[1px] animate-particle-float"
            style={{
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      {/* ========================================= */}
      {/* BLENDED CINEMATIC EDGE IMAGES */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* CAMERA */}
        <div className="absolute -left-40 top-[8%] hidden xl:block">
          <div className="relative h-[720px] w-[720px]">
            <Image
              src={edgeVisuals.camera}
              alt="Camera"
              fill
              className="
                object-cover
                opacity-[0.9]
                blur-[3px]
                saturate-0
                brightness-[0.55]
                contrast-125
                mix-blend-screen
                rotate-[-14deg]
                scale-110
              "
            />
          </div>
        </div>

        {/* HEADPHONES */}
        <div className="absolute -right-40 top-[35%] hidden xl:block">
          <div className="relative h-[680px] w-[680px]">
            <Image
              src={edgeVisuals.headphones}
              alt="Headphones"
              fill
              className="
                object-cover
                opacity-[0.07]
                blur-[4px]
                saturate-0
                brightness-[0.6]
                contrast-125
                mix-blend-screen
                rotate-[18deg]
                scale-125
              "
            />
          </div>
        </div>

        {/* STUDIO LIGHT */}
        <div className="absolute left-1/2 top-[-18%] hidden xl:block -translate-x-1/2">
          <div className="relative h-[560px] w-[1000px]">
            <Image
              src={edgeVisuals.light}
              alt="Studio Light"
              fill
              className="
                object-cover
                opacity-[0.3]
                blur-[5px]
                saturate-0
                brightness-[0.7]
                contrast-125
                mix-blend-screen
                scale-125
              "
            />
          </div>
        </div>

        {/* SPEAKER */}
        <div className="absolute bottom-[-20%] left-[8%] hidden xl:block">
          <div className="relative h-[500px] w-[500px]">
            <Image
              src={edgeVisuals.speaker}
              alt="Speaker"
              fill
              className="
                object-cover
                opacity-[0.9]
                blur-[4px]
                saturate-0
                brightness-[0.55]
                contrast-125
                mix-blend-screen
                rotate-[12deg]
                scale-125
              "
            />
          </div>
        </div>

        {/* COLOR WASH */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-fuchsia-500/10 mix-blend-soft-light" />

        {/* FILM FADE */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#02040F]/90 via-transparent to-[#02040F]" />
      </div>

      {/* ========================================= */}
      {/* ATMOSPHERIC BLUR */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-[140px]" />
      </div>

      {/* ========================================= */}
      {/* RADAR RINGS */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="absolute h-[600px] w-[600px] rounded-full border border-cyan-400/10 animate-radar" />

        <div className="absolute h-[850px] w-[850px] rounded-full border border-fuchsia-400/10 animate-radar-delayed" />

        <div className="absolute h-[1100px] w-[1100px] rounded-full border border-blue-400/10 animate-radar-slow" />
      </div>

      {/* ========================================= */}
      {/* SCANLINES */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_3px]" />

      {/* ========================================= */}
      {/* NOISE */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      {/* ========================================= */}
      {/* VIGNETTE */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.88)_100%)]" />

      {/* ========================================= */}
      {/* CONTENT */}
      {/* ========================================= */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Studio Tracks"
          title={mediaPillars.title}
          subtitle={mediaPillars.subtitle}
          light
        />

        {/* ========================================= */}
        {/* CINEMATIC EDITORIAL GRID */}
        {/* ========================================= */}

        <div className="mt-24 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-12 auto-rows-[240px]">
          {mediaPillars.items.map((item, index) => {
            let layout = "";

            switch (index) {
              case 0:
                layout =
                  "xl:col-span-7 xl:row-span-2 min-h-[520px]";
                break;

              case 1:
                layout =
                  "xl:col-span-5 xl:row-span-1 min-h-[240px]";
                break;

              case 2:
                layout =
                  "xl:col-span-5 xl:row-span-1 min-h-[240px]";
                break;

              case 3:
                layout =
                  "xl:col-span-4 xl:row-span-1 min-h-[260px]";
                break;

              default:
                layout =
                  "xl:col-span-8 xl:row-span-1 min-h-[260px]";
            }

            return (
              <article
                key={item.title}
                className={`
          group relative overflow-hidden
          rounded-[36px]
          border border-white/[0.08]
          bg-white/[0.025]
          backdrop-blur-3xl
          shadow-[0_30px_90px_rgba(0,0,0,0.6)]
          transition-all duration-700
          hover:-translate-y-2
          hover:border-white/15
          hover:bg-white/[0.045]
          hover:shadow-[0_40px_120px_rgba(37,99,235,0.18)]
          ${layout}
        `}
              >
                {/* TOP LIGHT */}
                <div className="absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80" />

                {/* BACKGROUND IMAGE */}
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={pillarImages[item.icon]}
                    alt={item.title}
                    fill
                    sizes="100vw"
                    className="
              object-cover
              brightness-[0.5]
              contrast-[1.15]
              saturate-[1.3]
              transition-all duration-700
              group-hover:scale-105
            "
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02040F] via-[#02040F]/50 to-transparent" />

                  {/* COLOR ATMOSPHERE */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-500/10" />

                  {/* SOFT GLOW */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-fuchsia-500/10" />
                  </div>

                  {/* CONTENT */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-between p-7 lg:p-10">
                    {/* TOP */}
                    <div className="flex items-start justify-between">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/30 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                        <MediaIcon
                          name={item.icon as MediaIconName}
                          className="h-8 w-8 text-white"
                        />
                      </div>

                      <span className="font-display text-7xl font-black leading-none tracking-tight text-white/[0.06]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* BOTTOM */}
                    <div
                      className={`max-w-${index === 0 ? "2xl" : "lg"
                        }`}
                    >
                      <h3
                        className={`
                  font-display font-bold tracking-tight text-white
                  ${index === 0
                            ? "text-4xl lg:text-6xl"
                            : "text-2xl lg:text-3xl"
                          }
                `}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={`
                  mt-4 max-w-xl leading-relaxed text-slate-300
                  ${index === 0
                            ? "text-base lg:text-lg"
                            : "text-sm lg:text-base"
                          }
                `}
                      >
                        {item.description}
                      </p>

                      {/* UNDERLINE */}
                      <div className="mt-7 h-[3px] w-20 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 transition-all duration-700 group-hover:w-full" />
                    </div>
                  </div>

                  {/* BOTTOM GLOW */}
                  <div className="absolute -bottom-28 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}