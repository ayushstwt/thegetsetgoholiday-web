import Link from "next/link";
import Image from "next/image";
import { getDestination } from "../lib/data";
import ImageGallery from "./ImageGallery";

const packages = [
  {
    slug: "varanasi-spiritual-getaway",
    image: "https://images.unsplash.com/photo-1763186534213-a3ce3ec7e9b3?w=800&q=80",
    title: "Varanasi Spiritual Getaway",
    duration: "3 Nights / 4 Days",
    tags: ["Ganga Aarti", "Local Sightseeing"],
    price: "₹10,999",
    badge: "Popular",
    icon: "🕉️",
  },
  {
    slug: "varanasi-sarnath-experience",
    image: "https://images.unsplash.com/photo-1706186924707-d2acc3bd979a?w=800&q=80",
    title: "Varanasi & Sarnath Experience",
    duration: "4 Nights / 5 Days",
    tags: ["Ganga Aarti", "Sarnath Tour", "Local Sightseeing"],
    price: "₹15,999",
    badge: "Best Value",
    icon: "✨",
  },
];

const highlights = [
  "Witness the divine Ganga Aarti at Dashashwamedh Ghat",
  "Early morning boat ride on the sacred River Ganga",
  "Visit ancient temples like Kashi Vishwanath Temple",
  "Explore the peaceful Buddhist site of Sarnath",
  "One of the oldest living cities with deep spiritual vibes",
];

const galleryImages = getDestination("varanasi")?.gallery || [];

export default function VaranasiSection() {
  return (
    <div className="mt-14 reveal">
      <div className="mb-12 text-center">
        <span className="section-eyebrow">Varanasi · Kashi</span>
        <h2 className="section-title">Discover the Magic of Varanasi Kashi ✨</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          One of the oldest living cities, where spirituality flows with the
          sacred Ganga. Choose a curated getaway and feel the divine.
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
              src="https://images.unsplash.com/photo-1774290945910-d728337350fa?w=1200&q=80"
              alt="Scenic view of Varanasi Kashi"
              fill
              loading="lazy"
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <h3 className="absolute bottom-4 left-6 right-6 text-2xl font-bold leading-tight text-white sm:left-8 sm:text-3xl">
              Discover the Magic of Varanasi Kashi ✨
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
          <h2 className="section-title">Capturing the Soul of Varanasi</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            A visual journey through the ancient ghats, timeless rituals and sacred streets of Kashi.
          </p>
        </div>
        <div className="px-4 sm:px-6 lg:px-8">
          <ImageGallery images={galleryImages} name="Varanasi" />
        </div>
      </section>
    </div>
  );
}
