// src/app/about/AboutContent.tsx
"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Hero, WhoWeAre, Capabilities, Values, Pillars, Standards, Process, Faqs } from "./sections";

export default function AboutContent() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Capabilities />
      <Values />
      <Pillars />
      <Standards />
      <Process />
      <Faqs />
      <section className="py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">Ready to strengthen your digital foundation?</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Speak with our team about secure architecture, performance, and growth.
        </p>
        <div className="mt-6">
          <a href="/contact" className="btn-primary">Contact Us</a>
        </div>
        <div className="mt-4 text-sm">
          <a href="/services" className="underline underline-offset-4">Explore Services</a>{" "}
          · <a href="/blog" className="underline underline-offset-4">Visit the Blog</a>
        </div>
      </section>
      <Footer />
    </>
  );
}
