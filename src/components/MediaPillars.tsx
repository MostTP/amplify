"use client";

import Image from "next/image";
import { homeSections, visuals } from "@/data/content";
import SectionHeading from "./SectionHeading";
import { MediaIcon } from "./Icons";

type MediaPillarIcon =
  | "broadcast"
  | "camera"
  | "design"
  | "digital"
  | "code"
  | "video"
  | "write"
  | "visuals";

const pillarImages: Record<MediaPillarIcon, string> = {
  broadcast: visuals.pillars.broadcast,
  camera: visuals.pillars.camera,
  design: visuals.pillars.design,
  digital: visuals.pillars.digital,
  code: visuals.pillars.code,
  video: visuals.pillars.video,
  write: visuals.pillars.write,
  visuals: visuals.pillars.visuals,
};

export default function MediaPillars() {
  const { mediaPillars } = homeSections;

  return (
    <section className="relative bg-white py-10 sm:py-16 md:py-22 overflow-hidden">
      {/* RANDOM BACKGROUND */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Media Mandate"
          title={mediaPillars.title}
          subtitle={mediaPillars.subtitle}
          light={false}
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mediaPillars.items.map((item, index) => {
            const icon = item.icon as MediaPillarIcon;

            return (
              <article
                key={item.title}
                className="
                  group relative overflow-hidden rounded-[2rem]
                  border border-slate-200
                  bg-white
                  shadow-[0_30px_90px_rgba(15,23,42,0.08)]
                  transition-all duration-500
                  hover:-translate-y-2 hover:shadow-[0_20px_80px_rgba(59,130,246,0.18)]
                "
              >
                {/* IMAGE */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={pillarImages[icon]}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                </div>

                {/* ICON */}
                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow border border-black/5">
                  <MediaIcon name={icon} className="h-5 w-5 text-black" />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-black/60">
                    {item.description}
                  </p>

                  <div className="mt-5 h-[2px] w-0 bg-black transition-all duration-500 group-hover:w-full" />
                </div>

                {/* INDEX */}
                <div className="absolute right-4 top-4 text-xs font-bold text-black/20">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* SOFT GLOW */}
                <div className="absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-blue-100 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}