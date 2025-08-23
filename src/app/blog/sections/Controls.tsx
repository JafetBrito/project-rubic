// src/app/blog/sections/Controls.tsx
"use client";

import { useMemo } from "react";
import { Search as SearchIcon, Filter, SortAsc, Tag } from "lucide-react";
import { CATEGORIES, TAGS } from "../_data";

export type ControlsState = {
  query: string;
  category: string | "All";
  tag: string | "All";
  sortBy: "Newest" | "Oldest" | "Title";
};

export function Controls({
  value,
  onChange,
}: {
  value: ControlsState;
  onChange: (s: ControlsState) => void;
}) {
  const tagOptions = useMemo(() => ["All", ...TAGS], []);

  function update<K extends keyof ControlsState>(k: K, v: ControlsState[K]) {
    onChange({ ...value, [k]: v });
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-6">
      <div className="grid lg:grid-cols-12 gap-3 items-center">
        {/* Search */}
        <div className="lg:col-span-5">
          <label htmlFor="blog-search" className="sr-only">Search posts</label>
          <div className="flex items-center gap-2 rounded-xl border border-soft px-3 py-2 bg-[color-mix(in_oklab,var(--background)_94%,transparent)]">
            <SearchIcon className="w-4 h-4" />
            <input
              id="blog-search"
              value={value.query}
              onChange={(e) => update("query", e.target.value)}
              placeholder="Search by title, excerpt, or tag…"
              className="w-full bg-transparent outline-none text-sm"
            />
            {value.query && (
              <button onClick={() => update("query", "")} className="text-xs underline underline-offset-2">
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category */}
        <div className="lg:col-span-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            <select
              className="w-full px-3 py-2 rounded-xl border border-soft bg-[color-mix(in_oklab,var(--background)_94%,transparent)] text-sm"
              value={value.category}
              onChange={(e) => update("category", e.target.value as any)}
            >
              {["All", ...CATEGORIES].map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Tag */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4" />
            <select
              className="w-full px-3 py-2 rounded-xl border border-soft bg-[color-mix(in_oklab,var(--background)_94%,transparent)] text-sm"
              value={value.tag}
              onChange={(e) => update("tag", e.target.value)}
            >
              {tagOptions.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Sort */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <SortAsc className="w-4 h-4" />
            <select
              className="w-full px-3 py-2 rounded-xl border border-soft bg-[color-mix(in_oklab,var(--background)_94%,transparent)] text-sm"
              value={value.sortBy}
              onChange={(e) => update("sortBy", e.target.value as any)}
            >
              {["Newest", "Oldest", "Title"].map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
