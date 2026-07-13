"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { nav, site } from "../lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkText = scrolled
    ? "text-slate-700 hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-400"
    : "text-white/90 hover:text-white";
  const menuBtn = scrolled ? "text-brand-700 dark:text-white" : "text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur dark:bg-slate-900/95 dark:shadow-slate-900/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-3 lg:h-20">
        <Link href="/" className="flex items-center" aria-label="The Get Set Go Holidays">
          <Image
            src="/logo.png"
            alt="The Get Set Go Holidays"
            width={112}
            height={112}
            className="h-20 w-20 object-contain drop-shadow-sm lg:h-28 lg:w-28"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className={`text-sm font-semibold transition ${linkText}`}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full w-48 translate-y-2 rounded-xl bg-white p-2 opacity-0 shadow-lg ring-1 ring-slate-100 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:bg-slate-800 dark:ring-slate-700">
                  {item.children.map((c) => (
                    <Link
                      key={c.label}
                      href={c.href}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href={`tel:${site.phone}`} className="btn-primary">
            Call Now
          </a>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className={menuBtn}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="bg-white shadow-lg dark:bg-slate-900 dark:shadow-slate-900/50 lg:hidden">
          <nav className="container-page flex flex-col py-3">
            {nav.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-3 border-l border-slate-100 pl-3 dark:border-slate-700">
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className="block py-1 text-sm text-slate-500 dark:text-slate-400"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href={`tel:${site.phone}`} className="btn-primary mt-3">
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
