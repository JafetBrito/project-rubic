import { ArrowRight, Globe } from "lucide-react";

export default function MissionBar() {
  return (
    <div
      className="mt-10 rounded-2xl border border-soft bg-surface p-5"
      style={{
        background:
          "linear-gradient(90deg, color-mix(in oklab, var(--primary) 7%, transparent), transparent 70%)",
      }}
      role="note"
      aria-label="Mission Statement"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <Globe className="w-5 h-5 mt-0.5 text-brand" aria-hidden />
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Based in Canada. Dedicated to a safer digital world—balancing
            usability, performance, and strong security practices in every
            engagement.
          </p>
        </div>
        <a
          href="/contact"
          className="btn-secondary inline-flex items-center justify-center gap-2"
        >
          Start a secure project <ArrowRight className="w-4 h-4" aria-hidden />
        </a>
      </div>
    </div>
  );
}
