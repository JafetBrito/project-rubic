// src/app/blog/_data.ts
import type { Post } from "./_types";

export const CATEGORIES = [
  "Strategy",
  "Applications",
  "Operations",
  "Compliance",
  "AI/ML",
  "Architecture",
  "DevSecOps",
  "meow",
] as const;

export const TAGS = [
  "zero-trust","access","segmentation",
  "nextjs","csp","headers",
  "ir","risk","runbooks",
  "oauth2","oidc","sso",
  "sast","dast","sbom",
  "llm","prompt-security","red-teaming",
  "seo","performance","observability",
  "meow",
] as const;

export const POSTS: Post[] = [
  {
    slug: "zero-trust-for-smb",
    title: "Zero Trust for SMBs: Pragmatic, Low-Friction Adoption",
    excerpt: "Segmentación, autenticación fuerte y mínimo privilegio sin frenar el negocio.",
    date: "2025-08-09",
    category: "Strategy",
    tags: ["zero-trust","access","segmentation","risk"],
    cover: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1200&h=800&fit=crop&auto=format",
    coverAlt: "PCB con luces verdes representando infraestructura segura",
    contentHtml: `
      <p>Zero Trust no es un producto, es una <em>estrategia</em>. Para PYMEs, el enfoque debe ser incremental y medible:</p>
      <h2>1) Identidades primero</h2>
      <ul>
        <li>MFA en todas las cuentas, con <strong>FIDO2</strong> donde sea posible.</li>
        <li>Políticas de acceso condicional según riesgo y contexto.</li>
      </ul>
      <h2>2) Segmentación</h2>
      <p>Separar dominios de confianza. Minimizar <em>blast radius</em> con microsegmentación lógica.</p>
      <h2>3) Mínimo privilegio</h2>
      <p>Revisiones periódicas, <strong>JIT</strong> elevation y auditoría.</p>
      <p>Empezar pequeño, medir, y escalar. La clave es <strong>no romper la operación</strong> mientras se gana seguridad.</p>
    `,
  },
  {
    slug: "hardening-nextjs",
    title: "Hardening Next.js: Security Headers, CSP & Input Hygiene",
    excerpt: "Encabezados base, aislamiento de origen, validación y logging para apps de negocio.",
    date: "2025-08-04",
    category: "Applications",
    tags: ["nextjs","csp","headers","sast","dast"],
    cover: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1200&h=800&fit=crop&auto=format",
    coverAlt: "Laptop con código en pantalla en un ambiente técnico",
    contentHtml: `
      <p>Endurecer una app Next.js comienza con <strong>headers</strong> y <strong>CSP</strong> bien definidas.</p>
      <h2>Headers mínimos</h2>
      <ul>
        <li>Strict-Transport-Security, X-Content-Type-Options, X-Frame-Options/COOP, Permissions-Policy.</li>
        <li>CSP con <code>script-src 'self' 'nonce-...'</code> y aislamiento de orígenes sensibles.</li>
      </ul>
      <h2>Input hygiene</h2>
      <p>Validar en servidor y cliente. Loggear intentos anómalos. Sanitizar y tipar correctamente.</p>
    `,
  },
  {
    slug: "incident-response-runbook",
    title: "Incident Response Runbook: Prepare, Execute, Improve",
    excerpt: "Estructura mínima y efectiva para detectar, contener y erradicar con comunicación clara.",
    date: "2025-07-28",
    category: "Operations",
    tags: ["ir","runbooks","risk","observability"],
    cover: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1200&h=800&fit=crop&auto=format",
    coverAlt: "Pasillo de datacenter con luces de monitoreo",
    contentHtml: `
      <p>El runbook debe ser <strong>claro, ejecutable</strong> y actualizado tras cada postmortem.</p>
      <h2>Fases</h2>
      <ol>
        <li>Preparación: roles, contactos, accesos, tableros.</li>
        <li>Ejecución: triage, contención, erradicación, recuperación.</li>
        <li>Mejora: postmortem y tareas de hardening.</li>
      </ol>
    `,
  },
  {
    slug: "meow-in-cyber",
    title: "The Meow Factor in Cybersecurity",
    excerpt: "Exploring how curiosity and playfulness inspire resilient architectures.",
    date: "2025-08-25",
    category: "Meow", // 👈 usamos la nueva categoría
    tags: ["meow", "curiosity", "innovation"],
    cover: "https://placekitten.com/1200/800", // imagen de ejemplo
    coverAlt: "Cute cat representing curiosity in security",
    contentHtml: `
      <p>Cybersecurity requires vigilance, but also <strong>curiosity</strong>—the ability to ask "what if?".</p>
      <p>The <em>Meow</em> mindset is about exploring systems playfully to uncover blind spots before attackers do.</p>
      <h2>Key Lessons</h2>
      <ul>
        <li>Playful exploration fosters innovation.</li>
        <li>Curiosity helps identify overlooked vulnerabilities.</li>
        <li>Even in serious domains, a <em>meow</em> can inspire creativity.</li>
      </ul>
    `,
   }
];

// Helpers para páginas dinámicas
export function getAllSlugs() {
  return POSTS.map((p) => p.slug);
}
export function getPostBySlug(slug: string) {
  return POSTS.find((p) => p.slug === slug) || null;
}
export function getPostsByTag(tag: string) {
  return POSTS.filter((p) => p.tags.includes(tag));
}
export function getPostsByCategory(category: string) {
  return POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}
export function getAllTags() {
  const set = new Set<string>();
  POSTS.forEach((p) => p.tags.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}
