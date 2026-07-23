"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceCTA({ heroImage }) {
  return (
    <section className="relative overflow-hidden py-20">
      <Image src={heroImage} alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-brand-900/85" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container-page relative z-10 text-center text-white"
      >
        <h2 className="text-3xl font-extrabold sm:text-4xl">Ready to Plan Your Next Journey?</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/90">
          Get in touch with our team and let us create the perfect travel experience for you.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="btn-accent">
            Get Free Quote
          </Link>
          <Link href="/contact" className="btn-outline !border-white/70 !text-white hover:!bg-white/10">
            Contact Us
          </Link>
          <Link
            href="https://wa.me/918796042440"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-600"
          >
            WhatsApp
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
