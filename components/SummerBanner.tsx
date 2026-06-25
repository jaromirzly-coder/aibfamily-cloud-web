export default function SummerBanner() {
  return (
    <div className="relative bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-400 py-3.5 px-4 text-center flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
      <span className="text-sm font-bold text-amber-950">
        🌞 Summer Start — 2 months for 24 EUR. Full version launching July 1, 2026.
      </span>
      <a
        href="#pricing"
        className="inline-flex items-center gap-1.5 bg-amber-950 text-amber-300 text-xs font-extrabold px-4 py-1.5 rounded-full hover:bg-amber-900 transition-colors whitespace-nowrap"
      >
        Get Summer Package →
      </a>
    </div>
  );
}
