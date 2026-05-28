import Image from "next/image";
import { visuals } from "@/data/content";

export default function PhotoMarquee() {
  const images = [...visuals.marquee, ...visuals.marquee];

  return (
    <section className="relative overflow-hidden border-y border-black/5 bg-white py-8">
      
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50 blur-[120px]" />
      </div>

      <div className="flex animate-marquee-slow gap-4">
        {images.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative h-32 w-48 shrink-0 overflow-hidden rounded-xl border border-black/5 bg-slate-100 shadow-sm"
          >
            <Image
              src={src}
              alt={`media ${i}`}
              fill
              sizes="192px"
              className="object-cover"
              unoptimized
            />

            <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
          </div>
        ))}
      </div>
    </section>
  );
}