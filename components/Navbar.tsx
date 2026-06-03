"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Protection",  href: "#protection" },
  { label: "Features",    href: "#features" },
  { label: "Dashboard",   href: "#dashboard" },
  { label: "Pricing",     href: "#pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-fam-950/90 backdrop-blur-xl border-b border-white/[0.06] shadow-xl" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-coral to-brand-violet flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 14C8 14 2 10 2 6.5C2 4.5 3.5 3 5.5 3C6.4 3 7.2 3.4 8 4.2C8.8 3.4 9.6 3 10.5 3C12.5 3 14 4.5 14 6.5C14 10 8 14 8 14Z" fill="white"/>
            </svg>
          </div>
          <span className="font-bold text-white text-lg tracking-tight">
            AIB<span className="gradient-text">family</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.label} href={l.href}
              className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-all">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#waitlist"
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors px-3 py-2">
            Join Waitlist →
          </a>
          <a href="#pricing"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-coral to-brand-violet text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity">
            Start Free Trial
          </a>
        </div>

        <button className="md:hidden p-2 text-slate-400 hover:text-white" onClick={() => setOpen(!open)}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-light mx-3 mb-3 rounded-2xl p-4 flex flex-col gap-1">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-xl transition-all">
              {l.label}
            </a>
          ))}
          <div className="border-t border-white/[0.08] mt-2 pt-2">
            <a href="#pricing" onClick={() => setOpen(false)}
              className="block w-full text-center bg-gradient-to-r from-brand-coral to-brand-violet text-white py-3 rounded-xl text-sm font-semibold">
              Start Free Trial →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
