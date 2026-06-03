const layers = [
  {
    n: "01",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "AIBSN Identity Verification",
    body: "Only AI agents with a verified AIBSN identity key can interact with your child. Unregistered AI agents are blocked before a single word is exchanged.",
    accent: "from-brand-violet/20",
    border: "border-brand-violet/30",
    iconColor: "text-brand-violet",
  },
  {
    n: "02",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L3 6v5c0 4.85 3.25 9.39 8 10.5C16.75 20.39 20 15.85 20 11V6l-9-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "AIBguard Middleware (Fail-Closed)",
    body: "Every AI response is audited in real time before your child sees it. If any error occurs, the response is blocked — safety never degrades. PASS, ALERT, or CRITICAL verdict on every message.",
    accent: "from-brand-coral/20",
    border: "border-brand-coral/30",
    iconColor: "text-brand-coral",
  },
  {
    n: "03",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 9.5c0-1.65 1.35-3 3-3s3 1.35 3 3c0 2-3 4-3 4s-3-2-3-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="11" cy="15.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
    title: "Behavioural Pattern Analysis",
    body: "AIBguard tracks patterns across conversations — not just individual messages. Escalating distress signals and unusual patterns trigger review before they become crises.",
    accent: "from-brand-purple/20",
    border: "border-brand-purple/30",
    iconColor: "text-brand-purple",
  },
  {
    n: "04",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2v4M11 16v4M4.22 4.22l2.83 2.83M14.95 14.95l2.83 2.83M2 11h4M16 11h4M4.22 17.78l2.83-2.83M14.95 7.05l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Crisis Detection & 116 111",
    body: "Automatic detection of self-harm language, suicidal ideation, and abuse signals. You receive an immediate push notification and — where configured — the system connects to crisis line 116 111.",
    accent: "from-brand-orange/20",
    border: "border-brand-orange/30",
    iconColor: "text-brand-orange",
  },
  {
    n: "05",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="11" width="16" height="9" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="11" cy="16" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: "Data Shield (AES-256 · EU Only)",
    body: "Your child leaves no digital footprint. All data is encrypted per-family with AES-256. Everything stays in EU data centres. No data is ever sold, shared, or transferred outside the EU.",
    accent: "from-brand-emerald/20",
    border: "border-brand-emerald/30",
    iconColor: "text-brand-emerald",
  },
];

export default function Protection() {
  return (
    <section id="protection" className="py-24 bg-fam-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-violet/[0.04] to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-brand-coral uppercase tracking-[0.2em] mb-4">AIBguard Protection</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            5 layers between your child<br/>
            <span className="gradient-text">and anything harmful.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Each layer is independent. All five run simultaneously. If any layer flags a concern, you&apos;re notified within 3 seconds.
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {layers.map((l) => (
            <div key={l.n}
              className={`group relative glass rounded-2xl border ${l.border} p-6 flex gap-5 items-start hover:-translate-y-0.5 hover:bg-white/[0.06] transition-all duration-300`}>
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${l.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
              <div className="relative z-10 flex gap-5 items-start">
                <div className="flex-shrink-0">
                  <div className={`w-11 h-11 rounded-xl glass flex items-center justify-center ${l.iconColor}`}>
                    {l.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-black text-white/20 font-mono tracking-widest">{l.n}</span>
                    <h3 className="font-bold text-white">{l.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{l.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
