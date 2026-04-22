import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PHONES, WHATSAPP_URL, INSTAGRAM } from "@/data/villas";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ario Stays" },
      { name: "description", content: "Reach out to plan your stay, an event, or a private celebration." },
      { property: "og:title", content: "Contact — Ario Stays" },
      { property: "og:description", content: "Plan your stay with our concierge team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout>
      <section className="container-editorial">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Concierge</p>
            <h1 className="mt-4 font-serif text-5xl font-medium leading-[1.05] text-navy md:text-6xl">
              Plan your stay <span className="italic text-foreground/70">with us.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Whether it's a quiet weekend, an intimate celebration, or a full-estate event — message us and
              we'll help you find the right home and the right dates.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Phone</p>
                <div className="mt-2 space-y-1">
                  {PHONES.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block font-serif text-2xl text-navy hover:text-gold">
                      {p}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Instagram</p>
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="mt-2 block font-serif text-2xl text-navy hover:text-gold">
                  @Ariostays
                </a>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-3 rounded-full bg-leaf px-6 py-3.5 text-sm font-medium uppercase tracking-[0.18em] text-white transition hover:opacity-90"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Message on WhatsApp
              </a>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
              <iframe
                title="Ario Stays location"
                src="https://www.google.com/maps?q=Hyderabad&output=embed"
                className="h-[460px] w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}