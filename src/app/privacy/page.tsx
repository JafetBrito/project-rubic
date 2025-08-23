// src/app/privacy/page.tsx
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Privacy Policy — Rubic’s Digital Solutions",
  description: "How Rubic’s Digital Solutions collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="px-4">
        <article className="mx-auto max-w-3xl py-12 md:py-16 prose dark:prose-invert">
          <h1>Privacy Policy</h1>
          <p><strong>Last updated:</strong> August 2025</p>

          <h2>Overview</h2>
          <p>
            Rubic’s Digital Solutions (“we”, “us”) is committed to protecting your privacy.
            This Policy explains what data we collect, why, and how we handle it.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li>Contact details you submit (name, email, message, subject).</li>
            <li>Basic analytics (pages visited, device, approximate location).</li>
          </ul>

          <h2>How we use your data</h2>
          <ul>
            <li>To respond to inquiries and provide services you request.</li>
            <li>To improve our website, security, and user experience.</li>
          </ul>

          <h2>Sharing</h2>
          <p>
            We do not sell your data. We may share it with service providers (e.g., email or hosting)
            under strict contractual obligations and only as needed.
          </p>

          <h2>Retention</h2>
          <p>
            We keep contact messages as long as necessary to support you or as required by law.
          </p>

          <h2>Your rights</h2>
          <p>
            You can request access, correction, or deletion of your personal data at any time by
            emailing <a href="mailto:hello@rubicsdigitalsolutions.ca">hello@rubicsdigitalsolutions.ca</a>.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy questions, contact us at{" "}
            <a href="mailto:hello@rubicsdigitalsolutions.ca">hello@rubicsdigitalsolutions.ca</a>.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
