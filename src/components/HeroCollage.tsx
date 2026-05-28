import EventImage from "./EventImage";
import { site, visuals } from "@/data/content";
import { IconRec } from "./Icons";

export default function HeroCollage() {
  return (
    <div className="relative mx-auto mt-16 w-full max-w-lg lg:mt-0 lg:max-w-none">
      {/* Main feature image */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/15 shadow-luxury sm:aspect-[3/4] lg:aspect-[4/5]">
        <EventImage
          src={visuals.hero.main}
          alt={visuals.hero.alt}
          priority
          overlay
          kenBurns
        />
        <div className="absolute inset-0 z-10 overflow-hidden">
          {/* <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&modestbranding=1"
            className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          /> */}
        </div>
        {/* Viewfinder corners */}
        <span className="absolute left-4 top-4 z-20 h-10 w-10 border-l-2 border-t-2 border-royal-400/80" />
        <span className="absolute right-4 top-4 z-20 h-10 w-10 border-r-2 border-t-2 border-royal-400/80" />
        <span className="absolute bottom-4 left-4 z-20 h-10 w-10 border-b-2 border-l-2 border-royal-400/80" />
        <span className="absolute bottom-4 right-4 z-20 h-10 w-10 border-b-2 border-r-2 border-royal-400/80" />
        {/* REC badge */}
        <div className="absolute left-6 top-6 z-20 flex items-center gap-2 rounded-md bg-red-600/90 px-2 py-1">
          <IconRec className="h-2 w-2" />
          <span className="text-[10px] font-bold tracking-widest text-white">REC</span>
        </div>
        {/* Timecode strip */}
        <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between bg-navy-950/80 px-4 py-2 font-mono text-[10px] text-royal-300 backdrop-blur-sm">
          <span>00:00:00:00</span>
          <span>{site.eventTitle.toUpperCase()} · {site.year}</span>
        </div>
      </div>

      {/* Floating secondary card */}
      <div className="absolute -bottom-6 -left-4 z-30 w-36 overflow-hidden rounded-xl border border-white/20 shadow-luxury animate-float sm:-left-8 sm:w-44">
        <EventImage
          src={visuals.gallery[1].src}
          alt="Stage production"
          overlay
          label="Live"
        />
      </div>

      {/* Floating stats chip */}
      <div className="absolute -right-2 top-1/4 z-30 glass animate-float-delayed rounded-2xl px-5 py-4 shadow-glow sm:-right-6">
        <p className="font-display text-2xl font-bold text-white">4K</p>
        <p className="text-[10px] uppercase tracking-widest text-royal-300">Vision</p>
      </div>

      {/* Orbit ring decoration */}
      <div className="pointer-events-none absolute -inset-8 rounded-full border border-royal-500/20 animate-spin-slow" style={{ animationDuration: "25s" }} />
    </div>
  );
}
