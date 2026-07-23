"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ServiceFAQ({ faqs }) {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-16">
      <div className="container-page">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-center">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title mt-2">Frequently Asked Questions</h2>
        </motion.div>
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between bg-white px-6 py-4 text-left text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
              >
                {faq.q}
                <ChevronDown className={`h-4 w-4 transition ${open === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-slate-200 bg-slate-50 px-6 py-4 text-sm leading-relaxed text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
