// src/app/mission/page.tsx
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

/**
 * Mission — Building a Safer Digital World
 * - Long-form, editorial-style, EN + FR in a single flowing article.
 * - Inline maple leaf SVG (no external URL, no extra libs).
 * - One colorful callout (theme-aware), minimal “sections”.
 * - SSR-safe, no client hooks.
 */

function MapleLeaf({
  className = "w-5 h-5",
}: {
  className?: string;
}) {
  // Inline maple leaf (accessible). If you prefer emoji, use 🍁.
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2l2.1 3.5 3.9-.3-2.3 3.3 2.3 3.3-3.9-.3L12 15l-2.1-3.5-3.9.3 2.3-3.3-2.3-3.3 3.9.3L12 2z"
        // soft red that adapts via color-mix to theme
        fill="currentColor"
      />
    </svg>
  );
}

export default function MissionPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Title area (minimal, keeps focus on the prose) */}
        <section className="relative overflow-hidden pt-16 pb-6 md:pt-24 md:pb-8">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-soft bg-surface/70 px-3 py-1 text-xs tracking-wide">
                <MapleLeaf className="w-4 h-4 text-[color-mix(in_oklab,crimson_65%,var(--foreground)_35%)]" />
                <span>Proudly Canadian • Fièrement canadien</span>
              </div>
              <h1 className="h-display mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
                Building a Safer Digital World
              </h1>
              <p
                className="mt-4 text-base md:text-lg"
                style={{
                  color:
                    "color-mix(in oklab, var(--foreground) 72%, transparent)",
                }}
              >
                Rubic’s Digital Solutions — security-first engineering, trusted delivery,
                and measurable outcomes for organizations in Canada and beyond.
              </p>
            </div>
          </Container>
        </section>

        {/* Long-form article (EN + FR), one flow */}
        <Section>
          <Container>
            <article className="mx-auto max-w-3xl leading-relaxed">
              {/* Callout with color */}
              <div
                className="mb-8 rounded-2xl border p-5"
                style={{
                  borderColor:
                    "color-mix(in oklab, var(--primary) 45%, transparent)",
                  background:
                    "linear-gradient(180deg, color-mix(in oklab, var(--primary) 12%, transparent), transparent 85%)",
                }}
              >
                <p className="text-sm md:text-[15px]">
                  <strong>Our commitment:</strong> safeguard people, data, and
                  businesses through responsible engineering. From the first line
                  of code to the last deployment, we build with security,
                  performance, and clarity in mind.
                </p>
              </div>

              {/* ————— English ————— */}
              <h2 className="text-xl md:text-2xl font-semibold">
                Our Mission (EN)
              </h2>
              <p className="mt-3">
                At Rubic’s Digital Solutions, <em>“Building a Safer Digital
                World”</em> is more than a slogan—it is how we design, build,
                and operate technology. We embed cybersecurity into the fabric
                of every website, application, and platform we deliver. We care
                deeply about reliability and speed, but we never trade them for
                safety. Your users deserve experiences that are fast, private,
                accessible, and resilient.
              </p>
              <p className="mt-4">
                From Canada, we serve clients across sectors with a balanced
                approach: security-first architecture; performance budgets and
                Core Web Vitals as a baseline; clear KPIs that map engineering
                work to business outcomes. We believe in transparent processes,
                evidence-driven decisions, and documentation that empowers your
                team long after launch.
              </p>
              <p className="mt-4">
                Practically, this means threat modeling before features;
                least-privilege by default; code reviews that catch more than
                style; CI/CD with quality gates (SAST/SCA/tests); observability
                that turns incidents into learnings; and privacy that respects
                people, not just checklists. We focus on:{" "}
                <strong>Cybersecurity</strong>, <strong>Websites</strong> (Next.js),
                <strong> Software</strong>, <strong>Apps</strong>,{" "}
                <strong>SEO</strong> &amp; <strong>Growth</strong>,{" "}
                <strong>Video</strong>, and <strong>Cloud/DevOps</strong>.
              </p>

              {/* Subtle divider (not a hard section) */}
              <hr
                className="my-8"
                style={{
                  borderColor:
                    "color-mix(in oklab, var(--foreground) 15%, transparent)",
                }}
              />

              {/* ————— Français ————— */}
              <h2 className="text-xl md:text-2xl font-semibold">
                Notre Mission (FR)
              </h2>
              <p className="mt-3">
                Chez Rubic’s Digital Solutions, <em>« Bâtir un monde numérique
                plus sûr »</em> n’est pas un simple slogan—c’est notre manière
                de concevoir, développer et exploiter la technologie. Nous
                intégrons la cybersécurité au cœur de chaque site web,
                application et plateforme que nous livrons. Nous valorisons la
                fiabilité et la rapidité, sans jamais compromettre la sécurité.
                Vos utilisateurs méritent des expériences rapides, privées,
                accessibles et résilientes.
              </p>
              <p className="mt-4">
                Depuis le Canada, nous accompagnons des organisations de divers
                secteurs avec une approche équilibrée : architectures orientées
                sécurité, budgets de performance et Core Web Vitals comme base,
                indicateurs clairs reliant le travail d’ingénierie aux résultats
                d’affaires. Nous croyons en la transparence, aux décisions
                guidées par la preuve et à une documentation qui renforce vos
                équipes bien après la mise en production.
              </p>
              <p className="mt-4">
                Concrètement, cela signifie : modélisation des menaces avant les
                fonctionnalités ; principe du moindre privilège par défaut ;
                revues de code qui vont au-delà du style ; CI/CD avec garde-fous
                de qualité (SAST/SCA/tests) ; observabilité transformant les
                incidents en apprentissages ; et respect de la vie privée qui
                considère les personnes, pas seulement les listes de contrôle.
                Nos domaines clés : <strong>Cybersécurité</strong>,{" "}
                <strong>Sites web</strong> (Next.js), <strong>Logiciels</strong>,{" "}
                <strong>Applications</strong>, <strong>SEO</strong> &amp;{" "}
                <strong>Croissance</strong>, <strong>Vidéo</strong> et{" "}
                <strong>Cloud/DevOps</strong>.
              </p>

              {/* Soft closing note with maple accent */}
              <div className="mt-10 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs"
                   style={{
                     background:
                       "linear-gradient(90deg, color-mix(in oklab, var(--primary) 14%, transparent), transparent 85%)",
                     border:
                       "1px solid color-mix(in oklab, var(--primary) 35%, transparent)",
                   }}>
                <MapleLeaf className="w-4 h-4 text-[color-mix(in_oklab,crimson_65%,var(--foreground)_35%)]" />
                <span>From Canada, to the world — Du Canada, vers le monde</span>
              </div>
            </article>

            {/* Single CTA line, no heavy sectioning */}
            <div className="mx-auto max-w-3xl text-center mt-10">
              <a
                href="/contact"
                className="btn-primary inline-flex items-center justify-center gap-2"
                aria-label="Start a secure project"
              >
                Start a Secure Project
              </a>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
