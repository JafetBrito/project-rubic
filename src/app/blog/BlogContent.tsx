// src/app/blog/BlogContent.tsx
"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
// ⬇️ cambia esto:
import Hero from "./sections/Hero";                 // ✅ default
import { Controls, type ControlsState } from "./sections/Controls"; // ✅ named
import { PostsGrid } from "./sections/PostsGrid";   // ✅ named
import { useState } from "react";

export default function BlogContent() {
  const [controls, setControls] = useState<ControlsState>({
    query: "",
    category: "All",
    tag: "All",
    sortBy: "Newest",
  });

  return (
    <>
      <Navbar />
      <Hero />
      <Controls value={controls} onChange={setControls} />
      <PostsGrid controls={controls} />
      <Footer />
    </>
  );
}
