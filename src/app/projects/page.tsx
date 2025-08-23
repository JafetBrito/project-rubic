"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

/* ===========================================================
   Projects — Simple version with 1 category (Websites)
   - Restored Hero
   - Single section: "Websites"
   - Cards with external links (target _blank)
   - DEMO images (Unsplash) using `unoptimized`
   =========================================================== */

type Site = {
  title: string;
  url: string;
  image: string;
  summary: string;
  tags?: string[];
};

const SITES: Site[] = [
  {
    title: "Modern E-commerce",
    url: "https://example.com/ecommerce",
    image:
      "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1600&auto=format&fit=crop",
    summary: "Catalog, optimized PDP and fast checkout.",
    tags: ["Next.js", "Stripe"],
  },
  {
    title: "Minimal SaaS Landing",
    url: "https://example.com/saas",
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop",
    summary: "Clear value proposition and social proof.",
    tags: ["CRO", "SEO"],
  },
  {
    title: "Technical Blog (MDX)",
    url: "https://example.com/blog",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
    summary: "Articles with code examples and dark mode.",
    tags: ["MDX", "A11y"],
  },
  {
    title: "Creative Portfolio",
    url: "https://example.com/portfolio",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    summary: "Subtle animations and adaptive grid.",
    tags: ["Framer Motion", "Tailwind"],
  },
  {
    title: "Corporate Website",
    url: "https://example.com/corporate",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
    summary: "Classic sections with high readability.",
    tags: ["Content AI", "Schema"],
  },
  {
    title: "Campaign Microsite",
    url: "https://example.com/campaign",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop",
    summary: "Tactical launch and lead capture page.",
    tags: ["Leads", "Analytics"],
  },
];

function ProjectsHero() {
  return (
    <section className="relative overflow-hidden projects-hero">
      {/* Original background */}
      <div aria-hidden className="projects-hero__bg" />
      <Container>
        <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-16 md:pt-28 md:pb-24 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Projects that perform
          </h1>
          <p
            className="mt-4 text-base md:text-lg"
            style={{
              color:
                "color-mix(in oklab, var(--foreground) 72%, transparent)",
            }}
          >
            Outcomes where speed, security, and design deliver measurable growth.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <ProjectsHero />

      {/* Single category: Websites */}
      <Section>
        <Container>
          <header className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Websites
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Selection of sites; each card opens the project in a new tab.
            </p>
          </header>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SITES.map((site) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-soft bg-surface overflow-hidden transition hover:shadow-lg"
                title={site.title}
              >
                <div className="relative h-48 w-full md:h-56 lg:h-52">
                  <Image
                    src={site.image}
                    alt={site.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    priority={false}
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold tracking-tight line-clamp-1">
                    {site.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {site.summary}
                  </p>
                  {site.tags?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {site.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs rounded-md border border-soft px-2 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  );
}
