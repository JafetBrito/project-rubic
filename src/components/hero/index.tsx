"use client";

import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";
import PadButton from "./pad-button";
import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  PlusIcon,
  MinusIcon,
  ResetIcon,
  FovIcon,
  PauseIcon,
  PlayIcon,
} from "./icons";
import {
  useHeroControls,
  TARGET_BASE,
  ORBIT_BASE,
  FOV_BASE,
  TARGET_MOBILE,
  ORBIT_MOBILE,
  FOV_MOBILE,
} from "./use-hero-controls";
/* eslint-disable @typescript-eslint/no-namespace */
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
        jumpCameraToGoal?: () => void;
        getCameraOrbit?: () => {
          theta: number;
          phi: number;
          radius: number;
        };
        setAttribute: (name: string, value: string | boolean) => void;
        autoRotate?: boolean;
      };
    }
  }
}
/* eslint-enable @typescript-eslint/no-namespace */

export default function Hero() {
  const {
    viewerRef,
    reducedMotion,
    immersive,
    setImmersive,
    autoRotate,
    setAutoRotate,
    startRepeat,
    stopRepeat,
    setOrbit,
    resetView,
    isMobile,
  } = useHeroControls();

  const target = isMobile ? TARGET_MOBILE : TARGET_BASE;
  const orbit = isMobile ? ORBIT_MOBILE : ORBIT_BASE;
  const fov = isMobile ? FOV_MOBILE : FOV_BASE;

  return (
    <>
      <Script
        id="model-viewer"
        type="module"
        strategy="afterInteractive"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      />

      <section className="relative min-h-[90vh] bg-hero overflow-hidden">
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

        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/10 to-background/40 pointer-events-none" />
          <model-viewer
            ref={(el) => (viewerRef.current = el as unknown as HTMLElement)}
            src="/models/meow.glb"
            className="w-full h-full block"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            exposure="1.05"
            camera-controls
            camera-target={`${target.x}m ${target.y}m ${target.z}m`}
            camera-orbit={`${orbit.theta}deg ${orbit.phi}deg ${orbit.radius}m`}
            field-of-view={`${fov}deg`}
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

        <div className="relative z-10 grid place-items-center min-h-[90vh] px-4">
          <AnimatePresence initial={false}>
            {!immersive && (
              <motion.div
                key="hero-copy"
                initial={false}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 8, opacity: 0 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="max-w-3xl text-center mx-auto rounded-3xl p-5 md:p-8 bg-gradient-to-b from-black/40 via-black/30 to-black/20 backdrop-blur-md border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)] pointer-events-none"
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

        {immersive && (
          <div className="absolute right-3 bottom-3 z-20 md:right-4 md:bottom-4 flex items-end gap-2">
            <div className="rounded-2xl bg-black/30 backdrop-blur-md border border-white/15 p-2 shadow-lg">
              <div className="grid grid-cols-3 gap-1.5 select-none">
                <span />
                <PadButton
                  onStart={() => startRepeat(() => setOrbit({ dPhi: -2.0 }))}
                  onEnd={stopRepeat}
                  ariaLabel="Up"
                >
                  <ChevronUp />
                </PadButton>
                <span />

                <PadButton
                  onStart={() => startRepeat(() => setOrbit({ dTheta: -3.5 }))}
                  onEnd={stopRepeat}
                  ariaLabel="Left"
                >
                  <ChevronLeft />
                </PadButton>
                <PadButton onStart={resetView} onEnd={() => {}} ariaLabel="Reset view">
                  <ResetIcon />
                </PadButton>
                <PadButton
                  onStart={() => startRepeat(() => setOrbit({ dTheta: 3.5 }))}
                  onEnd={stopRepeat}
                  ariaLabel="Right"
                >
                  <ChevronRight />
                </PadButton>

                <span />
                <PadButton
                  onStart={() => startRepeat(() => setOrbit({ dPhi: 2.0 }))}
                  onEnd={stopRepeat}
                  ariaLabel="Down"
                >
                  <ChevronDown />
                </PadButton>
                <span />
              </div>
            </div>

            <div className="rounded-2xl bg-black/30 backdrop-blur-md border border-white/15 p-2 shadow-lg grid grid-cols-1 gap-1.5">
              <PadButton
                onStart={() => startRepeat(() => setOrbit({ dRadius: -0.12 }))}
                onEnd={stopRepeat}
                ariaLabel="Zoom in"
              >
                <PlusIcon />
              </PadButton>
              <PadButton
                onStart={() => startRepeat(() => setOrbit({ dRadius: 0.12 }))}
                onEnd={stopRepeat}
                ariaLabel="Zoom out"
              >
                <MinusIcon />
              </PadButton>
              <PadButton
                onStart={() => startRepeat(() => setOrbit({ dFov: -1.0 }))}
                onEnd={stopRepeat}
                ariaLabel="Narrow FOV"
              >
                <FovIcon minus />
              </PadButton>
              <PadButton
                onStart={() => startRepeat(() => setOrbit({ dFov: 1.0 }))}
                onEnd={stopRepeat}
                ariaLabel="Widen FOV"
              >
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
      </section>
    </>
  );
}
