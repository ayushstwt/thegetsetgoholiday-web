import Link from "next/link";
import Image from "next/image";
import { getDestination } from "../lib/data";
import ImageGallery from "./ImageGallery";

const packages = [
  {
    slug: "haridwar-spiritual",
    image: "/haridwar/1.jpg",
    title: "Haridwar Spiritual Retreat",
    duration: "2 Nights / 3 Days",
    tags: ["Ganga Aarti", "Temple Tour"],
    price: "₹6,500",
    badge: "Popular",
    icon: "🪷",
  },
  {
    slug: "haridwar-rishikesh",
    image: "/haridwar/7.jpg",
    title: "Haridwar & Rishikesh Combo",
    duration: "4 Nights / 5 Days",
    tags: ["Har Ki Pauri", "Rafting", "Yoga"],
    price: "₹12,000",
    badge: "Best Value",
    icon: "🌊",
  },
];

const highlights = [
  "Witness the divine Ganga Aarti at Har Ki Pauri",
  "Ride the ropeway to Mansa Devi Temple",
  "Trek to Chandi Devi Temple for panoramic views",
  "Take a peaceful evening boat ride on the Ganga",
  "Explore the vibrant local bazaars",
  "Visit Bharat Mata Mandir — a unique temple",
];

const galleryImages = getDestination("haridwar")?.gallery || [];

export default function HaridwarSection() {
  return (
    <div className="mt-14 reveal">
      <div className="mb-12 text-center">
        <span className="section-eyebrow">Haridwar · Gateway to God</span>
        <h2 className="section-title">Discover the Divinity of Haridwar 🪷</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          One of the holiest cities in India, where the Ganga touches the plains
          and centuries of devotion flow with the river.
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
              src="/haridwar/2.jpg"
              alt="Scenic view of Haridwar"
              fill
              loading="lazy"
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <h3 className="absolute bottom-4 left-6 right-6 text-2xl font-bold leading-tight text-white sm:left-8 sm:text-3xl">
              Why Visit Haridwar? 🪷
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
          <h2 className="section-title">Capturing the Spirit of Haridwar</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            A visual journey through sacred ghats, evening aartis and the timeless
            beauty of the Ganga.
          </p>
        </div>
        <div className="px-4 sm:px-6 lg:px-8">
          <ImageGallery images={galleryImages} name="Haridwar" />
        </div>
      </section>
    </div>
  );
}
