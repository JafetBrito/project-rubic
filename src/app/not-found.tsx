import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70dvh] grid place-items-center text-center px-4">
        <div>
          <h1 className="text-5xl font-bold mb-3">404</h1>
          <p className="text-lg text-gray-400 mb-6">
            Oops! Page not found.
          </p>
          <Link href="/" className="btn-primary">
            ← Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
