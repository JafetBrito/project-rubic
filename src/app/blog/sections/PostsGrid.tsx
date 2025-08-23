// src/app/blog/sections/PostsGrid.tsx
"use client";

import { useMemo, useState, useEffect } from "react";
import { POSTS } from "../_data";
import { PostCard } from "../_components";
import type { ControlsState } from "./Controls";

function norm(s: string) {
  return s.toLowerCase().normalize("NFKD");
}

export function PostsGrid({ controls }: { controls: ControlsState }) {
  const filtered = useMemo(() => {
    let list = POSTS.slice();

    if (controls.category !== "All") {
      list = list.filter((p) => p.category === controls.category);
    }
    if (controls.tag !== "All") {
      list = list.filter((p) => p.tags.includes(controls.tag));
    }
    if (controls.query.trim()) {
      const q = norm(controls.query);
      list = list.filter(
        (p) =>
          norm(p.title).includes(q) ||
          norm(p.excerpt).includes(q) ||
          norm(p.tags.join(" ")).includes(q)
      );
    }

    if (controls.sortBy === "Newest") list.sort((a, b) => (a.date < b.date ? 1 : -1));
    else if (controls.sortBy === "Oldest") list.sort((a, b) => (a.date > b.date ? 1 : -1));
    else list.sort((a, b) => a.title.localeCompare(b.title));

    return list;
  }, [controls]);

  // Simple pagination
  const pageSize = 9;
  const [page, setPage] = useState(1);
  useEffect(() => setPage(1), [controls]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <section className="mx-auto max-w-6xl px-6 pb-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pageItems.map((post) => <PostCard key={post.slug} post={post} />)}
      </div>

      <nav className="mt-6 flex items-center justify-center gap-1" aria-label="Blog pagination">
        <button className="btn-ghost text-sm" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page <= 1}>
          ← Prev
        </button>
        {Array.from({ length: totalPages }).map((_, i) => {
          const n = i + 1;
          const active = n === page;
          return (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`px-3 py-1.5 rounded-lg border text-sm ${
                active
                  ? "bg-brand text-[var(--on-primary)] border-transparent"
                  : "border-soft bg-[color-mix(in_oklab,var(--background)_92%,transparent)] hover:bg-[color-mix(in_oklab,var(--background)_86%,transparent)]"
              }`}
              aria-current={active ? "page" : undefined}
            >
              {n}
            </button>
          );
        })}
        <button className="btn-ghost text-sm" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page >= totalPages}>
          Next →
        </button>
      </nav>
    </section>
  );
}
