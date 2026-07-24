"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogCard({ post }) {
  return (
    <motion.div whileHover={{ y: -6, transition: { duration: 0.3 } }} className="h-full">
      <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/40 bg-white/60 shadow-md ring-1 ring-white/40 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 dark:border-white/10 dark:bg-slate-800/50 dark:ring-white/10">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold capitalize text-brand-700 shadow-sm dark:bg-slate-800 dark:text-brand-300">
            {post.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-2 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span>{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h3 className="text-lg font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-3 flex-1 text-sm text-slate-600 dark:text-slate-400">
            {post.excerpt}
          </p>
          <span className="mt-4 inline-block text-sm font-semibold text-brand-600 transition-all duration-300 group-hover:translate-x-1">
            Read More →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
