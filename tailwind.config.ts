import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#030b1a",
          900: "#0a1628",
          800: "#0f2744",
          700: "#1e3a5f",
        },
        royal: {
          600: "#1d4ed8",
          500: "#2563eb",
          400: "#3b82f6",
          300: "#60a5fa",
        },
        gold: {
          500: "#c9a227",
          400: "#d4af37",
          300: "#e8c547",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37, 99, 235, 0.45), transparent), radial-gradient(ellipse 60% 40% at 100% 0%, rgba(201, 162, 39, 0.12), transparent), linear-gradient(180deg, #030b1a 0%, #0a1628 50%, #0f2744 100%)",
        "spotlight":
          "conic-gradient(from 180deg at 50% 0%, rgba(59, 130, 246, 0.15), transparent 60deg)",
        "film-strip":
          "repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(255,255,255,0.03) 8px, rgba(255,255,255,0.03) 10px)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "wave": "wave 1.2s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
        "marquee": "marquee 25s linear infinite",
        "marquee-slow": "marquee 40s linear infinite",
        "ken-burns": "ken-burns 20s ease-in-out infinite alternate",
        "fade-up": "fade-up 0.8s ease-out forwards",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "scaleY(0.4)" },
          "50%": { transform: "scaleY(1)" },
        },
        glow: {
          "0%": { opacity: "0.4" },
          "100%": { opacity: "0.8" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        luxury: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.05)",
        glow: "0 0 40px rgba(37, 99, 235, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
