import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { WHATSAPP_URL } from "@/data/villas";

const links = [
  { to: "/" as const, label: "Home" },
  { to: "/villas" as const, label: "Villas" },
  { to: "/about" as const, label: "About" },
  { to: "/gallery" as const, label: "Gallery" },
  { to: "/contact" as const, label: "Contact" },
  { to: "/policies" as const, label: "Policies" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-editorial flex items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group relative text-[13px] font-medium tracking-wide text-foreground/80 transition hover:text-navy"
              activeProps={{ className: "text-navy" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
              <span className="pointer-events-none absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.18em] text-primary-foreground shadow-[var(--shadow-soft)] transition hover:bg-navy/90"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Reserve
          </a>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card"
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute left-0 top-0 h-px w-full bg-foreground transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-1.5 h-px w-full bg-foreground transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 bottom-0 h-px w-full bg-foreground transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-editorial flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-foreground/80 hover:bg-secondary"
                activeProps={{ className: "text-navy bg-secondary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-navy px-5 py-3 text-center text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground"
            >
              Reserve on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}