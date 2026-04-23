import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { useBookingScroll } from "@/hooks/useBookingScroll";

const links = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/policies", label: "Policies" },
];

export function Navbar() {
  const goToBooking = useBookingScroll(); // ✅ ONLY this

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-5"
        }`}
      style={{ backgroundColor: "#f2ede7" }}
    >
      <div className="container-editorial flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group relative text-[13px] font-medium tracking-wide transition hover:text-navy"
              style={{
                color: isActive(l.to) ? "var(--navy)" : "var(--foreground)",
                opacity: 0.8,
              }}
            >
              {l.label}
              <span
                className="pointer-events-none absolute -bottom-1.5 left-0 h-px transition-all duration-300 group-hover:w-full"
                style={{
                  backgroundColor: "var(--gold)",
                  width: isActive(l.to) ? "100%" : "0",
                }}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            onClick={goToBooking}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.18em] transition hover:opacity-90"
            style={{
              backgroundColor: "var(--navy)",
              color: "var(--primary-foreground)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "var(--gold)" }}
            />
            Reserve
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-full transition ${open ? "translate-y-1.5 rotate-45" : ""
                }`}
              style={{ backgroundColor: "var(--navy)" }}
            />

            <span
              className={`absolute left-0 top-1.5 h-px w-full transition ${open ? "opacity-0" : ""
                }`}
              style={{ backgroundColor: "var(--navy)" }}
            />

            <span
              className={`absolute left-0 bottom-0 h-px w-full transition ${open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              style={{ backgroundColor: "var(--navy)" }}
            />
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-border" style={{ backgroundColor: "var(--background)" }}>
          <div className="container-editorial flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-md px-3 py-3 text-sm hover:bg-secondary"
                style={{
                  color: isActive(l.to) ? "var(--navy)" : "var(--foreground)",
                  opacity: 0.8,
                  backgroundColor: isActive(l.to) ? "var(--secondary)" : undefined,
                }}
              >
                {l.label}
              </Link>
            ))}

            <button
              onClick={goToBooking}
              className="mt-2 rounded-full px-5 py-3 text-center text-sm font-medium uppercase tracking-[0.15em]"
              style={{
                backgroundColor: "var(--navy)",
                color: "var(--primary-foreground)",
              }}
            >
              Reserve
            </button>
          </div>
        </div>
      )}
    </header>
  );
}