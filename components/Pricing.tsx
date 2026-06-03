const plans = [
  {
    name: "Family Starter",
    price: "$9.99",
    period: "/mo",
    annualNote: "$7.99/mo billed annually",
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
    ctaStyle: "glass border border-white/[0.12] text-white hover:bg-white/[0.08]",
    highlight: false,
    badge: null,
  },
  {
    name: "Family Plus",
    price: "$19.99",
    period: "/mo",
    annualNote: "$15.99/mo billed annually",
    desc: "For families with two or three children — full protection for everyone.",
    children: "Up to 3 child profiles",
    features: [
      "Up to 3 child QR codes",
      "All 5 AIBguard protection layers",
      "Per-child dashboards",
      "Push + SMS alerts",
      "Crisis detection & 116 111",
      "Behavioural trend reports",
      "Encrypted teacher channel",
      "Priority support",
    ],
    cta: "Start Free Trial",
    ctaStyle: "bg-gradient-to-r from-brand-coral to-brand-violet text-white hover:opacity-90",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Family Premium",
    price: "$34.99",
    period: "/mo",
    annualNote: "$27.99/mo billed annually",
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
    ctaStyle: "glass border border-white/[0.12] text-white hover:bg-white/[0.08]",
    highlight: false,
    badge: "Best Value",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-fam-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-coral/[0.03] to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-brand-violet uppercase tracking-[0.2em] mb-4">Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Simple pricing.<br/>
            <span className="gradient-text">No surprises.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            All plans include a 7-day free trial. No charge until the trial ends. Cancel any time. Annual billing saves 20%.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {plans.map((p) => (
            <div key={p.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                p.highlight
                  ? "bg-gradient-to-b from-brand-violet/20 to-brand-coral/10 border border-brand-violet/40"
                  : "glass"
              }`}>
              {p.highlight && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-brand-coral to-transparent" />
              )}

              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-extrabold text-white">{p.name}</h3>
                {p.badge && (
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    p.highlight ? "bg-brand-coral/20 text-brand-coral border border-brand-coral/30" : "bg-white/[0.06] text-slate-300 border border-white/[0.1]"
                  }`}>{p.badge}</span>
                )}
              </div>

              <div className="flex items-end gap-1 mt-3 mb-0.5">
                <span className="text-4xl font-extrabold text-white">{p.price}</span>
                <span className="text-slate-500 text-sm mb-1.5">{p.period}</span>
              </div>
              <div className="text-xs font-medium text-slate-500 mb-1">{p.annualNote}</div>
              <div className="text-xs font-semibold text-brand-coral mb-2">{p.children}</div>
              <p className="text-slate-400 text-sm mb-6">{p.desc}</p>

              <ul className="space-y-2.5 flex-1 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                    <svg className="w-4 h-4 text-brand-coral shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="https://app.aibgin.cz" target="_blank" rel="noopener noreferrer"
                className={`block text-center py-3.5 rounded-xl font-bold text-sm transition-all ${p.ctaStyle}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-500 mt-8">
          All prices in USD · GBP pricing available on checkout · VAT may apply.{" "}
          <a href="mailto:support@aibfamily.cloud" className="text-brand-coral hover:underline">Need help choosing?</a>
        </p>
      </div>
    </section>
  );
}
