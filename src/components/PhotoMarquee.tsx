import Image from "next/image";
import { visuals } from "@/data/content";
import { Marquee } from "./ui/marquee";

const ReviewCard = () => {
  const images = [...visuals.marquee, ...visuals.marquee];
  return (
    <figure>
      <div className="flex flex-row items-start gap-1.5 sm:gap-2 md:gap-3 text-white text-2xl h-48 sm:h-56 md:h-64 lg:h-72">
        {images.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative w-48 sm:w-56 md:w-64 lg:w-80 xl:w-96 shrink-0 overflow-hidden rounded-3xl h-48 sm:h-56 md:h-64 lg:h-72 border border-slate-200 bg-slate-100 shadow-[0_15px_40px_rgba(15,23,42,0.08)]"
          >
            <Image
              src={src}
              alt={`media ${i}`}
              fill
              className="object-cover rounded-sm h-full w-full"
              priority={false}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
          </div>
        ))}
      </div>
    </figure>
  );
};

export function ImageMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#f9f9f9]">
      <div className="absolute inset-0 bg-center pointer-events-none"></div>
      <Marquee className="[--duration:40s]">
        <ReviewCard />
      </Marquee>
    </div>
  );
}