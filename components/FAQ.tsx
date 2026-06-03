"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Does my child need to create an account?",
    a: "No. Your child never registers, never enters an email, and never creates a password. They access AIBfamily through a QR code you print and place at home. That's it.",
  },
  {
    q: "What ages is AIBfamily suitable for?",
    a: "AIBfamily is designed for children aged 4–15. Each child profile has age-appropriate guardrails — what's suitable for a 14-year-old is very different from what's suitable for a 5-year-old.",
  },
  {
    q: "What happens when the AI detects a crisis?",
    a: "When AIBguard issues a CRITICAL verdict — detecting self-harm language, signs of abuse, or extreme distress — the AI's response is blocked and you receive an immediate push notification. Where configured, the system also initiates contact with crisis helpline 116 111 (EU) · 988 Lifeline (US).",
  },
  {
    q: "Where is my family's data stored?",
    a: "All data is stored exclusively in EU data centres (Frankfurt). It is encrypted per-family with AES-256 and never transferred outside the EU. We do not sell or share your data.",
  },
  {
    q: "Can I cancel my subscription at any time?",
    a: "Yes. There are no long-term commitments. You can cancel from your account settings at any time, effective at the end of the current billing period.",
  },
  {
    q: "How is AIBfamily different from just using ChatGPT or Gemini?",
    a: "Commercial AI tools have no child-specific safety layers, no parent visibility, no crisis detection, and no compliance with EU AI Act requirements. AIBfamily is purpose-built for child safety — every component exists to protect your child, not just to answer questions.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-fam-900 relative">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-brand-violet uppercase tracking-[0.2em] mb-4">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Questions parents ask us
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden hover:bg-white/[0.06] transition-colors">
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-white text-sm pr-4">{f.q}</span>
                <svg
                  className={`w-5 h-5 text-brand-coral shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/[0.06] pt-4">{f.a}</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-4">Still have questions?</p>
          <a href="mailto:support@aibfamily.cloud"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-coral to-brand-violet text-white px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity">
            Email us →
          </a>
        </div>
      </div>
    </section>
  );
}
