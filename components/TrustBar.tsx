const badges = [
  { label: "COPPA Compliant",        sub: "Child privacy" },
  { label: "UK Children's Code",     sub: "ICO standard" },
  { label: "GDPR Article 8",         sub: "Under-16 data" },
  { label: "EU AI Act",              sub: "Article 28b" },
  { label: "AES-256 Encrypted",      sub: "Per-family key" },
  { label: "Crisis Line 116 111 (EU) · 988 Lifeline (US)",    sub: "Linked" },
];

export default function TrustBar() {
  return (
    <div className="bg-fam-900 border-y border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {badges.map((b) => (
          <div key={b.label} className="flex items-center gap-2 opacity-50 hover:opacity-90 transition-opacity">
            <div className="w-5 h-5 rounded bg-gradient-to-br from-brand-coral/40 to-brand-violet/40 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 1l3 3H9L5 9 1 3h1L5 1z" fill="#f472b6"/>
                <path d="M2.5 6.5l2 2 3.5-5" stroke="white" strokeWidth="1" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="text-xs font-bold text-white leading-none">{b.label}</div>
              <div className="text-[10px] text-slate-500">{b.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
