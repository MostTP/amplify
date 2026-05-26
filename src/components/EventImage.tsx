import Image from "next/image";

type EventImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  overlay?: boolean;
  kenBurns?: boolean;
  label?: string;
};

export default function EventImage({
  src,
  alt,
  className = "",
  priority = false,
  overlay = true,
  kenBurns = false,
  label,
}: EventImageProps) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`object-cover transition duration-700 group-hover:scale-105 ${
          kenBurns ? "animate-ken-burns" : ""
        }`}
        priority={priority}
      />
      {overlay && <div className="image-overlay" />}
      {label && (
        <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
            {label}
          </span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 shimmer" />
    </div>
  );
}
