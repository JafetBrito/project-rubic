import React from "react";

export default function ServiceCard({
  Icon,
  title,
  lead,
  bullets,
  examples,
}: {
  Icon: React.ElementType;
  title: string;
  lead: string;
  bullets: string[];
  examples: string[];
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
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{lead}</p>

          <ul className="mt-3 space-y-1 text-sm text-gray-500 dark:text-gray-400">
            {bullets.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>

          <div className="mt-4 rounded-xl border border-soft p-3">
            <p className="text-xs font-medium">Examples</p>
            <ul className="mt-2 space-y-1 text-xs text-gray-500 dark:text-gray-400">
              {examples.map((e) => (
                <li key={e}>— {e}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
