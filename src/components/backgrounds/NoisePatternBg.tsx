"use client";

export default function NoisePatternBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 100 100" patternUnits="userSpaceOnUse">
        <defs>
          <filter id="perlin">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" seed="2" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        <rect width="100" height="100" fill="#e945f5" opacity="0.15" filter="url(#perlin)" />
      </svg>
      <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-fuchsia-300 blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-violet-300 blur-3xl opacity-15" />
    </div>
  );
}
