import { aibeva } from "@/lib/links";

// Slim strip under the menu: what exists today, and what this site is about.
export default function Announcement() {
  return (
    <aside aria-label="Announcement" className="announce">
      <div className="wrap py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="m-0 flex items-start sm:items-center gap-3 text-[0.95rem] text-soft">
          <span className="announce-dot mt-2 sm:mt-0" aria-hidden="true" />
          <span>
            <strong className="text-ink font-semibold">Available today: AIBEVA, Level S2, for Windows.</strong>{" "}
            AIBfamily is in development, built on AIB.core.
          </span>
        </p>
        <a href={aibeva()} target="_blank" rel="noopener" className="btn btn-line btn-sm self-start sm:self-auto whitespace-nowrap">
          Meet AIBEVA ↗
        </a>
      </div>
    </aside>
  );
}
