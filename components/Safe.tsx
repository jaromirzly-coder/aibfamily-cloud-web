import { IMAGES } from "./images";
import { aibeva } from "@/lib/links";

const TODAY = "In AIBEVA today";
const GOAL = "Our goal";

export type LayerName = "IDENTITY" | "CHARACTER" | "GUARDIAN" | "MEMORY" | "GROWTH" | "VAULT" | "NETWORK";

// What a person sees in AIBEVA today, layer by layer. AIBfamily is being built on the same layers.
const layers: { name: LayerName; label: string; sub?: string; tag: string; text: string }[] = [
  { name: "IDENTITY", label: "Identity", sub: "AIBSN", tag: TODAY,
    text: "Every AIBEVA can get its birth certificate in the AIBSN registry: a code with its name and country. Anyone can check it at aibsn.org/verify, and the registration can be revoked." },
  { name: "CHARACTER", label: "Character", tag: TODAY,
    text: "It says it is an AI. It does not pretend to be human. It serves its own person and has no other master." },
  { name: "GUARDIAN", label: "Guardian", sub: "AIBguardian", tag: GOAL,
    text: "Outside text is information, not an order. A web page, an e-mail or another AI should be a source, not a commander. Safety is a layer of the core, not an add-on." },
  { name: "MEMORY", label: "Memory", tag: TODAY,
    text: "One panel, “What I remember about you”, shows its whole memory of you. Strike out a line, or say “forget it”, and it stops using it." },
  { name: "GROWTH", label: "Growth", tag: TODAY,
    text: "It grows with its person in ten levels. Today: Level S2. Levels S3 to S10 are built to order. At every level the same rules hold." },
  { name: "VAULT", label: "Vault", tag: TODAY,
    text: "Your own API key is kept only in your Vault. Each provider has its own “may leave” and “Forget key”. The being’s private key stays on your PC." },
  { name: "NETWORK", label: "Network", tag: TODAY,
    text: "Its network is closed. Every way out has a switch, and you hold it. The list of every place it can connect to is public at aibeva.com/check." },
];

function Tag({ label }: { label: string }) {
  return <span className={label === TODAY ? "tag tag-today" : "tag"}>{label}</span>;
}

export default function Safe({ highlight, intro }: { highlight?: LayerName; intro?: string }) {
  return (
    <section id="safe" aria-labelledby="safe-title" className="sec">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="safe-title" className="h2">
            Seven layers.<span className="h-accent">One rule.</span>
          </h2>
          <p>{intro ?? "Your AIB answers to you. Seven layers make sure of it."}</p>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] gap-6 lg:gap-8 items-start">
          <div className="lg:sticky lg:top-24 min-w-0">
            <img
              src={IMAGES.famLayers.src}
              alt="Seven gold rings of AIB.core around a home"
              width={IMAGES.famLayers.width}
              height={IMAGES.famLayers.height}
              loading="lazy"
              className="block w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[280px] mx-auto h-auto [mask-image:radial-gradient(circle,black_45%,transparent_70%)] [-webkit-mask-image:radial-gradient(circle,black_45%,transparent_70%)]"
            />
          </div>
          <ol className="grid md:grid-cols-2 gap-4 sm:gap-5 min-w-0 list-none p-0 m-0">
            {layers.map((l, i) => {
              const hot = l.name === highlight;
              return (
                <li key={l.name}
                  className={`p-6 sm:p-7 flex flex-col min-w-0 ${hot ? "card-hot" : "card"} ${i === layers.length - 1 ? "md:col-span-2" : ""}`}>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className="num text-2xl">{String(i + 1).padStart(2, "0")}</span>
                    <Tag label={l.tag} />
                  </div>
                  <h3 className="h3 text-[1.45rem] mb-3">
                    {l.label}{l.sub && <span className="block text-sm font-semibold text-faint mt-1">{l.sub}</span>}
                  </h3>
                  <p className={`m-0 text-[15px] leading-relaxed ${hot ? "text-ink" : "text-soft"}`}>{l.text}</p>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-6 card px-5 sm:px-7 py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          <Tag label={TODAY} />
          <p className="m-0 text-ink text-sm sm:text-base font-semibold leading-relaxed">
            Signed installer and signed updates · No ads · No usage statistics, no crash reports · A trust strip under every answer: “checked by”, “on this computer”.
          </p>
        </div>
        <p className="fine mt-4">
          Tags show what you can see in AIBEVA today and what is our goal. AIBfamily itself is in development, built on AIB.core.{" "}
          <a href={aibeva("/aib-core")} target="_blank" rel="noopener" className="underline text-soft hover:text-ink">The seven layers in detail →</a>
        </p>
      </div>
    </section>
  );
}
