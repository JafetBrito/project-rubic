// src/app/dev/icons/page.tsx
import type { Metadata } from "next";
import Container from "@/components/ui/container";
import Link from "next/link";

// Importa solo los iconos que uses (tree-shaking)
import {
  Mail, Phone, Globe, MapPin,
  Github, Twitter, Instagram,
  ArrowRight, CheckCircle2, Shield, Zap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Icon Guide — Lucide",
  robots: { index: false, follow: false }, // no index (página interna)
};

export default function IconGuide() {
  return (
    <main className="py-12">
      <Container>
        <h1 className="h-display text-3xl md:text-4xl font-semibold">Lucide Icon Guide</h1>
        <p className="mt-2 text-sm" style={{ color: "color-mix(in oklab, var(--foreground) 70%, transparent)" }}>
          Quick reference to use <code>lucide-react</code> with Tailwind and our light/dark theme.
        </p>

        {/* 1) Uso básico */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold">1) Basic usage</h2>
          <div className="mt-4 grid sm:grid-cols-2 gap-6 rounded-xl border border-soft p-5">
            <div className="space-y-3">
              <p className="text-sm">Iconos respetan <code>currentColor</code> (usa clases Tailwind de texto):</p>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5" aria-hidden />
                <Mail className="h-6 w-6 text-brand" aria-hidden />
                <Mail className="h-8 w-8 text-gray-400 dark:text-gray-500" aria-hidden />
              </div>
              <pre className="text-xs bg-slate-900/60 text-slate-200 p-3 rounded-md overflow-x-auto">
                {`import { Mail } from "lucide-react";
<Mail className="h-6 w-6 text-brand" aria-hidden />`}
              </pre>
            </div>

            <div className="space-y-3">
              <p className="text-sm">Grosor del trazo con <code>strokeWidth</code>:</p>
              <div className="flex items-center gap-4">
                <Shield className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                <Shield className="h-6 w-6" strokeWidth={2} aria-hidden />
                <Shield className="h-6 w-6" strokeWidth={2.5} aria-hidden />
              </div>
              <pre className="text-xs bg-slate-900/60 text-slate-200 p-3 rounded-md overflow-x-auto">
                {`<Shield className="h-6 w-6" strokeWidth={2.5} />`}
              </pre>
            </div>
          </div>
        </section>

        {/* 2) En botones / links */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">2) In buttons and links</h2>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Contact <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a href="mailto:hello@rubicdigitalsolutions.com" className="btn-ghost inline-flex items-center gap-2">
              <Mail className="h-4 w-4" aria-hidden /> Email
            </a>
            <a href="tel:+11234567890" className="btn-ghost inline-flex items-center gap-2">
              <Phone className="h-4 w-4" aria-hidden /> Call
            </a>
          </div>
          <pre className="mt-3 text-xs bg-slate-900/60 text-slate-200 p-3 rounded-md overflow-x-auto">
            {`<Link href="/contact" className="btn-primary inline-flex items-center gap-2">
  Contact <ArrowRight className="h-4 w-4" aria-hidden />
</Link>`}
          </pre>
        </section>

        {/* 3) Estados hover y tema claro/oscuro */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">3) Hover + light/dark</h2>
          <p className="mt-1 text-sm" style={{ color: "color-mix(in oklab, var(--foreground) 70%, transparent)" }}>
            Usa utilidades de Tailwind para color y transiciones; los iconos toman el color del texto.
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-soft transition-colors
                         text-gray-500 hover:text-brand"
            >
              <Github className="h-5 w-5" aria-hidden /> GitHub
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-soft transition-colors
                         text-gray-500 hover:text-brand"
            >
              <Twitter className="h-5 w-5" aria-hidden /> Twitter / X
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-soft transition-colors
                         text-gray-500 hover:text-brand"
            >
              <Instagram className="h-5 w-5" aria-hidden /> Instagram
            </a>
          </div>
        </section>

        {/* 4) Iconos en listas / bullets con accesibilidad */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">4) Bullets with icons</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-brand" aria-hidden />
              Core Web Vitals friendly
            </li>
            <li className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-brand" aria-hidden />
              Lightweight SVGs (tree-shakable)
            </li>
            <li className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-brand" aria-hidden />
              Works with light/dark out of the box
            </li>
          </ul>
          <p className="mt-3 text-xs" style={{ color: "color-mix(in oklab, var(--foreground) 60%, transparent)" }}>
            Tip: usa <code>aria-hidden</code> en iconos decorativos y texto visible para lectores de pantalla.
          </p>
        </section>

        {/* 5) Snippets rápidos */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">5) Quick snippets</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <pre className="text-xs bg-slate-900/60 text-slate-200 p-3 rounded-md overflow-x-auto">
{`// Importar varios iconos
import { Mail, Phone, Github } from "lucide-react";

// Tamaño y color por Tailwind
<Mail className="h-6 w-6 text-brand" />

// Grosor del trazo
<Phone strokeWidth={2.25} className="h-6 w-6" />

// En un botón
<button className="btn-primary inline-flex items-center gap-2">
  Get a Quote <ArrowRight className="h-4 w-4" />
</button>`}
            </pre>
            <pre className="text-xs bg-slate-900/60 text-slate-200 p-3 rounded-md overflow-x-auto">
{`// Mapa/dirección
<MapPin className="h-5 w-5 text-brand" aria-hidden />
<span>CDMX / Remote</span>

// Enlaces sociales
<a className="icon-link" href="#"><Github className="h-5 w-5" aria-hidden />GitHub</a>`}
            </pre>
          </div>
        </section>
      </Container>
    </main>
  );
}
