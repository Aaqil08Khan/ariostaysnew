import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { getVilla, villas, WHATSAPP_URL } from "@/data/villas";

export default function VillaDetail() {
  const { slug } = useParams<{ slug: string }>();
  const villa = getVilla(slug ?? "");
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (villa) document.title = `${villa.name} — Ario Stays`;
    setActive(0);
    // Fix 2: always start at the top when the page loads or slug changes
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [villa, slug]);

  // Not found state
  if (!villa) {
    return (
      <Layout>
        <section className="container-editorial">
          <h1 className="font-serif text-4xl text-navy">Villa not found</h1>
          {/* Fix 1: redirect to /properties */}
          <Link
            to="/properties"
            className="mt-6 inline-block text-sm uppercase tracking-[0.18em] text-navy underline"
          >
            Back to all properties
          </Link>
        </section>
      </Layout>
    );
  }

  const others = villas.filter((v) => v.slug !== villa.slug).slice(0, 3);

  return (
    <Layout>
      <section className="container-editorial">
        {/* Fix 1: back button → /properties */}
        <Link
          to="/properties"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground hover:text-navy transition-colors"
        >
          ← Back to all properties
        </Link>

        {/* Image Gallery */}
        <div className="mt-6 grid gap-3 md:grid-cols-12 md:gap-4">
          <div className="md:col-span-8">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-secondary md:aspect-16/10">
              <img
                src={villa.images[active]}
                alt={villa.name}
                className="h-full w-full object-cover transition-all duration-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3 md:col-span-4 md:grid-cols-2">
            {villa.images.map((img, i) => (
              <button
                key={img}
                onClick={() => setActive(i)}
                className={`aspect-square overflow-hidden rounded-2xl border-2 transition ${
                  active === i
                    ? "border-gold"
                    : "border-transparent opacity-80 hover:opacity-100"
                }`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-12 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">{villa.shortLocation}</p>
            <h1 className="mt-3 font-serif text-5xl font-medium leading-[1.05] text-navy md:text-6xl">
              {villa.name}
            </h1>
            <p className="mt-4 font-serif text-xl italic text-foreground/70">{villa.tagline}</p>

            {/* Quick Stats */}
            <div className="mt-8 flex flex-wrap gap-6 border-y border-border py-5 text-sm text-muted-foreground">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70">Bedrooms</p>
                <p className="mt-1 font-serif text-xl text-navy">{villa.bedrooms}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70">Capacity</p>
                <p className="mt-1 font-serif text-xl text-navy">{villa.capacity}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70">From</p>
                <p className="mt-1 font-serif text-xl text-navy">
                  ₹{villa.price.toLocaleString("en-IN")}{" "}
                  <span className="text-xs text-muted-foreground">/ night</span>
                </p>
              </div>
            </div>

            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              {villa.description}
            </p>

            {/* Amenities */}
            <div className="mt-12">
              <h2 className="text-[11px] uppercase tracking-[0.3em] text-gold">Amenities</h2>
              <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {villa.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-3 text-sm text-foreground/85">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary">
                      <svg viewBox="0 0 24 24" className="h-3 w-3 text-navy" fill="none">
                        <path
                          d="M5 12l5 5L20 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* Map */}
            <div className="mt-12">
              <h2 className="text-[11px] uppercase tracking-[0.3em] text-gold">Location</h2>
              <div className="mt-5 overflow-hidden rounded-3xl border border-border">
                <iframe
                  title={`${villa.name} location`}
                  src={villa.mapEmbed}
                  className="h-90 w-full"
                  loading="lazy"
                />
              </div>
              <a
                href={villa.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs uppercase tracking-[0.18em] text-navy underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          {/* Sticky Booking Card */}
          <aside className="md:col-span-5">
            <div className="sticky top-28 rounded-3xl border border-border bg-card p-7 shadow(--shadow-soft)">
              <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                Starting from
              </p>
              <p className="mt-2 font-serif text-4xl text-navy">
                ₹{villa.price.toLocaleString("en-IN")}
                <span className="text-base text-muted-foreground"> / night</span>
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Taxes & service charges may apply
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-leaf px-6 py-3.5 text-sm font-medium uppercase tracking-[0.18em] text-white transition hover:opacity-90"
              >
                Reserve on WhatsApp
              </a>
              <a
                href="tel:+918317545573"
                className="mt-3 flex items-center justify-center gap-2 rounded-full border border-navy/15 bg-transparent px-6 py-3.5 text-sm font-medium uppercase tracking-[0.18em] text-navy transition hover:bg-navy hover:text-primary-foreground"
              >
                Call concierge
              </a>

              <div className="mt-7 border-t border-border pt-6 text-xs text-muted-foreground">
                <p>· Hosted by an on-site caretaker</p>
                <p className="mt-1.5">· Custom meal plans on request</p>
                <p className="mt-1.5">· Events welcome with prior notice</p>
              </div>
            </div>
          </aside>
        </div>

        {/* More from the collection */}
        <div className="mt-32 border-t border-border pt-16">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-serif text-3xl text-navy md:text-4xl">More from the collection</h2>
            {/* Fix 1: "View all" → /properties */}
            <Link
              to="/properties"
              className="hidden text-xs uppercase tracking-[0.18em] text-navy underline md:inline"
            >
              View all →
            </Link>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {others.map((v) => (
              <Link key={v.slug} to={`/villas/${v.slug}`} className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-secondary">
                  <img
                    src={v.images[0]}
                    alt={v.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <h3 className="font-serif text-xl text-navy">{v.name}</h3>
                  <p className="text-xs text-muted-foreground">{v.shortLocation}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}