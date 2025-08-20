"use client";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// Botón flotante discreto que aparece tras un pequeño scroll.
export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 160);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed z-40 right-4 bottom-4 transition-opacity ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col gap-2 items-end">
        {/* WhatsApp directo */}
        <a
          href="https://wa.me/12495321984"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="lucide w-6 h-6" aria-hidden />
        </a>

        {/* o Contact page como botón primario */}
        <Link href="/contact" className="btn-primary inline-flex">
          Contact
        </Link>
      </div>
    </div>
  );
}
