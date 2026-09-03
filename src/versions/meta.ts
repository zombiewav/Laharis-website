export type VersionMeta = {
  slug: string;
  id: string;
  name: string;
  tag: string;
  desc: string;
  accent: string;
  bg: string;
};

export const VERSIONS: VersionMeta[] = [
  {
    slug: "molten-basalt",
    id: "01",
    name: "Molten Basalt",
    tag: "Dark · Technical · Monospace",
    desc: "An engineering-grade dark interface. Volcanic-ash grounds, ember accents, hairline grids, and blueprint-style mono type. Calm, precise, serious.",
    accent: "#e74d02",
    bg: "#0b0908",
  },
  {
    slug: "glass-neu",
    id: "02",
    name: "Glass · Neumorphism",
    tag: "Frosted · Soft · Gradient",
    desc: "Glassmorphic frosted panels floating over a molten gradient field, with soft neumorphic tiles and pressable buttons. Tactile and modern.",
    accent: "#fcb42c",
    bg: "#0a0705",
  },
  {
    slug: "brutalist",
    id: "03",
    name: "Brutalist Swiss",
    tag: "Light · Bold · Editorial",
    desc: "Raw, high-contrast editorial. Oversized uppercase type, heavy black rules, an exposed grid. Loud, confident, poster-like.",
    accent: "#e74d02",
    bg: "#f2ede4",
  },
  {
    slug: "warm-minimal",
    id: "04",
    name: "Warm Minimal",
    tag: "Cream · Serif · Architectural",
    desc: "A warm, gallery-quiet architectural look. Cream base, Fraunces serif, generous whitespace, and photography-led layouts. Elegant and premium.",
    accent: "#a8654a",
    bg: "#f5efe6",
  },
  {
    slug: "kinetic",
    id: "05",
    name: "Kinetic Motion",
    tag: "Dark · Animated · Immersive",
    desc: "Motion-first and immersive. Parallax Mayon hero, scroll-reveal sections, animated counters, and a running marquee. Dynamic and cinematic.",
    accent: "#9a0000",
    bg: "#0b0908",
  },
];
