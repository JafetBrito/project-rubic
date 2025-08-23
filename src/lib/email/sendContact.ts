// src/lib/email/sendContact.ts
type Params = {
  to: string;       // destinatario real (ProtonMail)
  from: string;     // remitente que se muestra (tu dominio)
  replyTo: string;  // email del cliente (para responderle)
  subject: string;
  text: string;
};

export async function sendContactEmail({ to, from, replyTo, subject, text }: Params) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("[DEV simulate email]", { to, from, replyTo, subject, text });
    return { ok: true, simulated: true };
  }

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);

  const { data, error } = await resend.emails.send({
    from,                 // "Rubics Digital Solutions <hello@rubicsdigitalsolutions.ca>"
    to,                   // "jafetbrito028@protonmail.com"
    reply_to: replyTo,    // el email del cliente del formulario
    subject,
    text,
  });

  if (error) {
    console.error("[Resend error]", error);
    return { ok: false, error: String((error as any)?.message || error) };
  }
  return { ok: true, id: data?.id };
}
