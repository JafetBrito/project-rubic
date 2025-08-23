// src/app/about/page.tsx
import type { Metadata } from "next";
import AboutContent from "./about-content";

export const metadata: Metadata = {
  title: "About Us | Rubic’s Digital Solutions",
  description:
    "Rubic’s Digital Solutions builds secure, privacy-first, and high-performance digital products. We combine software engineering, AI, cybersecurity, SEO, marketing, and consulting to help organizations grow with confidence.",
  alternates: { canonical: "https://rubicsdigitalsolutions.ca/about" },
  openGraph: {
    title: "About Rubic’s Digital Solutions",
    description:
      "We create a safer digital world through rigorous engineering, security by design, and measurable outcomes.",
    url: "https://rubicsdigitalsolutions.ca/about",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "About Rubic’s Digital Solutions" },
};

export default function Page() {
  return <AboutContent />;
}
