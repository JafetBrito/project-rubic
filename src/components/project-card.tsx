import Image from "next/image";
import Link from "next/link";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  image?: string;        // ruta en /public o URL
  tags?: string[];       // ej: ["Next.js", "SEO", "Tailwind"]
};

export default function ProjectCard({ project }: { project: Project }) {
  const { slug, title, summary, image, tags = [] } = project;

  return (
    <article className="rounded-xl border border-soft bg-surface overflow-hidden hover:translate-y-[-2px] transition-transform">
      {/* Imagen (opcional) */}
      {image ? (
        <div className="relative aspect-[16/9]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            priority={false}
          />
        </div>
      ) : (
        <div className="aspect-[16/9] grid place-items-center text-sm text-gray-500 dark:text-gray-400">
          Preview coming soon
        </div>
      )}

      {/* Contenido */}
      <div className="p-5">
        <h3 className="h4">{title}</h3>
        <p className="mt-2 text-small text-gray-500 dark:text-gray-400">{summary}</p>

        {/* Tags */}
        {tags.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <li key={t} className="px-2 py-0.5 rounded-md border border-soft text-xs opacity-80">
                {t}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4">
          <Link href={`/projects/${slug}`} className="btn-ghost text-sm">Visit Website</Link>
        </div>
      </div>
    </article>
  );
}
