import { aibeva, AIBLAB, DOWNLOAD } from "@/lib/links";
import { IMAGES } from "./images";

// "Meet AIBEVA" call to action — shared by every AIBlab site; headline and intro differ per site.
export default function GetAibeva({
  kicker = "See it working",
  title,
  gold,
  intro,
  adultsNote = false,
}: {
  kicker?: string;
  title: string;
  /** Second headline line, shown in the site accent colour. */
  gold: string;
  intro: string;
  adultsNote?: boolean;
}) {
  return (
    <section id="aibeva" aria-labelledby="aibeva-title" className="sec">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-[28px] border border-rule bg-surface">
          <img
            src={IMAGES.famAibeva.src}
            alt="Your AIB lives on your own computer"
            width={IMAGES.famAibeva.width}
            height={IMAGES.famAibeva.height}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-left opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/90 to-bg/40 pointer-events-none" />
          <div className="relative p-6 sm:p-12 lg:p-16">
            <p className="mb-6"><span className="tag tag-today">{kicker}</span></p>
            <h2 id="aibeva-title" className="h2 mb-6 max-w-[16ch]">
              {title}<span className="h-accent">{gold}</span>
            </h2>
            <p className="lede mb-8">{intro}</p>
            <ul className="grid sm:grid-cols-3 gap-3 max-w-3xl mb-9 text-sm font-semibold text-ink list-none p-0">
              {["Its own identity", "A memory you can see, on your PC", "No ads · no subscription"].map((t) => (
                <li key={t} className="rounded-2xl border border-rule bg-surface/85 px-4 py-3">{t}</li>
              ))}
            </ul>
            <div className="actions">
              <a href={DOWNLOAD} target="_blank" rel="noopener" className="btn btn-solid">
                Download AIBEVA
              </a>
              <a href={aibeva()} target="_blank" rel="noopener" className="btn btn-line">
                Meet AIBEVA ↗
              </a>
              <a href={AIBLAB} target="_blank" rel="noopener" className="btn btn-line">
                AIBlab ↗
              </a>
            </div>
            <p className="fine mt-7 max-w-2xl">
              Windows 10/11, 64-bit · signed installer, SHA-256 published.{adultsNote ? " AIBEVA is for adults (18+)." : ""}
            </p>
            <div className="disclosure mt-4 max-w-2xl">
              AIBEVA is an artificial intelligence system. When you use it, you are interacting with an AI, not a human being. (EU AI Act, Article 50.)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
