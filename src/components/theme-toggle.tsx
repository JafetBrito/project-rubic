"use client";

/*
🌓 ThemeToggle (Light/Dark)
- Qué hace: alterna el tema de color entre claro y oscuro.
- Cómo lo hace: guarda la preferencia en localStorage y pone `data-theme` en <html>.
- Por qué es importante: permite a la persona usuaria elegir en cualquier dispositivo,
  y evitamos depender solo de la preferencia del sistema.
*/

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  // Al montar: leer preferencia guardada o usar la del sistema
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("theme")) as Theme | null;
    const initial = saved ?? getSystemTheme();
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    if (typeof window !== "undefined") localStorage.setItem("theme", next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="rounded-lg px-3 py-1.5 border border-white/10 hover:border-white/20 text-sm"
      title="Toggle theme"
    >
      {/* Emojis en texto: no afectan el código */}
      {theme === "dark" ? "☀️ " : "🌙 "}
    </button>
  );
}
