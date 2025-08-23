// src/app/contact/page.tsx
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ReachUs from "@/components/contact/ReachUs";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact — Rubic’s Digital Solutions",
  description: "Tell us about your project. We reply fast and in your language. Secure by design.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="px-4">
        <div className="mx-auto max-w-6xl py-12 md:py-20 grid gap-10 md:grid-cols-[1.1fr_.9fr]">
          <ReachUs />       {/* primero en DOM (móvil) */}
          <ContactForm />   {/* en md+ queda a la izquierda con order en CSS */}
        </div>
      </main>
      <Footer />
    </>
  );
}
