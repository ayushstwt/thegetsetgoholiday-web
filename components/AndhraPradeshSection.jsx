"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getDestination } from "../lib/data";
import ImageGallery from "./ImageGallery";

const packages = [
  {
    slug: "andhra-tirupati",
    image: "/andhra-pradesh/tripati-trimula/1.jpg",
    title: "Tirupati Spiritual Journey",
    duration: "3 Nights / 4 Days",
    tags: ["Tirumala Darshan", "Tiruchanur"],
    price: "₹9,000",
    badge: "Popular",
    icon: "🛕",
  },
  {
    slug: "andhra-complete",
    image: "/andhra-pradesh/ahobilam/1.jpg",
    title: "Complete Andhra Temple Tour",
    duration: "6 Nights / 7 Days",
    tags: ["Ahobilam", "Srikalahasti", "Tirupati", "Lepakshi"],
    price: "₹18,000",
    badge: "Best Value",
    icon: "✨",
  },
];

const dest = getDestination("andhra-pradesh");
const subDests = dest?.subDestinations || [];

export default function AndhraPradeshSection() {
  const [activeSub, setActiveSub] = useState(null);

  const allGallery = subDests.flatMap((s) => [
    s.image,
    ...(s.gallery || []),
  ]);

  return (
    <div className="mt-14 reveal">
      <div className="mb-12 text-center">
        <span className="section-eyebrow">Andhra Pradesh · Land of Temples</span>
        <h2 className="section-title">Discover the Divinity of Andhra Pradesh 🛕</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          From the sacred hills of Tirumala to the ancient temples of Ahobilam and
          Srikalahasti — a spiritual journey through God&apos;s own land.
        </p>
      </div>

      {/* Sub-destination grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subDests.map((sub) => (
            <button
              key={sub.slug}
              type="button"
              onClick={() => setActiveSub(activeSub?.slug === sub.slug ? null : sub)}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-800 text-left"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={sub.image}
                  alt={sub.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-4 text-white">
                  <h3 className="text-xl font-bold">{sub.name}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                  {sub.tagline}
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand-600">
                  {activeSub?.slug === sub.slug ? "▲ Show Less" : "▼ View Details"}
                </span>
              </div>

              {activeSub?.slug === sub.slug && (
                <div className="border-t border-slate-100 p-4 dark:border-slate-700">
                  <ul className="space-y-2">
                    {sub.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                      >
                        <span className="mt-0.5 text-accent-500">✦</span> {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3">
                    <Link
                      href={`/andhra-pradesh/${sub.slug}`}
                      className="text-sm font-semibold text-brand-600 hover:text-brand-700"
                    >
                      View Gallery →
                    </Link>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Packages */}
      <div className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <h3 className="mb-8 text-center text-2xl font-bold text-slate-900 dark:text-white">
          Curated Andhra Pradesh Packages
        </h3>
        <div className="flex flex-col gap-8">
          {packages.map((p) => (
            <div
              key={p.slug}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-800"
            >
              <div className="flex min-h-[220px] flex-col sm:flex-row">
                <div className="relative h-48 w-full sm:h-auto sm:w-72 lg:w-80">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 320px"
                    className="object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-accent-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                    {p.badge}
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-center gap-3 p-6 sm:p-8">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {p.icon} {p.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    {p.duration}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-brand-500/15 dark:text-brand-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-700">
                    <div>
                      <p className="text-xs text-slate-400 dark:text-slate-500">Starting from</p>
                      <p className="text-xl font-extrabold text-slate-900 dark:text-white">
                        {p.price} <span className="text-xs font-medium text-slate-400">/ Person</span>
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-600/20 transition hover:bg-brand-700"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 dark:bg-slate-800">
          <div className="relative h-56 w-full sm:h-60">
            <Image
              src={subDests[0]?.image || "/andhra-pradesh/ahobilam/1.jpg"}
              alt="Andhra Pradesh temples"
              fill
              loading="lazy"
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <h3 className="absolute bottom-4 left-6 right-6 text-2xl font-bold leading-tight text-white sm:left-8 sm:text-3xl">
              Why Visit Andhra Pradesh? 🛕
            </h3>
          </div>
          <div className="grid gap-3 p-6 sm:grid-cols-2 sm:p-8">
            {dest.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700 dark:bg-brand-500/20 dark:text-brand-300">
                  {i + 1}
                </span>
                <span className="text-sm leading-snug">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <section className="mt-16">
        <div className="mb-8 text-center">
          <span className="section-eyebrow">Gallery</span>
          <h2 className="section-title">Capturing the Spirit of Andhra Pradesh</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            A visual journey through ancient temples, sacred hills and the divine
            architecture of South India.
          </p>
        </div>
        <div className="px-4 sm:px-6 lg:px-8">
          <ImageGallery images={allGallery.length > 0 ? allGallery : dest.gallery} name="Andhra Pradesh" />
        </div>
      </section>
    </div>
  );
}
