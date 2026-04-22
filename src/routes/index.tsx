import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { villas, WHATSAPP_URL, INSTAGRAM } from "@/data/villas";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ario Stays — Luxury Farmhouses & Private Villas" },
      { name: "description", content: "A curated collection of luxury farmhouses and private villas around Hyderabad — for slow stays, gatherings, and celebrations." },
      { property: "og:title", content: "Ario Stays — Luxury Farmhouses & Private Villas" },
      { property: "og:description", content: "Curated luxury farmhouses for unhurried escapes and intimate gatherings." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80" },
    ],
  }),
  component: Home,
});

const categories = ["All", "Party", "Family", "Romantic", "Heritage", "Events"] as const;

function Home() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const filtered = cat === "All" ? villas : villas.filter((v) => v.category.includes(cat as never));

  return (
    <Layout>
      {/* HERO */}
      <section className="relative -mt-24 md:-mt-28">
        <div className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source
              src="https://cdn.coverr.co/videos/coverr-luxury-villa-with-pool-3815/1080p.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute inset-0 bg-navy/30" />

          <div className="container-editorial relative z-10 flex h-full flex-col justify-end pb-20 pt-40">
            <div className="max-w-3xl animate-fade-up">
              <p className="text-[11px] uppercase tracking-[0.35em] text-gold">Curated Luxury Stays</p>
              <h1 className="mt-6 text-balance font-serif text-5xl font-medium leading-[1.02] text-white md:text-7xl lg:text-[88px]">
                Beautifully kept estates,
                <span className="block italic text-white/85">made for slow days.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                A small collection of private villas and farmhouses — for weekends that breathe,
                gatherings that linger, and celebrations worth remembering.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to="/villas"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] text-navy transition hover:bg-gold hover:text-navy"
                >
                  Explore Villas →
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur transition hover:bg-white/10"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Plan your stay
                </a>
              </div>
            </div>

            <div className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-6 text-white/85">
              <div>
                <p className="font-serif text-3xl text-white">5</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/60">Private Estates</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-white">200+</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/60">Guests Hosted</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-white">24/7</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/60">Concierge Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="container-editorial mt-32">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">The Ario Way</p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.1] text-navy md:text-5xl">
              Five homes. <span className="italic text-foreground/60">One quiet philosophy.</span>
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              We don't build hotels. We host private estates — homes with a sense of place, kept beautifully,
              hosted gently. Each stay is a different way to slow down, gather close, and remember what
              unhurried feels like.
            </p>
          </div>
        </div>
      </section>

      {/* HORIZONTAL VILLA SCROLL */}
      <section className="mt-24">
        <div className="container-editorial flex items-end justify-between">
          <h2 className="font-serif text-3xl text-navy md:text-4xl">The Collection</h2>
          <Link to="/villas" className="text-xs uppercase tracking-[0.18em] text-navy underline">
            View all →
          </Link>
        </div>
        <div className="mt-8 flex gap-6 overflow-x-auto scroll-smooth px-5 pb-6 md:pl-[max(1.25rem,calc((100vw-1280px)/2+1.25rem))]">
          {villas.map((v) => (
            <Link
              key={v.slug}
              to="/villas/$slug"
              params={{ slug: v.slug }}
              className="group relative flex-shrink-0 snap-start overflow-hidden rounded-3xl"
              style={{ width: "min(78vw, 420px)" }}
            >
              <div className="aspect-[4/5] overflow-hidden bg-secondary">
                <img src={v.images[0]} alt={v.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 text-white">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold">{v.shortLocation}</p>
                <h3 className="mt-2 font-serif text-2xl">{v.name}</h3>
                <p className="mt-1 text-xs text-white/75">{v.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED + CATEGORY FILTERS */}
      <section className="container-editorial mt-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Featured Stays</p>
            <h2 className="mt-4 font-serif text-4xl text-navy md:text-5xl">Find your kind of getaway.</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-2 text-[12px] uppercase tracking-[0.18em] transition ${
                  cat === c ? "bg-navy text-primary-foreground" : "bg-secondary text-foreground/70 hover:bg-secondary/70"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {filtered.slice(0, 3).map((v) => (
            <Link key={v.slug} to="/villas/$slug" params={{ slug: v.slug }} className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-secondary">
                <img src={v.images[0]} alt={v.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{v.shortLocation}</p>
                <h3 className="mt-2 font-serif text-2xl text-navy">{v.name}</h3>
                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{v.bedrooms} bedrooms · {v.capacity}</span>
                  <span className="font-medium text-navy">₹{v.price.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="container-editorial mt-32">
        <div className="rounded-3xl bg-navy px-8 py-20 text-center text-primary-foreground md:px-20 md:py-28">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">A note from the host</p>
          <p className="mx-auto mt-8 max-w-3xl font-serif text-3xl italic leading-snug text-white md:text-4xl">
            "We built Ario for the kind of evenings that don't end on a clock — long dinners,
            slower mornings, and the sound of nothing in particular."
          </p>
          <p className="mt-8 text-[11px] uppercase tracking-[0.25em] text-white/60">— The Ario Stays Team</p>
        </div>
      </section>

      {/* INSTAGRAM STRIP */}
      <section className="mt-32">
        <div className="container-editorial flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Instagram</p>
            <h2 className="mt-4 font-serif text-3xl text-navy md:text-4xl">@Ariostays</h2>
          </div>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-[0.18em] text-navy underline">
            Follow →
          </a>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-2 md:grid-cols-6">
          {villas.flatMap((v) => v.images).slice(0, 6).map((src, i) => (
            <a key={i} href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="group relative aspect-square overflow-hidden bg-secondary">
              <img src={src} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-navy/0 transition group-hover:bg-navy/30" />
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-editorial mt-32">
        <div className="grid gap-10 rounded-3xl border border-border bg-sand p-10 md:grid-cols-2 md:p-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Ready when you are</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-navy md:text-5xl">
              Plan your next stay <span className="italic text-foreground/60">in a message.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-leaf px-7 py-4 text-sm font-medium uppercase tracking-[0.18em] text-white transition hover:opacity-90"
            >
              Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/20 bg-transparent px-7 py-4 text-sm font-medium uppercase tracking-[0.18em] text-navy transition hover:bg-navy hover:text-primary-foreground"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
