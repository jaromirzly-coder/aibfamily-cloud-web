import { IMAGES } from "./images";

// Not used on the home page today (kept from the shared component set).
const limits = [
  "It does not pretend to be human.",
  "It does not show ads or sell you anything.",
  "It does not send the text of your conversations to us.",
  "It does not connect anywhere you have not switched on.",
];

export default function Limits() {
  return (
    <section id="limits" aria-labelledby="limits-title" className="sec">
      <div className="wrap">
        <h2 id="limits-title" className="h2 mb-10 sm:mb-12">
          What your AIB<span className="h-accent">does not do.</span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <img
            src={IMAGES.guardian.src}
            alt="The Guardian layer: outside instructions break against the shield"
            width={IMAGES.guardian.width}
            height={IMAGES.guardian.height}
            loading="lazy"
            className="frame w-full h-auto min-w-0"
          />
          <ul className="min-w-0 list-none p-0 m-0 divide-y divide-rule border-y border-rule">
            {limits.map((n) => (
              <li key={n} className="flex gap-4 py-4 sm:py-5">
                <svg className="w-5 h-5 mt-1 shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 6l12 12M18 6L6 18"/>
                </svg>
                <span className="text-ink text-base sm:text-lg leading-relaxed">{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
