import FaqItem from "./parts/FaqItem";

type Cat = {
  title: string;
  items: { q: string; a: string }[];
};

const CATEGORIES: Cat[] = [
  {
    title: "Cybersecurity",
    items: [
      {
        q: "How do you protect us without slowing delivery?",
        a: "We integrate security into design, code reviews, and pipelines. Controls like SAST/SCA run in CI, while devs use secure patterns and pre-built components to keep velocity high.",
      },
      {
        q: "Can you harden an existing app?",
        a: "Yes. We start with an audit (headers, CSP, auth, inputs, dependencies), prioritize risks, and phase changes to avoid downtime.",
      },
      {
        q: "Do you handle incident response?",
        a: "We prepare playbooks, logging, alerting, and on-call rotations. If an incident occurs, we help triage, contain, and perform post-mortems.",
      },
    ],
  },
  {
    title: "Websites",
    items: [
      {
        q: "What stack do you use for sites?",
        a: "Next.js App Router, Server Actions when suited, Tailwind tokens, and edge caching/ISR for speed and reliability.",
      },
      {
        q: "Will the site be accessible?",
        a: "Yes. We design to WCAG, test keyboard/focus paths, manage color contrast via tokens, and support reduced-motion modes.",
      },
      {
        q: "How do you ensure performance?",
        a: "Core Web Vitals budgets, route-level code splitting, image/CDN strategy, and continuous monitoring after launch.",
      },
    ],
  },
  {
    title: "Software",
    items: [
      {
        q: "Do you build internal tools and platforms?",
        a: "We build both. Clear domains, stable APIs, testing, and observability ensure maintainability and visibility.",
      },
      {
        q: "How do you handle scaling?",
        a: "We design for statelessness, cache aggressively, queue background work, and monitor hot paths for regression.",
      },
      {
        q: "What about handover?",
        a: "We document architecture, runbooks, and decisions, and we pair with your team during handover.",
      },
    ],
  },
  {
    title: "Mobile Apps",
    items: [
      {
        q: "React Native or native?",
        a: "We choose based on constraints. RN/Expo offers speed and shared code; native is used where platform features or performance demand it.",
      },
      {
        q: "How do you handle offline use?",
        a: "Offline-first patterns with local storage, background sync, conflict resolution, and UI to show sync states.",
      },
      {
        q: "Is authentication secure on mobile?",
        a: "We enforce safe auth flows, secure storage, token rotation, and jailbreak/root detection when relevant.",
      },
    ],
  },
  {
    title: "Technical SEO",
    items: [
      {
        q: "What moves the needle fastest?",
        a: "Fix Core Web Vitals and crawl/index issues first, then structured data, internal linking, and content architecture.",
      },
      {
        q: "Do you support multilingual SEO?",
        a: "Yes—localized routes, hreflang, canonical rules, and content ops to avoid duplicate content.",
      },
      {
        q: "How do you measure impact?",
        a: "Dashboards for impressions, rankings, CTR, and conversion; we run controlled changes to isolate wins.",
      },
    ],
  },
  {
    title: "Marketing",
    items: [
      {
        q: "How do you align marketing with product?",
        a: "We map messaging to real product value, build LPs tied to use cases, and connect analytics for end-to-end visibility.",
      },
      {
        q: "Do you handle CRO experiments?",
        a: "Yes—hypothesis-driven tests, guardrails for SEO and speed, and a backlog ranked by impact and effort.",
      },
      {
        q: "Can you manage content operations?",
        a: "We set editorial cadence, briefs, QA, and repurposing workflows for efficient distribution.",
      },
    ],
  },
  {
    title: "Video & Motion",
    items: [
      {
        q: "What formats do you deliver?",
        a: "Explainers, demos, UI motion, and short-form edits. We version assets for channels and campaigns.",
      },
      {
        q: "Is accessibility included?",
        a: "Yes—captions, transcripts, and motion alternatives where needed.",
      },
      {
        q: "Can you embed video in product?",
        a: "We optimize for performance, lazy-load, and track engagement for insights.",
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      {
        q: "How do you keep environments safe?",
        a: "Least-privilege IAM, secret hygiene, runtime policies, backups, and disaster-recovery drills.",
      },
      {
        q: "Do you support preview deploys?",
        a: "Yes—per-PR environments for fast feedback and safer merges.",
      },
      {
        q: "How do you control cloud costs?",
        a: "Budgets, tagging, right-sizing, and dashboards with alerts on anomalies.",
      },
    ],
  },
  {
    title: "Compliance",
    items: [
      {
        q: "Do you help with SOC 2 readiness?",
        a: "We set baselines, policies, evidence collection, and close gaps with pragmatic controls.",
      },
      {
        q: "What about vendor risk?",
        a: "We define intake, review criteria, and monitoring for third-party services.",
      },
      {
        q: "How do you handle privacy?",
        a: "Data maps, retention rules, DPIAs where needed, and user-centric consent flows.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <>
      <header className="text-center md:text-left">
        <h2 className="h3">FAQ</h2>
        <p className="mt-2 text-body text-gray-500 dark:text-gray-400">
          Short, practical answers—organized by category.
        </p>
      </header>

      <div className="mt-8 grid gap-6">
        {CATEGORIES.map((cat) => (
          <section key={cat.title} aria-labelledby={cat.title}>
            <h3 className="font-semibold">{cat.title}</h3>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {cat.items.map((it) => (
                <FaqItem key={it.q} q={it.q} a={it.a} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
