"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Shield, Globe, Users, Rocket, Cpu, Lock, Zap } from "lucide-react";

/*
ABOUT — Rubic Digital Solutions (World bg + lively cards + hydration-safe)
- Hero: “mundo” SVG wireframe (solo tras mount -> evita hydration mismatch).
- SIN animaciones de entrada por scroll: el texto aparece siempre.
- Las tarjetas (Values/Pillars/Mission/Vision) solo animan en hover/tap (color/halo/escala).
- Orden nuevo: Our Values -> Technology Pillars -> Our Mission/Vision -> CTA.
*/

export default function About() {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // evita diferencias SSR/CSR en el bloque animado del hero
  }, []);

  // Tarjeta reutilizable (hover/tap vivos)
  const Card = ({
    children,
    className = "",
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <motion.div
      whileHover={
        reduceMotion
          ? {}
          : {
              scale: 1.03,
              boxShadow:
                "0 0 0 1px color-mix(in oklab, var(--primary) 35%, transparent), 0 10px 44px color-mix(in oklab, var(--primary) 20%, transparent)",
            }
      }
      whileTap={reduceMotion ? {} : { scale: 0.99 }}
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
      {/* halo interior al hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          boxShadow: "inset 0 0 46px color-mix(in oklab, var(--primary) 16%, transparent)",
        }}
      />
      {children}
    </motion.div>
  );

  return (
    <>
      <Navbar />
      
      {/* ===== HERO con globo “wireframe” detrás (monta solo en cliente) ===== */}
      <section className="relative overflow-hidden px-6 py-24 text-center bg-hero">
        {/* Mundo SVG (se muestra solo tras mount para evitar hydration mismatch) */}
        {mounted && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
          >
            <div className="relative w-[1200px] max-w-none opacity-70">
              <svg
                className={reduceMotion ? "" : "animate-[spin_60s_linear_infinite]"}
                viewBox="0 0 600 600"
                width="100%"
                height="100%"
                style={{
                  filter:
                    "drop-shadow(0 0 24px color-mix(in oklab, var(--primary) 20%, transparent))",
                }}
                role="img"
                aria-label=""
              >
                {/* esfera base para halo */}
                <circle
                  cx="300"
                  cy="300"
                  r="220"
                  fill="none"
                  stroke="var(--primary)"
                  strokeOpacity="0.08"
                  strokeWidth="10"
                />
                {/* latitudes */}
                {Array.from({ length: 9 }).map((_, i) => {
                  const r = 30 + i * 22;
                  return (
                    <ellipse
                      key={`lat-${i}`}
                      cx="300"
                      cy="300"
                      rx={r + 170}
                      ry={Math.max(2, Math.abs(170 - i * 10))}
                      fill="none"
                      stroke="var(--primary)"
                      strokeOpacity={i === 4 ? 0.35 : 0.18}
                      strokeWidth={i === 4 ? 1.4 : 1}
                    />
                  );
                })}
                {/* longitudes */}
                {Array.from({ length: 18 }).map((_, i) => {
                  const angle = (i * 10 * Math.PI) / 18;
                  const x1 = 300 + 220 * Math.cos(angle);
                  const y1 = 80 + 220 * Math.sin(angle);
                  const x2 = 300 - 220 * Math.cos(angle);
                  const y2 = 520 - 220 * Math.sin(angle);
                  return (
                    <line
                      key={`lon-${i}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="var(--primary)"
                      strokeOpacity={0.22}
                      strokeWidth="1"
                    />
                  );
                })}
              </svg>
            </div>
          </div>
        )}

        {/* Copy del hero (sin whileInView; aparece siempre) */}
        <div className="mx-auto max-w-3xl hero-glow">
          <h1 className="h-display text-4xl md:text-6xl font-bold tracking-tight">
            Building a <span className="text-brand">Safer</span> Digital World
          </h1>
          <p
            className="mt-4 text-lg md:text-xl mx-auto max-w-2xl"
            style={{ color: "color-mix(in oklab, var(--foreground) 72%, transparent)" }}
          >
            We craft fast, secure, and scalable experiences. Research-driven,
            privacy-minded, and obsessed with quality.
          </p>
        </div>
      </section>

      {/* ===== Our Values (hover/tap con cambio de color) ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-3xl font-semibold mb-10">Our Values</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Shield, title: "Security", desc: "Security-first by design, not as an afterthought." },
              { Icon: Globe, title: "Innovation", desc: "Research & experimentation to solve real problems." },
              { Icon: Users, title: "Collaboration", desc: "Clear communication and strong partnerships." },
              { Icon: Rocket, title: "Excellence", desc: "Craftsmanship, detail, and accountability." },
            ].map(({ Icon, title, desc }) => (
              <Card key={title}>
                <div className="flex flex-col items-center text-center">
                  <Icon
                    className="w-10 h-10 text-[color-mix(in_oklab,var(--foreground)_80%,transparent)] transition-all duration-300 group-hover:text-brand active:text-brand group-hover:rotate-6"
                    aria-hidden
                  />
                  <h3 className="mt-3 font-semibold transition-colors group-hover:text-brand active:text-brand">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Technology Pillars (hover/tap con cambio de color) ===== */}
      <section className="bg-surface py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">Technology Pillars</h2>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                Icon: Cpu,
                title: "Performance",
                desc:
                  "Core Web Vitals as baseline. Edge-ready, image optimization, caching strategy.",
              },
              {
                Icon: Lock,
                title: "Security",
                desc:
                  "Hardened configs, input sanitization, least-privilege, regular audits.",
              },
              {
                Icon: Zap,
                title: "Scalability",
                desc:
                  "Next.js architecture, modular components, incremental adoption.",
              },
            ].map(({ Icon, title, desc }) => (
              <Card key={title}>
                <div className="flex items-start gap-3">
                  <Icon
                    className="w-6 h-6 mt-0.5 text-[color-mix(in_oklab,var(--foreground)_80%,transparent)] transition-all duration-300 group-hover:text-brand active:text-brand group-hover:-rotate-3"
                    aria-hidden
                  />
                  <div>
                    <h3 className="font-semibold transition-colors group-hover:text-brand active:text-brand">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {desc}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Our Mission & Our Vision (AHORA VA ABAJO) ===== */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-20 grid md:grid-cols-2 gap-8">
        <Card>
          <div>
            <h2 className="text-2xl font-semibold mb-3 transition-colors group-hover:text-brand active:text-brand">
              Our Mission
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Empower businesses through trustworthy technology—combining
              performance, security, and design to drive measurable growth.
            </p>
          </div>
        </Card>

        <Card>
          <div>
            <h2 className="text-2xl font-semibold mb-3 transition-colors group-hover:text-brand active:text-brand">
              Our Vision
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Lead the future of ethical, transparent, and accessible digital
              products—where speed and safety are the default.
            </p>
          </div>
        </Card>
      </section>

      {/* ===== CTA final ===== */}
      <section className="py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Ready to build something extraordinary?
        </h2>
          <div className="mt-6">
          <Link href="/contact" className="btn-primary">
            Contact Us
            </Link>
          </div>
      </section>

      <Footer />
    </>
  );
}
