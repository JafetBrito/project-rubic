"use client";

import { motion } from "framer-motion";

/**
 * PortalHero — Hero cinematográfico sin 3D
 * - Fondo aurora (blobs suaves con blur y mix-blend)
 * - Portal con anillos SVG girando en capas (sin SMIL, sólo Framer Motion)
 * - Órbita con "satélites" (puntos) para dar vida
 * - Legible en light/dark (overlay + vignette)
 * - Sin styled-jsx (evita el error de client-only en server comps)
 */

export default function PortalHero() {
  return (
    <section className="relative min-h-[85svh] grid place-items-center overflow-hidden bg-hero">
      {/* ===== Aurora blobs (fondo) ===== */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -z-10 h-[64rem] w-[64rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--primary) 35%, transparent), transparent 70%)",
        }}
        initial={{ scale: 0.9, opacity: 0.3, x: "-50%", y: "-45%" }}
        animate={{ scale: 1, opacity: 0.55, x: "-40%", y: "-40%" }}
        transition={{ duration: 2.2, ease: "easeOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -z-10 h-[52rem] w-[52rem] rounded-full blur-3xl mix-blend-screen"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--primary) 22%, transparent), transparent 70%), radial-gradient(closest-side at 70% 30%, rgba(2,132,199,0.22), transparent 70%)",
        }}
        initial={{ x: "40%", y: "-30%", opacity: 0.0 }}
        animate={{ x: "30%", y: "-20%", opacity: 0.45 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
      />

      {/* ===== Portal SVG (anillos + órbitas) ===== */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <svg
          width="1400"
          height="1400"
          viewBox="0 0 1400 1400"
          className="opacity-80"
          role="img"
          aria-label=""
        >
          <defs>
            <radialGradient id="ring" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.8" />
              <stop offset="55%" stopColor="var(--primary)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="stroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
              <stop offset="40%" stopColor="var(--primary)" stopOpacity="0.85" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Halo difuso central */}
          <circle cx="700" cy="700" r="280" fill="url(#ring)" />

          {/* Grupo de anillos que gira MUY lento */}
          <motion.g
            style={{ transformOrigin: "700px 700px" }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          >
            {[220, 320, 420, 540].map((r, i) => (
              <circle
                key={r}
                cx="700"
                cy="700"
                r={r}
                fill="none"
                stroke="url(#stroke)"
                strokeWidth={i % 2 === 0 ? 1.2 : 1.6}
                strokeDasharray="12 18"
                strokeLinecap="round"
                opacity={i === 0 ? 0.55 : 0.35}
              />
            ))}
          </motion.g>

          {/* Órbita con "satélites" (puntos) */}
          {[360, 480].map((R, idx) => (
            <motion.g
              key={R}
              style={{ transformOrigin: "700px 700px" }}
              animate={{ rotate: idx % 2 === 0 ? 360 : -360 }}
              transition={{ repeat: Infinity, duration: 36 + idx * 10, ease: "linear" }}
            >
              {Array.from({ length: 18 }).map((_, i) => {
                const angle = (i / 18) * Math.PI * 2;
                // Use fixed precision to ensure server/client consistency
                const x = Math.round((700 + R * Math.cos(angle)) * 10) / 10;
                const y = Math.round((700 + (R * 0.6) * Math.sin(angle)) * 10) / 10;
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="2.4"
                    fill="var(--primary)"
                    opacity={0.65}
                  />
                );
              })}
            </motion.g>
          ))}
        </svg>
      </div>

      {/* Vignette para legibilidad */}
      <div className="pointer-events-none absolute inset-0 -z-0 shadow-[inset_0_0_220px_rgba(0,0,0,0.65)]" />

      {/* ===== Copy del hero ===== */}
      <div className="relative z-10 px-4 text-center">
        <motion.h1
          className="h-display text-4xl md:text-6xl font-semibold tracking-tight"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Rubic&apos;s <span className="text-brand">Digital</span> Solutions
        </motion.h1>

        <motion.p
          className="mt-3 text-base md:text-lg"
          style={{ color: "color-mix(in oklab, var(--foreground) 70%, transparent)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.06, ease: "easeOut" }}
        >
          Fast, secure websites. SEO that compounds. Cybersecurity by design.
        </motion.p>

        <motion.div
          className="mt-4 text-xs md:text-sm"
          style={{ color: "color-mix(in oklab, var(--foreground) 60%, transparent)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          Core Web Vitals • App-Ready • Secure by Design
        </motion.div>

        <motion.div
          className="mt-6 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
        >
          <a href="/contact" className="btn-primary">Get a Quote</a>
          <a href="/projects" className="btn-ghost">See Projects</a>
        </motion.div>
      </div>
    </section>
  );
}
