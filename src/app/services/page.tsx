import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import {
  Gauge,
  Rocket,
  ShieldCheck,
  Search,
  MonitorSmartphone,
  Wrench,
  Layers,
  Lock,
  Cpu,
  ArrowRight,
} from "lucide-react";

/* ==========================================================
   Services — Rubic Digital Solutions
   - HERO con fondo de grid animada (CSS-only; SSR-safe)
   - Grid de servicios (icon + bullets)
   - Proceso (timeline simple, responsive)
   - Pricing snapshot (3 tiers, “starting at”)
   - FAQ con <details> (sin JS extra)
   - CTA final
   ========================================================== */

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      {/* Reutiliza el fondo animado que ya tienes (projects-hero__bg) */}
      <section className="relative overflow-hidden projects-hero">
        <div aria-hidden className="projects-hero__bg" />

        <Container>
          <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-16 md:pt-28 md:pb-24 text-center">
            <h1 className="h-display text-4xl md:text-6xl font-semibold tracking-tight">
              Services that ship outcomes
            </h1>

            <p
              className="mt-4 text-base md:text-lg"
              style={{
                color: "color-mix(in oklab, var(--foreground) 72%, transparent)",
              }}
            >
              Strategy, design, performance, and security—delivered with
              measurable impact.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-soft bg-surface p-4">
                <div className="flex items-center justify-center gap-2">
                  <Gauge className="w-5 h-5 text-brand" aria-hidden />
                  <span className="text-sm">Core Web Vitals</span>
                </div>
              </div>
              <div className="rounded-xl border border-soft bg-surface p-4">
                <div className="flex items-center justify-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand" aria-hidden />
                  <span className="text-sm">Security-first</span>
                </div>
              </div>
              <div className="rounded-xl border border-soft bg-surface p-4">
                <div className="flex items-center justify-center gap-2">
                  <Rocket className="w-5 h-5 text-brand" aria-hidden />
                  <span className="text-sm">Growth-focused</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <Section>
        <Container>
          <header className="text-center md:text-left">
            <h2 className="h3">What we do</h2>
            <p className="mt-2 text-body text-gray-500 dark:text-gray-400">
              Modular engagements that match your stage—founder-led or scale-up.
            </p>
          </header>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            <ServiceCard
              Icon={MonitorSmartphone}
              title="Next.js Websites"
              bullets={[
                "App Router, Server Actions, caching",
                "Design systems with Tailwind",
                "Image/CDN strategy",
              ]}
            />
            <ServiceCard
              Icon={Gauge}
              title="Performance Upgrades"
              bullets={[
                "Core Web Vitals as a baseline",
                "Bundle & route-level budgets",
                "Edge-ready caching & ISR",
              ]}
            />
            <ServiceCard
              Icon={Search}
              title="Technical SEO"
              bullets={[
                "Sitemaps, metadata & structured data",
                "IA for content & internal linking",
                "Perf + accessibility for ranking",
              ]}
            />
            <ServiceCard
              Icon={Lock}
              title="Security Hardening"
              bullets={[
                "Headers, CSP, input sanitization",
                "Auth & least-privilege patterns",
                "Regular audits & monitoring",
              ]}
            />
            <ServiceCard
              Icon={Layers}
              title="Design Systems"
              bullets={[
                "Scalable UI kits & tokens",
                "Theme (light/dark) & a11y-ready",
                "Docs & examples for teams",
              ]}
            />
            <ServiceCard
              Icon={Wrench}
              title="Ongoing Support"
              bullets={[
                "Roadmaps, QA & releases",
                "Dashboards for KPIs",
                "On-call for spikes & incidents",
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* ===== PROCESS (TIMELINE) ===== */}
      <Section>
        <Container>
          <header className="text-center md:text-left">
            <h2 className="h3">How we work</h2>
            <p className="mt-2 text-body text-gray-500 dark:text-gray-400">
              A clear path from discovery to measurable results.
            </p>
          </header>

          <ol className="mt-10 relative border-s border-soft ms-3 space-y-8">
            <ProcessItem
              step="01"
              title="Discovery & Audit"
              desc="We align on goals, constraints, and success metrics. If you have a site, we audit performance, SEO, and security."
              Icon={Search}
            />
            <ProcessItem
              step="02"
              title="Scope & Roadmap"
              desc="A lightweight plan with milestones, owners, and KPIs. No fluff—just what we’ll deliver and when."
              Icon={Cpu}
            />
            <ProcessItem
              step="03"
              title="Build & Validate"
              desc="Short cycles, visible progress. We test for speed, a11y, and security as we go."
              Icon={Wrench}
            />
            <ProcessItem
              step="04"
              title="Launch"
              desc="Ship with monitoring, rollbacks, and dashboards. We don’t disappear after deploy."
              Icon={Rocket}
            />
            <ProcessItem
              step="05"
              title="Optimize & Grow"
              desc="We iterate based on real data—improving UX, conversion, and reliability."
              Icon={Gauge}
              last
            />
          </ol>
        </Container>
      </Section>

      {/* ===== PRICING SNAPSHOT ===== */}
      <Section>
        <Container>
          <header className="text-center md:text-left">
            <h2 className="h3">Engagements</h2>
            <p className="mt-2 text-body text-gray-500 dark:text-gray-400">
              Transparent, outcomes-first. We’ll recommend the leanest option that meets your goals.
            </p>
          </header>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Tier
              tag="Starter"
              price="from $2.5k"
              items={[
                "One-page or MVP landing",
                "Design system seed",
                "Basic analytics & SEO",
              ]}
              highlight={false}
            />
            <Tier
              tag="Growth"
              price="from $6k"
              items={[
                "Multi-page Next.js site",
                "Core Web Vitals baseline",
                "SEO + content structure",
              ]}
              highlight
            />
            <Tier
              tag="Scale"
              price="custom"
              items={[
                "Security + perf audits",
                "Design system rollout",
                "Team enablement & QA",
              ]}
              highlight={false}
            />
          </div>
        </Container>
      </Section>

      {/* ===== FAQ ===== */}
      <Section>
        <Container>
          <header className="text-center md:text-left">
            <h2 className="h3">FAQ</h2>
            <p className="mt-2 text-body text-gray-500 dark:text-gray-400">
              Short answers to common questions.
            </p>
          </header>

          <div className="mt-8 grid gap-4">
            <details className="rounded-xl border border-soft p-4">
              <summary className="cursor-pointer font-medium">How fast can we start?</summary>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Discovery usually starts within a few days. We’ll confirm scope and book the first build cycle right away.
              </p>
            </details>
            <details className="rounded-xl border border-soft p-4">
              <summary className="cursor-pointer font-medium">Do you work with existing codebases?</summary>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Yes. We audit first, then phase improvements to avoid “big bang” risks—starting with performance and security.
              </p>
            </details>
            <details className="rounded-xl border border-soft p-4">
              <summary className="cursor-pointer font-medium">Can you help after launch?</summary>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                We prefer it. Continuous iterations are how you win on SEO, conversion, and reliability.
              </p>
            </details>
          </div>
        </Container>
      </Section>

      {/* ===== CTA FINAL ===== */}
      <Section>
        <Container>
          <div className="text-center">
            <h2 className="h3">Ready to move fast—safely?</h2>
            <p
              className="mt-2 text-body"
              style={{
                color: "color-mix(in oklab, var(--foreground) 70%, transparent)",
              }}
            >
              Tell us your goal. We’ll recommend the smallest step that gets you there.
            </p>
            <div className="mt-6">
              <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                Let’s talk <ArrowRight className="w-4 h-4" aria-hidden />
              </a>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  );
}

/* =========================
   Subcomponents (server-safe)
   ========================= */

function ServiceCard({
  Icon,
  title,
  bullets,
}: {
  Icon: React.ElementType;
  title: string;
  bullets: string[];
}) {
  return (
    <article
      className="group rounded-2xl border border-soft bg-surface p-5 transition-colors"
      style={{
        background:
          "linear-gradient(180deg, color-mix(in oklab, var(--primary) 5%, transparent), transparent 65%)",
      }}
    >
      <div className="flex items-start gap-3">
        <Icon className="w-6 h-6 text-brand transition-transform duration-300 group-hover:rotate-6" />
        <div>
          <h3 className="font-semibold">{title}</h3>
          <ul className="mt-2 space-y-1 text-sm text-gray-500 dark:text-gray-400">
            {bullets.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function ProcessItem({
  step,
  title,
  desc,
  Icon,
  last = false,
}: {
  step: string;
  title: string;
  desc: string;
  Icon: React.ElementType;
  last?: boolean;
}) {
  return (
    <li className="relative ps-6">
      {/* Línea vertical (timeline) */}
      {!last && (
        <span
          className="absolute left-[-1px] top-8 block h-[calc(100%+1rem)] w-px bg-[color-mix(in_oklab,var(--foreground)_12%,transparent)]"
          aria-hidden
        />
      )}
      {/* Nodo */}
      <span className="absolute -start-3 inline-flex h-6 w-6 items-center justify-center rounded-full border border-soft bg-surface text-[11px] font-semibold">
        {step}
      </span>

      <div className="flex items-start gap-3">
        <Icon className="w-5 h-5 mt-0.5 text-brand" aria-hidden />
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{desc}</p>
        </div>
      </div>
    </li>
  );
}

function Tier({
  tag,
  price,
  items,
  highlight,
}: {
  tag: string;
  price: string;
  items: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={
        "rounded-2xl border p-6 " +
        (highlight
          ? "border-[color-mix(in_oklab,var(--primary)_40%,transparent)] bg-[color-mix(in_oklab,var(--primary)_6%,transparent)]"
          : "border-soft bg-surface")
      }
    >
      <div className="flex items-baseline justify-between">
        <h3 className="font-semibold">{tag}</h3>
        <div className="text-sm text-gray-500 dark:text-gray-400">{price}</div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
        {items.map((it) => (
          <li key={it}>• {it}</li>
        ))}
      </ul>
    </div>
  );
}
