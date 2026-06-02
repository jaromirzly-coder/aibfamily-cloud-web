const plans = [
  {
    name: "Family Starter",
    price: "$9.99",
    period: "/month",
    desc: "Everything you need to get started with safe AI for one child.",
    children: "1 child profile",
    features: [
      "1 child QR code",
      "All 5 AIBguard protection layers",
      "Parent dashboard",
      "Push alerts (< 3s)",
      "Crisis detection & 116 111",
      "Daily safety summary email",
      "EU data residency",
    ],
    cta: "Start Free Trial",
    highlight: false,
    badge: null,
  },
  {
    name: "Family Plus",
    price: "$19.99",
    period: "/month",
    desc: "For families with two or three children — full protection for everyone.",
    children: "Up to 3 child profiles",
    features: [
      "Up to 3 child QR codes",
      "All 5 AIBguard protection layers",
      "Per-child dashboards",
      "Push alerts + SMS alerts",
      "Crisis detection & 116 111",
      "Behavioural trend reports",
      "Encrypted teacher channel",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Family Premium",
    price: "$34.99",
    period: "/month",
    desc: "The complete package for larger families and power users.",
    children: "Up to 5 child profiles",
    features: [
      "Up to 5 child QR codes",
      "All 5 AIBguard protection layers",
      "Advanced analytics & reports",
      "Push + SMS + email alerts",
      "Crisis detection & 116 111",
      "Encrypted teacher channel",
      "Learning progress tracking",
      "Dedicated family support",
      "Early access to new features",
    ],
    cta: "Start Free Trial",
    highlight: false,
    badge: "Best Value",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-[#7c3aed] text-sm font-semibold uppercase tracking-widest">Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Simple pricing. No surprises.
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            All plans include a 7-day free trial. No charge until the trial ends. Cancel any time.
            Annual billing saves 20%.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => (
            <div key={p.name}
              className={`rounded-2xl p-8 flex flex-col border ${
                p.highlight
                  ? "border-[#7c3aed] shadow-xl ring-2 ring-[#7c3aed]/20 bg-white"
                  : "border-slate-100 bg-slate-50"
              }`}>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-extrabold text-slate-900">{p.name}</h3>
                {p.badge && (
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    p.highlight ? "bg-[#7c3aed] text-white" : "bg-purple-100 text-purple-700"
                  }`}>{p.badge}</span>
                )}
              </div>

              <div className="flex items-end gap-1 mt-3 mb-1">
                <span className="text-4xl font-extrabold text-slate-900">{p.price}</span>
                <span className="text-slate-400 text-sm mb-1">{p.period}</span>
              </div>
              <div className="text-xs font-semibold text-[#7c3aed] mb-2">{p.children}</div>
              <p className="text-slate-500 text-sm mb-6">{p.desc}</p>

              <ul className="space-y-2.5 flex-1 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <svg className="w-4 h-4 text-[#7c3aed] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="https://app.aibgin.cz" target="_blank" rel="noopener noreferrer"
                className={`block text-center py-3 rounded-xl font-bold text-sm transition-colors ${
                  p.highlight
                    ? "bg-[#7c3aed] text-white hover:bg-[#db2777]"
                    : "bg-white border border-slate-200 text-[#7c3aed] hover:border-[#7c3aed]"
                }`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-8">
          All prices in USD. VAT may apply. Annual billing saves 20%.{" "}
          <a href="mailto:info@aiblab.cz" className="text-[#7c3aed] hover:underline">Need help choosing?</a>
        </p>
      </div>
    </section>
  );
}
