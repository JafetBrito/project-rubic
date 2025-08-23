import React from "react";

export default function ProcessItem({
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
      {!last && (
        <span
          className="absolute left-[-1px] top-8 block h-[calc(100%+1rem)] w-px bg-[color-mix(in_oklab,var(--foreground)_12%,transparent)]"
          aria-hidden
        />
      )}
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
