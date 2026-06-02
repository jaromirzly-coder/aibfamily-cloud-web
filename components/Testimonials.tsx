const testimonials = [
  {
    quote: "My son is 9 and absolutely loves asking the AI questions about dinosaurs and space. I love that I can see exactly what he's asking and know he's safe. The dashboard is genuinely simple to use.",
    name: "Sarah L.",
    role: "Mother of two",
    location: "London, UK",
  },
  {
    quote: "We had one ALERT about a conversation my daughter was having that was heading somewhere uncomfortable. The system caught it, I got a notification, and we talked about it together that evening. It worked exactly as advertised.",
    name: "Michael R.",
    role: "Father",
    location: "Chicago, US",
  },
  {
    quote: "Setup was literally 2 minutes. I printed the QR code, stuck it on the fridge, and my kids use it every day for homework. No accounts, no passwords, no complaints.",
    name: "Anna M.",
    role: "Mother of three",
    location: "Amsterdam, NL",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-[#7c3aed] text-sm font-semibold uppercase tracking-widest">Parent Stories</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Parents trust AIBfamily
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-7 border border-purple-100 shadow-sm flex flex-col gap-4">
              <svg className="w-8 h-8 text-purple-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-slate-600 text-sm leading-relaxed flex-1">"{t.quote}"</p>
              <div>
                <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                <div className="text-xs text-slate-400">{t.role} · {t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
