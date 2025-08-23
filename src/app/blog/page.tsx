// src/app/blog/page.tsx
import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog | Rubic’s Digital Solutions",
  description:
    "Verified insights on cybersecurity, software, and digital resilience — from Zero Trust to app hardening and incident response.",
  alternates: { canonical: "https://rubicsdigitalsolutions.ca/blog" },
  openGraph: {
    title: "Blog | Rubic’s Digital Solutions",
    description:
      "Practical, verified guidance for secure, fast, and resilient digital products.",
    url: "https://rubicsdigitalsolutions.ca/blog",
    type: "website",
  },
};

export default function Page() {
  return <BlogContent />;
}
