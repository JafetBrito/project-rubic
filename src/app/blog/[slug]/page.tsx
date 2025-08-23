// src/app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Calendar, Tag } from "lucide-react";
import { getPostBySlug } from "../_data";
import { formatDateUTC } from "../_utils";

type Params = { slug: string };

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post not found | Rubic’s Digital Solutions" };
  return {
    title: `${post.title} | Rubic’s Digital Solutions`,
    description: post.excerpt,
    alternates: { canonical: `https://rubicsdigitalsolutions.ca/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://rubicsdigitalsolutions.ca/blog/${post.slug}`,
      type: "article",
      images: [{ url: post.cover }],
    },
  };
}

export default function PostPage({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug);
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-10">
        {!post ? (
          <>
            <h1 className="text-2xl font-semibold">Post not found</h1>
            <p className="mt-2">The article you are looking for does not exist.</p>
            <div className="mt-6"><Link href="/blog" className="btn-ghost">← Back to blog</Link></div>
          </>
        ) : (
          <article>
            <header>
              <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" /> {formatDateUTC(post.date)}</span>
                <Link href={`/blog/category/${encodeURIComponent(post.category)}`} className="px-2 py-0.5 rounded-md border border-soft">{post.category}</Link>
                <span className="inline-flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <span className="flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <Link key={t} href={`/blog/tag/${encodeURIComponent(t)}`} className="px-2 py-0.5 rounded-full border border-soft text-xs">{t}</Link>
                    ))}
                  </span>
                </span>
              </div>
              <div className="mt-6 rounded-2xl overflow-hidden border border-soft">
                <img src={post.cover} alt={post.coverAlt} width={1200} height={800} className="w-full h-auto object-cover" />
              </div>
            </header>
            <div className="prose dark:prose-invert mt-8 max-w-none" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            <footer className="mt-10 flex items-center justify-between">
              <Link href="/blog" className="btn-ghost">← Back to blog</Link>
              <div className="text-sm text-gray-500">Rubic’s Digital Solutions</div>
            </footer>
          </article>
        )}
      </main>
      <Footer />
    </>
  );
}
