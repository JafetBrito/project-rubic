// src/app/blog/_components.tsx
"use client";

import Link from "next/link";
import { Calendar, Tag } from "lucide-react";
import { formatDateUTC } from "./_utils";
import type { Post } from "./_types";

export function Bullet({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-soft px-3 py-1.5 bg-[color-mix(in_oklab,var(--background)_92%,transparent)]">
      <span className="text-brand">{icon}</span>
      <span className="text-sm">{text}</span>
    </div>
  );
}

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group rounded-2xl border border-soft overflow-hidden bg-[color-mix(in_oklab,var(--background)_96%,transparent)] hover:shadow-lg transition-shadow">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={post.cover}
            alt={post.coverAlt}
            width={1200}
            height={800}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="p-4">
        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" aria-hidden />
            {formatDateUTC(post.date)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Tag className="w-3.5 h-3.5" aria-hidden />
            {post.tags.slice(0, 3).join(", ")}
          </span>
        </div>
        <h3 className="mt-2 font-semibold leading-snug">
          <Link href={`/blog/${post.slug}`} className="nav-link nav-link--active">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{post.excerpt}</p>
        <div className="mt-3 flex items-center justify-between">
          <Link href={`/blog/${post.slug}`} className="btn-ghost text-sm">Read article →</Link>
          <Link href={`/blog/category/${encodeURIComponent(post.category)}`} className="text-xs px-2 py-1 rounded-md border border-soft">
            {post.category}
          </Link>
        </div>
        {/* Tags clicables */}
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <Link
              key={t}
              href={`/blog/tag/${encodeURIComponent(t)}`}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-soft text-xs"
            >
              <Tag className="w-3.5 h-3.5" />
              {t}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
