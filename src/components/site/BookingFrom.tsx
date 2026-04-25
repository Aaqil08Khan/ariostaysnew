import { useState } from "react";
import { villas, WHATSAPP_URL } from "@/data/villas";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
type FormState = {
  name: string;
  phone: string;
  email: string;
  villa: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
function today() {
  return new Date().toISOString().split("T")[0];
}

function minCheckOut(checkIn: string) {
  if (!checkIn) return today();
  const d = new Date(checkIn);
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

/* ─────────────────────────────────────────────
   FIELD WRAPPER
───────────────────────────────────────────── */
function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        className="mb-1.5 block text-[11px] uppercase tracking-[0.2em]"
        style={{ color: "var(--muted-foreground)" }}
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-[11px]" style={{ color: "var(--destructive)" }}>
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl px-4 py-3 text-sm transition focus:outline-none focus:ring-2";
const inputStyle = {
  backgroundColor: "var(--background)",
  border: "1px solid var(--border)",
  color: "var(--foreground)",
};

/* ─────────────────────────────────────────────
   BOOKING FORM
───────────────────────────────────────────── */
export function BookingForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    villa: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^\d{10}$/.test(form.phone)) e.phone = "Enter a valid 10-digit number";
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.villa) e.villa = "Please select a property";
    if (!form.checkIn) e.checkIn = "Select a check-in date";
    if (!form.checkOut) e.checkOut = "Select a check-out date";
    if (!form.guests || Number(form.guests) < 1) e.guests = "Enter number of guests";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    // Build a pre-filled WhatsApp message
    const selected = villas.find((v) => v.slug === form.villa);
    const msg = [
      `Hi! I'd like to book *${selected?.name ?? form.villa}*.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Check-in: ${form.checkIn}`,
      `Check-out: ${form.checkOut}`,
      `Guests: ${form.guests}`,
      form.message ? `Notes: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/918317545573?text=${encodeURIComponent(msg)}`,
      "_blank"
    );

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full"
          style={{ backgroundColor: "var(--leaf)", opacity: 0.15 }}
        />
        <div
          className="flex h-14 w-14 -mt-[72px] items-center justify-center rounded-full"
          style={{ backgroundColor: "rgba(69,154,92,0.12)" }}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#459a5c" strokeWidth="2">
            <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="font-serif text-2xl" style={{ color: "var(--navy)" }}>
          Enquiry sent!
        </p>
        <p className="max-w-xs text-sm" style={{ color: "var(--muted-foreground)" }}>
          Your WhatsApp should have opened with the details pre-filled. We'll confirm your dates shortly.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", villa: "", checkIn: "", checkOut: "", guests: "", message: "" }); }}
          className="mt-2 rounded-full px-6 py-2.5 text-sm uppercase tracking-[0.18em] transition hover:opacity-80"
          style={{ backgroundColor: "var(--navy)", color: "var(--primary-foreground)" }}
        >
          New enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
      {/* Name */}
      <Field label="Full name" error={errors.name}>
        <input
          type="text"
          placeholder="Riya Sharma"
          className={inputClass}
          style={inputStyle}
          value={form.name}
          onChange={set("name")}
        />
      </Field>

      {/* Phone */}
      <Field label="Phone number" error={errors.phone}>
        <input
          type="tel"
          placeholder="98xxxxxxxx"
          className={inputClass}
          style={inputStyle}
          value={form.phone}
          onChange={set("phone")}
        />
      </Field>

      {/* Email */}
      <Field label="Email address" error={errors.email}>
        <input
          type="email"
          placeholder="you@example.com"
          className={inputClass}
          style={inputStyle}
          value={form.email}
          onChange={set("email")}
        />
      </Field>

      {/* Property select */}
      <Field label="Property" error={errors.villa}>
        <select
          className={inputClass}
          style={{ ...inputStyle, appearance: "none" }}
          value={form.villa}
          onChange={set("villa")}
        >
          <option value="">Select a property…</option>
          {villas.map((v) => (
            <option key={v.slug} value={v.slug}>
              {v.name} — {v.shortLocation}
            </option>
          ))}
        </select>
      </Field>

      {/* Check-in */}
      <Field label="Check-in" error={errors.checkIn}>
        <input
          type="date"
          min={today()}
          className={inputClass}
          style={inputStyle}
          value={form.checkIn}
          onChange={(e) => {
            set("checkIn")(e);
            // reset check-out if it's before new check-in
            if (form.checkOut && form.checkOut <= e.target.value) {
              setForm((f) => ({ ...f, checkOut: "" }));
            }
          }}
        />
      </Field>

      {/* Check-out */}
      <Field label="Check-out" error={errors.checkOut}>
        <input
          type="date"
          min={minCheckOut(form.checkIn)}
          className={inputClass}
          style={inputStyle}
          value={form.checkOut}
          onChange={set("checkOut")}
        />
      </Field>

      {/* Guests */}
      <Field label="Number of guests" error={errors.guests}>
        <input
          type="number"
          min={1}
          max={50}
          placeholder="6"
          className={inputClass}
          style={inputStyle}
          value={form.guests}
          onChange={set("guests")}
        />
      </Field>

      {/* Nights summary (auto-calculated) */}
      {form.checkIn && form.checkOut && (
        <div
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm"
          style={{ backgroundColor: "var(--secondary)", color: "var(--muted-foreground)" }}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
          </svg>
          {Math.max(
            0,
            Math.round(
              (new Date(form.checkOut).getTime() - new Date(form.checkIn).getTime()) /
              86400000
            )
          )}{" "}
          night stay
        </div>
      )}

      {/* Message — full width */}
      <div className="md:col-span-2">
        <Field label="Any special requests? (optional)" error={errors.message}>
          <textarea
            rows={3}
            placeholder="Celebrating a birthday, need a chef, bringing kids…"
            className={inputClass}
            style={inputStyle}
            value={form.message}
            onChange={set("message")}
          />
        </Field>
      </div>

      {/* Submit */}
      <div className="md:col-span-2">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-[11px] font-medium uppercase tracking-[0.15em] transition hover:opacity-90 sm:px-6 sm:py-4 sm:text-sm"
          style={{ backgroundColor: "var(--navy)", color: "var(--primary-foreground)" }}
        >
          <svg
            viewBox="0 0 32 32"
            className="h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5"
            fill="currentColor"
          >
            <path d="M19.11 17.32c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.16-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.48.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.13-.61-1.47-.83-2.01-.22-.53-.44-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.99 2.66 1.13 2.84.13.18 1.95 2.97 4.72 4.16.66.28 1.18.45 1.58.58.66.21 1.27.18 1.74.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.31z" />
            <path d="M26.55 5.4C23.74 2.59 20 .94 16 .94 7.7.94.94 7.7.94 16c0 2.65.69 5.24 2.01 7.52L.85 31.06l7.74-2.03A15 15 0 0 0 16 31.06h.01c8.3 0 15.06-6.76 15.07-15.06 0-4.03-1.57-7.81-4.43-10.6zm-10.55 23.2h-.01a12.5 12.5 0 0 1-6.36-1.74l-.46-.27-4.6 1.21 1.23-4.49-.3-.48a12.5 12.5 0 0 1-1.92-6.66c0-6.92 5.63-12.55 12.55-12.55 3.35 0 6.5 1.31 8.87 3.68a12.45 12.45 0 0 1 3.68 8.87c0 6.92-5.64 12.55-12.55 12.55z" />
          </svg>

          <span className="leading-tight text-center">
            Send booking enquiry <span className="hidden sm:inline">via WhatsApp</span>
          </span>
        </button>

        <p className="mt-3 text-center text-[10px] sm:text-[11px]" style={{ color: "var(--muted-foreground)" }}>
          This opens WhatsApp with your details pre-filled. We confirm within 2 hours.
        </p>
      </div>
    </form>
  );
}