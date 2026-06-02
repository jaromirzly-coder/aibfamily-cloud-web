"use client";
import { useState } from "react";

const links = [
  { label: "Protection", href: "#protection" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-purple-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-1">
          <span className="text-xl font-extrabold text-[#7c3aed]">AIB</span>
          <span className="text-xl font-extrabold text-[#db2777]">family</span>
        </a>

        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-[#7c3aed] transition-colors">{l.label}</a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://app.aibgin.cz" target="_blank" rel="noopener noreferrer"
            className="text-sm font-semibold text-slate-500 hover:text-[#7c3aed] transition-colors">Sign in</a>
          <a href="#pricing"
            className="bg-[#7c3aed] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#db2777] transition-colors">
            Try Free →
          </a>
        </div>

        <button className="md:hidden p-2 text-slate-600" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-purple-50 px-4 py-4 flex flex-col gap-3 text-sm font-medium text-slate-700">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#pricing" onClick={() => setOpen(false)}
            className="bg-[#7c3aed] text-white px-4 py-2 rounded-lg text-center mt-2">Try Free →</a>
        </div>
      )}
    </nav>
  );
}
