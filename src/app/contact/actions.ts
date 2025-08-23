// src/app/contact/actions.ts
"use server";

import { redirect } from "next/navigation";

/* utilidades mínimas inline para que funcione ya */
function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
function sanitize(input: string, max = 4000) {
  return (input ?? "").trim().slice(0, max).replace(/<\/?[^>]+(>|$)/g, "");
}

import { sendContactEmail } from "@/lib/email/sendContact";

export async function submitContact(formData: FormData) {
  // Honeypot
  const company = (formData.get("company") || "").toString();
  if (company) return redirect("/contact?status=ok");

  // Campos
  const name = sanitize((formData.get("name") || "").toString(), 120);
  const email = sanitize((formData.get("email") || "").toString(), 160);
  const subject = sanitize((formData.get("subject") || "").toString(), 140);
  const message = sanitize((formData.get("message") || "").toString(), 4000);

  // Validación mínima
  if (!name) return redirect("/contact?status=error&reason=name");
  if (!email || !isEmail(email)) return redirect("/contact?status=error&reason=email");
  if (!message || message.length < 5) return redirect("/contact?status=error&reason=message");

  // ✉️ Remitente que se muestra (tu dominio) → llega a ProtonMail
  const result = await sendContactEmail({
    to: "jafetbrito028@protonmail.com", // destino real
    from: "Rubics Digital Solutions <hello@rubicsdigitalsolutions.ca>", // muestra esto
    replyTo: email,
    subject: `[Contact] ${subject || "New message"} — ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  // Mientras el dominio termina de verificarse en Resend, puedes no bloquear al usuario:
  if (!result.ok) {
    // TEMPORAL: muestra éxito aunque Resend aún esté en 403
    return redirect("/contact?status=ok");
    // Cuando esté verificado, cambia por:
    // return redirect("/contact?status=sendfail");
  }

  return redirect("/contact?status=ok");
}
