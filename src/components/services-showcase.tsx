"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Search, ShieldCheck, Zap, PenTool } from "lucide-react";

const items = [
  {
    icon: Code2,
    title: "Next.js Websites",
    desc: "SSR/ISR, image optimization, edge-ready. Built to scale.",
  },
  {
    icon: Search,
    title: "SEO that sticks",
    desc: "Technical + on-page from day one. Schema, sitemaps, clean HTML.",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "Lighthouse > 95. Core Web Vitals green across devices.",
  },
  {
    icon: ShieldCheck,
    title: "Security by design",
    desc: "Headers, sanitization, spam protection, auth-ready.",
  },
  {
    icon: PenTool,
    title: "Design system",
    desc: "Consistent tokens, dark/light theming, component library.",
  },
  {
    icon: Rocket,
    title: "App-ready",
    desc: "APIs, server actions, analytics, deploy to Vercel.",
  },
];

export default function ServicesShowcase() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-8 md:mb-12">
          <h3 className="h-display text-2xl md:text-4xl font-bold">
            Services that make brands <span className="text-brand">perform</span>
          </h3>
          <p
            className="mt-3 text-sm md:text-base"
            style={{ color: "color-mix(in oklab, var(--foreground) 65%, transparent)" }}
          >
            Carefully engineered. No templates, no bloat.
          </p>
        </div>

        <motion.ul
          initial="off"
          whileInView="on"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            on: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.li
              key={title}
              variants={{
                off: { y: 18, opacity: 0 },
                on: { y: 0, opacity: 1 },
              }}
            >
              <div className="group rounded-2xl border border-soft bg-surface/40 p-5 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5">
                <div className="mb-3 inline-flex items-center justify-center rounded-xl border border-soft p-2">
                  <Icon className="lucide size-5" aria-hidden />
                </div>
                <h4 className="font-semibold">{title}</h4>
                <p
                  className="mt-1.5 text-sm"
                  style={{ color: "color-mix(in oklab, var(--foreground) 60%, transparent)" }}
                >
                  {desc}
                </p>
                <div className="mt-3 text-sm">
                  <a href="/services" className="nav-link">Learn more</a>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
