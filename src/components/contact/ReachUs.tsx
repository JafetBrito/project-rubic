// src/components/contact/ReachUs.tsx
import { Mail, MessageCircle, Globe, Clock } from "lucide-react";

export default function ReachUs() {
  return (
    <aside className="grid gap-4 content-start md:order-2">
      <div className="rounded-xl border border-soft p-5">
        <h2 className="h4">How to reach us</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <Mail className="lucide" aria-hidden />
            <a className="icon-link" href="mailto:hello@rubicsdigitalsolutions.ca">
              hello@rubicsdigitalsolutions.ca
            </a>
          </li>
          <li className="flex items-center gap-2">
            <MessageCircle className="lucide" aria-hidden />
            <a
              className="icon-link"
              href="https://wa.me/12495321984"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp — Chat now
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Globe className="lucide" aria-hidden />
            <span>Global / Remote — We’ll reply in your language.</span>
          </li>
          <li className="flex items-center gap-2">
            <Clock className="lucide" aria-hidden />
            <span>Mon–Fri · 10:00–18:00</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}
