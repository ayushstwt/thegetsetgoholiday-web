"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import DestinationCard from "./DestinationCard";

const tabs = [
  { key: "all", label: "All Destinations" },
  { key: "international", label: "International" },
  { key: "domestic", label: "Domestic" },
];

const homeImageMap = {
  "abu-dhabi": "/images/home/abudabihome.jpg",
  "ahobilam": "/andhra-pradesh/ahobilam/1.jpg",
  "auli": "/images/domestic/uttarakhand/auli.jpg",
  "bali": "https://images.unsplash.com/photo-1671034456366-77aff6bd3316?auto=format&fit=crop&w=800&q=80",
  "bangkok-pattaya": "/images/home/bankok.jpg",
  "bhutan": "/images/home/bhutan.jpg",
  "bilaspur": "/images/domestic/himachal/bilaspur.jpg",
  "canada": "/images/home/canada.jpg",
  "chamba": "/images/domestic/himachal/chamba.jpg",
  "cheerapunji": "/images/domestic/meghalaya/cheerapunji.jpg",
  "chikmagalur": "/images/domestic/karnataka/chikmagalur.jpg",
  "chopta": "/images/domestic/uttarakhand/chopta.jpg",
  "coorg": "/images/domestic/karnataka/coorg.jpg",
  "dalhousie": "/images/domestic/himachal/dalhousie.jpg",
  "darjeeling": "/images/domestic/darjeeling/1.jpg",
  "dawki": "/images/domestic/meghalaya/dawki.jpg",
  "dehradun": "/images/domestic/dehradun/1.jpg",
  "dharamshala": "/images/domestic/himachal/dharamshala.jpg",
  "dimapur": "/images/domestic/nagaland/dimapur.jpg",
  "dubai": "/images/home/dubai.jpg",
  "goa": "/images/domestic/goa/1.jpg",
  "gokarna": "/images/domestic/karnataka/gokarna.jpg",
  "hampi": "/images/domestic/karnataka/hampi.jpg",
  "haridwar": "/images/domestic/haridwar/1.jpg",
  "jaintia-hills": "/images/domestic/meghalaya/jaintia.jpg",
  "kangra": "/images/domestic/himachal/kangra.jpg",
  "kasauli": "/images/domestic/himachal/kasauli.jpg",
  "kashmir": "/images/domestic/kashmir/1.jpg",
  "kasol": "/images/domestic/himachal/kasol.jpg",
  "kaza": "/images/domestic/himachal/kaza.jpg",
  "kazakhstan": "/images/home/kazakistan.jpg",
  "kerala": "https://images.unsplash.com/photo-1772729134950-7db4b3a7be4e?auto=format&fit=crop&w=800&q=80",
  "kinnaur": "/images/domestic/himachal/kinnaur.jpg",
  "kochi": "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?w=800&q=80",
  "kohima": "/images/domestic/nagaland/kohima.jpg",
  "kovalam": "https://images.unsplash.com/photo-1591025207163-942350e47db2?w=800&q=80",
  "kozhikode": "https://images.unsplash.com/photo-1586351011005-19c4f9f7618f?w=800&q=80",
  "laos": "https://images.unsplash.com/photo-1693039880389-62840065382c?auto=format&fit=crop&w=800&q=80",
  "london": "/images/home/london.jpg",
  "malaysia": "https://images.unsplash.com/photo-1566914447826-bf04e54bf1be?auto=format&fit=crop&w=800&q=80",
  "maldives": "https://images.unsplash.com/photo-1777199663418-3dd126c9fd40?auto=format&fit=crop&w=800&q=80",
  "manali": "/images/domestic/manali/1.jpg",
  "mandi": "/images/domestic/himachal/mandi.jpg",
  "mauritius": "https://images.unsplash.com/photo-1686740339586-391c79cba290?auto=format&fit=crop&w=800&q=80",
  "mawsynram": "/images/domestic/meghalaya/mawsynram.jpg",
  "mukteshwar": "/images/domestic/uttarakhand/mukteshwar.jpg",
  "munnar": "https://images.unsplash.com/photo-1564005871064-57f01e0432b2?w=800&q=80",
  "mussorie": "/images/domestic/uttarakhand/mussorie.jpg",
  "mysuru": "/images/domestic/karnataka/mysuru.jpg",
  "nainital": "/images/domestic/nainital/1.jpg",
  "nandi-hills": "/images/domestic/karnataka/nandihills.jpg",
  "paris": "https://images.unsplash.com/photo-1760281854309-3c5ea36d5d83?auto=format&fit=crop&w=800&q=80",
  "phek": "/images/domestic/nagaland/phek.jpg",
  "philippines": "https://images.unsplash.com/photo-1750184698059-1f664fd21a48?auto=format&fit=crop&w=800&q=80",
  "phuket-krabi": "https://images.unsplash.com/photo-1754295560175-86037557a4fd?auto=format&fit=crop&w=800&q=80",
  "rajasthan": "https://images.unsplash.com/photo-1705861144929-91df892af5d6?auto=format&fit=crop&w=800&q=80",
  "rishikesh": "/images/domestic/rishikesh/1.jpg",
  "sakleshpur": "/images/domestic/karnataka/sakleshpur.jpg",
  "shillong": "/images/domestic/meghalaya/shillong.jpg",
  "shimla": "/images/domestic/shimla/1.jpg",
  "sikkim": "/images/domestic/sikkim/1.jpg",
  "sirmaur": "/images/domestic/himachal/sirmaur.jpg",
  "sissu": "/images/domestic/himachal/sissu.jpg",
  "solan": "/images/domestic/himachal/solan.jpg",
  "spiti-valley": "/images/domestic/himachal/spiti.jpg",
  "srikalahasti": "/andhra-pradesh/srikalahasti/1.jpg",
  "sri-lanka": "https://images.unsplash.com/photo-1751247026229-518bfec9b5e6?auto=format&fit=crop&w=800&q=80",
  "switzerland": "/images/home/switerland.jpg",
  "tehri": "/images/domestic/uttarakhand/tehri.jpg",
  "thekkady": "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
  "thirthan-valley": "/images/domestic/himachal/thirthan.jpg",
  "thrissur": "https://images.unsplash.com/photo-1601877643985-6b09c32c470f?w=800&q=80",
  "tirupati": "/andhra-pradesh/tripati-trimula/1.jpg",
  "udupi": "/images/domestic/karnataka/udupi.jpg",
  "vagamon": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  "varanasi": "/images/domestic/varanasi/1.jpg",
  "vietnam": "/images/home/vietnam.jpg",
  "wayanad": "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
  "west-garo-hills": "/images/domestic/meghalaya/garo.jpg",
  "wokha": "/images/domestic/nagaland/wokha.jpg",
};

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