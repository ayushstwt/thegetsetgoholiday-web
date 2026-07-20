import Link from "next/link";
import Image from "next/image";
import { destinations } from "../../lib/data";
import DestinationCard from "../../components/DestinationCard";

export const metadata = {
  title: "Destinations",
  description:
    "Explore international and domestic travel destinations with The Get Set Go Holidays.",
};

const tabs = [
  { key: "all", label: "All Destinations" },
  { key: "international", label: "International" },
  { key: "domestic", label: "Domestic" },
];

const homeImageMap = {
  "abu-dhabi": "/images/home/abudabihome.jpg",
  "andhra-pradesh": "https://images.unsplash.com/photo-1741003415192-ea5c163aadd4?auto=format&fit=crop&w=800&q=80",
  "bali": "https://images.unsplash.com/photo-1671034456366-77aff6bd3316?auto=format&fit=crop&w=800&q=80",
  "bangkok-pattaya": "/images/home/bankok.jpg",
  "bhutan": "/images/home/bhutan.jpg",
  "canada": "/images/home/canada.jpg",
  "darjeeling": "/images/domestic/darjeeling/1.jpg",
  "dehradun": "/images/domestic/dehradun/1.jpg",
  "dubai": "/images/home/dubai.jpg",
  "goa": "/images/domestic/goa/1.jpg",
  "haridwar": "/images/domestic/haridwar/1.jpg",
  "kashmir": "/images/domestic/kashmir/1.jpg",
  "kazakhstan": "/images/home/kazakistan.jpg",
  "kerala": "https://images.unsplash.com/photo-1772729134950-7db4b3a7be4e?auto=format&fit=crop&w=800&q=80",
  "laos": "https://images.unsplash.com/photo-1693039880389-62840065382c?auto=format&fit=crop&w=800&q=80",
  "london": "/images/home/london.jpg",
  "malaysia": "https://images.unsplash.com/photo-1566914447826-bf04e54bf1be?auto=format&fit=crop&w=800&q=80",
  "maldives": "https://images.unsplash.com/photo-1777199663418-3dd126c9fd40?auto=format&fit=crop&w=800&q=80",
  "manali": "/images/domestic/manali/1.jpg",
  "mauritius": "https://images.unsplash.com/photo-1686740339586-391c79cba290?auto=format&fit=crop&w=800&q=80",
  "nainital": "/images/domestic/nainital/1.jpg",
  "paris": "https://images.unsplash.com/photo-1760281854309-3c5ea36d5d83?auto=format&fit=crop&w=800&q=80",
  "philippines": "https://images.unsplash.com/photo-1750184698059-1f664fd21a48?auto=format&fit=crop&w=800&q=80",
  "phuket-krabi": "https://images.unsplash.com/photo-1754295560175-86037557a4fd?auto=format&fit=crop&w=800&q=80",
  "rajasthan": "https://images.unsplash.com/photo-1705861144929-91df892af5d6?auto=format&fit=crop&w=800&q=80",
  "rishikesh": "/images/domestic/rishikesh/1.jpg",
  "shimla": "/images/domestic/shimla/1.jpg",
  "sikkim": "/images/domestic/sikkim/1.jpg",
  "sri-lanka": "https://images.unsplash.com/photo-1751247026229-518bfec9b5e6?auto=format&fit=crop&w=800&q=80",
  "switzerland": "/images/home/switerland.jpg",
  "varanasi": "/images/domestic/varanasi/1.jpg",
  "vietnam": "/images/home/vietnam.jpg",
};

export default function DestinationsPage({ searchParams }) {
  const type = searchParams?.type || "all";
  const raw =
    type === "all"
      ? destinations
      : destinations.filter((d) => d.region === type);
  const list = raw.map((d) => ({
    ...d,
    image: homeImageMap[d.slug] || d.image,
  }));

  return (
    <>
      <section className="relative flex h-[40vh] min-h-[320px] items-end overflow-hidden">
        <Image
          src="/uploads/2026/04/switzerland.jpg"
          alt="Destinations"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="container-page relative z-10 pb-10 text-white">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Destinations</h1>
          <p className="mt-2 max-w-2xl text-white/90">
            Handpicked places across India and the world, planned with care.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-page">
          <div className="mb-8 flex flex-wrap gap-3">
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

          {list.length === 0 ? (
            <p className="text-slate-500 dark:text-slate-400">No destinations found.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {list.map((d) => (
                <DestinationCard key={d.slug} dest={d} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
