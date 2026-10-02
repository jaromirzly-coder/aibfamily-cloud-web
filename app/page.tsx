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
      <section className="py-24 bg-fam-950 relative">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">What we are building</h2>
          <p className="text-slate-400 leading-relaxed mb-8">{"Family mode: a parent sees what they need, a child keeps privacy appropriate to their age. Every family member has their own being and shares only what they explicitly allow. Being built on AIB.core, the engine behind AIBEVA. Terms by agreement — support@aiblab.info."}</p>
        </div>
      </section>
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
