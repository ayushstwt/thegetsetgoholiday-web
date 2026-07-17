"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export default function ImageGallery({ images, name }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const show = useCallback((i) => {
    setIndex(i);
    setOpen(true);
    setLoaded(false);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  const goTo = useCallback(
    (i) => {
      setIndex((i + images.length) % images.length);
      setLoaded(false);
    },
    [images.length]
  );

  const prev = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      goTo(index - 1);
    },
    [index, goTo]
  );

  const next = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      goTo(index + 1);
    },
    [index, goTo]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goTo(index - 1);
      if (e.key === "ArrowRight") goTo(index + 1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, index, close, goTo]);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => show(i)}
            aria-label={`View ${name} image ${i + 1}`}
            className="group relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-100 shadow-md ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-slate-700"
          >
            <Image
              src={src}
              alt={`${name} — photo ${i + 1}`}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
            <div className="absolute bottom-2 right-2 rounded-md bg-black/50 px-2 py-0.5 text-[11px] font-medium text-white opacity-0 transition duration-300 group-hover:opacity-100">
              {i + 1}/{images.length}
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-0 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${name} image gallery lightbox`}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close gallery"
            className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl text-white backdrop-blur-sm transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 sm:right-5 sm:top-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 sm:left-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="relative flex h-full w-full items-center justify-center p-4 sm:p-12">
            <div className="relative h-full w-full max-w-5xl">
              <Image
                src={images[index]}
                alt={`${name} — photo ${index + 1}`}
                fill
                priority
                className={`object-contain transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
                onLoad={() => setLoaded(true)}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 sm:right-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/50 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            {name} — {index + 1} of {images.length}
          </div>
        </div>
      )}
    </>
  );
}
