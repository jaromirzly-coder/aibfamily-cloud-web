const ecosystem = [
  { label: "aiblab.info",      href: "https://aiblab.info",      desc: "Hub" },
  { label: "aibgin.info",      href: "https://aibgin.info",      desc: "Schools" },
  { label: "aibguardian.info", href: "https://aibguardian.info", desc: "Safety" },
  { label: "aibfamily.cloud",  href: "https://aibfamily.cloud",  desc: "Families" },
];

const legal = [
  { label: "Privacy Policy",      href: "#" },
  { label: "Terms of Service",    href: "#" },
  { label: "Cookie Policy",       href: "#" },
  { label: "Withdrawal Policy",   href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-fam-950 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-coral to-brand-violet flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 12C7 12 1 8.5 1 5C1 3.3 2.3 2 4 2C4.9 2 5.7 2.4 7 3.5C8.3 2.4 9.1 2 10 2C11.7 2 13 3.3 13 5C13 8.5 7 12 7 12Z" fill="white"/>
                </svg>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                AIB<span className="gradient-text">family</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Safe AI for families. 5-layer AIBguard protection for children ages 4–15. EU data only.
            </p>
            <p className="text-slate-600 text-xs">AIBlab · SAY TO PAY s.r.o.</p>
            <p className="text-slate-600 text-xs">IČO: 08694222 · Czech Republic · EU</p>
          </div>

          <div>
            <h5 className="text-xs font-bold text-slate-400 mb-5 uppercase tracking-[0.15em]">Product</h5>
            <ul className="space-y-3">
              {[
                { label: "5-Layer Protection", href: "#protection" },
                { label: "Parent Dashboard",   href: "#dashboard" },
                { label: "Pricing",            href: "#pricing" },
                { label: "FAQ",                href: "#faq" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-slate-500 hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold text-slate-400 mb-5 uppercase tracking-[0.15em]">Ecosystem</h5>
            <ul className="space-y-3">
              {ecosystem.map((d) => (
                <li key={d.label}>
                  <a href={d.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                    {d.label}
                    <span className="text-slate-700 text-[10px] font-medium border border-white/[0.06] px-1.5 py-0.5 rounded-full">{d.desc}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold text-slate-400 mb-5 uppercase tracking-[0.15em]">Legal</h5>
            <ul className="space-y-3">
              {legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-slate-500 hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">© 2026 AIBfamily · AIBlab · SAY TO PAY s.r.o. All rights reserved.</p>
          <div className="flex items-center gap-5 text-xs text-slate-600">
            <a href="mailto:info@aibfamily.cloud" className="hover:text-brand-coral transition-colors">info@aibfamily.cloud</a>
            <a href="mailto:support@aibfamily.cloud" className="hover:text-brand-coral transition-colors">support@aibfamily.cloud</a>
            <a href="https://aibguardian.info" target="_blank" rel="noopener noreferrer" className="hover:text-brand-coral transition-colors">Powered by AIBguardian</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
