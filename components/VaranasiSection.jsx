import Link from "next/link";
import Image from "next/image";

const packages = [
  {
    slug: "varanasi-spiritual-getaway",
    image: "/varanasi/1.jpg",
    title: "Varanasi Spiritual Getaway 🕉️",
    duration: "3 Nights / 4 Days",
    tags: ["Ganga Aarti", "Local Sightseeing"],
    price: "₹10,999",
    badge: "Popular",
  },
  {
    slug: "varanasi-sarnath-experience",
    image: "/varanasi/2.jpg",
    title: "Varanasi & Sarnath Experience",
    duration: "4 Nights / 5 Days",
    tags: ["Ganga Aarti", "Sarnath Tour", "Local Sightseeing"],
    price: "₹15,999",
    badge: "Best Value",
  },
];

const highlights = [
  "Witness the divine Ganga Aarti at Dashashwamedh Ghat",
  "Early morning boat ride on the sacred River Ganga",
  "Visit ancient temples like Kashi Vishwanath Temple",
  "Explore the peaceful Buddhist site of Sarnath",
  "One of the oldest living cities with deep spiritual vibes",
];

export default function VaranasiSection() {
  return (
    <div className="mt-14 reveal">
      <div className="mb-10 text-center">
        <span className="section-eyebrow">Varanasi · Kashi</span>
        <h2 className="section-title">Discover the Magic of Varanasi Kashi ✨</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          One of the oldest living cities, where spirituality flows with the
          sacred Ganga. Choose a curated getaway and feel the divine.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {packages.map((p) => (
          <div
            key={p.slug}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-800"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={p.image}
                alt={`${p.title} package`}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 shadow">
                {p.badge}
              </span>
              <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold leading-tight text-white">
                {p.title}
              </h3>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-brand-600">
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
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700 dark:bg-brand-500/15 dark:text-brand-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex items-end justify-between pt-5">
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500">Starting from</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">
                    ₹{p.price} <span className="text-xs font-medium text-slate-400">/ Person</span>
                  </p>
                </div>
                <Link href="/contact" className="btn-primary">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}

        <div className="group flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 shadow-lg">
          <div className="relative h-56 overflow-hidden">
            <Image
              src="/varanasi/3.jpg"
              alt="Scenic view of Varanasi Kashi"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 to-brand-700/30" />
            <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold leading-tight text-white">
              Discover the Magic of Varanasi Kashi ✨
            </h3>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <ul className="grid gap-3">
              {highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-sm text-brand-50">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white/15 text-xs font-bold">
                    {i + 1}
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
