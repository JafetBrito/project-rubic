"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export const TARGET_BASE = { x: 0.0, y: 1.25, z: 0.72 };
export const ORBIT_BASE = { theta: 8, phi: 78, radius: 2.36 };
export const FOV_BASE = 28;

export const TARGET_MOBILE = { x: 0.0, y: 1.25, z: 0.72 };
export const ORBIT_MOBILE = { theta: 8, phi: 78, radius: 1.7 };
export const FOV_MOBILE = 24;

interface ModelViewerElement extends HTMLElement {
  jumpCameraToGoal?: () => void;
  getCameraOrbit?: () => { theta: number; phi: number; radius: number };
  autoRotate?: boolean;
  loaded?: boolean;
}

export function useHeroControls() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [immersive, setImmersive] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const viewerRef = useRef<ModelViewerElement | null>(null);
  const pressTimer = useRef<number | null>(null);

  useEffect(() => {
    const q = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(q.matches);
    update();
    q.addEventListener("change", update);
    return () => q.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(m.matches);
    update();
    m.addEventListener("change", update);
    return () => m.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = viewerRef.current;
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

    if (el.loaded) applyStartView();
    else {
      el.addEventListener("load", applyStartView, { once: true });
      return () => el.removeEventListener("load", applyStartView);
    }
  }, [isMobile]);

  useEffect(() => {
    const el = viewerRef.current;
    if (!el) return;
    el.autoRotate = autoRotate && !reducedMotion;
    if (el.autoRotate) el.setAttribute("auto-rotate", "");
    else el.removeAttribute?.("auto-rotate");
  }, [autoRotate, reducedMotion]);

  const parseOrbit = () => {
    const el = viewerRef.current;
    const orbit = (
      el?.getAttribute("camera-orbit") ||
      `${ORBIT_BASE.theta}deg ${ORBIT_BASE.phi}deg ${ORBIT_BASE.radius}m`
    ).split(" ");
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

  const clamp = (v: number, min: number, max: number) =>
    Math.min(Math.max(v, min), max);

  const setOrbit = useCallback((d: {
    dTheta?: number;
    dPhi?: number;
    dRadius?: number;
    dFov?: number;
  }) => {
    const el = viewerRef.current;
    if (!el) return;

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
    el.setAttribute(
      "camera-orbit",
      `${next.theta}deg ${next.phi}deg ${next.radius}m`
    );
    el.setAttribute("field-of-view", `${next.fov}deg`);
    if (typeof el.jumpCameraToGoal === "function") el.jumpCameraToGoal();
  }, []);

  const resetView = useCallback(() => {
    const el = viewerRef.current;
    if (!el) return;
    const T = isMobile ? TARGET_MOBILE : TARGET_BASE;
    const O = isMobile ? ORBIT_MOBILE : ORBIT_BASE;
    const F = isMobile ? FOV_MOBILE : FOV_BASE;
    el.setAttribute("camera-target", `${T.x}m ${T.y}m ${T.z}m`);
    el.setAttribute("camera-orbit", `${O.theta}deg ${O.phi}deg ${O.radius}m`);
    el.setAttribute("field-of-view", `${F}deg`);
    if (typeof el.jumpCameraToGoal === "function") el.jumpCameraToGoal();
  }, [isMobile]);

  useEffect(() => {
    const el = viewerRef.current;
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
          setAutoRotate((v) => !v);
          break;
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [immersive, isMobile, resetView, setOrbit, setAutoRotate]);

  const startRepeat = (fn: () => void) => {
    fn();
    stopRepeat();
    pressTimer.current = window.setTimeout(() => {
      pressTimer.current = window.setInterval(fn, 70);
    }, 240);
  };

  const stopRepeat = () => {
    if (pressTimer.current) {
      window.clearTimeout(pressTimer.current);
      window.clearInterval(pressTimer.current);
      pressTimer.current = null;
    }
  };

  return {
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
  };
}
