import Link from "next/link";
import Image from "next/image";
import { site, nav } from "../lib/data";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 dark:bg-slate-950">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/logo.png"
            alt="The Get Set Go Holidays"
            width={56}
            height={56}
            className="mb-4 h-14 w-14 object-contain drop-shadow-sm"
          />
          <h3 className="mb-4 text-lg font-bold text-white">
            The Get Set Go <span className="text-accent-500">Holidays</span>
          </h3>
          <p className="text-sm leading-relaxed">{site.description}</p>
          <div className="mt-4 flex gap-3">
            <a href={site.social.facebook} aria-label="Facebook" className="rounded-full bg-white/10 p-2 hover:bg-brand-600">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M14 9h3l.5-3H14V4c0-.9.3-1.5 1.6-1.5H17V.2C16.7.1 15.8 0 14.8 0 12.5 0 11 1.4 11 4v2H8v3h3v9h3V9z"/></svg>
            </a>
            <a href={site.social.instagram} aria-label="Instagram" className="rounded-full bg-white/10 p-2 hover:bg-brand-600">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c2.7 0 3 0 4.1.1 1 0 1.7.2 2.3.5.6.2 1.1.5 1.6 1 .5.5.8 1 1 1.6.3.6.4 1.3.5 2.3.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.7-.5 2.3-.2.6-.5 1.1-1 1.6-.5.5-1 .8-1.6 1-.6.3-1.3.4-2.3.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.7-.2-2.3-.5-.6-.2-1.1-.5-1.6-1-.5-.5-.8-1-1-1.6-.3-.6-.4-1.3-.5-2.3C2 15 2 14.7 2 12s0-3 .1-4.1c0-1 .2-1.7.5-2.3.2-.6.5-1.1 1-1.6.5-.5 1-.8 1.6-1 .6-.3 1.3-.4 2.3-.5C9 2 9.3 2 12 2zm0 1.8c-2.6 0-2.9 0-4 .1-1 0-1.5.2-1.9.3-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.1.4-.3.9-.3 1.9-.1 1.1-.1 1.4-.1 4s0 2.9.1 4c0 1 .2 1.5.3 1.9.2.5.4.8.7 1.1.3.3.6.5 1.1.7.4.1.9.3 1.9.3 1.1.1 1.4.1 4 .1s2.9 0 4-.1c1 0 1.5-.2 1.9-.3.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.1-.4.3-.9.3-1.9.1-1.1.1-1.4.1-4s0-2.9-.1-4c0-1-.2-1.5-.3-1.9-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.4-.1-.9-.3-1.9-.3-1.1-.1-1.4-.1-4-.1zm0 3.1a4.1 4.1 0 110 8.2 4.1 4.1 0 010-8.2zm0 6.8a2.7 2.7 0 100-5.4 2.7 2.7 0 000 5.4zm5.2-7a1 1 0 11-2 0 1 1 0 012 0z"/></svg>
            </a>
            <a href={site.social.youtube} aria-label="YouTube" className="rounded-full bg-white/10 p-2 hover:bg-brand-600">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23 7.5c-.3-1-1-1.7-2-2C19 5 12 5 12 5s-7 0-9 .5c-1 .3-1.7 1-2 2C.5 9.5.5 12 .5 12s0 2.5.5 4.5c.3 1 1 1.7 2 2C5 19 12 19 12 19s7 0 9-.5c1-.3 1.7-1 2-2 .5-2 .5-4.5.5-4.5s0-2.5-.5-4.5zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z"/></svg>
            </a>
            <a href={site.social.linkedin} aria-label="LinkedIn" className="rounded-full bg-white/10 p-2 hover:bg-brand-600">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.1c0-1.7-.03-3.9-2.37-3.9-2.38 0-2.74 1.86-2.74 3.78V24h-4V8z"/></svg>
            </a>
            <a href={site.social.x} aria-label="X" className="rounded-full bg-white/10 p-2 hover:bg-brand-600">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.9 1.2h3.7l-8 9.1L24 22.8h-7.4l-5.8-7.6-6.6 7.6H.5l8.6-9.8L0 1.2h7.6l5.2 6.9 6.1-6.9zm-1.3 19.4h2L6.5 3.3H4.4l13.2 17.3z"/></svg>
            </a>
            <a href={site.social.whatsapp} aria-label="WhatsApp" className="rounded-full bg-white/10 p-2 hover:bg-brand-600">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M.1 23.9 2.4 17c-.5-1-.8-2-.8-3.1C1.6 8.6 6.2 4 12.1 4c2.7 0 5.2 1 7.1 2.9 1.9 1.9 2.9 4.4 2.9 7.1 0 5.9-4.6 10.5-10.5 10.5-1.4 0-2.7-.3-3.9-.8L.1 23.9zm6.3-3.2 1.1-.2c1-.3 1.9-.8 2.7-1.5l1.3-.9-1-1.3-.6.4c-.6.4-1.1.6-1.6.6-.5 0-.8-.1-1-.4-.2-.2-.4-.5-.5-1 0-.3.1-.7.4-1.1l.3-.5-1.2-1.6c-.5-.7-.8-1.3-.8-1.9 0-.8.4-1.5 1.1-2 .4-.3.9-.5 1.5-.5.3 0 .6 0 1 .1.3.1.6.3.9.5l.7.5c.3.2.5.4.6.5l.3-.2c.4-.3.8-.5 1.2-.6.4-.1.8-.2 1.2-.1.6.1 1.1.5 1.4 1 .3.6.4 1.3.3 2 0 .6-.2 1.2-.5 1.8-.3.6-.6 1.1-1 1.6-.5.5-1 .9-1.6 1.3-.6.4-1.2.7-1.8 1-.4.2-.8.3-1.1.4l-1 .3z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-accent-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact Info</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <span>📍</span>
              <span>{site.address}</span>
            </li>
            <li className="flex gap-2">
              <span>📞</span>
              <a href={`tel:${site.phone}`} className="hover:text-accent-400">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <span>✉️</span>
              <a href={`mailto:${site.email}`} className="hover:text-accent-400">
                {site.email}
              </a>
            </li>
            <li className="flex gap-2">
              <span>🕒</span>
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Why Us</h4>
          <p className="text-sm leading-relaxed">
            Customer-first travel with transparent pricing, trusted services and
            real-time support — so every journey becomes special and
            hassle-free.
          </p>
          <Link href="/contact" className="btn-accent mt-4">
            Plan My Trip
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} The Get Set Go Holidays. All rights reserved.
      </div>
    </footer>
  );
}
