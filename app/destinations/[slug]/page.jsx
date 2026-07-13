import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { destinations, getDestination } from "../../../lib/data";
import DestinationCard from "../../../components/DestinationCard";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }) {
  const dest = getDestination(params.slug);
  if (!dest) return { title: "Destination not found" };
  return {
    title: `${dest.name} Tour Packages`,
    description: dest.summary,
  };
}

export default function DestinationDetail({ params }) {
  const dest = getDestination(params.slug);
  if (!dest) notFound();

  const related = destinations
    .filter((d) => d.region === dest.region && d.slug !== dest.slug)
    .slice(0, 3);

  return (
    <>
      <section className="relative flex h-[60vh] min-h-[420px] items-end overflow-hidden">
        <Image src={dest.image} alt={dest.name} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-900/20" />
        <div className="container-page relative z-10 pb-10 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">
            {dest.country}
          </p>
          <h1 className="text-4xl font-extrabold sm:text-6xl">{dest.name}</h1>
          <p className="mt-3 max-w-2xl text-lg text-white/90">{dest.tagline}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Overview</h2>
            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">{dest.summary}</p>

            <h3 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Highlights</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {dest.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                  <span className="mt-1 text-accent-500">★</span> {h}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-xl font-bold text-slate-900">Gallery</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {dest.gallery.map((g, i) => (
                <div key={i} className="relative h-40 overflow-hidden rounded-xl shadow">
                  <Image
                    src={g}
                    alt={`${dest.name} ${i + 1}`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl bg-brand-50 p-6 shadow-md ring-1 ring-brand-100 dark:bg-slate-800 dark:ring-slate-700">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Trip Snapshot</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between border-b border-brand-100 pb-2 dark:border-slate-700">
                  <dt className="text-slate-500 dark:text-slate-400">Best Time</dt>
                  <dd className="font-semibold text-slate-800 dark:text-slate-200">{dest.bestTime}</dd>
                </div>
                <div className="flex justify-between border-b border-brand-100 pb-2 dark:border-slate-700">
                  <dt className="text-slate-500 dark:text-slate-400">Duration</dt>
                  <dd className="font-semibold text-slate-800 dark:text-slate-200">{dest.duration}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500 dark:text-slate-400">Price</dt>
                  <dd className="font-semibold text-brand-700 dark:text-brand-300">{dest.price}</dd>
                </div>
              </dl>
              <Link href="/contact" className="btn-primary mt-6 w-full">
                Enquire Now
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-slate-50 py-14 dark:bg-slate-800">
          <div className="container-page">
            <h2 className="section-title mb-8">More {dest.region} Destinations</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((d) => (
                <DestinationCard key={d.slug} dest={d} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
