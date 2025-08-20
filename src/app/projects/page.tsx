import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import ProjectCard, { Project } from "@/components/project-card";
import { Gauge, Rocket, ShieldCheck } from "lucide-react";

/* ==========================================================
   Projects — Rubic Digital Solutions
   - HERO limpio (sin efecto de letras, sin botones)
   - Fondo con grid animada sutil
   - Chips de métricas (performance / conversions / security)
   - Grid de proyectos
   ========================================================== */

const PROJECTS: Project[] = [
  {
    slug: "speed-boost-marketplace",
    title: "Marketplace Performance Upgrade",
    summary:
      "App Router migration, CDN/image strategy and caching → +38% conversion.",
    image: "/images/projects/meow1.jpg",
    tags: ["Next.js", "Edge", "Image Opt", "SEO"],
  },
  {
    slug: "saas-landing-redesign",
    title: "SaaS Landing Redesign",
    summary: "New IA, clearer story and micro-UX → bounce −24%, trials +31%.",
    image: "/images/projects/meow1.jpg",
    tags: ["UX", "Tailwind", "CRO"],
  },
  {
    slug: "local-business-seo",
    title: "Local Business SEO",
    summary: "Technical SEO + content structure → Top-3 for 7 core keywords.",
    image: "/images/projects/meow1.jpg",
    tags: ["SEO", "Schema", "Content"],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      {/* ===== HERO limpio ===== */}
      <section className="relative overflow-hidden projects-hero">
        <div aria-hidden className="projects-hero__bg" />

        <Container>
          <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-16 md:pt-28 md:pb-24 text-center">
            <h1 className="h-display text-4xl md:text-6xl font-semibold tracking-tight">
              Projects that perform
            </h1>

            <p
              className="mt-4 text-base md:text-lg"
              style={{
                color: "color-mix(in oklab, var(--foreground) 72%, transparent)",
              }}
            >
              Outcomes where speed, security, and design deliver measurable growth.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-soft bg-surface p-4">
                <div className="flex items-center justify-center gap-2">
                  <Gauge className="w-5 h-5 text-brand" aria-hidden />
                  <span className="text-sm">+30–60% CWV</span>
                </div>
              </div>
              <div className="rounded-xl border border-soft bg-surface p-4">
                <div className="flex items-center justify-center gap-2">
                  <Rocket className="w-5 h-5 text-brand" aria-hidden />
                  <span className="text-sm">+20–40% Conversions</span>
                </div>
              </div>
              <div className="rounded-xl border border-soft bg-surface p-4">
                <div className="flex items-center justify-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand" aria-hidden />
                  <span className="text-sm">Security-first</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== Grid de proyectos ===== */}
      <Section>
        <Container>
          <header className="text-center md:text-left">
            <h2 className="h3">Selected Work</h2>
            <p className="mt-2 text-body text-gray-500 dark:text-gray-400">
              Performance, UX and SEO—shipped with accountability.
            </p>
          </header>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  );
}
