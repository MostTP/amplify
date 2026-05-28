"use client";

export default function MeshGradientBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
        <defs>
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" />
          </filter>
        </defs>
        <rect width="1200" height="600" fill="url(#meshGradient)" filter="url(#noise)" />
        <defs>
          <radialGradient id="meshGradient" cx="20%" cy="20%">
            <stop offset="0%" style={{ stopColor: '#e945f5', stopOpacity: 0.4 }} />
            <stop offset="50%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: '#0ea5e9', stopOpacity: 0.1 }} />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
