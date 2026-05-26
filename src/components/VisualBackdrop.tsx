"use client";

/** Animated ambient layers for dark sections */
export default function VisualBackdrop({ variant = "hero" }: { variant?: "hero" | "subtle" }) {
  const intense = variant === "hero";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Rotating lens ring */}
      <div
        className={`absolute left-1/2 top-0 -translate-x-1/2 rounded-full border border-royal-500/20 ${
          intense ? "h-[600px] w-[600px] animate-spin-slow" : "h-[400px] w-[400px] opacity-50"
        }`}
      />
      <div
        className={`absolute left-1/2 top-8 -translate-x-1/2 rounded-full border border-gold-400/10 ${
          intense ? "h-[500px] w-[500px] animate-spin-slow" : "hidden"
        }`}
        style={{ animationDirection: "reverse", animationDuration: "30s" }}
      />

      {/* Light beams */}
      <div className="absolute -left-20 top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-royal-500/10 to-transparent blur-3xl" />
      <div className="absolute -right-20 top-1/4 h-2/3 w-1/3 -rotate-12 bg-gradient-to-l from-gold-500/10 to-transparent blur-3xl" />

      {/* Pulsing record dot */}
      {intense && (
        <div className="absolute right-[15%] top-[20%]">
          <span className="absolute inline-flex h-4 w-4 rounded-full bg-royal-400/40 animate-pulse-ring" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-royal-400" />
        </div>
      )}

      {/* Floating equipment silhouettes */}
      {intense && (
        <>
          <svg
            className="absolute left-[8%] top-[30%] h-16 w-16 text-white/5 animate-float"
            viewBox="0 0 64 64"
            fill="currentColor"
          >
            <rect x="8" y="20" width="48" height="32" rx="4" />
            <circle cx="32" cy="36" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
          </svg>
          <svg
            className="absolute right-[10%] top-[45%] h-20 w-20 text-royal-400/10 animate-float-delayed"
            viewBox="0 0 64 64"
            fill="currentColor"
          >
            <path d="M12 8h8l4-8h16l4 8h8v40H12V8z" />
          </svg>
        </>
      )}

      <div className="scanlines absolute inset-0 opacity-60" />
    </div>
  );
}
