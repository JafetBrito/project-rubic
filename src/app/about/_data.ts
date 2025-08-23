// src/app/about/_data.ts
// ✅ Iconos validados (evitamos 'Sitemap' y alias problemáticos)
import {
  // Capabilities
  Code2, Bot, Lock, Search, Megaphone, Film, Briefcase,
  // Values
  ShieldCheck, Cpu, BadgeCheck, BarChart3,
  // Pillars
  GaugeCircle, Server,
  // Standards
  Fingerprint, CheckCircle2, Scale, Leaf,
} from "lucide-react";

// -------------------- HERO --------------------
export const HERO = {
  title: {
    before: "Building a ",
    highlight: "Safer",
    after: " Digital World",
  },
  paragraph:
    "At Rubic’s Digital Solutions, we are committed to creating a safer digital world. We design, architect, and secure high-performance software with privacy by design—combining modern engineering, AI, and rigorous security practices so organizations can grow with confidence.",
};

// -------------------- WHO WE ARE --------------------
export const WHO_WE_ARE = {
  paragraphs: [
    "Rubic’s Digital Solutions is a technology company focused on building trustworthy digital products. Our portfolio spans software engineering, AI, software architecture, cybersecurity, SEO, digital marketing, video editing, and consulting. We combine strategy and execution to deliver outcomes that are measurable, secure, and sustainable.",
    "Privacy is non-negotiable and security is a default. Our approach aligns with established frameworks (e.g., OWASP ASVS/SAMM, NIST CSF) while remaining pragmatic for real-world delivery.",
  ],
  image: {
    src: "https://images.unsplash.com/photo-1555949963-aa79dcee981d?q=80&w=1400&auto=format&fit=crop", // replace later
    alt: "Rubic’s Digital Solutions — collaborative engineering and security",
  },
};

// -------------------- CAPABILITIES --------------------
// Nota: reemplazamos 'Sitemap' por 'Server' para arquitectura (ícono seguro).
export const CAPABILITIES = [
  { Icon: Code2,      title: "Software Engineering",     desc: "Modern web apps, APIs, integrations, automation." },
  { Icon: Bot,        title: "AI Engineering",           desc: "LLM integrations, workflows, evaluation, guardrails." },
  { Icon: Lock,       title: "Cybersecurity",            desc: "Hardening, secure SDLC, risk reviews, testing." },
  { Icon: Search,     title: "SEO",                      desc: "Technical SEO, Core Web Vitals, content architecture." },
  { Icon: Megaphone,  title: "Digital Marketing",        desc: "Acquisition, analytics, conversion optimization." },
  { Icon: Film,       title: "Video & Post-production",  desc: "Editing, motion, brand assets for campaigns." },
  { Icon: Server,     title: "Software Architecture",    desc: "Domain modeling, scalability, reliability patterns." }, // ← antes: Sitemap
  { Icon: Briefcase,  title: "Consulting",               desc: "Roadmaps, audits, playbooks, capability building." },
];

// -------------------- VALUES --------------------
export const VALUES = [
  { Icon: ShieldCheck, title: "Security & Privacy",        desc: "Security-first and privacy by design in every deliverable." },
  { Icon: Cpu,         title: "Technical Excellence",      desc: "Engineering quality, maintainability, and reliability." },
  { Icon: BadgeCheck,  title: "Integrity & Transparency",  desc: "Clear scope, honest communication, traceable decisions." },
  { Icon: BarChart3,   title: "Client Impact",             desc: "Measurable outcomes: performance, resilience, growth." },
];

// -------------------- PILLARS --------------------
// Nota: quitamos alias 'Arch', 'Sec', 'Ai' y usamos íconos directos existentes.
export const PILLARS = [
  { Icon: Server,      title: "Architecture",         desc: "Composability, isolation, domain boundaries, clear interfaces." },
  { Icon: Lock,        title: "Security Engineering", desc: "Least privilege, secure coding, secrets hygiene, reviews." },
  { Icon: Cpu,         title: "AI & Data",            desc: "Responsible AI patterns, evaluation, red-teaming, observability." },
  { Icon: GaugeCircle, title: "Performance",          desc: "Core Web Vitals, edge delivery, caching, streaming, profiling." },
  { Icon: Search,      title: "Searchability",        desc: "Semantic structure, metadata, crawl budget, structured data." },
  { Icon: BarChart3,   title: "Scalability",          desc: "Horizontal growth, resilience, cost control, SLO-driven ops." },
];

// -------------------- STANDARDS --------------------
export const STANDARDS = [
  { Icon: Fingerprint,   title: "Privacy by Design",  desc: "Data minimization, appropriate encryption, retention limits." },
  { Icon: CheckCircle2,  title: "Accessibility",      desc: "WCAG-informed semantics, contrast, focus, keyboard support." },
  { Icon: Scale,         title: "Ethical Technology", desc: "Transparent data use, responsible AI, explainability." },
  { Icon: Leaf,          title: "Sustainability",     desc: "Performance budgets, fewer bytes, greener delivery strategies." },
];

// -------------------- PROCESS --------------------
export const PROCESS = [
  {
    n: "01",
    title: "Discovery & Strategy",
    bullets: [
      "Objectives, constraints, risks, and success metrics.",
      "Stakeholder interviews and current-state assessment.",
    ],
  },
  {
    n: "02",
    title: "Architecture & Privacy Engineering",
    bullets: [
      "Domain modeling, boundaries, and reliability patterns.",
      "Threat modeling and data-flow mapping with privacy by design.",
    ],
  },
  {
    n: "03",
    title: "Design & UX",
    bullets: [
      "Accessible journeys, content structure, and design systems.",
      "SEO information architecture and structured data planning.",
    ],
  },
  {
    n: "04",
    title: "Build (Secure SDLC)",
    bullets: [
      "Incremental delivery with testing and code reviews.",
      "Dependency and secret scanning; hardening baselines.",
    ],
  },
  {
    n: "05",
    title: "Verification & Assurance",
    bullets: [
      "Risk-based validation, performance profiling, and security checks.",
      "Optional third-party assessments and pen-testing coordination.",
    ],
  },
  {
    n: "06",
    title: "Launch & Handover",
    bullets: [
      "Operational readiness, runbooks, and observability dashboards.",
      "Knowledge transfer, documentation, incident procedures.",
    ],
  },
  {
    n: "07",
    title: "Optimization & Growth",
    bullets: [
      "SEO technical audits, CRO, and continuous performance tuning.",
      "Roadmaps for scale, resilience, and cost efficiency.",
    ],
  },
];

// -------------------- FAQS --------------------
export const FAQS = [
  {
    q: "Do you support compliance or assurance requirements?",
    a: "We align to OWASP and NIST guidance and can collaborate with third parties for assessments, penetration testing, and audits.",
  },
  {
    q: "Which technologies do you use?",
    a: "Modern TypeScript stacks (e.g., Next.js) with best-practice CI/CD, testing, observability, and cloud services when appropriate.",
  },
  {
    q: "Can you start small and scale?",
    a: "Yes—phased roadmaps (MVP → assurance → scale) prevent costly rewrites while maintaining velocity.",
  },
  {
    q: "How do you report progress?",
    a: "Clear milestones, demo cadence, and dashboards for performance, security findings, and SEO metrics.",
  },
  {
    q: "What about post-launch support?",
    a: "We provide retainers for monitoring, maintenance, SEO, security upkeep, and growth engineering.",
  },
  {
    q: "How is pricing structured?",
    a: "Transparent proposals aligned to outcomes and scope, with optional retainers for continued improvements.",
  },
];

// -------------------- JSON-LD --------------------
export const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rubic’s Digital Solutions",
  url: "https://rubicsdigitalsolutions.ca",
  logo: "https://your-cdn.example.com/logo-rubics-digital-solutions.png",
  slogan: "Building a Safer Digital World",
  sameAs: [
    "https://www.linkedin.com/company/rubics-digital-solutions",
    "https://x.com/rubicsdigital",
    "https://github.com/rubics-digital",
  ],
};

export const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What engagement models do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We support fixed-scope projects, discovery-to-build roadmaps, and longer-term retainers for security, SEO, and growth engineering.",
      },
    },
    {
      "@type": "Question",
      name: "How do you ensure security and privacy?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We apply privacy by design, least-privilege access, secure coding, dependency and secret scanning, and risk-based reviews informed by OWASP ASVS/SAMM and the NIST CSF.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with startups and SMEs?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. We structure phased deliveries (MVP → assurance → scale) so you can launch quickly and grow without re-writing core systems.",
      },
    },
    {
      "@type": "Question",
      name: "What is your typical timeline?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Discovery typically takes 1–2 weeks. Build and assurance depend on scope and compliance needs; we agree on milestones and measurable outcomes up front.",
      },
    },
    {
      "@type": "Question",
      name: "Who owns the IP?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "You own the deliverables and source code per contract. We can host repositories under your organization from day one.",
      },
    },
  ],
};
