export default function Hero() {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-[#7c3aed] via-[#6d28d9] to-[#db2777] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></span>
            5 Layers of Protection · No Child Accounts · Crisis Detection
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            The peace of mind<br />
            <span className="text-yellow-300">every parent</span><br />
            deserves.
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed mb-4">
            AIBfamily lets your child explore AI safely — and gives you full visibility into every conversation.
            Five layers of protection, a real-time parent dashboard, and crisis detection linked to emergency services.
          </p>

          <div className="flex flex-wrap gap-3 mb-10 text-sm text-white/70">
            <span>✓ Ages 4–15</span>
            <span>✓ No child registration</span>
            <span>✓ EU data · GDPR compliant</span>
            <span>✓ Setup in 2 minutes</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a href="#pricing"
              className="bg-white text-[#7c3aed] px-8 py-4 rounded-xl font-bold text-base hover:bg-yellow-100 transition-colors shadow-lg text-center">
              Start Free Trial
            </a>
            <a href="#protection"
              className="border border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-colors text-center">
              See How It Works →
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
            {[
              { value: "5", label: "Protection layers" },
              { value: "0", label: "Child registrations" },
              { value: "< 3s", label: "Alert latency" },
              { value: "EU", label: "Data residency" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 border border-white/20 rounded-xl p-4 text-center">
                <div className="text-2xl font-extrabold text-yellow-300">{s.value}</div>
                <div className="text-xs text-white/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
