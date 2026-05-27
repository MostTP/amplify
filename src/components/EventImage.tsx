import Image from "next/image";

type EventImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  overlay?: boolean;
  kenBurns?: boolean;
  label?: string;
  sizes?: string;
};

export default function EventImage({
  src,
  alt,
  className = "",
  priority = false,
  overlay = true,
  kenBurns = false,
  label,
  sizes,
}: EventImageProps) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={
          sizes ??
          "(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
        }
        className={`
          object-cover
          will-change-transform
          transition-transform duration-700 ease-out
          ${kenBurns ? "animate-ken-burns-slow" : ""}
          ${!kenBurns ? "group-hover:scale-[1.03]" : ""}
        `}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      )}
      {label && (
        <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
            {label}
          </span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] animate-shimmer-slow" />
    </div>
  );
}
