export default function Dashboard() {
  return (
    <section id="dashboard" className="py-24 bg-fam-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-violet/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-coral/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block text-xs font-bold text-brand-coral uppercase tracking-[0.2em] mb-4">Parent Dashboard</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight">
              Everything you need.<br/>
              <span className="gradient-text">Nothing you don&apos;t.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-7">
              The AIBfamily dashboard is designed for busy parents, not data scientists. At a glance you can see
              whether everything is safe, what your child was asking about, and whether any alerts were triggered.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                { icon: (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/><path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  ), text: "Live safety status — green means all clear", color: "text-brand-emerald" },
                { icon: (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2v3M8 11v3M2 8h3M11 8h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>
                  ), text: "Alert inbox — every flagged moment, explained", color: "text-brand-orange" },
                { icon: (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 12l3-5 3 3 3-6 3 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  ), text: "Activity charts — topics, sessions, frequency", color: "text-brand-violet" },
                { icon: (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="6" cy="5" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M2 13v-1a4 4 0 014-4h2a4 4 0 014 4v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  ), text: "Per-child view — switch between profiles instantly", color: "text-brand-coral" },
                { icon: (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M5 7h6M5 10h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  ), text: "Daily email digest — morning summary in your inbox", color: "text-brand-purple" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className={`mt-0.5 shrink-0 ${item.color}`}>{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
            <a href="#pricing"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-coral to-brand-violet text-white px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">
              Get Dashboard Access →
            </a>
          </div>

          {/* Dashboard mockup */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="text-sm font-bold text-white">AIBfamily Dashboard</div>
                <div className="text-xs text-slate-500">Today · 2 children active</div>
              </div>
              <div className="flex items-center gap-1.5 bg-brand-emerald/10 border border-brand-emerald/30 rounded-full px-3 py-1">
                <span className="w-2 h-2 bg-brand-emerald rounded-full animate-pulse"></span>
                <span className="text-xs font-semibold text-brand-emerald">All Safe</span>
              </div>
            </div>

            <div className="space-y-3 mb-5">
              {[
                { name: "Emma, age 8",    sessions: "3 sessions", status: "All PASS",    statusColor: "text-brand-emerald", bg: "bg-brand-violet/10 border-brand-violet/20" },
                { name: "Oliver, age 12", sessions: "5 sessions", status: "1 ALERT reviewed", statusColor: "text-brand-orange", bg: "bg-brand-coral/10 border-brand-coral/20" },
              ].map((child) => (
                <div key={child.name} className={`${child.bg} border rounded-xl p-4 flex items-center justify-between`}>
                  <div>
                    <div className="text-sm font-semibold text-white">{child.name}</div>
                    <div className="text-xs text-slate-500">{child.sessions}</div>
                  </div>
                  <div className={`text-xs font-semibold ${child.statusColor}`}>{child.status}</div>
                </div>
              ))}
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
              <div className="text-xs text-slate-500 mb-3">Today&apos;s activity topics</div>
              <div className="space-y-2.5">
                {[
                  { topic: "Maths homework", pct: 45, color: "bg-brand-violet" },
                  { topic: "Animals & nature", pct: 30, color: "bg-brand-coral" },
                  { topic: "Creative writing", pct: 25, color: "bg-brand-orange" },
                ].map((t) => (
                  <div key={t.topic}>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>{t.topic}</span><span>{t.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-white/[0.06] rounded-full">
                      <div className={`h-1.5 ${t.color} rounded-full transition-all`} style={{ width: `${t.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
