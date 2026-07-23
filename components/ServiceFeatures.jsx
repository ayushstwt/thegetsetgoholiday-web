"use client";
import { motion } from "framer-motion";
import { Icon } from "./ServiceAbout";

export default function ServiceFeatures({ features }) {
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-800">
      <div className="container-page">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-center">
          <span className="section-eyebrow">Features</span>
          <h2 className="section-title mt-2">What We Offer</h2>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card group p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-500/15 dark:text-brand-300">
                <Icon name={f.icon} className="h-7 w-7" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">{f.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
