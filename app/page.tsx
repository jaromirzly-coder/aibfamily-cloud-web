import Navbar from "@/components/Navbar";
import Announcement from "@/components/Announcement";
import Hero from "@/components/Hero";
import How from "@/components/How";
import Safe from "@/components/Safe";
import Contact from "@/components/Contact";
import GetAibeva from "@/components/GetAibeva";
import Numbers from "@/components/Numbers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-950 overflow-x-hidden">
      <Navbar />
      <Announcement />
      <Hero />
      <How />
      <Safe highlight="IDENTITY" intro="AIBfamily is being built on the same seven layers as AIBEVA. One rule: every AIB answers to its own person." />
      <Contact />
      <GetAibeva
        kicker="Available today"
        title="MEET AIBEVA."
        gold="THE AIB YOU CAN USE TODAY."
        intro="AIBfamily is built on AIB.core — the engine behind AIBEVA. AIBEVA is your own AIB for Windows, free to download."
        adultsNote
      />
      <Numbers />
      <Footer />
    </main>
  );
}
