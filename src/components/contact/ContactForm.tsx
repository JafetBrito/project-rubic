// src/components/contact/ContactForm.tsx
"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { submitContact } from "@/app/contact/actions";

export default function ContactForm() {
  const sp = useSearchParams();
  const status = sp.get("status");

  return (
    <section className="rounded-xl border border-soft bg-surface p-6 md:p-8 md:order-1">
      <header className="text-center md:text-left">
        <h1 className="h2">Contact</h1>
        <p className="mt-2 text-body text-gray-500 dark:text-gray-400">
          Tell us about your goals. We usually reply within 1 business day.
        </p>
        <p className="mt-1 text-sm opacity-80">
          🌐 Write to us in <strong>any language</strong> — we’ll answer in yours.
        </p>
      </header>

      {/* Alerts */}
      {status === "ok" && (
        <div className="mt-6 rounded-lg border border-soft bg-[color:color-mix(in_oklab,var(--primary)_18%,transparent)]/20 p-4 text-sm">
          ✅ Message sent! Thanks — we’ll get back to you shortly.
        </div>
      )}
      {status === "error" && (
        <div className="mt-6 rounded-lg border border-soft bg-[color:color-mix(in_oklab,var(--foreground)_8%,transparent)]/20 p-4 text-sm">
          ⚠️ Please complete all fields with a valid email.
        </div>
      )}
      {status === "ratelimited" && (
        <div className="mt-6 rounded-lg border border-soft bg-[color:color-mix(in_oklab,var(--foreground)_8%,transparent)]/20 p-4 text-sm">
          🚦 Too many attempts. Please wait and try again.
        </div>
      )}

      <form action={submitContact} className="mt-6 grid gap-4" noValidate>
        {/* Honeypot */}
        <div className="hidden">
          <label htmlFor="company">
            Company (leave empty)
            <input id="company" name="company" autoComplete="off" />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm mb-1" htmlFor="name">Name</label>
            <input id="name" name="name" required maxLength={120}
              className="w-full rounded-lg border border-soft bg-surface px-3 py-2 outline-none focus:ring-2 focus:ring-[color:var(--primary)]"
              placeholder="Your name" />
          </div>

          <div>
            <label className="block text-sm mb-1" htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required maxLength={160}
              className="w-full rounded-lg border border-soft bg-surface px-3 py-2 outline-none focus:ring-2 focus:ring-[color:var(--primary)]"
              placeholder="you@email.com" inputMode="email" autoComplete="email" />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1" htmlFor="subject">Subject (optional)</label>
          <input id="subject" name="subject" maxLength={140}
            className="w-full rounded-lg border border-soft bg-surface px-3 py-2 outline-none focus:ring-2 focus:ring-[color:var(--primary)]"
            placeholder="Website redesign, SEO, app prototype…" />
        </div>

        <div>
          <label className="block text-sm mb-1" htmlFor="message">Message</label>
          <textarea id="message" name="message" required rows={6} maxLength={4000}
            className="w-full rounded-lg border border-soft bg-surface px-3 py-2 outline-none focus:ring-2 focus:ring-[color:var(--primary)]"
            placeholder="Tell us about your project, timeline, and success metrics…" />
          <p className="mt-1 text-xs opacity-70">
            Tip: include goals, deadline, budget range (optional), and reference links.
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 pt-2">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            By sending, you agree to our{" "}
            <Link href="/privacy" className="nav-link">Privacy Policy</Link>.
          </span>
          <button type="submit" className="btn-primary inline-flex text-sm font-medium">
            Send message
          </button>
        </div>
      </form>
    </section>
  );
}
