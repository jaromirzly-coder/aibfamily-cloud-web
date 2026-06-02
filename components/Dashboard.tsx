export default function Dashboard() {
  return (
    <section id="dashboard" className="py-20 bg-gradient-to-br from-[#7c3aed] to-[#4f46e5] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-purple-200 text-sm font-semibold uppercase tracking-widest">Parent Dashboard</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 leading-tight">
              Everything you need.<br />Nothing you don't.
            </h2>
            <p className="text-white/70 mt-4 leading-relaxed">
              The AIBfamily dashboard is designed for busy parents, not data scientists. At a glance you can see
              whether everything is safe, what your child was asking about, and whether any alerts were triggered.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                { icon: "🟢", text: "Live safety status — green means all clear" },
                { icon: "🔔", text: "Alert inbox — every flagged moment, explained" },
                { icon: "📊", text: "Activity charts — topics, sessions, frequency" },
                { icon: "👤", text: "Per-child view — switch between profiles instantly" },
                { icon: "📧", text: "Daily email digest — morning summary in your inbox" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="text-base">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
            <a href="#pricing"
              className="inline-block mt-8 bg-white text-[#7c3aed] px-6 py-3 rounded-xl font-bold text-sm hover:bg-yellow-100 transition-colors">
              Get Dashboard Access →
            </a>
          </div>

          {/* Dashboard mockup */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur">
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="text-sm font-bold">AIBfamily Dashboard</div>
                <div className="text-xs text-white/50">Today · 2 children active</div>
              </div>
              <div className="flex items-center gap-1.5 bg-green-400/20 border border-green-400/40 rounded-full px-3 py-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-xs font-semibold text-green-300">All Safe</span>
              </div>
            </div>

            {/* Child profiles */}
            <div className="space-y-3 mb-5">
              {[
                { name: "Emma, age 8", sessions: "3 sessions", status: "✅ All PASS", color: "bg-purple-400/20" },
                { name: "Oliver, age 12", sessions: "5 sessions", status: "⚠️ 1 ALERT reviewed", color: "bg-blue-400/20" },
              ].map((child) => (
                <div key={child.name} className={`${child.color} rounded-xl p-4 flex items-center justify-between`}>
                  <div>
                    <div className="text-sm font-semibold">{child.name}</div>
                    <div className="text-xs text-white/60">{child.sessions}</div>
                  </div>
                  <div className="text-xs font-medium">{child.status}</div>
                </div>
              ))}
            </div>

            {/* Activity bar */}
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-xs text-white/50 mb-3">Today's activity topics</div>
              <div className="space-y-2">
                {[
                  { topic: "Maths homework", pct: 45 },
                  { topic: "Animals & nature", pct: 30 },
                  { topic: "Creative writing", pct: 25 },
                ].map((t) => (
                  <div key={t.topic}>
                    <div className="flex justify-between text-xs text-white/70 mb-1">
                      <span>{t.topic}</span><span>{t.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full">
                      <div className="h-1.5 bg-purple-300 rounded-full" style={{ width: `${t.pct}%` }} />
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
