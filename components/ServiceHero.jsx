"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServiceHero({ service }) {
  return (
    <section className="relative flex h-[65vh] min-h-[460px] items-center justify-center overflow-hidden">
      <Image src={service.heroImage} alt={service.name} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/30" />
      <div className="container-page relative z-10 text-center text-white">
        <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 flex items-center justify-center gap-2 text-sm text-white/70">
          <Link href="/" className="hover:text-accent-400 transition">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-accent-400 transition">Services</Link>
          <span>/</span>
          <span className="text-accent-400">{service.name}</span>
        </motion.nav>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
          {service.name}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
          {service.subtitle}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="btn-accent inline-flex items-center gap-2">
            Get Free Quote
          </Link>
          <Link
            href="https://wa.me/918796042440"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-600"
          >
            WhatsApp Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
