"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/container";

export default function Showreel() {
  const [videoError, setVideoError] = useState(false);

  // ⬇️ Ajusta la extensión si tu archivo es .svg
  const POSTER_SRC = "/showreel-poster.gif"; // o "/showreel-poster.svg"
  const VIDEO_SRC = "/showreel.mp4";

  return (
    <section className="py-16">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div>
            <p className="text-sm mb-2" style={{color:"color-mix(in oklab, var(--foreground) 60%, transparent)"}}>
              DESIGN THAT FEELS ALIVE
            </p>
            <h2 className="h-display text-3xl md:text-5xl font-semibold">
              Cinematic polish, app-ready.
            </h2>
            <p className="mt-3 text-base md:text-lg" style={{color:"color-mix(in oklab, var(--foreground) 70%, transparent)"}}>
              Micro-interactions, motion, and performance tuned for Core Web Vitals.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="/projects" className="btn-ghost">See Projects</a>
              <a href="/contact" className="btn-primary">Get a Quote</a>
            </div>
          </div>

          {/* Media: video con póster + fallback a imagen */}
          <div className="relative">
            {/* Fallback a imagen si el video falla */}
            {videoError ? (
              <Image
                src={POSTER_SRC}
                alt="Showreel poster"
                width={900}
                height={1600}
                className="w-full h-auto rounded-3xl shadow-2xl"
                priority
              />
            ) : (
              <video
                className="w-full h-auto rounded-3xl shadow-2xl"
                poster={POSTER_SRC}
                // autoplay en móvil
                autoPlay
                muted
                playsInline
                // evita que el navegador intente descargar frames antes del póster
                preload="none"
                loop
                onError={() => setVideoError(true)}
              >
                <source src={VIDEO_SRC} type="video/mp4" />
                {/* Si el navegador no soporta mp4, mostramos imagen */}
                <Image
                  src={POSTER_SRC}
                  alt="Showreel poster"
                  width={900}
                  height={1600}
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
              </video>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
