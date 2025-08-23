// src/app/about/_components.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { Cpu } from "lucide-react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      whileHover={
        reduce
          ? {}
          : {
              scale: 1.03,
              boxShadow:
                "0 0 0 1px color-mix(in oklab, var(--primary) 35%, transparent), 0 10px 44px color-mix(in oklab, var(--primary) 20%, transparent)",
            }
      }
      whileTap={reduce ? {} : { scale: 0.99 }}
      className={
        "group relative rounded-2xl border border-soft p-5 transition-colors " +
        "bg-[color-mix(in_oklab,var(--background)_96%,transparent)] " +
        className
      }
      style={{
        background:
          "linear-gradient(180deg, color-mix(in oklab, var(--primary) 6%, transparent), transparent 60%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ boxShadow: "inset 0 0 46px color-mix(in oklab, var(--primary) 16%, transparent)" }}
      />
      {children}
    </motion.div>
  );
}

export function SafeIcon({
  Icon,
  className,
}: {
  Icon?: ElementType | undefined;
  className?: string;
}) {
  const I = (Icon as ElementType) || Cpu;
  return <I className={className} aria-hidden />;
}
