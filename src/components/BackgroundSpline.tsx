"use client";

import Spline from "@splinetool/react-spline/next";
import { useEffect, useState } from "react";

/**
 * Fondo 3D con Spline detrás del Hero
 * - absolute + inset-0: cubre toda el área del Hero
 * - pointer-events-none: no bloquea botones/links
 * - Monta solo en cliente para evitar rarezas de hydration
 */
export default function BackgroundSpline({
  scene,
  className = "",
}: {
  scene: string;
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 ${className}`}>
      <Spline scene={scene} />
    </div>
  );
}
