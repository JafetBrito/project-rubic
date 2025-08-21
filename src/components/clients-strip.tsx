
// Technology stack strip displaying the core frameworks and tools we use.
// Icons are stored in /public/techs/* as SVG files.

import Image from "next/image";


const TECHS = [
  { name: "Next.js", src: "/techs/nextjs.svg", w: 48, h: 48 },
  { name: "React", src: "/techs/react.svg", w: 48, h: 48 },
  { name: "Tailwind CSS", src: "/techs/tailwindcss.svg", w: 48, h: 48 },
  { name: "TypeScript", src: "/techs/typescript.svg", w: 48, h: 48 },
  { name: "Node.js", src: "/techs/nodejs.svg", w: 48, h: 48 },
];

export default function ClientsStrip() {
  return (
    <section aria-label="Tech stack" className="border-t border-soft">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 text-center">
          We work with technologies like
        </p>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          
          {TECHS.map((t) => (
            <div
              key={t.name}
              className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src={t.src}
                alt={t.name}
                width={t.w}
                height={t.h}
                className="h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}