const testimonials = [
  {
    quote: "My son is 9 and absolutely loves asking the AI questions about dinosaurs and space. I love that I can see exactly what he's asking and know he's safe. The dashboard is genuinely simple to use.",
    name: "Sarah L.",
    role: "Mother of two",
    location: "London, UK",
    avatar: "SL",
    color: "from-brand-violet to-brand-coral",
  },
  {
    quote: "We had one ALERT about a conversation my daughter was having that was heading somewhere uncomfortable. The system caught it, I got a notification, and we talked about it together that evening. It worked exactly as advertised.",
    name: "Michael R.",
    role: "Father",
    location: "Chicago, US",
    avatar: "MR",
    color: "from-brand-coral to-brand-orange",
  },
  {
    quote: "Setup was literally 2 minutes. I printed the QR code, stuck it on the fridge, and my kids use it every day for homework. No accounts, no passwords, no complaints.",
    name: "Anna M.",
    role: "Mother of three",
    location: "Amsterdam, NL",
    avatar: "AM",
    color: "from-brand-purple to-brand-violet",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-fam-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-violet/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-brand-coral uppercase tracking-[0.2em] mb-4">Parent Stories</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Parents trust AIBfamily
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-7 flex flex-col gap-5 hover:-translate-y-1 hover:bg-white/[0.07] transition-all duration-300">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-brand-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 border-t border-white/[0.06] pt-4">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role} · {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
