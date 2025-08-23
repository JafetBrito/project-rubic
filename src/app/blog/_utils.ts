// src/app/blog/_utils.ts
import { useReducedMotion } from "framer-motion";

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
export function formatDateUTC(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`);
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}

export function useAnims() {
  const reduceMotion = useReducedMotion();
  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.55 } },
  };
  const stagger = {
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.08, delayChildren: 0.05 } },
  };
  return { reduceMotion, fadeUp, stagger };
}
