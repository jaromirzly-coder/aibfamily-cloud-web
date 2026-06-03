const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="3" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 18h8M11 16v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6 8h5M6 11h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="15" cy="10" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Real-Time Parent Dashboard",
    body: "See every conversation your child has — what they asked, what the AI answered, and the safety verdict. Refreshes live.",
    tag: "Dashboard",
    accent: "text-brand-violet bg-brand-violet/10 border-brand-violet/20",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "3-Second Push Alerts",
    body: "When AIBguard issues an ALERT or CRITICAL verdict, you receive a push notification within 3 seconds — before any harm can occur.",
    tag: "Alerts",
    accent: "text-brand-orange bg-brand-orange/10 border-brand-orange/20",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="5" y="2" width="9" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 6h3M8 9h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="15" cy="16" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M13.5 16h3M15 14.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "No App for Kids",
    body: "Your child accesses AIBfamily via a QR code — nothing to download, no account to create. Works on any device with a browser.",
    tag: "Simplicity",
    accent: "text-brand-coral bg-brand-coral/10 border-brand-coral/20",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 19v-1a6 6 0 016-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="17" cy="15" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M15.5 15h3M17 13.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Age Profiles 4–15",
    body: "Create separate profiles for each child with age-appropriate guardrails. A 5-year-old&apos;s experience is very different from a 13-year-old&apos;s.",
    tag: "Profiles",
    accent: "text-brand-purple bg-brand-purple/10 border-brand-purple/20",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 6m12-6l2 6M9 19h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Learning Progress Tracking",
    body: "Charts show what topics your child is exploring, how their curiosity is developing, and what subjects they return to most.",
    tag: "Insights",
    accent: "text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Encrypted Teacher Channel",
    body: "Communicate directly with your child&apos;s teacher through an encrypted channel within AIBfamily. No third-party messaging apps.",
    tag: "Communication",
    accent: "text-brand-violet bg-brand-violet/10 border-brand-violet/20",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 2v6h6M8 13h6M8 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Daily Safety Summary",
    body: "Every morning, receive a digest of the previous day&apos;s activity: sessions, verdicts, topics, and any flagged moments.",
    tag: "Reports",
    accent: "text-brand-coral bg-brand-coral/10 border-brand-coral/20",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Up to 5 Child Profiles",
    body: "One family subscription covers up to 5 children, each with their own QR code, age profile, and separate activity feed.",
    tag: "Family",
    accent: "text-brand-orange bg-brand-orange/10 border-brand-orange/20",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-fam-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-coral/[0.03] to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-brand-violet uppercase tracking-[0.2em] mb-4">For Parents</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            You&apos;re always in the room.<br/>
            <span className="gradient-text">Invisibly.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            AIBfamily is built around the parent, not just the child. Every feature gives you more visibility, not less control.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div key={f.title}
              className="group glass rounded-2xl p-5 hover:-translate-y-1 hover:bg-white/[0.07] transition-all duration-300 cursor-default">
              <div className={`inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border mb-4 ${f.accent}`}>
                {f.tag}
              </div>
              <div className={f.accent.split(" ")[0] + " group-hover:text-brand-coral transition-colors mb-3"}>
                {f.icon}
              </div>
              <h3 className="font-bold text-white text-sm mb-2">{f.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
