import { Link } from "react-router-dom";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-2.5">
      <span
        className={`relative inline-flex h-9 w-9 items-center justify-center rounded-full border ${
          light ? "border-white/30 bg-white/5" : "border-navy/20 bg-navy/[0.03]"
        }`}
        style={{ borderColor: light ? "rgba(255,255,255,0.3)" : "rgba(33,44,80,0.2)" }}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" style={{ color: light ? "white" : "var(--navy)" }} fill="none">
          <path d="M3 11L12 3l9 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 10v9h14v-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 19v-5h4v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-gold" style={{ backgroundColor: "var(--gold)" }} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-xl font-semibold tracking-wide" style={{ color: light ? "white" : "var(--navy)", fontFamily: "var(--font-serif)" }}>
          Ario Stays
        </span>
        <span className="mt-0.5 text-[10px] uppercase tracking-[0.25em]" style={{ color: light ? "rgba(255,255,255,0.6)" : "var(--muted-foreground)" }}>
          Luxury Farmhouses
        </span>
      </span>
    </Link>
  );
}