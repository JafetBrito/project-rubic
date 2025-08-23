// src/app/page.tsx
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

/**
 * Home — minimal
 * - Only Navbar, Hero, Footer
 * - No extra sections
 */

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
