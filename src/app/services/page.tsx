import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

// Importa desde el barrel local (todos existen y exportan default)
import { Hero, ServiceGrid, Process, EngagementModels, FAQ, MissionBar } from "./components";

/* ==========================================================
   /services — Rubic’s Digital Solutions
   - Composed from small server-safe sections
   - No pricing; value-focused engagement models
   ========================================================== */

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* HERO with animated background you already have */}
      <Hero />

      {/* Core services with examples */}
      <Section>
        <Container>
          <ServiceGrid />
          <MissionBar />
        </Container>
      </Section>

      {/* Work process (timeline) */}
      <Section>
        <Container>
          <Process />
        </Container>
      </Section>

      {/* Engagement Models (no numbers, just what you get) */}
      <Section>
        <Container>
          <EngagementModels />
        </Container>
      </Section>

      {/* Per-category FAQ (3 Qs each) */}
      <Section>
        <Container>
          <FAQ />
        </Container>
      </Section>

      <Footer />
    </>
  );
}
