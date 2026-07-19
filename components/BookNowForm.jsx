"use client";

import { useState } from "react";

export default function BookNowForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    persons: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handle = (e) => {
    if (e.target.name === "phone") {
      const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
      setForm({ ...form, phone: digits });
      return;
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      alert("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const field =
    "w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-800 placeholder:text-slate-400 shadow-sm transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-100 dark:placeholder:text-slate-500";
  const label =
    "mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400";

  if (submitted) {
    return (
      <div className="rounded-xl bg-green-50 p-6 text-center dark:bg-green-900/20">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 dark:bg-green-800/30">
          <svg className="h-7 w-7 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-green-800 dark:text-green-200">
          Thank You, {form.name}!
        </h3>
        <p className="mt-2 text-sm text-green-700 dark:text-green-300">
          Your booking request has been received. We&apos;ll get in touch with you within the next few business hours.
        </p>
        <p className="mt-1 text-xs text-green-600 dark:text-green-400">
          A confirmation email has been sent to {form.email}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      {error && (
        <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-300">
          {error}
        </div>
      )}
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className={label}>Name</label>
          <input
            required name="name" value={form.name} onChange={handle}
            placeholder="Your full name" className={field}
          />
        </div>
        <div>
          <label className={label}>Contact Number</label>
          <div className="flex">
            <span className="inline-flex items-center rounded-l-xl border border-r-0 border-slate-200 bg-slate-100 px-3 text-sm font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-700 dark:text-slate-300">
              +91
            </span>
            <input
              required name="phone" value={form.phone} onChange={handle}
              type="tel" inputMode="numeric" pattern="[6-9]{1}[0-9]{9}"
              maxLength={10} title="Enter a valid 10-digit Indian mobile number"
              placeholder="10-digit mobile number" className={`${field} rounded-l-none`}
            />
          </div>
        </div>
        <div>
          <label className={label}>Email</label>
          <input
            type="email" name="email" value={form.email} onChange={handle}
            placeholder="Email address" className={field}
          />
        </div>
        <div>
          <label className={label}>Number of Person</label>
          <input
            type="number" min="1" name="persons" value={form.persons} onChange={handle}
            placeholder="e.g. 2" className={field}
          />
        </div>
      </div>
      <button type="submit" disabled={submitting} className="btn-primary w-full sm:w-auto">
        {submitting ? "Submitting..." : "Book Now"}
      </button>
    </form>
  );
}
