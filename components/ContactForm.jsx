"use client";

import { useState } from "react";
import { destinations } from "../lib/data";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  });

  const handle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const payload = { ...form };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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

  if (submitted) {
    const waText =
      `Name: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}` +
      `%0ADestination: ${form.destination}%0AMessage: ${form.message}`;
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
          Your enquiry has been received. Our team will get back to you within the next few business hours.
        </p>
        <p className="mt-1 text-xs text-green-600 dark:text-green-400">
          A confirmation email has been sent to {form.email}.
        </p>
        <a
          href={`https://wa.me/918796042440?text=${waText}`}
          target="_blank"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-600"
        >
          Chat on WhatsApp
        </a>
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
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required name="name" value={form.name} onChange={handle}
          placeholder="Your Name" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 focus:border-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
        />
        <input
          required name="phone" value={form.phone} onChange={handle}
          placeholder="Phone Number" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 focus:border-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
        />
      </div>
      <input
        type="email" name="email" value={form.email} onChange={handle}
        placeholder="Email Address" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 focus:border-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
      />
      <select
        name="destination" value={form.destination} onChange={handle}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 focus:border-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
      >
        <option value="">Preferred Destination (optional)</option>
        {destinations.map((d) => (
          <option key={d.slug} value={d.name}>{d.name}</option>
        ))}
      </select>
      <textarea
        name="message" value={form.message} onChange={handle} rows={4}
        placeholder="Tell us about your trip..." className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 focus:border-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
      />
      <button type="submit" disabled={submitting} className="btn-primary w-full">
        {submitting ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
