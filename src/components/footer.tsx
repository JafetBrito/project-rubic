// Footer simple, responsive y accesible.
// Muestra año, nombre del sitio, links útiles y redes.
import Link from "next/link";
import Container from "@/components/ui/container";
import { Instagram, Twitter, Facebook, Github, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-soft">
      <Container>
        <div className="py-10 grid gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="font-extrabold tracking-tight text-lg">
              Rubic’s Digital <span className="logo-accent">Solutions</span>
            </div>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Fast, secure websites with high-impact SEO.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <ul className="space-y-2 text-sm">
              <li><Link className="nav-link" href="/services">Services</Link></li>
              <li><Link className="nav-link" href="/projects">Projects</Link></li>
              <li><Link className="nav-link" href="/blog">Blog</Link></li>
              <li><Link className="nav-link" href="/about">About</Link></li>
              <li><Link className="nav-link" href="/contact">Contact</Link></li>
            </ul>
          </nav>

          {/* Social / Legal */}
          <div className="sm:text-right">
            {/* Íconos sociales (cambian de color con hover/focus/active según tema) */}
            <div className="flex sm:justify-end gap-3">
              <a
                href="https://instagram.com/tu_cuenta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="icon-link"
              >
                <Instagram className="lucide" aria-hidden />
              </a>

              <a
                href="https://x.com/tu_cuenta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                title="Twitter / X"
                className="icon-link"
              >
                <Twitter className="lucide" aria-hidden />
              </a>

              <a
                href="https://facebook.com/tu_cuenta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="icon-link"
              >
                <Facebook className="lucide" aria-hidden />
              </a>

              {/* Opcionales */}
              <a
                href="https://github.com/tu_org"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="icon-link"
              >
                <Github className="lucide" aria-hidden />
              </a>

              <a
                href="https://linkedin.com/company/tu_empresa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="icon-link"
              >
                <Linkedin className="lucide" aria-hidden />
              </a>
            </div>

            <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
              © {year} Rubic’s Digital Solutions. All rights reserved.
            </p>
            <p className="mt-1 text-xs">
              <Link className="nav-link" href="/privacy">Privacy</Link>
              {" · "}
              <Link className="nav-link" href="/terms">Terms</Link>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
