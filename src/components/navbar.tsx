"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "@/components/theme-toggle";

/*
🧭 Navbar (responsive, site-wide)
- Mobile (lg-): “Rc’s Digital Solutions” + ThemeToggle (emoji) + hamburguesa (sin CTA).
- Desktop (lg+): enlaces + CTA visible. “Solutions” acentuado en el logo.
- Link activo por ruta con usePathname.
- Menú móvil: overlay FIXED + body scroll lock (no mueve el hero).
- Extra: toggle de hamburguesa para abrir/cerrar, cerrar con Escape, foco gestionado.
*/

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const burgerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // 🔒 Bloquea el scroll del documento cuando el menú móvil está abierto
  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = open ? "hidden" : "";

    // Mueve el foco a la X al abrir; devuélvelo a la hamburguesa al cerrar
    if (open) {
      // pequeño timeout para asegurar que el botón existe en el DOM
      const t = setTimeout(() => closeRef.current?.focus(), 0);
      return () => {
        clearTimeout(t);
        burgerRef.current?.focus();
      };
    }

    return () => {
      root.style.overflow = "";
    };
  }, [open]);

  // Cerrar con Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`navbar-header sticky top-0 z-50 backdrop-blur ${open ? "menu-open" : ""}`}>
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between gap-3">
        {/* Marca */}
        <Link href="/" className="logo-text logo-text--brand tracking-tight">
        <span className="lg:hidden">Rubic’s Digital Solutions</span>          <span className="hidden lg:inline">
            Rubic’s Digital <span className="logo-accent">Solutions</span>
          </span>
        </Link>

        {/* Navegación de escritorio */}
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${isActive(item.href) ? "nav-link--active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Acciones: ThemeToggle siempre; CTA solo desktop; hamburguesa solo mobile */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* CTA SOLO en escritorio */}
          <div className="hidden lg:inline-flex">
            <Link href="/contact" className="btn-primary text-sm font-medium">
              Get a Quote
            </Link>
          </div>

          {/* Hamburguesa SOLO en mobile (toggle abre/cierra) */}
          <button
            ref={burgerRef}
            className="icon-btn burger lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle main menu</span>
            <span className="burger-bar" />
            <span className="burger-bar" />
            <span className="burger-bar" />
          </button>
        </div>
      </div>

      {/* Menú móvil: overlay fijo (no empuja contenido) */}
      {open && (
        <div
          id="mobile-menu"
          className="mobile-overlay lg:hidden"
          onClick={() => setOpen(false)} // clic fuera del panel cierra
        >
          <div
            className="mobile-sheet"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
            onClick={(e) => e.stopPropagation()} // evita cerrar tocando dentro
          >
            <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-3">
              <h2 id="mobile-menu-title" className="sr-only">
                Main navigation
              </h2>

              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${isActive(item.href) ? "nav-link--active" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Botón de cierre al final, centrado */}
              <div className="close-wrap">
                <button
                  ref={closeRef}
                  type="button"
                  className="close-btn"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <span className="x-bar" />
                  <span className="x-bar" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
