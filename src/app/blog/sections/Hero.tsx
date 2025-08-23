// src/app/blog/sections/Hero.tsx
"use client";

import Container from "@/components/ui/container";
import { ShieldCheck, Lock, Cpu } from "lucide-react";

/* ==========================================================
   BLOG — Hero (misma base visual que Projects)
   - Hero limpio: título + párrafo centrados
   - Fondo con grid sutil (reutiliza .projects-hero y .projects-hero__bg)
   - Chips con métricas/atributos (cyberseguridad)
   - Sin framer-motion ni threejs (evita errores de boundary)
   ========================================================== */

export default function Hero() {
  return (
    <section className="relative overflow-hidden projects-hero">
      {/* Fondo grid sutil — usa el mismo CSS que ya tienes para Projects */}
      <div aria-hidden className="projects-hero__bg" />

      <Container>
        <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-16 md:pt-28 md:pb-24 text-center">
          <h1 className="h-display text-4xl md:text-6xl font-semibold tracking-tight">
            Cybersecurity insights that perform
          </h1>

          <p
            className="mt-4 text-base md:text-lg"
            style={{
              color: "color-mix(in oklab, var(--foreground) 72%, transparent)",
            }}
          >
            Verified, pragmatic articles where security, privacy, and performance
            translate into measurable resilience.
          </p>

          {/* Chips */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-soft bg-surface p-4">
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand" aria-hidden />
                <span className="text-sm">Security-first</span>
              </div>
            </div>

            <div className="rounded-xl border border-soft bg-surface p-4">
              <div className="flex items-center justify-center gap-2">
                <Lock className="w-5 h-5 text-brand" aria-hidden />
                <span className="text-sm">Privacy by design</span>
              </div>
            </div>

            <div className="rounded-xl border border-soft bg-surface p-4">
              <div className="flex items-center justify-center gap-2">
                <Cpu className="w-5 h-5 text-brand" aria-hidden />
                <span className="text-sm">Performance-aware</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
