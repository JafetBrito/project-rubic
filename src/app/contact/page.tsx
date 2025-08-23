// @ts-nocheck
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { redirect } from "next/navigation";
import { Mail, MessageCircle, Globe, Clock } from "lucide-react";

/* =======================================================
   Contact — Rubic Digital Solutions
   Cambios solicitados:
   1) "How to reach us" primero en móvil (aparece arriba),
      y el formulario debajo.
   2) Se eliminaron "What you’ll get" y "Privacy & security".
   3) En desktop (md+), se respeta el layout de 2 columnas
      con formulario a la izquierda e info a la derecha.
   Notas:
   - Se usan utilidades Tailwind de orden: md:order-1 / md:order-2.
   - Mantiene server action (MVP) con honeypot + saneo básico.
   ======================================================= */

// --- Seguridad mínima (MVP) ---
function sanitize(input: string, max = 2000) {
  const trimmed = input.trim().slice(0, max);
  // Elimina etiquetas HTML básicas para evitar inyecciones
  return trimmed.replace(/<\/?[^>]+(>|$)/g, "");
}
function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// Server Action (NO pongas "use client" en este archivo)
async function submitContact(formData: FormData) {
  "use server";

  // Honeypot: si el bot completa este campo, ignoramos y “éxito”
  const hp = (formData.get("company") || "").toString();
  if (hp) redirect("/contact?status=ok");

  const name = sanitize((formData.get("name") || "").toString(), 120);
  const email = sanitize((formData.get("email") || "").toString(), 160);
  const subject = sanitize((formData.get("subject") || "").toString(), 140);
  const message = sanitize((formData.get("message") || "").toString(), 4000);

  if (!name || !email || !message || !isEmail(email)) {
    redirect("/contact?status=error");
  }

  // TODO: Envío real (Resend / SMTP / CRM)
  // await resend.emails.send({...})

  redirect("/contact?status=ok");
}

export const metadata = {
  title: "Contact — Rubic Digital Solutions",
  description:
    "Tell us about your project. We reply fast and in your language. Secure by design.",
};

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { status?: string };
}) {
  const status = searchParams?.status;

  return (
    <>
      <Navbar />

      <main className="px-4">
        {/* Grid 2 columnas en md+, una debajo de otra en móvil.
           DOM: aside va PRIMERO para que en móvil quede arriba.
           En desktop, usamos order para poner el form a la izquierda. */}
        <div className="mx-auto max-w-6xl py-12 md:py-20 grid gap-10 md:grid-cols-[1.1fr_.9fr]">
          {/* ===== Aside: How to reach us (PRIMERO en DOM) ===== */}
          <aside className="grid gap-4 content-start md:order-2">
            <div className="rounded-xl border border-soft p-5">
              <h2 className="h4">How to reach us</h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="lucide" aria-hidden />
                  <a className="icon-link" href="mailto:hello@rubicdigitalsolutions.com">
                    hello@rubicdigitalsolutions.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="lucide" aria-hidden />
                  <a
                    className="icon-link"
                    href="https://wa.me/12495321984"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp — Chat now
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="lucide" aria-hidden />
                  <a
                    className="icon-link"
                    href="https://wa.me/12495321984"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Telegram — Chat now
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="lucide" aria-hidden />
                  <span>Global / Remote — We’ll reply in your language.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="lucide" aria-hidden />
                  <span>Mon–Fri · 10:00–18:00</span>
                </li>
              </ul>
            </div>
          </aside>

          {/* ===== Formulario (SEGUNDO en DOM para móvil; en desktop va a la izquierda con md:order-1) ===== */}
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

            {/* Alerts de estado */}
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

            <form action={submitContact} className="mt-6 grid gap-4">
              {/* Honeypot (oculto) */}
              <div className="hidden">
                <label>
                  Company (leave empty)
                  <input name="company" autoComplete="off" />
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm mb-1">Name</label>
                  <input
                    name="name"
                    required
                    maxLength={120}
                    className="w-full rounded-lg border border-soft bg-surface px-3 py-2 outline-none focus:ring-2 focus:ring-[color:var(--primary)]"
                    placeholder="Your name"
                    aria-label="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    maxLength={160}
                    className="w-full rounded-lg border border-soft bg-surface px-3 py-2 outline-none focus:ring-2 focus:ring-[color:var(--primary)]"
                    placeholder="you@email.com"
                    aria-label="Your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">Subject (optional)</label>
                <input
                  name="subject"
                  maxLength={140}
                  className="w-full rounded-lg border border-soft bg-surface px-3 py-2 outline-none focus:ring-2 focus:ring-[color:var(--primary)]"
                  placeholder="Website redesign, SEO, app prototype…"
                  aria-label="Subject (optional)"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  maxLength={4000}
                  className="w-full rounded-lg border border-soft bg-surface px-3 py-2 outline-none focus:ring-2 focus:ring-[color:var(--primary)]"
                  placeholder="Tell us about your project, timeline, and success metrics…"
                  aria-label="Your message"
                />
                <p className="mt-1 text-xs opacity-70">
                  Tip: include goals, deadline, budget range (optional), and any reference links.
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
        </div>
      </main>

      <Footer />
    </>
  );
}
