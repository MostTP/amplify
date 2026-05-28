import Image from "next/image";
import { visuals } from "@/data/content";

export default function PhotoMarquee() {
  const images = [...visuals.marquee, ...visuals.marquee];

  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-white/95 py-10 shadow-inner">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl gap-4 overflow-hidden px-4 sm:px-6 animate-marquee-slow">
        {images.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative h-24 w-36 shrink-0 overflow-hidden rounded-3xl sm:h-32 sm:w-48 border border-slate-200 bg-slate-100 shadow-[0_15px_40px_rgba(15,23,42,0.08)]"
          >
            <Image
              src={src}
              alt={`media ${i}`}
              fill
              sizes="(max-width: 640px) 144px, 192px"
              className="object-cover"
              priority={false}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
          </div>
        ))}
      </div>
    </section>
  );
}