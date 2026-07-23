"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { servicesData } from "../lib/servicesData";
import { Icon } from "./ServiceAbout";

export default function ServiceRelated({ currentSlug }) {
  const others = servicesData.filter((s) => s.slug !== currentSlug);
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-800">
      <div className="container-page">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-center">
          <span className="section-eyebrow">More Services</span>
          <h2 className="section-title mt-2">Related Services</h2>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link href={`/services/${s.slug}`} className="card group flex items-center gap-4 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-500/15 dark:text-brand-300">
                  <Icon name={s.icon} className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{s.name}</h3>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{s.subtitle}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
