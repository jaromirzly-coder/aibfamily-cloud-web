const features = [
  {
    icon: "📊",
    title: "Real-Time Parent Dashboard",
    body: "See every conversation your child has with the AI — what they asked, what the AI answered, and the safety verdict. Refreshes live.",
    tag: "Dashboard",
  },
  {
    icon: "🔔",
    title: "3-Second Push Alerts",
    body: "When AIBguard issues an ALERT or CRITICAL verdict, you receive a push notification within 3 seconds. Before any harm can occur.",
    tag: "Alerts",
  },
  {
    icon: "📱",
    title: "No App for Kids",
    body: "Your child accesses AIBfamily via a QR code — nothing to download, no account to create. Works on any device with a browser.",
    tag: "Simplicity",
  },
  {
    icon: "👶",
    title: "Age Profiles 4–15",
    body: "Create separate profiles for each child with age-appropriate guardrails. A 5-year-old's experience is very different from a 13-year-old's.",
    tag: "Profiles",
  },
  {
    icon: "📈",
    title: "Learning Progress Tracking",
    body: "Charts show what topics your child is exploring, how their curiosity is developing, and what subjects they return to most.",
    tag: "Insights",
  },
  {
    icon: "💬",
    title: "Encrypted Teacher Channel",
    body: "Communicate directly with your child's teacher through an encrypted channel within AIBfamily. No third-party messaging apps.",
    tag: "Communication",
  },
  {
    icon: "📋",
    title: "Daily Safety Summary",
    body: "Every morning, receive a digest of the previous day's activity: sessions, verdicts, topics, and any flagged moments.",
    tag: "Reports",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Up to 5 Child Profiles",
    body: "One family subscription covers up to 5 children, each with their own QR code, age profile, and separate activity feed.",
    tag: "Family",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-[#7c3aed] text-sm font-semibold uppercase tracking-widest">For Parents</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            You're always in the room.
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            AIBfamily is built around the parent, not just the child. Every feature gives you more visibility, not less control.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-6 border border-purple-100 hover:shadow-lg hover:border-purple-300 transition-all">
              <div className="text-3xl mb-3">{f.icon}</div>
              <div className="text-xs font-semibold text-[#7c3aed] uppercase tracking-wider mb-2">{f.tag}</div>
              <h3 className="font-bold text-slate-900 text-sm mb-2">{f.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
