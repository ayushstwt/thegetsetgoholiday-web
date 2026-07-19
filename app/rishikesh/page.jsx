import Image from "next/image";
import { destinations, getDestination } from "../../lib/data";
import DestinationCard from "../../components/DestinationCard";
import RishikeshSection from "../../components/RishikeshSection";

export const metadata = {
  title: "Rishikesh Tour Packages - Yoga & Adventure Capital",
  description:
    "Explore Rishikesh with our curated tour packages. River rafting, Ganga aarti, yoga retreats and Himalayan adventures.",
};

export default function RishikeshPage() {
  const dest = getDestination("rishikesh");

  const related = destinations
    .filter((d) => d.region === "domestic" && d.slug !== "rishikesh")
    .slice(0, 3);

  return (
    <>
      <section className="relative flex h-[60vh] min-h-[420px] items-end overflow-hidden">
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          priority
          className="object-cover"
        />
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
        <div className="container-page">
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
        </div>
      </section>

      <RishikeshSection />

      {related.length > 0 && (
        <section className="bg-slate-50 py-14 dark:bg-slate-800">
          <div className="container-page">
            <h2 className="section-title mb-8">More Domestic Destinations</h2>
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
