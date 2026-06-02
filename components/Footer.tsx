const ecosystem = [
  { label: "aiblab.info", href: "https://aiblab.info", desc: "Hub" },
  { label: "aibgin.info", href: "https://aibgin.info", desc: "Schools" },
  { label: "aibguardian.info", href: "https://aibguardian.info", desc: "Safety" },
  { label: "aibfamily.cloud", href: "https://aibfamily.cloud", desc: "Families" },
];

const legal = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Complaint Procedure", href: "#" },
  { label: "Withdrawal Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a0533] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-1 text-2xl font-extrabold mb-3">
              <span className="text-white">AIB</span>
              <span className="text-pink-400">family</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Safe AI for families. 5-layer AIBguard protection for children ages 4–15. EU data only.
            </p>
            <p className="text-slate-500 text-xs mt-3">A product of AIBlab · SAY TO PAY s.r.o.</p>
            <p className="text-slate-500 text-xs">IČO: 08694222 · Czech Republic · EU</p>
          </div>

          <div>
            <h5 className="text-xs font-semibold text-white mb-4 uppercase tracking-wider">Product</h5>
            <ul className="space-y-2.5">
              {[
                { label: "5-Layer Protection", href: "#protection" },
                { label: "Parent Dashboard", href: "#dashboard" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-slate-400 hover:text-pink-400 transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold text-white mb-4 uppercase tracking-wider">Ecosystem</h5>
            <ul className="space-y-2.5">
              {ecosystem.map((d) => (
                <li key={d.label}>
                  <a href={d.href} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-slate-400 hover:text-pink-400 transition-colors flex items-center gap-2">
                    {d.label}
                    <span className="text-slate-600 text-xs">({d.desc})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold text-white mb-4 uppercase tracking-wider">Legal</h5>
            <ul className="space-y-2.5">
              {legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-slate-400 hover:text-pink-400 transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 AIBfamily · AIBlab · SAY TO PAY s.r.o. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="mailto:info@aiblab.cz" className="hover:text-pink-400 transition-colors">info@aiblab.cz</a>
            <a href="https://aibguardian.info" target="_blank" rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors">Powered by AIBguardian</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
