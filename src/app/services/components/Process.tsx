import { Search, Cpu, Wrench, Rocket, Gauge } from "lucide-react";
import ProcessItem from "./parts/ProcessItem";

export default function Process() {
  return (
    <>
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
          desc="We align on goals, constraints, and success metrics. If you have a stack, we audit performance, security, and SEO."
          Icon={Search}
        />
        <ProcessItem
          step="02"
          title="Scope & Roadmap"
          desc="Milestones, owners, and KPIs. Just what will be delivered and when—no fluff."
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
          desc="We ship with monitoring, rollbacks, dashboards—and stay close to the data."
          Icon={Rocket}
        />
        <ProcessItem
          step="05"
          title="Optimize & Grow"
          desc="Evidence-driven iteration across UX, conversion, reliability, and cost."
          Icon={Gauge}
          last
        />
      </ol>
    </>
  );
}
