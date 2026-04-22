import { Link } from "@tanstack/react-router";
import { INSTAGRAM, PHONES, WHATSAPP_URL } from "@/data/villas";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-32 bg-navy text-primary-foreground">
      <div className="container-editorial py-20">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo light />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
              A curated collection of luxury farmhouses and private villas — designed for unhurried days,
              intimate gatherings, and unforgettable celebrations.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-[12px] uppercase tracking-[0.18em] text-white transition hover:border-gold hover:text-gold"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Plan your stay
            </a>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-gold">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/villas" className="hover:text-white">All Villas</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/policies" className="hover:text-white">Policies</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-gold">Connect</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {PHONES.map((p) => (
                <li key={p}>
                  <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-white">{p}</a>
                </li>
              ))}
              <li>
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Instagram — @Ariostays
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  WhatsApp Concierge
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Ario Stays. All rights reserved.</p>
          <p className="font-serif text-sm tracking-wide text-white/70">Stay slow. Stay beautifully.</p>
        </div>
      </div>
    </footer>
  );
}