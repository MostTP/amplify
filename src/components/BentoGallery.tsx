import EventImage from "./EventImage";
import SectionHeading from "./SectionHeading";
import { visuals } from "@/data/content";

export default function BentoGallery() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 grain">
      <div className="media-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Behind the Scenes"
          title="The Production Floor"
          subtitle="A glimpse of the energy, craft, and creativity Media Week brings. Replace these photos with your own in src/data/content.ts."
          light
        />

        <div className="mt-12 sm:mt-16 grid auto-rows-[100px] grid-cols-2 gap-2 sm:auto-rows-[140px] sm:gap-3 md:auto-rows-[180px] md:grid-cols-4 md:gap-4">
          {visuals.gallery.map((item) => (
            <div
              key={item.label}
              className={`relative overflow-hidden rounded-2xl border border-white/10 shadow-luxury transition hover:border-royal-400/40 hover:shadow-glow ${item.span}`}
            >
              <EventImage
                src={item.src}
                alt={item.label}
                label={item.label}
                kenBurns
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
