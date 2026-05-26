import Image from "next/image";
import { visuals } from "@/data/content";

export default function PhotoMarquee() {
  const images = [...visuals.marquee, ...visuals.marquee];

  return (
    <section className="overflow-hidden border-y border-white/10 bg-navy-900 py-6">
      <div className="flex animate-marquee-slow gap-4">
        {images.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative h-32 w-48 shrink-0 overflow-hidden rounded-xl border border-white/10 sm:h-40 sm:w-64"
          >
            <Image
              src={src}
              alt={`Media Week moment ${(i % visuals.marquee.length) + 1}`}
              fill
              className="object-cover"
              sizes="256px"
            />
            <div className="absolute inset-0 bg-royal-900/20 mix-blend-multiply" />
          </div>
        ))}
      </div>
    </section>
  );
}
