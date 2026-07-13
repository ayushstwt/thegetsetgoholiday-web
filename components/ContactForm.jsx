"use client";

import { useState } from "react";
import { destinations } from "../lib/data";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
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

  const submit = (e) => {
    e.preventDefault();
    const text =
      `Name: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}` +
      `%0ADestination: ${form.destination}%0AMessage: ${form.message}`;
    window.location.href = `https://wa.me/918796042440?text=${text}`;
  };

  return (
    <form onSubmit={submit} className="space-y-4">
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
      <button type="submit" className="btn-primary w-full">
        Send Enquiry via WhatsApp
      </button>
    </form>
  );
}
