"use client";

import AnimatedGradientBg from "./AnimatedGradientBg";
import FloatingLines from "./FloatingLines";
import LightRays from "./LightRays";
import MeshGradientBg from "./MeshGradientBg";
import NoisePatternBg from "./NoisePatternBg";

const BACKGROUNDS = [
//   AnimatedGradientBg,
  MeshGradientBg,
  NoisePatternBg,
  FloatingLines,
  LightRays
];

export default function getRandomBackground() {
  const randomIndex = Math.floor(Math.random() * BACKGROUNDS.length);
  return BACKGROUNDS[randomIndex];
}

export function useRandomBackground() {
  return getRandomBackground();
}

export { AnimatedGradientBg, MeshGradientBg, NoisePatternBg };
