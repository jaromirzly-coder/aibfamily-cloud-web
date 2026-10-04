import { AIBLAB } from "@/lib/links";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-navy-900 border-y border-white/[0.06] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="min-w-0">
          <p className="kicker">Contact</p>
          <h2 id="contact-title" className="headline text-white text-[2.4rem] sm:text-6xl mb-6">
            WANT TO KNOW<span className="block gold-text">MORE?</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            We are building AIBfamily on AIB.core. Questions, ideas, what your family would need — write to us.
          </p>
        </div>
        <div className="min-w-0 flex flex-col gap-4">
          <a href="mailto:info@aiblab.info?subject=AIBfamily"
            className="btn-gold inline-flex items-center justify-center px-7 py-5 rounded-xl font-extrabold text-lg transition-all hover:-translate-y-0.5">
            info@aiblab.info
          </a>
          <a href={AIBLAB} target="_blank" rel="noopener"
            className="inline-flex items-center justify-center border border-white/30 text-white px-7 py-4 rounded-xl font-semibold hover:bg-white/[0.08] transition-all">
            About AIBlab ↗
          </a>
        </div>
      </div>
    </section>
  );
}
