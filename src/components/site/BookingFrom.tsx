import { useState } from "react";
import { villas } from "@/data/villas";
import emailjs from "@emailjs/browser";

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
  const [loading, setLoading] = useState(false);

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
    if (!form.guests || Number(form.guests) < 1)
      e.guests = "Enter number of guests";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          phone: form.phone,
          email: form.email,
          villa: form.villa,
          checkin: form.checkIn,
          checkout: form.checkOut,
          guests: form.guests,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Failed to send booking request. Try again.");
    } finally {
      setLoading(false);
    }
  };

  /* ─────────────────────────────────────────────
     SUCCESS STATE
  ───────────────────────────────────────────── */
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
          We'll get back to you shortly with availability details.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({
              name: "",
              phone: "",
              email: "",
              villa: "",
              checkIn: "",
              checkOut: "",
              guests: "",
              message: "",
            });
          }}
          className="mt-2 rounded-full px-6 py-2.5 text-sm uppercase tracking-[0.18em] transition hover:opacity-80"
          style={{ backgroundColor: "var(--navy)", color: "var(--primary-foreground)" }}
        >
          New enquiry
        </button>
      </div>
    );
  }

  /* ─────────────────────────────────────────────
     FORM UI
  ───────────────────────────────────────────── */
  return (
    <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
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

      <Field label="Check-in" error={errors.checkIn}>
        <input
          type="date"
          min={today()}
          className={inputClass}
          style={inputStyle}
          value={form.checkIn}
          onChange={(e) => {
            set("checkIn")(e);
            if (form.checkOut && form.checkOut <= e.target.value) {
              setForm((f) => ({ ...f, checkOut: "" }));
            }
          }}
        />
      </Field>

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

      {form.checkIn && form.checkOut && (
        <div
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm"
          style={{ backgroundColor: "var(--secondary)", color: "var(--muted-foreground)" }}
        >
          {Math.max(
            0,
            Math.round(
              (new Date(form.checkOut).getTime() -
                new Date(form.checkIn).getTime()) /
                86400000
            )
          )}{" "}
          night stay
        </div>
      )}

      <div className="md:col-span-2">
        <Field label="Any special requests? (optional)" error={errors.message}>
          <textarea
            rows={3}
            className={inputClass}
            style={inputStyle}
            value={form.message}
            onChange={set("message")}
          />
        </Field>
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-[11px] font-medium uppercase tracking-[0.15em] transition hover:opacity-90 sm:px-6 sm:py-4 sm:text-sm"
          style={{ backgroundColor: "var(--navy)", color: "var(--primary-foreground)", opacity: loading ? 0.7 : 1 }}
        >
          {loading ? "Sending..." : "Send booking enquiry"}
        </button>

        <p className="mt-3 text-center text-[10px] sm:text-[11px]" style={{ color: "var(--muted-foreground)" }}>
          We confirm within 2 hours.
        </p>
      </div>
    </form>
  );
}