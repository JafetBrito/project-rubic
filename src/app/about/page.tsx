// src/app/about/page.tsx
import type { Metadata } from "next";
import AboutContent from "./about-content";

export const metadata: Metadata = {
  title: "About Us | Rubic’s Digital Solutions",
  description:
    "Rubic’s Digital Solutions builds secure, privacy-first, and high-performance digital products.",
};

export default function Page() {
  return <AboutContent />;
}
