"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { homeImageMap } from "../lib/data";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1705861144929-91df892af5d6?auto=format&fit=crop&w=800&q=80";

export default function DestinationCard({ dest, imageOverride }) {
  const [imgSrc, setImgSrc] = useState(imageOverride || homeImageMap[dest.slug] || dest.image);
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      <Link href={`/destinations/${dest.slug}`} className="group block overflow-hidden rounded-2xl border border-white/40 bg-white/60 shadow-md ring-1 ring-white/40 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 dark:border-white/10 dark:bg-slate-800/50 dark:ring-white/10">
        <div className="relative h-56 overflow-hidden">
          <Image
            src={imgSrc}
            alt={dest.name}
            fill
            loading="lazy"
            onError={() => setImgSrc(FALLBACK_IMAGE)}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 capitalize shadow-sm dark:bg-slate-800 dark:text-brand-300">
            {dest.region}
          </span>
          <div className="absolute bottom-3 left-4 text-white">
            <h3 className="text-xl font-bold drop-shadow-sm">{dest.name}</h3>
            <p className="text-xs text-white/80 drop-shadow-sm">{dest.country}</p>
          </div>
        </div>
        <div className="p-4">
          <p className="line-clamp-2 text-sm text-slate-600 dark:text-slate-400">{dest.tagline}</p>
          <span className="mt-3 inline-block text-sm font-semibold text-brand-600 transition-all duration-300 group-hover:translate-x-1">
            View Details →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
