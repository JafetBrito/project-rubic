// src/app/about/AboutContent.tsx
"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
// Si ya tienes secciones divididas, impórtalas:
import { Hero, WhoWeAre, Capabilities, Values, Pillars, Standards, Process, Faqs } from "./sections";

export default function AboutContent() {
  return (
    <>
      <Navbar />
      {/* Quita/ajusta estas secciones según lo que ya tengas */}
      <Hero />
      <WhoWeAre />
      <Capabilities />
      <Values />
      <Pillars />
      <Standards />
      <Process />
      <Faqs />
      <Footer />
    </>
  );
}
