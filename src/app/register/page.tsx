import PageHero from "@/components/PageHero";
import RegisterForm from "@/components/RegisterForm";
import EventImage from "@/components/EventImage";
import Image from "next/image";
import { register, site, visuals } from "@/data/content";

export const metadata = {
  title: `Register | ${site.fullTitle}`,
};

export default function RegisterPage() {
  return (
    <>
      <PageHero
        eyebrow="Join the Production"
        title={register.title}
        subtitle={register.subtitle}
        imageSrc={visuals.register}
        imageAlt="Recording studio"
      />

      <section className="relative overflow-hidden bg-[#02040F] py-28">
        {/* ===================================== */}
        {/* BACKGROUND ATMOSPHERE */}
        {/* ===================================== */}

        {/* AURORA */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-10%] top-[-10%] h-[700px] w-[700px] rounded-full bg-blue-500/15 blur-[150px]" />

          <div className="absolute right-[-10%] top-[20%] h-[650px] w-[650px] rounded-full bg-fuchsia-500/10 blur-[150px]" />

          <div className="absolute bottom-[-30%] left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
        </div>

        {/* GRID */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:90px_90px]" />
        </div>

        {/* LIGHT BEAMS */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[10%] top-[-20%] h-[1200px] w-[240px] rotate-[18deg] bg-gradient-to-b from-cyan-400/20 via-blue-500/5 to-transparent blur-3xl" />

          <div className="absolute right-[10%] top-[-20%] h-[1200px] w-[240px] -rotate-[18deg] bg-gradient-to-b from-fuchsia-400/20 via-fuchsia-500/5 to-transparent blur-3xl" />
        </div>

        {/* MEDIA VISUALS */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* CAMERA */}
          <div className="absolute -left-44 top-[15%] hidden xl:block">
            <div className="relative h-[650px] w-[650px]">
              <Image
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1800&auto=format&fit=crop"
                alt="Cinema camera"
                fill
                className="
                  object-cover
                  opacity-[0.05]
                  blur-[7px]
                  saturate-0
                  brightness-[0.6]
                  contrast-125
                  rotate-[-14deg]
                  scale-125
                  mix-blend-screen
                "
              />
            </div>
          </div>

          {/* HEADPHONES */}
          <div className="absolute -right-44 top-[35%] hidden xl:block">
            <div className="relative h-[650px] w-[650px]">
              <Image
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1800&auto=format&fit=crop"
                alt="Studio headphones"
                fill
                className="
                  object-cover
                  opacity-[0.05]
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

        {/* FILM GRAIN */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

        {/* VIGNETTE */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.88)_100%)]" />

        {/* ===================================== */}
        {/* CONTENT */}
        {/* ===================================== */}

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* LEFT PANEL */}
            <div className="relative hidden overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] shadow-[0_25px_100px_rgba(0,0,0,0.55)] backdrop-blur-3xl lg:col-span-2 lg:block">
              {/* IMAGE */}
              <div className="absolute inset-0">
                <EventImage
                  src={visuals.pillars.digital}
                  alt="Digital ministry workspace"
                  kenBurns
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#02040F] via-[#02040F]/40 to-transparent" />

              {/* CONTENT */}
              <div className="relative z-20 flex h-full flex-col justify-between p-8">
                {/* LIVE BADGE */}
                <div className="inline-flex w-fit items-center gap-3 rounded-full border border-cyan-400/20 bg-white/[0.04] px-5 py-2 backdrop-blur-2xl">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                    Registration Open
                  </span>
                </div>

                {/* GLASS CARD */}
                <div className="rounded-[28px] border border-white/10 bg-black/30 p-7 backdrop-blur-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.35em] text-gold-300">
                    What To Bring
                  </p>

                  <ul className="mt-5 space-y-4 text-sm leading-relaxed text-slate-200">
                    <li>✦ Open heart & willing hands</li>
                    <li>✦ Notebook or device for notes</li>
                    <li>✦ Portfolio or past work (optional)</li>
                    <li>✦ Team spirit — we create together</li>
                  </ul>
                </div>
              </div>

              {/* TOP LIGHT */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70" />
            </div>

            {/* FORM */}
            <div className="lg:col-span-3">
              <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_25px_100px_rgba(0,0,0,0.55)] backdrop-blur-3xl sm:p-12">
                <RegisterForm />
              </div>

              <p className="mt-8 text-center text-xs text-slate-500">
                Demo form — connect to Supabase, Formspree,
                Firebase, or your API when ready.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}