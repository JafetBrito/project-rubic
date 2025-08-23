// src/app/blog/_data.ts
import type { Post } from "./_types";

export const CATEGORIES = [
  "Security",
  "Applications",
  "Architecture",
  "Operations",
  "Compliance",
  "AI/ML",
] as const;

export const TAGS = [
  "zero-trust","access","segmentation",
  "nextjs","csp","headers",
  "ir","risk","runbooks",
  "oauth2","oidc","sso",
  "sast","dast","sbom",
  "llm","prompt-security","rag",
  "seo","performance","observability",
] as const;

export const POSTS: Post[] = [
  {
    slug: "zero-trust-for-smbs",
    title: "Zero Trust for SMBs: Practical, Low-Friction Adoption",
    excerpt:
      "An incremental path to identity-first controls, segmentation, and least-privilege — without breaking operations.",
    date: "2025-08-10",
    category: "Security",
    tags: ["zero-trust","access","segmentation","risk"],
    cover: "https://images.unsplash.com/photo-1555949963-aa79dcee981d?q=80&w=1200&h=800&fit=crop&auto=format",
    coverAlt: "Secure infrastructure suggested by PCB lighting",
    contentHtml: `
      <p><strong>Zero Trust</strong> is a strategy, not a SKU. Start where risk reduction is highest and disruption lowest.</p>
      <h2>1) Identity First</h2>
      <ul>
        <li>MFA everywhere, prefer <strong>FIDO2</strong> over OTP.</li>
        <li>Conditional access based on device posture, location, and risk.</li>
      </ul>
      <h2>2) Segment</h2>
      <p>Reduce blast radius with logical micro-segmentation and explicit east–west policies.</p>
      <h2>3) Least Privilege</h2>
      <p>Right-size permissions, rotate secrets, and use <strong>JIT elevation</strong> with audit trails.</p>
      <p>Measure outcomes monthly (phishing success, lateral movement, privileged actions) and iterate.</p>
    `,
  },
  {
    slug: "hardening-nextjs-security-headers-csp",
    title: "Hardening Next.js: Security Headers, CSP & Input Hygiene",
    excerpt:
      "Baseline headers, origin isolation, validation, and anomaly logging for business-grade web apps.",
    date: "2025-08-07",
    category: "Applications",
    tags: ["nextjs","csp","headers","sast","dast"],
    cover: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1200&h=800&fit=crop&auto=format",
    coverAlt: "Laptop running code in a focused, technical workspace",
    contentHtml: `
      <h2>Minimum Headers</h2>
      <ul>
        <li><code>Strict-Transport-Security</code> with long max-age and preload.</li>
        <li><code>X-Content-Type-Options: nosniff</code>, <code>Permissions-Policy</code>, <code>COOP/COEP</code>.</li>
        <li><strong>CSP</strong> with nonces: <code>script-src 'self' 'nonce-...'</code>.</li>
      </ul>
      <h2>Input Hygiene</h2>
      <p>Validate at the boundary, sanitize outputs, and log anomalies with request IDs and user context.</p>
      <h2>Operational Guardrails</h2>
      <p>Automate SAST/DAST in CI, keep SBOMs, and fail builds on criticals.</p>
    `,
  },
  {
    slug: "incident-response-runbook-minimal-effective",
    title: "Incident Response Runbook: Prepare, Execute, Improve",
    excerpt:
      "A lean structure to detect, contain, and eradicate threats with crisp comms and post-mortems.",
    date: "2025-08-02",
    category: "Operations",
    tags: ["ir","runbooks","observability","risk"],
    cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&h=800&fit=crop&auto=format",
    coverAlt: "Datacenter corridor with monitoring lights",
    contentHtml: `
      <h2>Phases</h2>
      <ol>
        <li><strong>Prepare</strong>: roles, contacts, access, runbooks, test scenarios.</li>
        <li><strong>Execute</strong>: triage, contain, eradicate, recover.</li>
        <li><strong>Improve</strong>: post-mortem, action items, validate fixes.</li>
      </ol>
      <p>Make it routine: quarterly tabletops, and monthly checks of paging, logging, and backups.</p>
    `,
  },
  {
    slug: "soc2-starter-logging-and-access-controls",
    title: "SOC 2 Starter: Logging, Access Controls & Change Management",
    excerpt:
      "The minimum viable controls that keep auditors and production equally happy.",
    date: "2025-07-25",
    category: "Compliance",
    tags: ["risk","observability","access"],
    cover: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&h=800&fit=crop&auto=format",
    coverAlt: "Abstract governance and compliance visuals",
    contentHtml: `
      <ul>
        <li><strong>Logging</strong>: centralize app, infra, and auth logs; retain 1 year.</li>
        <li><strong>Access</strong>: SSO, JIT elevation, quarterly reviews, offboarding SLAs.</li>
        <li><strong>Change</strong>: code review required, CI attestations, emergency change log.</li>
      </ul>
      <p>Link each control to evidence: dashboards, tickets, doc references.</p>
    `,
  },
  {
    slug: "ai-security-prompt-injection-and-rag",
    title: "AI Security: Prompt Injection, Data Exfiltration & Safer RAG",
    excerpt:
      "Guardrails, isolation, and evaluation that make AI features trustworthy.",
    date: "2025-07-18",
    category: "AI/ML",
    tags: ["llm","prompt-security","rag"],
    cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&h=800&fit=crop&auto=format",
    coverAlt: "AI circuitry abstract",
    contentHtml: `
      <h2>Threats</h2>
      <ul>
        <li>Prompt injection & data exfiltration via tool calls.</li>
        <li>Indirect injection from untrusted sources.</li>
      </ul>
      <h2>Mitigations</h2>
      <ul>
        <li>Input/output gating, allowlists, and scoped tools.</li>
        <li>Separate tenants & keys; dataset redaction; eval suites.</li>
      </ul>
    `,
  },
];

export function getAllSlugs() { return POSTS.map(p => p.slug); }
export function getPostBySlug(slug: string) { return POSTS.find(p => p.slug === slug) || null; }
export function getPostsByTag(tag: string) { return POSTS.filter(p => p.tags.includes(tag)); }
export function getPostsByCategory(category: string) { return POSTS.filter(p => p.category.toLowerCase() === category.toLowerCase()); }
export function getAllTags() {
  const s = new Set<string>(); POSTS.forEach(p => p.tags.forEach(t => s.add(t))); return [...s].sort();
}
