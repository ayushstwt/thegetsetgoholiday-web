"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import DestinationCard from "./DestinationCard";
import { homeImageMap } from "../lib/data";

const tabs = [
  { key: "all", label: "All Destinations" },
  { key: "international", label: "International" },
  { key: "domestic", label: "Domestic" },
];

function getStates(destinations, type) {
  const filtered = type === "all" ? destinations : destinations.filter((d) => d.region === type);
  const states = [...new Set(filtered.filter((d) => d.state).map((d) => d.state))].sort();
  return [{ value: "", label: "All States" }, ...states.map((s) => ({ value: s, label: s }))];
}

export default function DestinationsFilter({ destinations, type }) {
  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState("");

  const raw =
    type === "all"
      ? destinations
      : destinations.filter((d) => d.region === type);

  const states = useMemo(() => getStates(destinations, type), [destinations, type]);

  const list = raw
    .filter((d) => {
      if (stateFilter && d.state !== stateFilter) return false;
      if (!search) return true;
      const q = search.toLowerCase();
      return (
        d.name.toLowerCase().includes(q) ||
        d.tagline.toLowerCase().includes(q) ||
        d.summary?.toLowerCase().includes(q) ||
        d.state?.toLowerCase().includes(q)
      );
    })
    .map((d) => ({
      ...d,
      image: homeImageMap[d.slug] || d.image,
    }));

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-3">
        {tabs.map((t) => {
          const active = type === t.key;
          return (
            <Link
              key={t.key}
              href={t.key === "all" ? "/destinations" : `/destinations?type=${t.key}`}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                active
                  ? "bg-brand-600 text-white shadow"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              }`}
            >
              {t.label}
            </Link>
          );
        })}
      </div>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search destinations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-700 placeholder-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-500"
          />
        </div>
        {states.length > 1 && (
          <select
            value={stateFilter}
            onChange={(e) => setStateFilter(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {states.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        )}
      </div>

      {list.length === 0 ? (
        <p className="text-slate-500 dark:text-slate-400">No destinations found. Try a different search or filter.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((d) => (
            <DestinationCard key={d.slug} dest={d} />
          ))}
        </div>
      )}
    </>
  );
}