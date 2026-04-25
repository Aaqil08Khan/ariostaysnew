import { Link } from "react-router-dom";
import { INSTAGRAM, PHONES } from "@/data/villas";
import logoFooter from "../../assets/logo_footer.jpeg";
import { useBookingScroll } from "@/hooks/useBookingScroll";

/* ICONS */

function PhoneIcon() {
  return (
    <svg
      className="transition-transform duration-300 group-hover:scale-110"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.59a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      className="transition-transform duration-300 group-hover:scale-110"
      width="20" // 🔥 bigger
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export function Footer() {
  const goToBooking = useBookingScroll();

  return (
    <footer
      className="mt-32"
      style={{ backgroundColor: "var(--navy)", color: "var(--primary-foreground)" }}
    >
      <div style={{ height: "1px", backgroundColor: "var(--gold)", opacity: 0.35 }} />

      <div className="container-editorial pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-12 items-start">

          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-block">
              <img
                src={logoFooter}
                alt="Ario Stays"
                className="h-14 md:h-16 w-auto object-contain transition duration-300 hover:opacity-80"
              />
            </Link>

            <p className="mt-7 max-w-xs text-sm leading-[1.85]" style={{ color: "rgba(255,255,255,0.55)" }}>
              A curated collection of private villas and farmhouses — designed for unhurried days,
              intimate gatherings, and stays that linger in memory.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-8" style={{ backgroundColor: "var(--gold)", opacity: 0.6 }} />
              <p className="font-serif text-base italic" style={{ color: "rgba(255,255,255,0.65)" }}>
                Stay slow. Stay beautifully.
              </p>
            </div>

            {/* Instagram */}
            <div className="mt-8">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center rounded-full border border-white/20 p-3 transition hover:bg-white/10"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: "var(--gold)" }}>
              Explore
            </p>
            <ul className="mt-6 space-y-3">
              {["/", "/properties", "/about", "/contact", "/policies"].map((path, i) => (
                <li key={i}>
                  <Link
                    to={path}
                    className="transition hover:text-white/80 hover:translate-x-1 inline-block"
                  >
                    {["Home", "Properties", "About", "Contact", "Policies"][i]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: "var(--gold)" }}>
              Connect
            </p>

            <ul className="mt-6 space-y-4">
              {PHONES.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="group flex items-center gap-3 transition hover:text-white"
                  >
                    <PhoneIcon />
                    <span className="transition group-hover:translate-x-1">
                      {p}
                    </span>
                  </a>
                </li>
              ))}

              <li>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  className="group flex items-center gap-3 transition hover:text-white"
                >
                  <InstagramIcon />
                  <span className="transition group-hover:translate-x-1">
                    @ariostays
                  </span>
                </a>
              </li>
            </ul>

            {/* CTA */}
            <button
              onClick={goToBooking}
              className="group mt-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] transition hover:bg-white/10"
              style={{
                backgroundColor: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              Plan your stay
              <ArrowUpRightIcon />
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-14 pt-6 flex justify-between text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p>© {new Date().getFullYear()} Ario Stays</p>
          <p>Stay slow. Stay beautifully.</p>
        </div>
      </div>
    </footer>
  );
}