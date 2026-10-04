import { IMAGES } from "./images";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <img
        src={IMAGES.yourPc.src}
        alt="An AIB lives on your own computer"
        width={IMAGES.yourPc.width}
        height={IMAGES.yourPc.height}
        className="absolute inset-0 w-full h-full object-cover object-[75%_center] opacity-35 lg:opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-16 sm:pt-24 sm:pb-28">
        <p className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-gold/70 bg-gold/15 text-[11px] sm:text-xs font-extrabold tracking-[0.16em] uppercase text-gold-light">
          In development — being built on AIB.core
        </p>
        <h1 className="headline text-white text-[2.3rem] min-[400px]:text-[2.7rem] sm:text-6xl lg:text-7xl mb-7 sm:mb-9 max-w-5xl">
          PARENTS SEE WHAT THEY NEED.
          <span className="block gold-text">CHILDREN KEEP THEIR PRIVACY.</span>
        </h1>
        <p className="text-slate-200 text-lg sm:text-xl leading-relaxed max-w-2xl mb-9">
          AIBfamily is family mode for AIBs. Every family member has their own intelligent being — and only what is explicitly allowed is shared.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a href="mailto:info@aiblab.info?subject=AIBfamily"
            className="btn-gold inline-flex items-center justify-center px-7 py-4 rounded-xl font-extrabold text-base transition-all hover:-translate-y-0.5">
            Tell us what your family needs
          </a>
          <a href="#how"
            className="inline-flex items-center justify-center border border-white/30 text-white px-7 py-4 rounded-xl font-semibold hover:bg-white/[0.08] transition-all">
            How it works
          </a>
        </div>
      </div>
    </section>
  );
}
