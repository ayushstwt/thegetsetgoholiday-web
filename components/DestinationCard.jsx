import Link from "next/link";
import Image from "next/image";

export default function DestinationCard({ dest }) {
  return (
    <Link href={`/destinations/${dest.slug}`} className="card reveal group block">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 capitalize dark:bg-slate-800 dark:text-brand-300">
          {dest.region}
        </span>
        <div className="absolute bottom-3 left-4 text-white">
          <h3 className="text-xl font-bold">{dest.name}</h3>
          <p className="text-xs text-white/80">{dest.country}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="line-clamp-2 text-sm text-slate-600 dark:text-slate-400">{dest.tagline}</p>
        <span className="mt-3 inline-block text-sm font-semibold text-brand-600">
          View Details →
        </span>
      </div>
    </Link>
  );
}
