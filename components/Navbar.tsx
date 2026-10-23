"use client";
import { useState } from "react";
import { SITE } from "@/lib/site";
import { aibeva, DOWNLOAD } from "@/lib/links";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="top" aria-label="Main">
      <div className="wrap flex items-center justify-between gap-4 h-16">
        <a href="/" className="logo flex items-center gap-2.5 min-w-0">
          <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="shrink-0">
            <circle cx="16" cy="16" r="5" fill="#ff7a6b"/>
            <ellipse cx="16" cy="16" rx="12" ry="5" stroke="#ffb3a9" strokeWidth="1.5" opacity="0.75"/>
            <ellipse cx="16" cy="16" rx="12" ry="5" stroke="#ffb3a9" strokeWidth="1.5" opacity="0.75" transform="rotate(60 16 16)"/>
            <ellipse cx="16" cy="16" rx="12" ry="5" stroke="#ffb3a9" strokeWidth="1.5" opacity="0.75" transform="rotate(120 16 16)"/>
          </svg>
          <span className="truncate">{SITE.name}</span>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {SITE.nav.map((l) => (
            <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
          ))}
          <a href={aibeva()} target="_blank" rel="noopener" className="nav-link">AIBEVA ↗</a>
        </div>

        <div className="flex items-center gap-2">
          <a href={DOWNLOAD} target="_blank" rel="noopener" className="hidden sm:inline-flex btn btn-solid btn-sm whitespace-nowrap">
            Download AIBEVA
          </a>
          <button className="lg:hidden p-2 text-soft hover:text-ink" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden card mx-3 mb-3 p-4 flex flex-col gap-1">
          {SITE.nav.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="nav-link px-3 py-2.5 rounded-xl hover:bg-tint">
              {l.label}
            </a>
          ))}
          <a href={aibeva()} target="_blank" rel="noopener" onClick={() => setOpen(false)} className="nav-link px-3 py-2.5 rounded-xl hover:bg-tint">
            AIBEVA ↗
          </a>
          <div className="border-t border-rule mt-2 pt-3">
            <a href={DOWNLOAD} target="_blank" rel="noopener" onClick={() => setOpen(false)} className="btn btn-solid w-full">
              Download AIBEVA
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
