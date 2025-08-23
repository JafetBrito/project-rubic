// src/app/about/sections.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Script from "next/script";
import { Card, SafeIcon } from "./_components";
import {
  HERO,
  WHO_WE_ARE,
  CAPABILITIES,
  VALUES,
  PILLARS,
  STANDARDS,
  PROCESS,
  FAQS,
  ORG_JSONLD,
  FAQ_JSONLD,
} from "./_data";

export function Hero() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative overflow-hidden px-6 py-24 text-center bg-hero">
      {mounted && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
        >
          <div className="relative w-[1200px] max-w-none opacity-70">
            <svg
              className={reduce ? "" : "animate-[spin_60s_linear_infinite]"}
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
              <circle
                cx="300"
                cy="300"
                r="220"
                fill="none"
                stroke="var(--primary)"
                strokeOpacity="0.08"
                strokeWidth="10"
              />
              {Array.from({ length: 9 }).map((_, i) => {
                const r = 30 + i * 22;
                return (
                  <ellipse
                    key={i}
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
              {Array.from({ length: 18 }).map((_, i) => {
                const angle = (i * 10 * Math.PI) / 18;
                const x1 = 300 + 220 * Math.cos(angle);
                const y1 = 80 + 220 * Math.sin(angle);
                const x2 = 300 - 220 * Math.cos(angle);
                const y2 = 520 - 220 * Math.sin(angle);
                return (
                  <line
                    key={i}
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

      <div className="mx-auto max-w-3xl hero-glow">
        <h1 className="h-display text-4xl md:text-6xl font-bold tracking-tight">
          {HERO.title.before}
          <span className="text-brand">{HERO.title.highlight}</span>
          {HERO.title.after}
        </h1>
        <p
          className="mt-4 text-lg md:text-xl mx-auto max-w-2xl"
          style={{
            color:
              "color-mix(in oklab, var(--foreground) 72%, transparent)",
          }}
        >
          {HERO.paragraph}
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/services" className="btn-primary">
            Our Services
          </Link>
          <Link href="/contact" className="btn-ghost">
            Speak with Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export function WhoWeAre() {
  return (
    <section className="py-14">
      <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-[1.2fr,0.8fr] gap-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Who we are</h2>
          {WHO_WE_ARE.paragraphs.map((p, i) => (
            <p key={i} className="mt-3 text-gray-600 dark:text-gray-400">
              {p}
            </p>
          ))}
        </div>
        <div className="rounded-2xl overflow-hidden border border-soft">
          <img
            src={WHO_WE_ARE.image.src}
            alt={WHO_WE_ARE.image.alt}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export function Capabilities() {
  return (
    <section className="bg-surface py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Capabilities
        </h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES.map(({ Icon, title, desc }) => (
            <Card key={title}>
              <div className="flex items-start gap-3">
                <SafeIcon
                  Icon={Icon}
                  className="w-6 h-6 mt-0.5 text-[color-mix(in_oklab,var(--foreground)_80%,transparent)] transition-all duration-300 group-hover:text-brand group-hover:-rotate-3"
                />
                <div>
                  <h3 className="font-semibold transition-colors group-hover:text-brand">
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
  );
}

export function Values() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl font-semibold mb-10">
          Our Values
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map(({ Icon, title, desc }) => (
            <Card key={title}>
              <div className="flex flex-col items-center text-center">
                <SafeIcon
                  Icon={Icon}
                  className="w-10 h-10 text-[color-mix(in_oklab,var(--foreground)_80%,transparent)] transition-all duration-300 group-hover:text-brand group-hover:rotate-6"
                />
                <h3 className="mt-3 font-semibold transition-colors group-hover:text-brand">
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
  );
}

export function Pillars() {
  return (
    <section className="bg-surface py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Technology Pillars
        </h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {PILLARS.map(({ Icon, title, desc }) => (
            <Card key={title}>
              <div className="flex items-start gap-3">
                <SafeIcon
                  Icon={Icon}
                  className="w-6 h-6 mt-0.5 text-[color-mix(in_oklab,var(--foreground)_80%,transparent)] transition-all duration-300 group-hover:text-brand group-hover:-rotate-3"
                />
                <div>
                  <h3 className="font-semibold transition-colors group-hover:text-brand">
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
  );
}

export function Standards() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-12 pb-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">
        Standards & Commitments
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mt-3 max-w-3xl mx-auto">
        We operationalize privacy, security, accessibility, and responsibility—not as
        slogans, but as day-to-day engineering criteria and review gates.
      </p>
      <div className="mt-8 grid md:grid-cols-4 gap-6">
        {STANDARDS.map(({ Icon, title, desc }) => (
          <Card key={title}>
            <div className="flex items-start gap-3">
              <SafeIcon
                Icon={Icon}
                className="w-6 h-6 mt-0.5 text-[color-mix(in_oklab,var(--foreground)_80%,transparent)] transition-all duration-300 group-hover:text-brand"
              />
              <div>
                <h3 className="font-semibold transition-colors group-hover:text-brand">
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
    </section>
  );
}

export function Process() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">
        How we work
      </h2>
      <ol className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
        {PROCESS.map(({ n, title, bullets }) => (
          <li key={n} className="relative">
            <Card>
              <div className="flex items-start gap-3">
                <div className="text-brand font-mono text-sm pt-0.5">
                  {n}
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <ul className="mt-2 space-y-1 text-sm text-gray-500 dark:text-gray-400 list-disc pl-5">
                    {bullets.map((b: string) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Faqs() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">FAQs</h2>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FAQS.map(({ q, a }) => (
          <Card key={q}>
            <h3 className="font-semibold">{q}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {a}
            </p>
          </Card>
        ))}
      </div>

      {/* JSON-LD (kept here to keep page.tsx minimal) */}
      <Script
        id="jsonld-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
      />
      <Script
        id="jsonld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
    </section>
  );
}
