import { ArrowRight, ClipboardList, Layers, RefreshCw } from "lucide-react";

export default function EngagementModels() {
  return (
    <>
      <header className="text-center md:text-left">
        <h2 className="h3">Engagement Models</h2>
        <p className="mt-2 text-body text-gray-500 dark:text-gray-400">
          Choose the level of involvement and momentum you need—no lock-in, no surprises.
        </p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <Model
          Icon={ClipboardList}
          tag="Audit & Action Plan"
          items={[
            "Security, performance & SEO baselines",
            "Risk register and quick wins",
            "Prioritized 30-day delivery plan",
          ]}
          cta={{ href: "/contact", label: "Request an audit" }}
        />
        <Model
          Icon={Layers}
          tag="Project Delivery"
          items={[
            "Next.js, apps, or platform features",
            "A11y, analytics, and structured data baked-in",
            "Demo-driven sprints with clear acceptance",
          ]}
          cta={{ href: "/contact", label: "Scope a project" }}
          highlight
        />
        <Model
          Icon={RefreshCw}
          tag="Continuous Improvement"
          items={[
            "Roadmaps, QA & releases",
            "Dashboards & incident readiness",
            "Quarterly strategy & enablement",
          ]}
          cta={{ href: "/contact", label: "Start continuous work" }}
        />
      </div>
    </>
  );
}

function Model({
  Icon,
  tag,
  items,
  cta,
  highlight,
}: {
  Icon: React.ElementType;
  tag: string;
  items: string[];
  cta: { href: string; label: string };
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
      <div className="flex items-center gap-2">
        <Icon className="w-5 h-5 text-brand" aria-hidden />
        <h3 className="font-semibold">{tag}</h3>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
        {items.map((it) => (
          <li key={it}>• {it}</li>
        ))}
      </ul>

      <a
        href={cta.href}
        className="mt-5 inline-flex items-center gap-2 text-sm font-medium hover:underline"
        aria-label={tag}
      >
        {cta.label} <ArrowRight className="w-4 h-4" aria-hidden />
      </a>
    </div>
  );
}
