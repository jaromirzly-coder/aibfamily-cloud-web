import { AIBLAB } from "@/lib/links";
import { IMAGES } from "./images";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="sec">
      <div className="wrap">
        <div className="rounded-[28px] bg-tint border border-rule p-5 sm:p-10 lg:p-14 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <img
            src={IMAGES.famContact.src}
            alt="A family kitchen table at night under a warm lamp, with a soft golden network above it"
            width={IMAGES.famContact.width}
            height={IMAGES.famContact.height}
            loading="lazy"
            className="frame lg:col-span-2 w-full h-auto max-h-[440px] object-cover"
          />
          <div className="min-w-0">
            <h2 id="contact-title" className="h2 mb-6">
              Want to know<span className="h-accent">more?</span>
            </h2>
            <p className="lede">
              We are building AIBfamily on AIB.core. Questions, ideas, what your family would need: write to us.
            </p>
          </div>
          <div className="min-w-0 flex flex-col gap-3">
            <a href="mailto:info@aiblab.info?subject=AIBfamily" className="btn btn-solid text-lg min-h-[56px]">
              info@aiblab.info
            </a>
            <a href={AIBLAB} target="_blank" rel="noopener" className="btn btn-line">
              About AIBlab ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
