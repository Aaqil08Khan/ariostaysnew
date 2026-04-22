import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { villas } from "@/data/villas";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Ario Stays" },
      { name: "description", content: "A visual journey through our luxury farmhouses and villas." },
      { property: "og:title", content: "Gallery — Ario Stays" },
      { property: "og:description", content: "Quiet courtyards, lit pools, and unhurried mornings." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const all = villas.flatMap((v) => v.images.map((src) => ({ src, name: v.name })));
  return (
    <Layout>
      <section className="container-editorial">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Gallery</p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl font-medium leading-[1.05] text-navy md:text-6xl">
          Quiet mornings, lit pools, <span className="italic text-foreground/70">long evenings.</span>
        </h1>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {all.map((img, i) => (
            <figure key={i} className="mb-5 break-inside-avoid overflow-hidden rounded-2xl bg-secondary">
              <img
                src={img.src}
                alt={img.name}
                loading={i < 3 ? "eager" : "lazy"}
                className="w-full transition-transform duration-700 hover:scale-105"
              />
              <figcaption className="px-4 py-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {img.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </Layout>
  );
}