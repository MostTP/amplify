import PageHero from "@/components/PageHero";
import RegisterForm from "@/components/RegisterForm";
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

      <section className="relative overflow-hidden bg-white py-24 sm:py-28">
        {/* Decorative rings */}
        <div className="pointer-events-none absolute left-[5%] top-[20%] hidden h-52 w-52 rounded-full border border-slate-200 xl:block" />
        <div className="pointer-events-none absolute right-[8%] bottom-[18%] hidden h-72 w-72 rounded-full border border-slate-200 xl:block" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-5">
            {/* ========================= */}
            {/* LEFT SIDE */}
            {/* ========================= */}

            <div className="relative hidden lg:col-span-2 lg:block">
              <div className="sticky top-28 overflow-hidden rounded-[40px] border border-white/40 bg-white/70 shadow-[0_25px_100px_rgba(15,23,42,0.12)] backdrop-blur-2xl">

                {/* SOFT BACKGROUND GLOW */}
                <div className="pointer-events-none absolute inset-0 z-0">
                  <div className="absolute -top-20 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
                  <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-3xl" />
                </div>

                {/* IMAGE */}
                <div className="relative h-[360px] overflow-hidden z-10">
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

                  {/* SOFTER OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />

                  {/* STATUS BADGE */}
                  <div className="absolute left-6 top-6 z-20 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">
                      Registration Open
                    </span>
                  </div>

                  {/* FLOATING HERO CARD */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl shadow-xl">
                    <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-cyan-200">
                      Media Week 2026
                    </p>

                    <h3 className="mt-3 text-2xl font-black leading-tight text-white">
                      Build Creative Excellence
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-200">
                      Learn production, storytelling, media systems, design, livestreaming,
                      and digital ministry workflows in a hands-on environment.
                    </p>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="relative z-10 space-y-10 p-8">

                  {/* FEATURE LIST */}
                  <div className="space-y-4">
                    {[
                      "Hands-on media training",
                      "Creative collaboration",
                      "Certificate included",
                      "Real-world production experience",
                    ].map((item) => (
                      <div
                        key={item}
                        className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-white/70 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-bold text-white shadow-md">
                          ✓
                        </div>

                        <p className="font-semibold text-slate-900 group-hover:text-slate-950">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* GALLERY */}
                  <div>
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-slate-500">
                      Experience Moments
                    </p>

                    <div className="grid grid-cols-3 gap-3">
                      {visuals.gallery.slice(0, 3).map((img, index) => (
                        <div
                          key={index}
                          className="group relative aspect-square overflow-hidden rounded-2xl border border-slate-100 shadow-sm"
                        >
                          <Image
                            src={img.src}
                            alt={img.label}
                            fill
                            className="object-cover transition duration-700 group-hover:scale-110"
                            sizes="(max-width: 1024px) 120px, 180px"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
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
