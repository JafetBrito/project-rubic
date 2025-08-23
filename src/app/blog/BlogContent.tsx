// src/app/blog/BlogContent.tsx
"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Hero } from "./sections/Hero";
import { Controls } from "./sections/Controls";
import { PostsGrid } from "./sections/PostsGrid";

export default function BlogContent() {
  return (
    <>
      <Navbar />
      <Hero />
      <Controls />
      <PostsGrid />
      <Footer />
    </>
  );
}
