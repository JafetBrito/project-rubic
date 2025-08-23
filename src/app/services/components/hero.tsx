import Container from "@/components/ui/container";
import { Gauge, Rocket, ShieldCheck } from "lucide-react";

function Badge({ Icon, label }: { Icon: React.ElementType; label: string }) {
  return (
    <div className="rounded-xl border border-soft bg-surface p-4">
      <div className="flex items-center justify-center gap-2">
        <Icon className="w-5 h-5 text-brand" aria-hidden />
        <span className="text-sm">{label}</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden projects-hero">
      <div aria-hidden className="projects-hero__bg" />
      <Container>
        <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-16 md:pt-28 md:pb-24 text-center">
          <h1 className="h-display text-4xl md:text-6xl font-semibold tracking-tight">
            Secure, Performant, and Purpose-Built Services
          </h1>
          <p
            className="mt-4 text-base md:text-lg"
            style={{ color: "color-mix(in oklab, var(--foreground) 72%, transparent)" }}
          >
            Rubic’s Digital Solutions builds a safer digital world from Canada—delivering
            cybersecurity, web & software engineering, mobile apps, SEO, marketing, and video—structured for measurable outcomes.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Badge Icon={ShieldCheck} label="Security-first Delivery" />
            <Badge Icon={Gauge} label="Core Web Vitals Baseline" />
            <Badge Icon={Rocket} label="Growth & Conversion Focus" />
          </div>
        </div>
      </Container>
    </section>
  );
}
