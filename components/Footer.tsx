import { SITE } from "@/lib/site";
import { ECOSYSTEM } from "@/lib/links";
import CookieSettings from "./CookieSettings";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.3fr_1fr] gap-10 mb-10">
          <div className="min-w-0">
            <p className="logo m-0 mb-3">{SITE.name}</p>
            <p className="m-0 leading-relaxed">{SITE.tagline}</p>
          </div>

          <nav aria-label="Pages" className="min-w-0">
            <h2>{SITE.name}</h2>
            <ul className="list-none p-0 m-0 space-y-2">
              {SITE.pages.map((p) => (
                <li key={p.href}><a href={p.href}>{p.label}</a></li>
              ))}
            </ul>
          </nav>

          <nav aria-label="AIBlab ecosystem" className="min-w-0">
            <h2>AIBlab ecosystem</h2>
            <ul className="list-none p-0 m-0 space-y-2">
              {ECOSYSTEM.map((e) => (
                <li key={e.label}>
                  <a href={e.href} {...(e.href === "/" ? {} : { target: "_blank", rel: "noopener" })}>
                    {e.label} <span className="text-faint">· {e.desc}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal" className="min-w-0">
            <h2>Legal and help</h2>
            <ul className="list-none p-0 m-0 space-y-2">
              <li><a href="/imprint">Imprint</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms">Terms</a></li>
              <li><CookieSettings className="linkbtn" /></li>
              <li><a href="mailto:info@aiblab.info">info@aiblab.info</a></li>
              <li><a href="mailto:support@aiblab.info">support@aiblab.info</a></li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-rule pt-6 text-[0.84rem] text-faint leading-relaxed">
          <p className="m-0 mb-1">AIBfamily is in development, built on AIB.core. AIBEVA is an artificial intelligence system: when you use it, you are interacting with an AI, not a human being.</p>
          <p className="m-0 mb-1">SAY TO PAY s.r.o. (AIBlab) · Company ID 086 94 222 · Ostrava, EU · on the market since 2019</p>
          <p className="m-0">&copy; 2026 SAY TO PAY s.r.o.</p>
        </div>
      </div>
    </footer>
  );
}
