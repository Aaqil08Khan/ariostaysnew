import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  X,
  Waves,
  Trees,
  Flame,
  Tent,
  ChefHat,
  Snowflake,
  Wifi,
  Car,
  User,
  Zap,
  Music2,
  Tv,
  PawPrint,
  Building2,
  Bath,
  Coffee,
  Wine,
  Gamepad2,
  Flower2,
  Sunset,
  Speaker,
  Refrigerator,
  Landmark,
  Trophy,
  Check,
  BedDouble,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import { Layout } from "@/components/site/Layout";
import { getVilla, villas, WHATSAPP_URL } from "@/data/villas";

/* ─────────────────────────────────────────────
   AMENITY ICONS
───────────────────────────────────────────── */
const amenityIcons: Record<string, any> = {
  pool: Waves,
  swimming: Waves,
  lawn: Trees,
  bbq: Flame,
  gazebo: Tent,
  kitchen: ChefHat,
  ac: Snowflake,
  air: Snowflake,
  "wi-fi": Wifi,
  wifi: Wifi,
  parking: Car,
  caretaker: User,
  backup: Zap,
  bonfire: Flame,
  music: Music2,
  tv: Tv,
  pet: PawPrint,
  rooftop: Building2,
  bathtub: Bath,
  breakfast: Coffee,
  bar: Wine,
  games: Gamepad2,
  garden: Flower2,
  terrace: Sunset,
  speaker: Speaker,
  fridge: Refrigerator,
  courtyard: Landmark,
  cricket: Trophy,
};

function getAmenityIcon(item: string) {
  const lower = item.toLowerCase();

  for (const [key, icon] of Object.entries(amenityIcons)) {
    if (lower.includes(key)) return icon;
  }

  return Check;
}

export default function VillaDetail() {
  const { slug } = useParams<{ slug: string }>();
  const villa = getVilla(slug ?? "");

  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);

  useEffect(() => {
    if (villa) document.title = `${villa.name} — Ario Stays`;

    setActive(0);

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [villa, slug]);

  useEffect(() => {
    if (lightbox === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (!villa) return;

      if (e.key === "ArrowRight") {
        setLightbox((l) =>
          l !== null ? (l + 1) % villa.images.length : null
        );
      }

      if (e.key === "ArrowLeft") {
        setLightbox((l) =>
          l !== null
            ? (l - 1 + villa.images.length) % villa.images.length
            : null
        );
      }

      if (e.key === "Escape") {
        setLightbox(null);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, villa]);

  /* NOT FOUND */
  if (!villa) {
    return (
      <Layout>
        <section className="container-editorial">
          <h1 className="font-serif text-4xl text-navy">
            Villa not found
          </h1>

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

  const others = villas
    .filter((v) => v.slug !== villa.slug)
    .slice(0, 3);

  return (
    <Layout>
      {/* ─────────────────────────────────────────────
         FULLSCREEN GALLERY
      ───────────────────────────────────────────── */}
      {galleryOpen && (
        <div className="fixed inset-0 z-[120] overflow-y-auto bg-black text-white">
          <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-black/80 px-5 py-4 backdrop-blur-xl">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                Gallery
              </p>

              <h2 className="mt-1 font-serif text-2xl">
                {villa.name}
              </h2>
            </div>

            <button
              onClick={() => setGalleryOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="grid gap-4 lg:grid-cols-12">
              <div
                className="overflow-hidden rounded-[2rem] lg:col-span-7"
                onClick={() => setLightbox(0)}
              >
                <img
                  src={villa.images[0]}
                  alt=""
                  className="h-full w-full cursor-pointer object-cover transition duration-700 hover:scale-[1.02]"
                />
              </div>

              <div className="grid gap-4 lg:col-span-5">
                {villa.images.slice(1, 3).map((img, i) => (
                  <button
                    key={img}
                    onClick={() => setLightbox(i + 1)}
                    className="overflow-hidden rounded-[2rem]"
                  >
                    <img
                      src={img}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
              {villa.images.slice(3).map((img, i) => (
                <button
                  key={img}
                  onClick={() => setLightbox(i + 3)}
                  className="block w-full overflow-hidden rounded-[2rem] break-inside-avoid"
                >
                  <img
                    src={img}
                    alt=""
                    loading="lazy"
                    className="w-full object-cover transition duration-700 hover:scale-[1.02]"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────
         LIGHTBOX
      ───────────────────────────────────────────── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[130] flex items-center justify-center bg-black/95"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-4 text-white transition hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();

              setLightbox((l) =>
                l !== null
                  ? (l - 1 + villa.images.length) %
                    villa.images.length
                  : null
              );
            }}
          >
            ‹
          </button>

          <img
            src={villa.images[lightbox]}
            alt={villa.name}
            className="max-h-[92vh] max-w-[92vw] rounded-[2rem] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-4 text-white transition hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();

              setLightbox((l) =>
                l !== null
                  ? (l + 1) % villa.images.length
                  : null
              );
            }}
          >
            ›
          </button>

          <button
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            onClick={() => setLightbox(null)}
          >
            <X className="h-5 w-5" />
          </button>

          <div className="absolute bottom-5 text-sm tracking-[0.2em] text-white/60">
            {lightbox + 1} / {villa.images.length}
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────
         PAGE
      ───────────────────────────────────────────── */}
      <section className="container-editorial">
        {/* BACK */}
        <Link
          to="/properties"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-navy"
        >
          ← Back to all properties
        </Link>

        {/* ─────────────────────────────────────────────
           HERO GALLERY
        ───────────────────────────────────────────── */}
        <div className="mt-6 grid gap-3 lg:grid-cols-12">
          <div
            className="group relative cursor-pointer overflow-hidden rounded-[2rem] lg:col-span-7"
            onClick={() => setLightbox(0)}
          >
            <div className="aspect-[16/10] overflow-hidden bg-secondary">
              <img
                src={villa.images[0]}
                alt={villa.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* FLOATING BADGES */}
            <div className="absolute left-5 top-5 flex flex-wrap gap-2">
              <div className="rounded-full bg-white/90 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-navy backdrop-blur-md">
                Private Estate
              </div>

              <div className="rounded-full bg-white/90 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-navy backdrop-blur-md">
                Luxury Stay
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setGalleryOpen(true);
              }}
              className="absolute bottom-5 left-5 rounded-full bg-white/90 px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-navy backdrop-blur-md transition hover:bg-white"
            >
              View all photos
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:col-span-5">
            {villa.images.slice(1, 5).map((img, i) => {
              const isLast = i === 3;
              const remaining = villa.images.length - 5;

              return (
                <button
                  key={img}
                  onClick={() => {
                    if (isLast && remaining > 0) {
                      setGalleryOpen(true);
                    } else {
                      setActive(i + 1);
                      setLightbox(i + 1);
                    }
                  }}
                  className="group relative overflow-hidden rounded-[2rem]"
                >
                  <div className="aspect-square overflow-hidden bg-secondary">
                    <img
                      src={img}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  {isLast && remaining > 0 && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/55 text-white backdrop-blur-sm">
                      <span className="font-serif text-4xl">
                        +{remaining}
                      </span>

                      <span className="mt-1 text-xs uppercase tracking-[0.2em]">
                        View Gallery
                      </span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ─────────────────────────────────────────────
           MAIN CONTENT
        ───────────────────────────────────────────── */}
        <div className="mt-12 grid gap-12 md:grid-cols-12">
          {/* LEFT */}
          <div className="md:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
              {villa.shortLocation}
            </p>

            <h1 className="mt-3 font-serif text-5xl font-medium leading-[1.05] text-navy md:text-6xl">
              {villa.name}
            </h1>

            <p className="mt-4 font-serif text-xl italic text-foreground/70">
              {villa.tagline}
            </p>

            {/* ─────────────────────────────────────────────
               QUICK STATS
            ───────────────────────────────────────────── */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-border bg-card p-5 shadow-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BedDouble className="h-4 w-4" />
                  <p className="text-[10px] uppercase tracking-[0.2em]">
                    Bedrooms
                  </p>
                </div>

                <p className="mt-3 font-serif text-3xl text-navy">
                  {villa.bedrooms}
                </p>
              </div>

              <div className="rounded-3xl border border-border bg-card p-5 shadow-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <p className="text-[10px] uppercase tracking-[0.2em]">
                    Starting Price
                  </p>
                </div>

                <div className="mt-3">
                  <p className="font-serif text-2xl text-navy">
                    ₹{villa.price.toLocaleString("en-IN")}
                  </p>

                  {villa.weekendPrice && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      Weekend: ₹
                      {villa.weekendPrice.toLocaleString("en-IN")}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="mt-10 border-t border-border pt-10">
              <h2 className="text-[11px] uppercase tracking-[0.3em] text-gold">
                About the stay
              </h2>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {villa.description}
              </p>

              <p className="mt-4 text-xs italic tracking-[0.04em] text-muted-foreground">
                *Please contact us for final pricing. Rates may vary depending
                on dates, group size, events, and seasonal demand.
              </p>
            </div>

            {/* ─────────────────────────────────────────────
               HIGHLIGHTS
            ───────────────────────────────────────────── */}
            {villa.highlights && villa.highlights.length > 0 && (
              <div className="mt-14 border-t border-border pt-10">
                <h2 className="text-[11px] uppercase tracking-[0.3em] text-gold">
                  Stay Highlights
                </h2>

                <div className="mt-6 flex flex-wrap gap-3">
                  {villa.highlights.map((item) => {
                    const Icon = getAmenityIcon(item);

                    return (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-3 shadow-sm"
                      >
                        <Icon className="h-4 w-4 text-navy" />

                        <span className="text-sm font-medium text-foreground">
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ─────────────────────────────────────────────
               AMENITIES
            ───────────────────────────────────────────── */}
            <div className="mt-14 border-t border-border pt-10">
              <h2 className="text-[11px] uppercase tracking-[0.3em] text-gold">
                Amenities
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {villa.amenities.map((a) => {
                  const Icon = getAmenityIcon(a);

                  return (
                    <div
                      key={a}
                      className="flex items-center gap-4 rounded-2xl border border-border bg-card px-4 py-4 transition-all duration-300 hover:-translate-y-[2px] hover:border-navy/15 hover:shadow-md"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-navy">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="text-sm font-medium text-foreground">
                        {a}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ─────────────────────────────────────────────
               LOCATION
            ───────────────────────────────────────────── */}
            <div className="mt-14 border-t border-border pt-10">
              <h2 className="text-[11px] uppercase tracking-[0.3em] text-gold">
                Location
              </h2>

              <div className="mt-5 overflow-hidden rounded-[2rem] border border-border">
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
                className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-navy underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          {/* ─────────────────────────────────────────────
             BOOKING CARD
          ───────────────────────────────────────────── */}
          <aside className="md:col-span-5">
            <div className="sticky top-28 rounded-[2rem] border border-border bg-white/80 p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl">
              <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                Pricing
              </p>

              <div className="mt-5 rounded-3xl bg-secondary/50 p-5">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Weekday
                    </p>

                    <p className="mt-2 font-serif text-3xl text-navy">
                      ₹{villa.price.toLocaleString("en-IN")}
                    </p>
                  </div>

                  <span className="rounded-full bg-white px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground shadow-sm">
                    Mon - Thu
                  </span>
                </div>

                {villa.weekendPrice && (
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Weekend
                      </p>

                      <p className="mt-2 font-serif text-3xl text-navy">
                        ₹
                        {villa.weekendPrice.toLocaleString("en-IN")}
                      </p>
                    </div>

                    <span className="rounded-full bg-white px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground shadow-sm">
                      Fri - Sun
                    </span>
                  </div>
                )}
              </div>

              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                *Please contact us for final pricing. Rates may vary for events,
                holidays, peak dates, and custom requirements.
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex items-center justify-center gap-2 rounded-full bg-leaf px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] text-white transition hover:opacity-90"
              >
                Reserve on WhatsApp
              </a>

              <a
                href="tel:+918317545573"
                className="mt-3 flex items-center justify-center gap-2 rounded-full border border-navy/15 bg-transparent px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] text-navy transition hover:bg-navy hover:text-primary-foreground"
              >
                Call concierge
              </a>

              <div className="mt-8 border-t border-border pt-7">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-navy" />

                  <div>
                    <p className="text-sm font-medium text-navy">
                      Verified luxury stay
                    </p>

                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      Professionally managed with curated hospitality
                      standards.
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <p>· Hosted by an on-site caretaker</p>
                  <p>· Custom meal plans on request</p>
                  <p>· Events welcome with prior notice</p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* ─────────────────────────────────────────────
           MORE COLLECTION
        ───────────────────────────────────────────── */}
        <div className="mt-32 border-t border-border pt-16">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-serif text-3xl text-navy md:text-4xl">
              More from the collection
            </h2>

            <Link
              to="/properties"
              className="hidden text-xs uppercase tracking-[0.18em] text-navy underline md:inline"
            >
              View all →
            </Link>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {others.map((v) => (
              <Link
                key={v.slug}
                to={`/villas/${v.slug}`}
                className="group"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-[2rem] bg-secondary">
                  <img
                    src={v.images[0]}
                    alt={v.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <h3 className="font-serif text-xl text-navy">
                      {v.name}
                    </h3>

                    <p className="mt-1 text-xs text-muted-foreground">
                      ₹{v.price.toLocaleString("en-IN")} weekday
                      {v.weekendPrice &&
                        ` · ₹${v.weekendPrice.toLocaleString(
                          "en-IN"
                        )} weekend`}
                    </p>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    {v.shortLocation}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}