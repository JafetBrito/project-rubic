// src/app/blog/tag/[tag]/page.tsx
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getPostsByTag } from "../../_data";
import { PostCard } from "../../_components";

export default function TagPage({ params }: { params: { tag: string } }) {
  const list = getPostsByTag(decodeURIComponent(params.tag));

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-2xl md:text-3xl font-semibold">Tag: {decodeURIComponent(params.tag)}</h1>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => <PostCard key={p.slug} post={p} />)}
        </div>
        {list.length === 0 && (
          <p className="mt-10 text-gray-600">No articles for this tag.</p>
        )}
        <div className="mt-8">
          <Link href="/blog" className="btn-ghost">← Back to blog</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
