import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Protection from "@/components/Protection";
import Features from "@/components/Features";
import Dashboard from "@/components/Dashboard";
import FAQ from "@/components/FAQ";
import AIBlabEcosystem from "@/components/AIBlabEcosystem";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <Protection />
      <Features />
      <Dashboard />
      <FAQ />
      <AIBlabEcosystem />
      <Footer />
    </main>
  );
}
