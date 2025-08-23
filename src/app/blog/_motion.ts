// src/app/blog/_motion.ts
"use client";

import { useReducedMotion } from "framer-motion";

export function useAnims() {
  const reduceMotion = useReducedMotion();
  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] as any },
    },
  };
  const stagger = {
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.08, delayChildren: 0.04 } },
  };
  return { fadeUp, stagger, reduceMotion };
}
