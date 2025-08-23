"use client";

/*
🌗 ThemeToggle (Light/Dark) — iOS style switch
- Replaces emoji button with a modern slider toggle.
- Keeps same logic: save theme in localStorage, set data-theme on <html>.
*/

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  // On mount: load saved or system preference
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
      className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none 
                 border border-soft bg-surface"
    >
      {/* Track background (light vs dark) */}
      <span
        className={`absolute inset-0 rounded-full transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-700" : "bg-gray-300"
        }`}
      />
      {/* Thumb */}
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
          theme === "dark" ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}
