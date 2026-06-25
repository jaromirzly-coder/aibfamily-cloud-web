import Navbar from "@/components/Navbar";
import SummerBanner from "@/components/SummerBanner";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Protection from "@/components/Protection";
import Features from "@/components/Features";
import Dashboard from "@/components/Dashboard";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import AIB1Section from "@/components/AIB1Section";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SummerBanner />
      <Hero />
      <TrustBar />
      <Protection />
      <Features />
      <Dashboard />
      <Pricing />
      <Testimonials />
      <FAQ />
      <AIB1Section />
      <Footer />
    </main>
  );
}
