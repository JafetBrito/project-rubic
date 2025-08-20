import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ClientsStrip from "@/components/clients-strip";
import Showreel from "@/components/showreel";
import ServicesShowcase from "@/components/services-showcase";
import FloatingCTA from "@/components/floating-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientsStrip />
        <Showreel />
        <ServicesShowcase />
        <FloatingCTA />
        <Footer />
      </main>
    </>
  );
}
