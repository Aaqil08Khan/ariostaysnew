import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { villas } from "@/data/villas";

/* ─────────────────────────────────────────────
   IMAGE CAROUSEL
───────────────────────────────────────────── */
function ImageCarousel({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (paused) return;

    timerRef.current = setInterval(next, 3500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next]);

  return (
    <div
      className="group relative h-full w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <img
          key={`${src}-${i}`}
          src={src}
          alt={i === current ? name : ""}
          loading={i === 0 ? "eager" : "lazy"}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
          style={{
            opacity: i === current ? 1 : 0,
            transform: i === current ? "scale(1)" : "scale(1.03)",
          }}
        />
      ))}

      {/* Dark overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(21,31,60,0.55) 0%, rgba(21,31,60,0.1) 40%, transparent 70%)",
        }}
      />

      {/* Counter */}
      <div
        className="absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em]"
        style={{
          backgroundColor: "rgba(0,0,0,0.45)",
          color: "white",
          backdropFilter: "blur(8px)",
        }}
      >
        {current + 1} / {images.length}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.preventDefault();
              setCurrent(i);
            }}
            aria-label={`Image ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? "22px" : "7px",
              height: "7px",
              backgroundColor:
                i === current
                  ? "var(--gold)"
                  : "rgba(255,255,255,0.55)",
            }}
          />
        ))}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setCurrent((c) => (c - 1 + images.length) % images.length);
        }}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100"
        style={{
          backgroundColor: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(10px)",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="var(--navy)"
          strokeWidth="2"
        >
          <path
            d="M15 18l-6-6 6-6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setCurrent((c) => (c + 1) % images.length);
        }}
        aria-label="Next image"
        className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100"
        style={{
          backgroundColor: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(10px)",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="var(--navy)"
          strokeWidth="2"
        >
          <path
            d="M9 18l6-6-6-6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PROPERTY CARD
───────────────────────────────────────────── */
function PropertyCard({ villa }: { villa: (typeof villas)[number] }) {
  const previewAmenities = villa.amenities.slice(0, 4);

  return (
    <div
      className="group flex flex-col overflow-hidden rounded-[32px] border transition-all duration-300"
      style={{
        backgroundColor: "var(--card)",
        borderColor: "var(--border)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <ImageCarousel images={villa.images} name={villa.name} />

        {/* Location */}
        <div
          className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.2em]"
          style={{
            backgroundColor: "rgba(242,237,231,0.92)",
            color: "var(--navy)",
            backdropFilter: "blur(8px)",
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: "var(--gold)" }}
          />
          {villa.shortLocation}
        </div>

        {/* Price */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-1">
          <div
            className="rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em]"
            style={{
              backgroundColor: "rgba(21,31,60,0.88)",
              color: "white",
              backdropFilter: "blur(8px)",
            }}
          >
            ₹{villa.price.toLocaleString("en-IN")}
            <span className="ml-1 opacity-60">weekday</span>
          </div>

          {villa.weekendPrice && (
            <div
              className="rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em]"
              style={{
                backgroundColor: "rgba(212,175,55,0.92)",
                color: "var(--navy)",
                backdropFilter: "blur(8px)",
              }}
            >
              ₹{villa.weekendPrice.toLocaleString("en-IN")}
              <span className="ml-1 opacity-70">weekend</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div>
          <h3
            className="font-serif text-2xl leading-tight"
            style={{ color: "var(--navy)" }}
          >
            {villa.name}
          </h3>

          <p
            className="mt-2 font-serif text-sm italic"
            style={{ color: "var(--foreground)", opacity: 0.62 }}
          >
            {villa.tagline}
          </p>

          {/* Description */}
          <p
            className="mt-4 text-sm leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            {villa.description}
          </p>

          {/* Fine print */}
          <p
            className="mt-3 text-[11px] italic tracking-[0.04em]"
            style={{ color: "var(--muted-foreground)", opacity: 0.8 }}
          >
            *Please contact us for final pricing. Rates may vary based on
            weekends, holidays, season, and guest requirements.
          </p>
        </div>

        {/* Divider */}
        <div
          className="my-5 h-px"
          style={{ backgroundColor: "var(--border)" }}
        />

        {/* Amenities */}
        <div className="flex flex-wrap gap-2">
          {previewAmenities.map((a) => (
            <span
              key={a}
              className="rounded-full px-3 py-1 text-[11px]"
              style={{
                backgroundColor: "var(--secondary)",
                color: "var(--muted-foreground)",
              }}
            >
              {a}
            </span>
          ))}

          {villa.amenities.length > 4 && (
            <span
              className="rounded-full px-3 py-1 text-[11px]"
              style={{
                backgroundColor: "rgba(0,0,0,0.04)",
                color: "var(--muted-foreground)",
              }}
            >
              +{villa.amenities.length - 4} more
            </span>
          )}
        </div>

        {/* Highlights */}
        <div className="mt-5 flex flex-wrap gap-2">
          {(villa.highlights || []).map((item) => (
            <div
              key={item}
              className="rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.14em]"
              style={{
                backgroundColor: "rgba(21,31,60,0.06)",
                color: "var(--navy)",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-7">
          <Link
            to={`/villas/${villa.slug}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-[12px] font-medium uppercase tracking-[0.18em] transition-all duration-300 hover:scale-[1.01] hover:opacity-90"
            style={{
              backgroundColor: "var(--navy)",
              color: "var(--primary-foreground)",
            }}
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SEARCH BAR
───────────────────────────────────────────── */
function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative w-full max-w-lg">
      <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2">
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="var(--muted-foreground)"
          strokeWidth="1.8"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M17 17l3.5 3.5" strokeLinecap="round" />
        </svg>
      </span>

      <input
        type="text"
        placeholder="Search by name or location…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-full py-3.5 pl-12 pr-5 text-sm transition focus:outline-none focus:ring-2"
        style={{
          backgroundColor: "var(--card)",
          border: "1px solid var(--border)",
          color: "var(--foreground)",
          boxShadow: "var(--shadow-soft)",
          // @ts-ignore
          "--tw-ring-color": "var(--navy)",
        }}
      />

      {value && (
        <button
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M18 6L6 18M6 6l12 12"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

/* ───────────────────────────────────────────── */
const FILTERS = [
  "All",
  "Party",
  "Family",
  "Romantic",
  "Heritage",
  "Events",
] as const;

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function PropertiesPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] =
    useState<(typeof FILTERS)[number]>("All");

  useEffect(() => {
    document.title = "Properties — Ario Stays";
  }, []);

  const filtered = villas.filter((v) => {
    const matchesSearch =
      !search.trim() ||
      v.name.toLowerCase().includes(search.toLowerCase()) ||
      v.location.toLowerCase().includes(search.toLowerCase()) ||
      v.shortLocation.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      activeFilter === "All" ||
      v.category.includes(activeFilter as never);

    return matchesSearch && matchesFilter;
  });

  return (
    <Layout>
      <section className="container-editorial">
        {/* Header */}
        <div className="max-w-3xl">
          <p
            className="text-[11px] uppercase tracking-[0.3em]"
            style={{ color: "var(--gold)" }}
          >
            Our Collection
          </p>

          <h1
            className="mt-4 font-serif text-5xl font-medium leading-[1.05] md:text-6xl"
            style={{ color: "var(--navy)" }}
          >
            Private estates,
            <span
              className="italic"
              style={{ color: "var(--foreground)", opacity: 0.65 }}
            >
              {" "}
              curated for you.
            </span>
          </h1>

          <p
            className="mt-5 max-w-xl text-base leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            Every property is hand-picked for its character, comfort, and
            sense of place — from heritage havelis to mango-orchard estates.
            Find the one that feels right.
          </p>
        </div>

        {/* Filters */}
        <div
          className="mt-10 flex flex-col gap-5 border-y py-6 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "var(--border)" }}
        >
          <SearchBar value={search} onChange={setSearch} />

          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="rounded-full px-4 py-2 text-[12px] uppercase tracking-[0.18em] transition-all duration-300"
                style={{
                  backgroundColor:
                    activeFilter === f
                      ? "var(--navy)"
                      : "var(--secondary)",
                  color:
                    activeFilter === f
                      ? "var(--primary-foreground)"
                      : "var(--foreground)",
                  opacity: activeFilter === f ? 1 : 0.75,
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Count */}
        <p
          className="mt-6 text-xs uppercase tracking-[0.2em]"
          style={{ color: "var(--muted-foreground)" }}
        >
          {filtered.length} {filtered.length === 1 ? "property" : "properties"}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {filtered.map((v) => (
              <PropertyCard key={v.slug} villa={v} />
            ))}
          </div>
        ) : (
          <div className="mt-24 flex flex-col items-center gap-4 text-center">
            <svg
              viewBox="0 0 64 64"
              className="h-14 w-14 opacity-20"
              fill="none"
              stroke="var(--navy)"
              strokeWidth="1.5"
            >
              <circle cx="28" cy="28" r="18" />
              <path d="M42 42l14 14" strokeLinecap="round" />
            </svg>

            <p
              className="font-serif text-2xl"
              style={{ color: "var(--navy)", opacity: 0.5 }}
            >
              No properties found
            </p>

            <p
              className="text-sm"
              style={{ color: "var(--muted-foreground)" }}
            >
              Try a different name or clear the filters.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveFilter("All");
              }}
              className="mt-2 rounded-full px-6 py-2.5 text-sm uppercase tracking-[0.18em] transition hover:opacity-90"
              style={{
                backgroundColor: "var(--navy)",
                color: "var(--primary-foreground)",
              }}
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>
    </Layout>
  );
}