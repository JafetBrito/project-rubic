// Simple “as-seen-on / clients” strip con logos SVG/PNG.
// Cambia los src por tus logos reales en /public/clients/*

import Image from "next/image";

const CLIENTS = [
  { name: "Brand A", src: "/clients/brand-a.svg", w: 96, h: 32 },
  { name: "Brand B", src: "/clients/brand-b.svg", w: 96, h: 32 },
  { name: "Brand C", src: "/clients/brand-c.svg", w: 96, h: 32 },
  { name: "Brand D", src: "/clients/brand-d.svg", w: 96, h: 32 },
  { name: "Brand E", src: "/clients/brand-e.svg", w: 96, h: 32 },
];

export default function ClientsStrip() {
  return (
    <section aria-label="Clients" className="border-t border-soft">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 text-center">
          Trusted by teams like
        </p>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {CLIENTS.map((c) => (
            <div key={c.name} className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
              <Image
                src={c.src}
                alt={c.name}
                width={c.w}
                height={c.h}
                className="h-6 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
