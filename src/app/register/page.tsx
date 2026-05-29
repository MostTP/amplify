import PageHero from "@/components/PageHero";
import RegisterForm from "@/components/RegisterForm";
import EventImage from "@/components/EventImage";
import Image from "next/image";
import { register, site, visuals } from "@/data/content";
import {
  AnimatedGradientBg,
  LightRays,
  MeshGradientBg,
  NoisePatternBg,
} from "@/components/backgrounds";

export const metadata = {
  title: `Register | ${site.fullTitle}`,
};

export default function RegisterPage() {
  const backgrounds = [AnimatedGradientBg, MeshGradientBg, NoisePatternBg];
  const BackgroundComponent =
    backgrounds[Math.floor(Math.random() * backgrounds.length)];

  return (
    <>
      <PageHero
        eyebrow="Join the Production"
        title={register.title}
        subtitle={register.subtitle}
        imageSrc={visuals.register}
        imageAlt="Recording studio"
      />

      <section className="relative overflow-hidden bg-white py-24 sm:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <LightRays
            raysOrigin="top-center"
            raysColor="#7C3AED"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>
        {/* Decorative rings */}
        <div className="pointer-events-none absolute left-[5%] top-[20%] hidden h-52 w-52 rounded-full border border-slate-200 xl:block" />
        <div className="pointer-events-none absolute right-[8%] bottom-[18%] hidden h-72 w-72 rounded-full border border-slate-200 xl:block" />

        {/* ================================= */}
        {/* CONTENT */}
        {/* ================================= */}

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-5">
            {/* ========================= */}
            {/* LEFT SIDE */}
            {/* ========================= */}

            <div className="hidden lg:col-span-2 lg:block">
              <div className="sticky top-28 overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
                {/* IMAGE */}
                <div className="relative h-[340px] overflow-hidden">
                  <EventImage
                    src={visuals.pillars.digital}
                    alt="Digital ministry workspace"
                    kenBurns
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Badge */}
                  <div className="absolute left-6 top-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

                    <span className="text-xs font-bold uppercase tracking-[0.28em] text-white">
                      Registration Open
                    </span>
                  </div>

                  {/* Floating card */}
                  <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-white/15 bg-white/10 p-5 backdrop-blur-2xl">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-200">
                      Media Week 2026
                    </p>

                    <h3 className="mt-3 text-2xl font-black text-white">
                      Build Creative Excellence
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-200">
                      Learn production, storytelling, media systems, design,
                      livestreaming, and digital ministry workflows.
                    </p>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="space-y-8 p-8">
                  {/* Features */}
                  <div className="grid gap-4">
                    {[
                      "Hands-on media training",
                      "Creative collaboration",
                      "Certificate available",
                      "Practical live sessions",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4"
                      >
                        <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-sm font-bold text-white">
                          ✓
                        </div>

                        <div>
                          <p className="font-semibold text-slate-900">{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Small gallery */}
                  <div>
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
                      Experience
                    </p>

                    <div className="grid grid-cols-3 gap-3">
                      {visuals.gallery.slice(0, 3).map((img, index) => (
                        <div
                          key={index}
                          className="relative aspect-square overflow-hidden rounded-2xl"
                        >
                          <Image
                            src={img.src}
                            alt={img.label}
                            fill
                            className="object-cover transition duration-700 hover:scale-110"
                            sizes="120px"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================= */}
            {/* RIGHT SIDE FORM */}
            {/* ========================= */}

            <div className="lg:col-span-3">
              <div className="relative overflow-hidden sm:rounded-[38px]  rounded-[28px] sm:border sm:border-slate-200 sm:bg-white sm:shadow-[0_25px_100px_rgba(15,23,42,0.08)]">
                {/* Decorative top glow */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500" />

                {/* Pattern */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
                  <div className="h-full w-full bg-[radial-gradient(circle,rgba(15,23,42,0.18)_1px,transparent_1px)] bg-[size:26px_26px]" />
                </div>

                {/* Glow */}
                <div className="absolute right-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full bg-cyan-200/50 blur-3xl" />

                <div className="relative p-2 pt-6 sm:p-10 lg:p-12">
                  {/* Top heading */}
                  <div className="mb-10 flex flex-col gap-6 border-b border-slate-100 pb-8 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-600">
                        Secure Registration
                      </p>

                      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                        Reserve Your Spot
                      </h2>

                      <p className="mt-3 max-w-xl text-slate-600">
                        Complete your registration and payment to gain access to
                        Media Week training sessions and activities.
                      </p>
                    </div>

                    {/* Pricing */}
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-5">
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                        Registration Fee
                      </p>

                      <div className="mt-3 flex items-end gap-2">
                        <span className="text-4xl font-black text-slate-950">
                          ₦5,000
                        </span>

                        <span className="pb-1 text-sm text-slate-500">
                          Training
                        </span>
                      </div>

                      <p className="mt-2 text-sm text-slate-500">
                        + ₦1,000 optional certificate
                      </p>
                    </div>
                  </div>

                  {/* FORM */}
                  <RegisterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
