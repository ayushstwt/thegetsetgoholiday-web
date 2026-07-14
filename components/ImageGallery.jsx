"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ImageGallery({ images, name }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const show = (i) => {
    setIndex(i);
    setOpen(true);
  };
  const close = () => setOpen(false);
  const prev = (e) => {
    e.stopPropagation();
    setIndex((i) => (i - 1 + images.length) % images.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setIndex((i) => (i + 1) % images.length);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length]);

  return (
    <>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {images.map((g, i) => (
          <button
            key={i}
            type="button"
            onClick={() => show(i)}
            aria-label={`View ${name} image ${i + 1}`}
            className="group relative h-40 overflow-hidden rounded-xl shadow ring-1 ring-black/5 focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <Image
              src={g}
              alt={`${name} ${i + 1}`}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-110"
            />
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
          >
            ✕
          </button>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20 sm:left-6"
          >
            ‹
          </button>
          <div className="relative h-[80vh] w-full max-w-4xl">
            <Image
              src={images[index]}
              alt={`${name} ${index + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20 sm:right-6"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
