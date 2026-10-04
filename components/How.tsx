const points = [
  { title: "One being per person.",
    text: "Every family member has their own AIB, with their own identity and their own memory. Nobody shares a being — and nobody reads someone else’s." },
  { title: "Shared only when allowed.",
    text: "Nothing passes from one being to another unless it is explicitly allowed. Every permission has a scope and an expiry, and it can be revoked." },
  { title: "Parents see what they need.",
    text: "Enough to keep a child safe — not a transcript of their life. What a parent sees is set openly, so the child knows it too." },
  { title: "Children keep their privacy.",
    text: "Privacy grows with age. A child’s AIB is on the child’s side: it always says it is AI, never replaces people, and in a crisis it points to human help." },
];

export default function How() {
  return (
    <section id="how" aria-labelledby="how-title" className="bg-navy-950 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <p className="kicker">How it is designed</p>
        <h2 id="how-title" className="headline text-white text-[2.4rem] sm:text-6xl lg:text-7xl mb-6 max-w-4xl">
          ONE FAMILY.<span className="block gold-text">EVERYONE THEIR OWN AIB.</span>
        </h2>
        <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mb-12">
          No family account that reads everything. Each being answers to its own person — and the family decides together what is shared.
        </p>
        <ol className="grid md:grid-cols-2 gap-4 sm:gap-5">
          {points.map((p, i) => (
            <li key={p.title} className="rounded-2xl border border-white/[0.1] bg-navy-900 p-6 sm:p-7 flex gap-5 min-w-0">
              <span className="headline gold-text text-3xl shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <div className="min-w-0">
                <h3 className="text-white text-xl font-extrabold leading-snug mb-2">{p.title}</h3>
                <p className="text-slate-400 leading-relaxed">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm text-slate-500 max-w-2xl">
          AIBfamily is in development. This page describes what we are building, not a finished product. Designed with the EU AI Act and GDPR in mind.
        </p>
      </div>
    </section>
  );
}
