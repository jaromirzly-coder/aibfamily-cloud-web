const badges = [
  { icon: "🇪🇺", text: "EU AI Act Compliant" },
  { icon: "🔐", text: "GDPR Article 8" },
  { icon: "🔒", text: "AES-256 Encryption" },
  { icon: "🏥", text: "Crisis Line 116 111" },
  { icon: "👶", text: "Ages 4–15" },
  { icon: "⚡", text: "< 3s Alert Latency" },
];

export default function TrustBar() {
  return (
    <div className="bg-white border-b border-purple-100 py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {badges.map((b) => (
            <span key={b.text}
              className="bg-purple-50 border border-purple-100 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <span>{b.icon}</span>{b.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
