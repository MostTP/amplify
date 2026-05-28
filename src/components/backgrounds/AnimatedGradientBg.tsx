"use client";

export default function AnimatedGradientBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-3xl animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400 via-blue-500 to-indigo-600 opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
}
