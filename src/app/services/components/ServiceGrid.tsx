import {
  Lock,
  MonitorSmartphone,
  Code,
  Smartphone,
  Search,
  Megaphone,
  Video,
  Cloud,
  FileCheck,
  Database,
  ShoppingCart,
  Accessibility,
} from "lucide-react";
import ServiceCard from "./parts/ServiceCard";

export default function ServiceGrid() {
  return (
    <>
      <header className="text-center md:text-left">
        <h2 className="h3">What we do</h2>
        <p className="mt-2 text-body text-gray-500 dark:text-gray-400">
          Modular engagements matched to your stage—founder-led, mid-market, or scaling teams.
        </p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          Icon={Lock}
          title="Cybersecurity Engineering"
          lead="We embed security into architecture, code, and operations."
          bullets={[
            "Threat modeling & secure design",
            "Hardening: headers, CSP, auth, least privilege",
            "Static/Dynamic analysis & dependency hygiene",
            "OWASP ASVS & Top 10 alignment",
            "Continuous monitoring & incident response playbooks",
          ]}
          examples={[
            "CSP + strict headers for a fintech dashboard",
            "SSO with least-privilege RBAC for internal tools",
            "Automated SCA/SAST gates in CI",
          ]}
        />

        <ServiceCard
          Icon={MonitorSmartphone}
          title="Websites (Next.js)"
          lead="Modern, accessible websites built on App Router & Server Actions."
          bullets={[
            "Design systems with Tailwind & tokens",
            "Image/CDN strategy, ISR, route-level budgets",
            "Accessibility (WCAG) & performance-first UX",
            "Internationalization & localization",
          ]}
          examples={[
            "Marketing site with fast LCP on mobile",
            "Docs hub with MDX and search",
            "Localized site (EN/ES/FR) with routing",
          ]}
        />

        <ServiceCard
          Icon={Code}
          title="Custom Software"
          lead="From internal tools to customer platforms—built for change."
          bullets={[
            "Domain-driven design & API-first architectures",
            "Postgres/Prisma, edge caching & queues",
            "Testing pyramid, CI/CD & quality gates",
            "Observability: logs, metrics, tracing",
          ]}
          examples={[
            "Inventory & dispatch platform",
            "Partner portal with granular permissions",
            "Data exports with background workers",
          ]}
        />

        <ServiceCard
          Icon={Smartphone}
          title="Mobile Apps"
          lead="Native-feel experiences that prioritize resilience and privacy."
          bullets={[
            "React Native/Expo or platform-native",
            "Offline-first & background sync",
            "Secure storage & safe auth flows",
            "App Store/Play distribution & telemetry",
          ]}
          examples={[
            "Field ops app with offline queue",
            "Customer loyalty app with push notifications",
            "Kiosk mode for in-store devices",
          ]}
        />

        <ServiceCard
          Icon={Search}
          title="Technical SEO"
          lead="Search visibility powered by structure, speed, and semantics."
          bullets={[
            "IA, internal linking & content modeling",
            "Structured data (schema.org) & metadata",
            "Core Web Vitals & accessibility",
            "Log-based crawling insights",
          ]}
          examples={[
            "Schema for products, FAQs, and articles",
            "Fix render-blocking and CLS shifts",
            "Log analysis to prioritize crawl budget",
          ]}
        />

        <ServiceCard
          Icon={Megaphone}
          title="Growth & Marketing"
          lead="Performance marketing aligned with product and brand."
          bullets={[
            "Content strategy & editorial ops",
            "Landing pages & CRO experiments",
            "Attribution & funnel dashboards",
            "Email, automation & nurture tracks",
          ]}
          examples={[
            "CRO tests on pricing/LPs",
            "Lifecycle email with segmentation",
            "UTM governance + dashboarding",
          ]}
        />

        <ServiceCard
          Icon={Video}
          title="Video Editing & Motion"
          lead="Narratives that clarify value and move audiences to action."
          bullets={[
            "Brand explainers & product demos",
            "UI motion systems & Lottie",
            "Short-form for social & ads",
            "Captions, accessibility & versioning",
          ]}
          examples={[
            "Product demo with UI motion guidelines",
            "15–30s paid social cuts",
            "Explainer series with subtitles",
          ]}
        />

        <ServiceCard
          Icon={Cloud}
          title="Cloud & DevOps"
          lead="Infrastructure that is observable, economical, and secure."
          bullets={[
            "Cloud architecture & cost governance",
            "CI/CD, environments & preview deploys",
            "Backups, DR, and chaos testing",
            "Runtime policies & secret hygiene",
          ]}
          examples={[
            "Preview deployments per PR",
            "Backups + disaster recovery runbook",
            "Cost guardrails & tagging",
          ]}
        />

        <ServiceCard
          Icon={FileCheck}
          title="Compliance Enablement"
          lead="Pragmatic controls aligned to your targets."
          bullets={[
            "Security baselines & policies",
            "Evidence collection & audit prep",
            "SOC 2-friendly processes",
            "Privacy, data maps & DPIAs",
          ]}
          examples={[
            "Policy kit + evidence templates",
            "Vendor risk review process",
            "Data inventory & retention map",
          ]}
        />

        {/* NEW: Data & Analytics */}
        <ServiceCard
          Icon={Database}
          title="Data & Analytics"
          lead="Reliable data pipelines and decision-ready analytics."
          bullets={[
            "Event schemas & tracking plans",
            "ETL/ELT to warehouse (dbt-friendly)",
            "Dashboarding & KPI governance",
            "Privacy-aware data retention",
          ]}
          examples={[
            "Product analytics model (DAU/WAU/MAU, activation)",
            "Attribution view with channel mix",
            "Ops dashboard for SLAs & incidents",
          ]}
        />

        {/* NEW: E-commerce */}
        <ServiceCard
          Icon={ShoppingCart}
          title="E-commerce"
          lead="Fast, secure storefronts with frictionless checkout."
          bullets={[
            "Headless storefronts (Next.js)",
            "Checkout & payment integrations",
            "Search, merch, and PDP performance",
            "Anti-fraud & secure order flows",
          ]}
          examples={[
            "Headless Shopify with ISR",
            "PCI-aware checkout UX",
            "Search tuning for long-tail queries",
          ]}
        />

        {/* NEW: Accessibility */}
        <ServiceCard
          Icon={Accessibility}
          title="Accessibility by Design"
          lead="Inclusive experiences that meet WCAG and delight users."
          bullets={[
            "WCAG 2.2 reviews & remediation",
            "Design token contrast rules",
            "Keyboard, focus & motion settings",
            "Docs and patterns for teams",
          ]}
          examples={[
            "A11y audit with prioritized fixes",
            "Color tokens with guaranteed contrast",
            "Reduced-motion variants for animations",
          ]}
        />
      </div>
    </>
  );
}
