import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ario Stays" },
      { name: "description", content: "The story behind Ario Stays — a curated collection of luxury farmhouses and private villas." },
      { property: "og:title", content: "About — Ario Stays" },
      { property: "og:description", content: "Hospitality, slow living, and beautifully kept estates." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <section className="container-editorial">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Our Story</p>
            <h1 className="mt-4 font-serif text-5xl font-medium leading-[1.05] text-navy md:text-6xl">
              Beautifully kept estates, <span className="italic text-foreground/70">quietly hosted.</span>
            </h1>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                Ario Stays began with a simple belief — that the most memorable places aren't the loudest, but
                the ones that make space for you. Spaces that breathe. Spaces that hold their character without
                asking for attention.
              </p>
              <p>
                Each home in our collection is a private estate, hand-picked for its architecture, landscape,
                and the quiet rituals it invites. From the heritage charm of a Kerala-style cottage to the grand
                courtyards of our mango-orchard retreat, every stay is a different way to slow down.
              </p>
              <p>
                Behind it all is a small, unhurried team — caretakers, chefs, and concierges — who treat each
                arrival like a personal welcome. Because the best hospitality, we think, is the kind you barely
                notice.
              </p>
            </div>

            <div className="mt-10">
              <Link
                to="/villas"
                className="inline-flex items-center gap-2 border-b border-navy pb-1 text-sm uppercase tracking-[0.18em] text-navy transition hover:border-gold hover:text-gold"
              >
                Explore the collection →
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80"
                alt="Estate"
                className="aspect-[3/4] w-full rounded-3xl object-cover"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card p-5 shadow-[var(--shadow-elev)] md:block">
                <p className="font-serif text-3xl text-navy">5</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Private Estates</p>
              </div>
              <div className="absolute -top-6 -right-6 hidden rounded-2xl bg-navy p-5 text-primary-foreground shadow-[var(--shadow-elev)] md:block">
                <p className="font-serif text-3xl text-gold">200+</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/70">Guests Hosted</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 grid gap-10 border-t border-border pt-16 md:grid-cols-3">
          {[
            { t: "Curated, not collected", d: "We work with a small, considered set of homes — never volume, only ones we'd stay in ourselves." },
            { t: "Quietly hosted", d: "On-site caretakers, pre-ordered meals, and a concierge a message away." },
            { t: "Made for milestones", d: "From birthdays in the courtyard to weddings on the lawn — built for the moments that matter." },
          ].map((b) => (
            <div key={b.t}>
              <div className="h-px w-10 bg-gold" />
              <h3 className="mt-5 font-serif text-2xl text-navy">{b.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}