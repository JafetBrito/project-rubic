// src/lib/sanitize.ts
export function sanitize(input: string, max = 4000) {
  const trimmed = (input ?? "").trim().slice(0, max);
  // Elimina etiquetas HTML simples
  return trimmed.replace(/<\/?[^>]+(>|$)/g, "");
}
