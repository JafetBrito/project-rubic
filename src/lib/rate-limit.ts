// src/lib/rate-limit.ts
const WINDOW_MS = 10 * 60 * 1000; // 10m
const MAX = 5;

// @ts-expect-error: persist across hot reloads
globalThis.__RUBICS_RL__ = globalThis.__RUBICS_RL__ ?? new Map<string, number[]>();
// @ts-expect-error
const RL: Map<string, number[]> = globalThis.__RUBICS_RL__;

export function rateLimitOk(ip: string) {
  const now = Date.now();
  const arr = RL.get(ip) ?? [];
  const recent = arr.filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX) return false;
  recent.push(now);
  RL.set(ip, recent);
  return true;
}
