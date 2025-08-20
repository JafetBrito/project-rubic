"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ClientsStrip from "@/components/clients-strip";
import FloatingCTA from "@/components/floating-cta";
import Showreel from "@/components/showreel";
import ServicesShowcase from "@/components/services-showcase";

/* =========================
   ENCUADRE BASE (desktop)
   ========================= */
const TARGET_BASE = { x: 0.0, y: 1.25, z: 0.72 };
const ORBIT_BASE = { theta: 8, phi: 78, radius: 2.36 };
const FOV_BASE = 28;

/* SOLO móvil: aún más cerca (según tu pedido) */
const TARGET_MOBILE = { x: 0.0, y: 1.25, z: 0.72 };
const ORBIT_MOBILE = { theta: 8, phi: 78, radius: 1.7 };
const FOV_MOBILE = 24;

/* Tipado opcional del custom element */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        exposure?: string | number;
        "camera-controls"?: boolean;
        "camera-orbit"?: string;
        "camera-target"?: string;
        "field-of-view"?: string;
        "min-camera-orbit"?: string;
        "max-camera-orbit"?: string;
        "min-field-of-view"?: string;
        "max-field-of-view"?: string;
        "interaction-prompt"?: "none" | "auto" | "when-focused";
        "rotation-per-second"?: string;
        "auto-rotate"?: boolean;
        "touch-action"?: string;
        bounds?: "tight" | "legacy";
        autoplay?: boolean;
        tabIndex?: number;
        ar?: boolean;
        "ar-modes"?: string;
        "shadow-intensity"?: string | number;
        alt?: string;
        loaded?: boolean;
        // API públicas útiles:
        jumpCameraToGoal?: () => void;
        getCameraOrbit?: () => { theta: number; phi: number; radius: number };
        setAttribute: (name: string, value: string | boolean) => void;
        autoRotate?: boolean;
      };
    }
  }
}

export default function Home() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [immersive, setImmersive] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true); // ⏯️ estado de rotación
  const [isMobile, setIsMobile] = useState(false);

  const viewerRef = useRef<HTMLElement | null>(null);
  const pressTimer = useRef<number | null>(null); // autorepeat D-Pad

  // Detecta móvil (≤768px)
  useEffect(() => {
    const q = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(q.matches);
    update();
    q.addEventListener("change", update);
    return () => q.removeEventListener("change", update);
  }, []);

  // Respeta prefers-reduced-motion
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(m.matches);
    update();
    m.addEventListener("change", update);
    return () => m.removeEventListener("change", update);
  }, []);

  // Encadre inicial (doble fijación para evitar saltos)
  useEffect(() => {
    const el = viewerRef.current as any;
    if (!el) return;

    const T = isMobile ? TARGET_MOBILE : TARGET_BASE;
    const O = isMobile ? ORBIT_MOBILE : ORBIT_BASE;
    const F = isMobile ? FOV_MOBILE : FOV_BASE;

    const applyStartView = () => {
      el.setAttribute("camera-target", `${T.x}m ${T.y}m ${T.z}m`);
      el.setAttribute("camera-orbit", `${O.theta}deg ${O.phi}deg ${O.radius}m`);
      el.setAttribute("field-of-view", `${F}deg`);
      if (typeof el.jumpCameraToGoal === "function") el.jumpCameraToGoal();

      requestAnimationFrame(() => {
        el.setAttribute("camera-target", `${T.x}m ${T.y}m ${T.z}m`);
        el.setAttribute("camera-orbit", `${O.theta}deg ${O.phi}deg ${O.radius}m`);
        el.setAttribute("field-of-view", `${F}deg`);
        if (typeof el.jumpCameraToGoal === "function") el.jumpCameraToGoal();
      });
    };

    if ((el as any).loaded) applyStartView();
    else {
      el.addEventListener("load", applyStartView, { once: true });
      return () => el.removeEventListener("load", applyStartView);
    }
  }, [isMobile]);

  /* ======== Play/Pause robusto ======== */
  // Aplica el estado de auto-rotación al elemento real SIEMPRE que cambie.
  useEffect(() => {
    const el = viewerRef.current as any;
    if (!el) return;
    el.autoRotate = autoRotate && !reducedMotion;
    // También reflejamos como atributo (por si cambia por SSR/attrs)
    if (el.autoRotate) el.setAttribute("auto-rotate", "");
    else el.removeAttribute?.("auto-rotate");
  }, [autoRotate, reducedMotion]);

  /* ===== Helpers de cámara (D-Pad / teclado) ===== */
  const parseOrbit = () => {
    const el = viewerRef.current as any;
    const orbit = (el?.getAttribute("camera-orbit") ||
      `${ORBIT_BASE.theta}deg ${ORBIT_BASE.phi}deg ${ORBIT_BASE.radius}m`).split(" ");
    const toNum = (s: string, unit: string) =>
      parseFloat(s.endsWith(unit) ? s.slice(0, -unit.length) : s);
    const fovStr = el?.getAttribute("field-of-view") || `${FOV_BASE}deg`;
    return {
      theta: toNum(orbit[0] ?? "0deg", "deg"),
      phi: toNum(orbit[1] ?? "60deg", "deg"),
      radius: toNum(orbit[2] ?? "2m", "m"),
      fov: toNum(fovStr, "deg"),
    };
  };
  const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

  const setOrbit = (d: { dTheta?: number; dPhi?: number; dRadius?: number; dFov?: number }) => {
    const el = viewerRef.current as any;
    if (!el) return;

    // Al mover manualmente, pausamos y lo reflejamos en el elemento
    setAutoRotate(false);
    el.autoRotate = false;
    el.removeAttribute?.("auto-rotate");

    const { theta, phi, radius, fov } = parseOrbit();
    const next = {
      theta: (theta + (d.dTheta ?? 0) + 360) % 360,
      phi: clamp(phi + (d.dPhi ?? 0), 8, 90),
      radius: clamp(radius + (d.dRadius ?? 0), 1.0, 4.0),
      fov: clamp(fov + (d.dFov ?? 0), 18, 55),
    };
    el.setAttribute("camera-orbit", `${next.theta}deg ${next.phi}deg ${next.radius}m`);
    el.setAttribute("field-of-view", `${next.fov}deg`);
    if (typeof el.jumpCameraToGoal === "function") el.jumpCameraToGoal();
  };

  const resetView = () => {
    const el = viewerRef.current as any;
    if (!el) return;
    const T = isMobile ? TARGET_MOBILE : TARGET_BASE;
    const O = isMobile ? ORBIT_MOBILE : ORBIT_BASE;
    const F = isMobile ? FOV_MOBILE : FOV_BASE;
    el.setAttribute("camera-target", `${T.x}m ${T.y}m ${T.z}m`);
    el.setAttribute("camera-orbit", `${O.theta}deg ${O.phi}deg ${O.radius}m`);
    el.setAttribute("field-of-view", `${F}deg`);
    if (typeof el.jumpCameraToGoal === "function") el.jumpCameraToGoal();
  };

  // Teclado (desktop). Space = Pause/Play
  useEffect(() => {
    const el = viewerRef.current as any;
    if (!el) return;
    el.setAttribute("tabindex", "0");

    const onKey = (e: KeyboardEvent) => {
      const active = immersive || document.activeElement === el;
      if (!active) return;

      const stepTheta = 6,
        stepPhi = 4,
        stepRad = 0.14,
        stepFov = 2;
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          setOrbit({ dTheta: -stepTheta });
          break;
        case "ArrowRight":
          e.preventDefault();
          setOrbit({ dTheta: stepTheta });
          break;
        case "ArrowUp":
          e.preventDefault();
          setOrbit({ dPhi: -stepPhi });
          break;
        case "ArrowDown":
          e.preventDefault();
          setOrbit({ dPhi: stepPhi });
          break;
        case "+":
        case "=":
          e.preventDefault();
          setOrbit({ dRadius: -stepRad });
          break;
        case "-":
        case "_":
          e.preventDefault();
          setOrbit({ dRadius: stepRad });
          break;
        case "[":
          e.preventDefault();
          setOrbit({ dFov: -stepFov });
          break;
        case "]":
          e.preventDefault();
          setOrbit({ dFov: stepFov });
          break;
        case "0":
          e.preventDefault();
          resetView();
          break;
        case " ":
          e.preventDefault();
          setAutoRotate((v) => !v); // useEffect aplicará a <model-viewer>
          break;
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [immersive, isMobile]);

  // Autorepeat D-Pad
  const startRepeat = (fn: () => void) => {
    fn();
    stopRepeat();
    pressTimer.current = window.setTimeout(() => {
      pressTimer.current = window.setInterval(fn, 70) as unknown as number;
    }, 240);
  };
  const stopRepeat = () => {
    if (pressTimer.current) {
      window.clearTimeout(pressTimer.current);
      // @ts-ignore
      window.clearInterval(pressTimer.current);
      pressTimer.current = null;
    }
  };

  return (
    <>
      {/* Carga del web component */}
      <Script
        id="model-viewer"
        type="module"
        strategy="afterInteractive"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      />

      <Navbar />

      {/* HERO con 3D de fondo */}
      <main className="relative min-h-[90vh] bg-hero overflow-hidden">
        {/* Glow */}
        <motion.div
          aria-hidden
          className="absolute -z-20 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: reducedMotion ? 0.2 : 0.35, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{
            width: "70vmin",
            height: "70vmin",
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--primary) 45%, transparent), transparent 70%)",
            filter: "blur(22px)",
          }}
        />

        {/* Capa 3D */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/10 to-background/40 pointer-events-none" />
          <model-viewer
            ref={(el) => (viewerRef.current = el as unknown as HTMLElement)}
            src="/models/meow.glb"
            className="w-full h-full block"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            exposure="1.05"
            camera-controls
            camera-target={`${(isMobile ? TARGET_MOBILE : TARGET_BASE).x}m ${(isMobile ? TARGET_MOBILE : TARGET_BASE).y}m ${(isMobile ? TARGET_MOBILE : TARGET_BASE).z}m`}
            camera-orbit={`${(isMobile ? ORBIT_MOBILE : ORBIT_BASE).theta}deg ${(isMobile ? ORBIT_MOBILE : ORBIT_BASE).phi}deg ${(isMobile ? ORBIT_MOBILE : ORBIT_BASE).radius}m`}
            field-of-view={`${isMobile ? FOV_MOBILE : FOV_BASE}deg`}
            min-camera-orbit="auto 8deg 1.0m"
            max-camera-orbit="auto 90deg 4.0m"
            min-field-of-view="18deg"
            max-field-of-view="55deg"
            auto-rotate={autoRotate && !reducedMotion}
            rotation-per-second="8deg"
            autoplay
            interaction-prompt="when-focused"
            touch-action="pan-y"
            bounds="tight"
            ar
            ar-modes="webxr scene-viewer quick-look"
            shadow-intensity="0.0"
            alt="Rubic DS 3D background"
            tabIndex={0}
          />
        </div>

        {/* Botones superiores: Immersive + Pause/Play */}
        <div className="absolute right-3 top-3 z-20 flex gap-2">
          <button
            type="button"
            onClick={() => setImmersive((v) => !v)}
            className="rounded-xl px-3 py-1.5 text-[11px] md:text-xs border border-white/40 bg-black/30 backdrop-blur-md hover:bg-black/40 transition text-white"
            aria-pressed={immersive}
            aria-label={immersive ? "Exit immersive view" : "Enter immersive view"}
          >
            {immersive ? "Exit immersive view" : "Immersive view"}
          </button>
          <button
            type="button"
            onClick={() => setAutoRotate((v) => !v)}
            className="rounded-xl px-3 py-1.5 text-[11px] md:text-xs border border-white/40 bg-black/30 backdrop-blur-md hover:bg-black/40 transition text-white"
            aria-pressed={!autoRotate}
            aria-label={autoRotate ? "Pause rotation" : "Play rotation"}
            title="Space también pausa/reanuda"
          >
            {autoRotate ? "Pause" : "Play"}
          </button>
        </div>

        {/* HÉROE (visible salvo Immersive) */}
        <div className="relative z-10 grid place-items-center min-h-[90vh] px-4">
          <AnimatePresence initial={false}>
            {!immersive && (
              <motion.div
                key="hero-copy"
                initial={false}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 8, opacity: 0 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="max-w-3xl text-center mx-auto rounded-3xl p-5 md:p-8
                           bg-gradient-to-b from-black/40 via-black/30 to-black/20
                           backdrop-blur-md border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)]
                           pointer-events-none"
                style={{ color: "white" }}
              >
                <h1 className="h-display text-4xl leading-tight md:text-6xl font-semibold tracking-tight">
                  Rubic&apos;s <span className="text-brand">Digital</span> Solutions
                </h1>

                <p className="mt-3 text-base md:text-lg opacity-90">
                  Fast, secure websites with high-impact SEO.
                </p>

                <div className="mt-6 flex items-center justify-center gap-3">
                  <a href="/contact" className="btn-primary pointer-events-auto text-white">
                    Get a Quote
                  </a>
                  <a href="/projects" className="btn-ghost pointer-events-auto text-white">
                    See Projects
                  </a>
                </div>

                <div className="mt-4 text-xs md:text-sm opacity-80">
                  <a
                    href="/projects"
                    className="underline underline-offset-4 hover:no-underline pointer-events-auto text-white"
                  >
                    Core Web Vitals
                  </a>{" "}
                  • App-Ready • Secure by Design
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Panel de control — SOLO en Immersive (compacto y ordenado) */}
        {immersive && (
          <div className="absolute right-3 bottom-3 z-20 md:right-4 md:bottom-4 flex items-end gap-2">
            {/* D-Pad en rombo */}
            <div className="rounded-2xl bg-black/30 backdrop-blur-md border border-white/15 p-2 shadow-lg">
              <div className="grid grid-cols-3 gap-1.5 select-none">
                <span />
                <PadButton onStart={() => startRepeat(() => setOrbit({ dPhi: -2.0 }))} onEnd={stopRepeat} ariaLabel="Up">
                  <ChevronUp />
                </PadButton>
                <span />

                <PadButton onStart={() => startRepeat(() => setOrbit({ dTheta: -3.5 }))} onEnd={stopRepeat} ariaLabel="Left">
                  <ChevronLeft />
                </PadButton>
                <PadButton onStart={resetView} onEnd={() => {}} ariaLabel="Reset view">
                  <ResetIcon />
                </PadButton>
                <PadButton onStart={() => startRepeat(() => setOrbit({ dTheta: 3.5 }))} onEnd={stopRepeat} ariaLabel="Right">
                  <ChevronRight />
                </PadButton>

                <span />
                <PadButton onStart={() => startRepeat(() => setOrbit({ dPhi: 2.0 }))} onEnd={stopRepeat} ariaLabel="Down">
                  <ChevronDown />
                </PadButton>
                <span />
              </div>
            </div>

            {/* Columna lateral: Zoom, FOV y Play/Pause */}
            <div className="rounded-2xl bg-black/30 backdrop-blur-md border border-white/15 p-2 shadow-lg grid grid-cols-1 gap-1.5">
              <PadButton onStart={() => startRepeat(() => setOrbit({ dRadius: -0.12 }))} onEnd={stopRepeat} ariaLabel="Zoom in">
                <PlusIcon />
              </PadButton>
              <PadButton onStart={() => startRepeat(() => setOrbit({ dRadius: 0.12 }))} onEnd={stopRepeat} ariaLabel="Zoom out">
                <MinusIcon />
              </PadButton>
              <PadButton onStart={() => startRepeat(() => setOrbit({ dFov: -1.0 }))} onEnd={stopRepeat} ariaLabel="Narrow FOV">
                <FovIcon minus />
              </PadButton>
              <PadButton onStart={() => startRepeat(() => setOrbit({ dFov: 1.0 }))} onEnd={stopRepeat} ariaLabel="Widen FOV">
                <FovIcon />
              </PadButton>
              <PadButton
                onStart={() => {
                  setAutoRotate((v) => !v);
                }}
                onEnd={() => {}}
                ariaLabel="Play/Pause rotation"
              >
                {autoRotate ? <PauseIcon /> : <PlayIcon />}
              </PadButton>
            </div>
          </div>
        )}
      </main>

      <ClientsStrip />
      <Showreel />
      <ServicesShowcase />
      <FloatingCTA />
      <Footer />
    </>
  );
}

/* ====== UI helpers (D-Pad con íconos SVG) ====== */
function PadButton({
  children,
  onStart,
  onEnd,
  className = "",
  ariaLabel,
}: {
  children: React.ReactNode;
  onStart: () => void;
  onEnd: () => void;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={`h-10 w-10 md:h-11 md:w-11 grid place-items-center
                  rounded-xl text-white bg-black/40 hover:bg-black/55 backdrop-blur-md border border-white/20
                  active:scale-95 transition pointer-events-auto ${className}`}
      onMouseDown={onStart}
      onMouseUp={onEnd}
      onMouseLeave={onEnd}
      onTouchStart={(e) => {
        e.preventDefault();
        onStart();
      }}
      onTouchEnd={(e) => {
        e.preventDefault();
        onEnd();
      }}
    >
      {children}
    </button>
  );
}

/* Iconos SVG */
function ChevronUp() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M6 14l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ChevronDown() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M18 10l-6 6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ChevronLeft() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M14 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M10 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PlusIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function MinusIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function ResetIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M3 12a9 9 0 1 0 3-6.7M3 5v4h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function FovIcon({ minus }: { minus?: boolean }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 12h16M4 12l4-4M4 12l4 4M20 12l-4-4M20 12l-4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {minus ? <path d="M8 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /> : null}
    </svg>
  );
}
function PauseIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M8 5h3v14H8zM13 5h3v14h-3z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
function PlayIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M8 5l10 7-10 7V5z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
