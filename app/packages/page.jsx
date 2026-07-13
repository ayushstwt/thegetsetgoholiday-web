import Link from "next/link";
import Image from "next/image";
import { destinations } from "../../lib/data";
import DestinationCard from "../../components/DestinationCard";

export const metadata = {
  title: "Tour Packages",
  description:
    "Honeymoon, family, group, spiritual and rider tour packages across India and the world.",
};

const packages = [
  {
    title: "Honeymoon Packages",
    desc: "Romantic escapes with private stays, candle-light dinners and curated experiences.",
    slugs: ["maldives", "bali", "kashmir", "switzerland"],
    image: "/uploads/2026/04/maldives.jpg",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Family Vacations",
    desc: "Balanced itineraries with sightseeing, leisure and fun for every age group.",
    slugs: ["goa", "dubai", "rajasthan", "thailand"],
    image: "/uploads/2026/04/goa.jpg",
    color: "from-brand-500 to-brand-700",
  },
  {
    title: "Adventure & Riders Tours",
    desc: "Road trips and high-energy itineraries for thrill-seekers and rider groups.",
    slugs: ["manali", "kashmir", "shimla", "switzerland"],
    image: "/uploads/2026/04/manali.jpg",
    color: "from-orange-500 to-accent-600",
  },
  {
    title: "Spiritual Journeys",
    desc: "Peaceful pilgrimages and temple trails across India&apos;s holiest cities.",
    slugs: ["rishikesh", "kerala", "rajasthan", "shimla"],
    image: "/uploads/2026/04/rishikesh.jpg",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Group & Corporate Tours",
    desc: "Well-organised group travel and corporate offsites with seamless logistics.",
    slugs: ["thailand", "dubai", "rajasthan", "goa"],
    image: "/uploads/2026/04/thailand.jpg",
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "International Escapes",
    desc: "Signature global holidays with flights, stays and guided sightseeing.",
    slugs: ["paris", "switzerland", "bali", "dubai"],
    image: "/uploads/2026/04/paris.jpg",
    color: "from-cyan-500 to-blue-600",
  },
];

export default function PackagesPage() {
  return (
    <>
      <section className="relative flex h-[42vh] min-h-[320px] items-end overflow-hidden">
        <img
          src="/uploads/2026/04/bali.jpg"
          alt="Packages"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="container-page relative z-10 pb-10 text-white">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Tour Packages</h1>
          <p className="mt-2 max-w-2xl text-white/90">
            Curated holidays for every traveller — honeymoon, family, group,
            spiritual and beyond.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page divide-y divide-slate-200 dark:divide-slate-800">
          {packages.map((p) => {
            const items = destinations.filter((d) => p.slugs.includes(d.slug));
            return (
              <div key={p.title} className="py-14 first:pt-0 last:pb-0">
                <div className="relative mb-8 h-44 overflow-hidden rounded-2xl shadow-lg sm:h-52">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${p.color} mix-blend-multiply opacity-80`} />
                  <div className="absolute inset-0 bg-slate-900/30" />
                  <div className="container-page relative flex h-full flex-col justify-end pb-5">
                    <span className="inline-block w-fit rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700">
                      Package
                    </span>
                    <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{p.title}</h2>
                    <p className="mt-1 max-w-2xl text-sm text-white/90">{p.desc}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="absolute right-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-brand-700 shadow transition hover:bg-white"
                  >
                    Enquire →
                  </Link>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {items.map((d) => (
                    <DestinationCard key={d.slug} dest={d} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
