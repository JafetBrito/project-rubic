"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Suspense, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Tag, ChevronLeft, ChevronRight, Shield, Lock, Cpu } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

/* 
BLOG — Rubic Digital Solutions
- Hero with 3D rotating globe (same concept as About’s “world”), high-visibility.
- Formal cybersecurity content.
- One cover image per post (tech-related).
- UTC date formatting to avoid hydration mismatch.
- Numeric pagination UI (stub).
*/

// -------------------- Data --------------------

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;      // ISO YYYY-MM-DD (UTC safe)
  tags: string[];
  cover: string;     // ~1200x800
  coverAlt: string;
};

const POSTS: Post[] = [
  {
    slug: "zero-trust-for-smb",
    title: "Zero Trust for SMBs: Pragmatic, Low-Friction Adoption",
    excerpt:
      "How to implement segmentation, strong auth, and least-privilege without disrupting operations.",
    date: "2025-08-09",
    tags: ["strategy", "access", "zero-trust"],
    cover:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1200&h=800&fit=crop&auto=format",
    coverAlt: "PCB with green lights suggesting secure infrastructure",
  },
  {
    slug: "hardening-nextjs",
    title: "Hardening Next.js: Security Headers, CSP & Input Hygiene",
    excerpt:
      "Baseline headers, origin isolation, validation, and logging for business-grade web apps.",
    date: "2025-08-04",
    tags: ["nextjs", "csp", "headers"],
    cover:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1200&h=800&fit=crop&auto=format",
    coverAlt: "Laptop showing code in a focused technical workspace",
  },
  {
    slug: "incident-response-runbook",
    title: "Incident Response Runbook: Prepare, Execute, Improve",
    excerpt:
      "A minimal, effective structure to detect, contain, and eradicate threats with clear comms and post-mortems.",
    date: "2025-07-28",
    tags: ["ir", "operations", "risk"],
    cover:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1200&h=800&fit=crop&auto=format",
    coverAlt: "Datacenter corridor with green monitoring lights",
  },
];

// UTC-safe date (no hydration mismatch)
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
function formatDateUTC(isoDate: string) {
  const d = new Date(`${isoDate}T00:00:00Z`);
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}

// -------------------- Anim helpers --------------------

function useAnims() {
  const reduceMotion = useReducedMotion();
  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };
  const stagger = {
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.08, delayChildren: 0.05 },
    },
  };
  return { reduceMotion, fadeUp, stagger };
}

// -------------------- 3D Globe --------------------

function RotatingGlobe({ reduce }: { reduce: boolean }) {
  // Slow, smooth rotation; pause if reduced motion is requested.
  useFrame((state) => {
    if (reduce) return;
    const t = state.clock.getElapsedTime();
    state.scene.rotation.y = t * 0.08; // gentle spin
  });

  // Wireframe sphere + subtle “atmosphere”
  return (
    <group position={[0, 0, 0]}>
      <mesh>
        <icosahedronGeometry args={[1.25, 5]} />
        <meshStandardMaterial wireframe color={"#22d3ee"} transparent opacity={0.7} />
      </mesh>

      {/* Atmosphere glow */}
      <mesh>
        <icosahedronGeometry args={[1.26, 5]} />
        <meshStandardMaterial
          color={"#22d3ee"}
          transparent
          opacity={0.09}
          emissive={"#22d3ee"}
          emissiveIntensity={0.6}
        />
      </mesh>
    </group>
  );
}

function GlobeCanvas() {
  const { reduceMotion } = useAnims();

  return (
    <div
      className="absolute inset-0 -z-10 pointer-events-none"
      aria-hidden
      // light/dark aware gradient behind the globe
      style={{
        background:
          "radial-gradient(900px 360px at 50% -5%, color-mix(in oklab, var(--primary) 34%, transparent), transparent 60%)",
        filter: "blur(2px)",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 4, 5]} intensity={1.2} />
        <Suspense fallback={null}>
          <RotatingGlobe reduce={!!reduceMotion} />
        </Suspense>
        {/* Controls disabled (static orbit), but allows pinch/drag if you enable later */}
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}

// -------------------- Page --------------------

export default function BlogPage() {
  const { fadeUp, stagger } = useAnims();

  return (
    <>
      <Navbar />

      {/* ===== HERO (3D Globe, high-visibility) ===== */}
      <section className="relative overflow-hidden px-6 py-24 text-center">
        <GlobeCanvas />

        <motion.div
          className="mx-auto max-w-3xl relative"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <h1 className="h-display text-4xl md:text-6xl font-bold tracking-tight">
            Cybersecurity <span className="text-brand">Insights</span>
          </h1>
          <p
            className="mt-4 text-lg md:text-xl mx-auto max-w-2xl"
            style={{ color: "color-mix(in oklab, var(--foreground) 72%, transparent)" }}
          >
            Practical, verified guidance for secure, fast, and resilient digital products —
            from Zero Trust strategy to app hardening and incident response.
          </p>
        </motion.div>

        {/* Compact bullets */}
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <Bullet icon={<Shield className="w-4 h-4" />} text="Verifiable best practices" />
          <Bullet icon={<Lock className="w-4 h-4" />} text="Privacy & compliance aware" />
          <Bullet icon={<Cpu className="w-4 h-4" />} text="Performance + security first" />
        </motion.div>
      </section>

      {/* ===== Controls (Categories / Tags) ===== */}
      <section className="mx-auto max-w-6xl px-6 pt-2 pb-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h2 className="sr-only">Categories</h2>
            <div className="flex flex-wrap items-center gap-2">
              {["All", "Strategy", "Applications", "Operations", "Compliance"].map((c) => (
                <button
                  key={c}
                  className="px-3 py-1.5 rounded-lg border border-soft bg-[color-mix(in_oklab,var(--background)_92%,transparent)] hover:bg-[color-mix(in_oklab,var(--background)_86%,transparent)] transition"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="md:text-right">
            <h2 className="sr-only">Popular tags</h2>
            <div className="inline-flex flex-wrap items-center gap-2">
              {["zero-trust", "csp", "headers", "ir", "risk"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-soft text-xs bg-[color-mix(in_oklab,var(--background)_94%,transparent)]"
                >
                  <Tag className="w-3.5 h-3.5" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Posts grid ===== */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl border border-soft overflow-hidden bg-[color-mix(in_oklab,var(--background)_96%,transparent)] hover:shadow-lg transition-shadow"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.cover}
                    alt={post.coverAlt}
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </div>
              </Link>

              <div className="p-4">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" aria-hidden />
                    {formatDateUTC(post.date)}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5" aria-hidden />
                    {post.tags.join(", ")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-2 font-semibold leading-snug">
                  <Link href={`/blog/${post.slug}`} className="nav-link nav-link--active">
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {post.excerpt}
                </p>

                <div className="mt-3">
                  <Link href={`/blog/${post.slug}`} className="btn-ghost text-sm">
                    Read article →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ===== Numeric pagination (UI only) ===== */}
        <nav className="mt-6 flex items-center justify-center gap-1" aria-label="Blog pagination">
          <button className="btn-ghost text-sm inline-flex items-center gap-1" aria-label="Previous page">
            <ChevronLeft className="w-4 h-4" /> Prev
          </button>

          {[1, 2, 3, 4].map((n, i) => (
            <button
              key={n}
              className={`px-3 py-1.5 rounded-lg border text-sm ${
                i === 0
                  ? "bg-brand text-[var(--on-primary)] border-transparent"
                  : "border-soft bg-[color-mix(in_oklab,var(--background)_92%,transparent)] hover:bg-[color-mix(in_oklab,var(--background)_86%,transparent)]"
              }`}
              aria-current={i === 0 ? "page" : undefined}
            >
              {n}
            </button>
          ))}

          <button className="btn-ghost text-sm inline-flex items-center gap-1" aria-label="Next page">
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </nav>
      </section>

      <Footer />
    </>
  );
}

// -------------------- Small bits --------------------

function Bullet({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-soft px-3 py-1.5 bg-[color-mix(in_oklab,var(--background)_92%,transparent)]">
      <span className="text-brand">{icon}</span>
      <span className="text-sm">{text}</span>
    </div>
  );
}
