import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { villas } from "@/data/villas";

const filters = ["All", "Party", "Family", "Romantic", "Heritage", "Events"] as const;

export default function VillasPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  useEffect(() => {
    document.title = "Our Villas — Ario Stays";
  }, []);

  const list = useMemo(() => {
    if (active === "All") return villas;
    return villas.filter((v) => v.category.includes(active as never));
  }, [active]);

  return (
    <Layout>
      <section className="container-editorial">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">The Collection</p>
          <h1 className="mt-4 font-serif text-5xl font-medium leading-[1.05] text-navy md:text-6xl">
            Five private estates. <span className="italic text-foreground/70">Endless ways to slow down.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Every villa in our collection is hand-picked for its character, comfort, and sense of place — from
            heritage havelis to mango-orchard estates.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-2 border-y border-border py-5">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="rounded-full px-4 py-2 text-[12px] uppercase tracking-[0.18em] transition"
              style={{
                backgroundColor: active === f ? "var(--navy)" : "transparent",
                color: active === f ? "var(--primary-foreground)" : "var(--foreground)",
                opacity: active === f ? 1 : 0.7,
              }}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto text-xs text-muted-foreground">{list.length} stays</span>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {list.map((v, i) => (
            <Link
              key={v.slug}
              to={`/villas/${v.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-3xl bg-secondary">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={v.images[0]}
                    alt={v.name}
                    loading={i < 2 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/85 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-navy backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {v.shortLocation}
                </div>
                <div className="absolute right-4 top-4 rounded-full bg-navy/90 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-primary-foreground backdrop-blur">
                  ₹{v.price.toLocaleString("en-IN")} / night
                </div>
              </div>
              <div className="mt-5 flex items-end justify-between gap-6">
                <div>
                  <h3 className="font-serif text-2xl text-navy">{v.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.tagline}</p>
                </div>
                <div className="text-right text-xs text-muted-foreground">
                  <p>{v.bedrooms} bedrooms</p>
                  <p>{v.capacity}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}