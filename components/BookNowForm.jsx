"use client";

import { useState } from "react";

export default function BookNowForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    persons: "",
  });

  const handle = (e) => {
    if (e.target.name === "phone") {
      const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
      setForm({ ...form, phone: digits });
      return;
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      alert("Please enter a valid 10-digit Indian mobile number.");
      return;
    }
    const text =
      `Booking Request%0AName: ${form.name}%0AContact Number: +91${form.phone}` +
      `%0AEmail: ${form.email}%0ANumber of Persons: ${form.persons}`;
    window.location.href = `https://wa.me/918796042440?text=${text}`;
  };

  const field =
    "w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-800 placeholder:text-slate-400 shadow-sm transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-100 dark:placeholder:text-slate-500";
  const label =
    "mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400";

  return (
    <form onSubmit={submit} className="space-y-4">
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
      <button type="submit" className="btn-primary w-full sm:w-auto">
        Book Now
      </button>
    </form>
  );
}
