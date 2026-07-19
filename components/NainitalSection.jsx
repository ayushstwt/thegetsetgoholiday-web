import Link from "next/link";
import Image from "next/image";
import { getDestination } from "../lib/data";
import ImageGallery from "./ImageGallery";

const packages = [
  {
    slug: "nainital-lake-retreat",
    image: "/nainital/1.jpg",
    title: "Nainital Lake Retreat",
    duration: "2 Nights / 3 Days",
    tags: ["Naini Lake", "Mall Road"],
    price: "₹9,000",
    badge: "Popular",
    icon: "🛶",
  },
  {
    slug: "nainital-hills",
    image: "/nainital/7.jpg",
    title: "Nainital Hills & Views",
    duration: "3 Nights / 4 Days",
    tags: ["Snow View Point", "Tiffin Top", "Cave Garden"],
    price: "₹12,000",
    badge: "Best Value",
    icon: "🏔️",
  },
];

const highlights = [
  "Enjoy a peaceful boat ride on the shimmering Naini Lake",
  "Catch the sunrise at Snow View Point with Himalayan vistas",
  "Trek to Tiffin Top (Dorothy's Seat) for panoramic views",
  "Visit the sacred Naina Devi Temple",
  "Stroll along the lively Mall Road with cafés and shops",
  "Explore Eco Cave Gardens and the zoo",
];

const galleryImages = getDestination("nainital")?.gallery || [];

export default function NainitalSection() {
  return (
    <div className="mt-14 reveal">
      <div className="mb-12 text-center">
        <span className="section-eyebrow">Nainital · Lake District</span>
        <h2 className="section-title">Discover the Charm of Nainital 🛶</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Nestled in the Kumaon Himalayas, Nainital enchants with its emerald
          lake, colonial charm and breathtaking mountain views.
        </p>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        {packages.map((p) => (
          <div
            key={p.slug}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-800"
          >
            <div className="flex min-h-[240px] flex-col sm:flex-row">
              <div className="relative h-52 w-full sm:h-auto sm:w-72 lg:w-80">
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
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {p.icon} {p.title}
                </h3>
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

        <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition duration-300 hover:shadow-2xl dark:bg-slate-800">
          <div className="relative h-56 w-full sm:h-60">
            <Image
              src="/nainital/2.jpg"
              alt="Scenic view of Nainital"
              fill
              loading="lazy"
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <h3 className="absolute bottom-4 left-6 right-6 text-2xl font-bold leading-tight text-white sm:left-8 sm:text-3xl">
              Why Visit Nainital? 🛶
            </h3>
          </div>
          <div className="grid gap-3 p-6 sm:grid-cols-2 sm:p-8">
            {highlights.map((h, i) => (
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

      <section className="mt-16">
        <div className="mb-8 text-center">
          <span className="section-eyebrow">Gallery</span>
          <h2 className="section-title">Capturing the Beauty of Nainital</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            A visual journey through shimmering lakes, colonial hill stations and
            the majestic Kumaon Himalayas.
          </p>
        </div>
        <div className="px-4 sm:px-6 lg:px-8">
          <ImageGallery images={galleryImages} name="Nainital" />
        </div>
      </section>
    </div>
  );
}
