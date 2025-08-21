/*
🖥️🏗️ Rubic Digital Solutions - Layout global

📜 Español:
Este archivo define el layout global de la aplicación usando Next.js con el App Router.
El layout es la estructura que envuelve a todas las páginas y se encarga de:
- Aplicar estilos y tipografía global.
- Configurar el idioma del documento.
- Definir metadatos (SEO, Open Graph, etc.).
- Incluir elementos comunes (como Navbar o Footer) si se quisieran compartir en todas las páginas.
Es importante mantener este archivo limpio y bien documentado porque cualquier cambio aquí afectará a todo el sitio.

📜 English:
This file defines the global layout of the application using Next.js with the App Router.
The layout is the structure that wraps all pages and is responsible for:
- Applying global styles and typography.
- Setting the document language.
- Defining metadata (SEO, Open Graph, etc.).
- Including common elements (like Navbar or Footer) if they should be shared across all pages.
It is important to keep this file clean and well-documented because any change here will affect the entire site.
*/


import type { Metadata } from "next";
import "./globals.css";

// 📜 Importación de tipografías desde next/font/google
// Inter: tipografía versátil y muy legible para cuerpo de texto.
// Plus Jakarta Sans: tipografía moderna para titulares.
// La opción `variable` nos permite asignar un nombre de variable CSS
// para poder usarlas fácilmente en todo el proyecto.
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

// Configuración de Inter (cuerpo de texto)
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// Configuración de Plus Jakarta Sans (titulares)
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Rubic Digital Solutions",
  description: "Fast, secure websites with high-impact SEO.",
  metadataBase: new URL("https://rubicsdigitalsolutions.ca/"),
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Rubic Digital Solutions",
    description: "Fast, secure websites with high-impact SEO.",
    url: "https://rubicsdigitalsolutions.ca/",
    siteName: "Rubic Digital Solutions",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jakarta.variable}`}>{children}</body>
    </html>
  );
}


