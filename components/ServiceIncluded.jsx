"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function ServiceIncluded({ items }) {
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-800">
      <div className="container-page">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-center">
          <span className="section-eyebrow">Inclusions</span>
          <h2 className="section-title mt-2">What&apos;s Included</h2>
        </motion.div>
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm dark:bg-slate-700"
            >
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
              <span className="text-slate-700 dark:text-slate-200">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
