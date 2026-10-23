const numbers = [
  { value: "S2",   label: "AIBEVA level today" },
  { value: "10",   label: "levels" },
  { value: "7",    label: "layers in AIB.core" },
  { value: "0",    label: "ads" },
  { value: "100+", label: "patent claims" },
  { value: "1",    label: "AIB. Yours." },
];

export default function Numbers() {
  return (
    <section aria-label="AIBEVA in numbers" className="sec">
      <div className="wrap">
        <div className="card">
          <dl className="m-0 p-6 sm:p-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10">
            {numbers.map((n) => (
              <div key={n.label} className="min-w-0">
                <dt className="num text-5xl sm:text-6xl leading-none">{n.value}</dt>
                <dd className="m-0 mt-3 text-sm text-soft">{n.label}</dd>
              </div>
            ))}
          </dl>
          <p className="fine m-0 px-6 sm:px-10 pb-8">
            AIBEVA, powered by AIB.core. Patent pending — over 100 patent claims, two applications filed in 2026. AIBSN is a registered trademark in the Czech Republic and the United Kingdom.
          </p>
        </div>
      </div>
    </section>
  );
}
