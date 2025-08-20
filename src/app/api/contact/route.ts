// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";

const Schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(5000),
  locale: z.string().optional(),        // por si envías idioma del navegador
  website: z.string().optional(),       // 🐝 honeypot (debe venir vacío)
});

const WINDOW_MS = 60_000;  // 1 min
const MAX_REQS = 5;
const bucket = new Map<string, number[]>();

function limited(ip: string) {
  const now = Date.now();
  const hits = (bucket.get(ip) ?? []).filter(t => now - t < WINDOW_MS);
  if (hits.length >= MAX_REQS) return true;
  hits.push(now);
  bucket.set(ip, hits);
  return false;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) return NextResponse.json({ ok:false, error:"Too many requests" }, { status: 429 });

  const data = await req.json().catch(() => ({}));
  const parsed = Schema.safeParse(data);
  if (!parsed.success) {
    return NextResponse.json({ ok:false, error:"Invalid data" }, { status: 400 });
  }
  const { website, ...clean } = parsed.data;
  if (website) { // honeypot capturado
    return NextResponse.json({ ok:true }); // silenciar bots
  }

  // TODO: integra correo (Resend/Nodemailer). De momento, log:
  console.log("New contact message:", clean);

  return NextResponse.json({ ok:true });
}
