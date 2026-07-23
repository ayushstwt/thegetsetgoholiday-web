"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceGallery({ images }) {
  return (
    <section className="py-16">
      <div className="container-page">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-center">
          <span className="section-eyebrow">Gallery</span>
          <h2 className="section-title mt-2">Photo Gallery</h2>
        </motion.div>
        <div className="columns-2 gap-4 sm:columns-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group mb-4 overflow-hidden rounded-2xl break-inside-avoid"
            >
              <Image
                src={img}
                alt={`Gallery ${i + 1}`}
                width={800}
                height={i % 3 === 0 ? 600 : 450}
                loading="lazy"
                className="w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
