import type { NextApiRequest, NextApiResponse } from "next";

type Resp = { ok: boolean; error?: string };

const WINDOW_MS = 60_000;  // 1 min
const LIMIT = 5;           // 5 req/min/IP
const bucket = new Map<string, { count: number; ts: number }>();

function limited(ip: string) {
  const now = Date.now();
  const rec = bucket.get(ip);
  if (!rec || now - rec.ts > WINDOW_MS) {
    bucket.set(ip, { count: 1, ts: now });
    return false;
  }
  rec.count++;
  rec.ts = now;
  return rec.count > LIMIT;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Resp>) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" });

  const ip =
    (typeof req.headers["x-forwarded-for"] === "string" ? req.headers["x-forwarded-for"] : "")
      ?.split(",")[0]?.trim() ||
    req.socket.remoteAddress ||
    "unknown";

  if (limited(ip)) return res.status(429).json({ ok: false, error: "Too many requests" });

  try {
    const body = req.body;
    const payload: Record<string, unknown> =
      typeof body === "string" ? (JSON.parse(body) as Record<string, unknown>) :
      (body && typeof body === "object" ? (body as Record<string, unknown>) : {});

    // TODO: aquí iría el envío real (SMTP/Email API). Por ahora sólo confirmamos recepción:
    // Por ejemplo, podrías validar campos:
    // const { name, email, message } = payload;

    return res.status(200).json({ ok: true });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Server error";
    return res.status(500).json({ ok: false, error: msg });
  }
}
