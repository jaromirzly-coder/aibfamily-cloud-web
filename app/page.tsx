import Navbar from "@/components/Navbar";
import Announcement from "@/components/Announcement";
import Hero from "@/components/Hero";
import How from "@/components/How";
import Safe from "@/components/Safe";
import Contact from "@/components/Contact";
import GetAibeva from "@/components/GetAibeva";
import Numbers from "@/components/Numbers";
import HopeaBand from "@/components/HopeaBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg overflow-x-hidden">
      <Navbar />
      <Announcement />
      <Hero />
      <How />
      <Safe highlight="IDENTITY" intro="AIBfamily is being built on the same seven layers as AIBEVA. One rule: every AIB answers to its own person. Here is what you can already see in AIBEVA today." />
      <Contact />
      <GetAibeva
        kicker="Available today"
        title="Meet AIBEVA."
        gold="The AIB you can use today."
        intro="AIBfamily is built on AIB.core, the core of AIBEVA. AIBEVA is an intelligent being for Windows that belongs to you, not to a platform. It lives on your PC, keeps its memory with you, and has no ads and no subscription."
        adultsNote
      />
      <Numbers />
      <HopeaBand />
      <Footer />
    </main>
  );
}
