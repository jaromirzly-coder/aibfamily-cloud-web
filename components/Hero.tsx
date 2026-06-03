export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-fam-950 noise pt-16">
      <div className="absolute inset-0 bg-hero-mesh pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.035]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
        backgroundSize: "72px 72px"
      }} />
      <div className="absolute top-1/4 left-1/5 w-[500px] h-[500px] bg-brand-violet/[0.18] rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-brand-coral/[0.12] rounded-full blur-[120px] pointer-events-none animate-pulse-slow animate-delay-400" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2.5 glass rounded-full px-4 py-2 mb-8 animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-brand-coral opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-coral"></span>
              </span>
              <span className="text-xs font-semibold text-slate-300 tracking-wide">5-Layer AIBguard · COPPA · UK Children's Code</span>
            </div>

            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-[-0.02em] mb-6 animate-fade-up animate-delay-100">
              <span className="text-white">The AI your child</span><br/>
              <span className="gradient-text">loves. The safety</span><br/>
              <span className="text-white">you demand.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-6 animate-fade-up animate-delay-200 max-w-xl">
              AIBfamily gives your child a safe, guided AI companion — and gives you
              complete visibility into every interaction. Real-time crisis detection.
              No child account ever required.
            </p>

            <div className="flex flex-wrap gap-2 mb-10 animate-fade-up animate-delay-200">
              {[
                "Ages 4–15",
                "2-minute setup",
                "EU data only",
                "Crisis line 116 111 (EU) · 988 Lifeline (US)",
              ].map((t) => (
                <span key={t}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-white/[0.05] border border-white/[0.09] px-3 py-1.5 rounded-full">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2 2 4-4" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-up animate-delay-300">
              <a href="#pricing"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-coral to-brand-violet text-white px-8 py-4 rounded-2xl font-bold text-base hover:opacity-90 transition-all hover:-translate-y-0.5">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 16C9 16 2 11.5 2 7C2 4.8 3.8 3 6 3C7.1 3 8.1 3.5 9 4.5C9.9 3.5 10.9 3 12 3C14.2 3 16 4.8 16 7C16 11.5 9 16 9 16Z" fill="white"/>
                </svg>
                Start Free 7-Day Trial
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
              <a href="#protection"
                className="inline-flex items-center justify-center gap-2 glass text-slate-300 hover:text-white px-8 py-4 rounded-2xl font-semibold text-base hover:bg-white/[0.08] transition-all">
                See All 5 Layers
              </a>
            </div>

            <div className="grid grid-cols-4 gap-3 animate-fade-up animate-delay-400">
              {[
                { v: "5",    l: "Safety layers",  s: "AIBguard" },
                { v: "0",    l: "Child accounts",  s: "ever" },
                { v: "<3s",  l: "Alert latency",   s: "crisis" },
                { v: "EU",   l: "Data residency",  s: "always" },
              ].map((s) => (
                <div key={s.l} className="glass rounded-xl p-3 text-center hover:bg-white/[0.07] transition-colors">
                  <div className="text-xl font-extrabold gradient-text">{s.v}</div>
                  <div className="text-[10px] font-semibold text-white/70 mt-0.5 leading-tight">{s.l}</div>
                  <div className="text-[9px] text-slate-600 mt-0.5">{s.s}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: parent dashboard mockup */}
          <div className="hidden lg:block animate-fade-up animate-delay-300">
            <img
              src="/hero-parent-dashboard.png"
              alt="AIBfamily parent dashboard showing real-time AI safety alerts and crisis detection for children ages 4-15"
              width="1200"
              height="900"
              className="w-full h-auto rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
