"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceDestinations({ destinations }) {
  if (!destinations || destinations.length === 0) return null;
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-800">
      <div className="container-page">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-center">
          <span className="section-eyebrow">Destinations</span>
          <h2 className="section-title mt-2">Popular Destinations</h2>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {destinations.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative h-48 overflow-hidden rounded-2xl shadow-md"
            >
              <Image src={d.image} alt={d.name} fill sizes="(max-width: 640px) 100vw, 20vw" className="object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-bold text-white">{d.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
