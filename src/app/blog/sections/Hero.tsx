// src/app/about/sections/Hero.tsx
"use client";

import { Suspense, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function useAnims() {
  const reduce = useReducedMotion();
  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 14 },
    visible: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.5 } },
  };
  return { fadeUp };
}

/* ====== 3D Waves ====== */
function WavePlane() {
  const meshRef = useRef<any>(null);

  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const t = clock.getElapsedTime();
    const pos = mesh.geometry.attributes.position;
    const count = pos.count;

    for (let i = 0; i < count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z =
        Math.sin(x * 0.5 + t * 1.25) * 0.2 +
        Math.cos(y * 0.45 + t * 1.05) * 0.16;
      pos.setZ(i, z);
    }
    pos.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.6, 0]}>
      <planeGeometry args={[14, 10, 120, 100]} />
      <meshStandardMaterial color="#22d3ee" wireframe transparent opacity={0.45} />
    </mesh>
  );
}

function WavesCanvas() {
  return (
    <div className="absolute inset-0 -z-20 pointer-events-none" aria-hidden>
      <Canvas camera={{ position: [0, 2.6, 6], fov: 55 }} dpr={[1, 2]}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 5, 3]} intensity={1.2} />
        <Suspense fallback={null}>
          <WavePlane />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}

/* ====== Hero ====== */
export function Hero() {
  const { fadeUp } = useAnims();

  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32 text-center">
      <WavesCanvas />

      {/* sutil glow, no bloquea */}
      <div
        aria-hidden
        className="absolute inset-0 -z-30"
        style={{
          background:
            "radial-gradient(850px 340px at 50% -6%, color-mix(in oklab, var(--primary) 28%, transparent), transparent 60%)",
        }}
      />

      <motion.div
        className="mx-auto max-w-4xl relative flex flex-col items-center"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        {/* Heading: forzamos negro en light y claro en dark */}
        <h1
          className="
            relative inline-block
            text-4xl md:text-6xl font-bold tracking-tight
            !text-slate-900 dark:!text-slate-100
            px-3 md:px-4 py-1.5 md:py-2 rounded-xl
          "
          // respaldo inline por si hay estilos globales que sobreescriben
          style={{
            color: "rgb(15,23,42)", // slate-900
            background: "rgba(255,255,255,0.08)", // aún más sutil
            backdropFilter: "blur(4px)",
          }}
        >
          Building a <span className="text-brand">Safer</span> Digital World
        </h1>

        {/* Paragraph: igual, negro en light y claro en dark */}
        <p
          className="
            mt-4 md:mt-5
            inline-block
            text-base md:text-xl
            !text-slate-900 dark:!text-slate-200
            px-3 md:px-4 py-2 rounded-xl
            max-w-3xl
          "
          style={{
            color: "rgb(15,23,42)", // slate-900 (light)
            background: "rgba(255,255,255,0.06)", // aún más sutil
            backdropFilter: "blur(3px)",
          }}
        >
          At Rubic’s Digital Solutions, we combine software engineering,
          cybersecurity, AI, and software architecture to deliver secure,
          privacy-first, and high-performance digital experiences that scale
          with your business.
        </p>
      </motion.div>
    </section>
  );
}

export default Hero;
