import { Link } from "react-router-dom";
import { INSTAGRAM, PHONES, WHATSAPP_URL } from "@/data/villas";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-32" style={{ backgroundColor: "var(--navy)", color: "var(--primary-foreground)" }}>
      <div className="container-editorial py-20">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo light />
            <p className="mt-6 max-w-sm text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              A curated collection of luxury farmhouses and private villas — designed for unhurried days,
              intimate gatherings, and unforgettable celebrations.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[12px] uppercase tracking-[0.18em] text-white transition"
              style={{ border: "1px solid rgba(255,255,255,0.2)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
                (e.currentTarget as HTMLElement).style.color = "var(--gold)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
                (e.currentTarget as HTMLElement).style.color = "white";
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
              Plan your stay
            </a>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.25em]" style={{ color: "var(--gold)" }}>Explore</h4>
            <ul className="mt-5 space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/villas" className="hover:text-white transition-colors">All Villas</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/policies" className="hover:text-white transition-colors">Policies</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.25em]" style={{ color: "var(--gold)" }}>Connect</h4>
            <ul className="mt-5 space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
              {PHONES.map((p) => (
                <li key={p}>
                  <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-white transition-colors">{p}</a>
                </li>
              ))}
              <li>
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Instagram — @Ariostays
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp Concierge
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t pt-8 text-xs md:flex-row md:items-center" style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}>
          <p>© {new Date().getFullYear()} Ario Stays. All rights reserved.</p>
          <p className="font-serif text-sm tracking-wide" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-serif)" }}>Stay slow. Stay beautifully.</p>
        </div>
      </div>
    </footer>
  );
}