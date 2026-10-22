import Navbar from "./Navbar";
import Footer from "./Footer";

export const LAST_UPDATED = "4 October 2026";

export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-bg overflow-x-hidden">
      <Navbar />
      <div className="mt-16 border-b border-rule hero-bg">
        <div className="wrap pt-14 pb-10 sm:pt-20 sm:pb-14">
          <h1 className="h1 text-[clamp(2.4rem,5.6vw,4.4rem)] mb-4">{title}</h1>
          <p className="fine m-0">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>
      <article className="wrap pt-6 pb-20 sm:pb-28">
        <div className="legal max-w-3xl text-base sm:text-[17px] leading-relaxed">{children}</div>
      </article>
      <Footer />
    </main>
  );
}
