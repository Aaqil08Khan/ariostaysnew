import { useEffect } from "react";
import { Layout } from "@/components/site/Layout";

const sections = [
  {
    title: "Bookings",
    items: [
      "All bookings are confirmed only after the advance payment is received.",
      "Standard check-in is 2:00 PM and check-out is 11:00 AM.",
      "Early check-in or late check-out is subject to availability.",
    ],
  },
  {
    title: "Cancellation",
    items: [
      "Cancellations made 7+ days before check-in: 80% refund.",
      "Cancellations made 3–6 days before check-in: 50% refund.",
      "Cancellations made within 72 hours of check-in are non-refundable.",
    ],
  },
  {
    title: "House Rules",
    items: [
      "No loud music after 11:00 PM in residential zones.",
      "Smoking is permitted only in designated outdoor areas.",
      "Pets are allowed at select properties — please confirm in advance.",
      "Guests are responsible for any damages to the property during the stay.",
    ],
  },
  {
    title: "Events & Gatherings",
    items: [
      "Events are welcome at select estates with prior approval.",
      "Additional guests beyond the listed capacity require pre-confirmation.",
      "Vendor and decor approvals must be coordinated 48 hours in advance.",
    ],
  },
];

export default function PoliciesPage() {
  useEffect(() => {
    document.title = "Policies — Ario Stays";
  }, []);

  return (
    <Layout>
      <section className="container-editorial">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold">The Fine Print</p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl font-medium leading-[1.05] text-navy md:text-6xl">
          Policies & <span className="italic text-foreground/70">house notes.</span>
        </h1>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {sections.map((s) => (
            <div key={s.title}>
              <div className="h-px w-10 bg-gold" />
              <h2 className="mt-5 font-serif text-3xl text-navy">{s.title}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-navy/50" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}