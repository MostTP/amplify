"use client";

import AnimatedGradientBg from "./AnimatedGradientBg";
import FloatingLines from "./FloatingLines";
import LightRays from "./LightRays";
import MeshGradientBg from "./MeshGradientBg";
import NoisePatternBg from "./NoisePatternBg";

const BACKGROUNDS = [
  { Component: MeshGradientBg, defaultProps: {} },
  { Component: NoisePatternBg, defaultProps: {} },
  { Component: FloatingLines, defaultProps: { enabledWaves: ["top", "middle", "bottom"], animationSpeed: 1 } },
  { Component: LightRays, defaultProps: { raysOrigin: "top-center", raysColor: "#0046ff", raysSpeed: 1, lightSpread: 0.5, rayLength: 3, followMouse: true } },
];

export function getRandomBackground() {
  const randomIndex = Math.floor(Math.random() * BACKGROUNDS.length);
  return BACKGROUNDS[randomIndex].Component;
}

export function useRandomBackground() {
  return getRandomBackground();
}

export { AnimatedGradientBg, MeshGradientBg, NoisePatternBg, FloatingLines, LightRays };
