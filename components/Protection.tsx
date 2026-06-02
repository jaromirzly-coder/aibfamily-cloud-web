const layers = [
  {
    n: "01",
    icon: "🪪",
    title: "AIBSN Identity Verification",
    body: "Only AI agents with a verified AIBSN identity key can interact with your child. Unregistered or unknown AI agents are blocked instantly — before a single word is exchanged.",
    color: "border-l-violet-400",
  },
  {
    n: "02",
    icon: "🛡️",
    title: "Guardian Middleware (Fail-Closed)",
    body: "Every AI response is audited in real time before your child sees it. If the audit encounters any error, the response is blocked — safety is never degraded. PASS, ALERT, or CRITICAL verdict on every message.",
    color: "border-l-purple-500",
  },
  {
    n: "03",
    icon: "🧠",
    title: "Behavioural Pattern Analysis",
    body: "AIBguard tracks patterns across conversations — not just individual messages. Escalating distress signals, recurring sensitive topics, and unusual query patterns trigger review before they become crises.",
    color: "border-l-fuchsia-500",
  },
  {
    n: "04",
    icon: "🚨",
    title: "Crisis Detection & 116 111",
    body: "Automatic detection of self-harm language, suicidal ideation, and abuse signals. When triggered, the system notifies you immediately and — where configured — connects to the certified crisis helpline 116 111.",
    color: "border-l-pink-500",
  },
  {
    n: "05",
    icon: "🔒",
    title: "Data Shield (AES-256 · EU Only)",
    body: "Your child leaves no digital footprint. All data is encrypted per-family with AES-256. Everything stays in EU data centres (Frankfurt). No data is ever sold, shared, or transferred outside the EU.",
    color: "border-l-rose-500",
  },
];

export default function Protection() {
  return (
    <section id="protection" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-[#7c3aed] text-sm font-semibold uppercase tracking-widest">AIBguard Protection</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            5 layers between your child<br />and anything harmful.
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Each layer is independent. All five run simultaneously. If any layer flags a concern, you're notified within 3 seconds.
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {layers.map((l) => (
            <div key={l.n} className={`bg-slate-50 rounded-2xl border-l-4 ${l.color} p-6 flex gap-5 items-start hover:shadow-md transition-shadow`}>
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow flex items-center justify-center text-2xl border border-purple-100">
                {l.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">{l.n}</span>
                  <h3 className="font-bold text-slate-900">{l.title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{l.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
