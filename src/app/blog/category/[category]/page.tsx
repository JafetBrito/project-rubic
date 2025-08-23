// src/app/blog/category/[category]/page.tsx
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getPostsByCategory } from "../../_data";
import { PostCard } from "../../_components";

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = decodeURIComponent(params.category);
  const list = getPostsByCategory(category);

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-2xl md:text-3xl font-semibold">Category: {category}</h1>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => <PostCard key={p.slug} post={p} />)}
        </div>
        {list.length === 0 && <p className="mt-10 text-gray-600">No articles in this category.</p>}
        <div className="mt-8"><Link href="/blog" className="btn-ghost">← Back to blog</Link></div>
      </main>
      <Footer />
    </>
  );
}
