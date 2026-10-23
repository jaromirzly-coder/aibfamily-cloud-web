import { IMAGES } from "./images";

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-bg">
      <img
        src={IMAGES.famHero.src}
        alt="A family on a sofa, each person with their own golden AIB"
        width={IMAGES.famHero.width}
        height={IMAGES.famHero.height}
        className="absolute inset-0 w-full h-full object-cover object-[80%_center] opacity-30 lg:opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-bg/20 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent pointer-events-none" />

      <div className="wrap relative pt-14 pb-16 sm:pt-24 sm:pb-28">
        <p className="mb-7"><span className="tag">In development · built on AIB.core</span></p>
        <h1 className="h1 mb-7 max-w-[15ch]">
          Parents see what they need.
          <span className="h-accent">Children keep their privacy.</span>
        </h1>
        <p className="lede mb-4">
          AIBfamily is family mode for AIBs. AI that belongs to each person in the family, not to a platform.
        </p>
        <p className="lede mb-9">
          Our goal: every family member has their own intelligent being, and only what is explicitly allowed is shared.
        </p>
        <div className="actions">
          <a href="mailto:info@aiblab.info?subject=AIBfamily" className="btn btn-solid">
            Tell us what your family needs
          </a>
          <a href="#how" className="btn btn-line">
            Our goals
          </a>
        </div>
      </div>
    </section>
  );
}
