import { useEffect, useState } from "react";
import { Layout } from "@/components/site/Layout";
import { PHONES, WHATSAPP_URL, INSTAGRAM } from "@/data/villas";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact — Ario Stays";
  }, []);

  return (
    <Layout>
      <section className="container-editorial">
        <div className="grid gap-16 md:grid-cols-12">

          {/* LEFT SIDE */}
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
              {/* Phone */}
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Phone</p>
                <div className="mt-2 space-y-1">
                  {PHONES.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="block font-serif text-2xl text-navy hover:text-gold transition-colors"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>

              {/* Instagram */}
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Instagram</p>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block font-serif text-2xl text-navy hover:text-gold transition-colors"
                >
                  @Ariostays
                </a>
              </div>

              {/* WhatsApp */}
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

          {/* RIGHT SIDE - FORM */}
          <div className="md:col-span-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* -------------------- */
/* CONTACT FORM         */
/* -------------------- */

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: any = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!/^\d{10}$/.test(form.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";

    if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter a valid email address";

    if (form.message.trim().length < 10)
      newErrors.message = "Message should be at least 10 characters";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // 🔥 Replace this with backend / email integration later
    console.log("Form Data:", form);

    setSubmitted(true);
  };

  return (
    <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
      <h2 className="font-serif text-3xl text-navy">Send an enquiry</h2>

      {submitted ? (
        <p className="mt-6 text-green-600 text-sm">
          Thank you! We’ll get back to you shortly.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-5">

          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              placeholder="Tell us about your stay..."
              rows={4}
              className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-500">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-full bg-navy py-3 text-sm font-medium uppercase tracking-[0.18em] text-white transition hover:opacity-90"
          >
            Submit Enquiry
          </button>
        </form>
      )}
    </div>
  );
}