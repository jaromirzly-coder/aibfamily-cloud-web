import { IMAGES } from "./images";

const points = [
  { title: "One being per person.",
    text: "Each family member has their own AIB, with their own identity and their own memory. Nobody shares a being, and nobody reads someone else’s." },
  { title: "Shared only when allowed.",
    text: "Nothing passes from one being to another unless it is explicitly allowed. Each permission has a scope and an end date, and it can be revoked." },
  { title: "Parents see what they need.",
    text: "Enough to keep a child safe, not a transcript of their life. What a parent sees is set openly, so the child knows it too." },
  { title: "Children keep their privacy.",
    text: "Privacy grows with age. A child’s AIB is on the child’s side. It says it is an AI, it does not replace people, and in a crisis it points to human help." },
];

export default function How() {
  return (
    <section id="how" aria-labelledby="how-title" className="sec">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="mb-5"><span className="tag">Our goals</span></p>
            <h2 id="how-title" className="h2">
              One family.<span className="h-accent">Everyone their own AIB.</span>
            </h2>
          </div>
          <p>
            No family account that reads everything. Each being answers to its own person, and the family decides together what is shared.
          </p>
        </div>
        <img
          src={IMAGES.famHow.src}
          alt="Four golden spheres, each in its own shell, linked only through small gates"
          width={IMAGES.famHow.width}
          height={IMAGES.famHow.height}
          loading="lazy"
          className="frame w-full h-auto max-h-[420px] object-cover mb-10 sm:mb-12"
        />
        <ol className="grid md:grid-cols-2 gap-4 sm:gap-5 list-none p-0 m-0">
          {points.map((p, i) => (
            <li key={p.title} className="card p-6 sm:p-7 flex gap-5 min-w-0">
              <span className="num text-3xl shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <div className="min-w-0">
                <h3 className="h3 mb-2">{p.title}</h3>
                <p className="muted m-0">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="fine mt-8 max-w-2xl">
          AIBfamily is in development, built on AIB.core. This page describes our goals, not a finished product. We design it around the EU AI Act and GDPR.
        </p>
      </div>
    </section>
  );
}
