import Image from "next/image";
import { site } from "../../lib/data";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with The Get Set Go Holidays for customized tour packages, bookings and travel planning.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative flex h-[40vh] min-h-[300px] items-end overflow-hidden">
        <Image
          src="/uploads/2026/04/shimla.jpg"
          alt="Contact"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="container-page relative z-10 pb-10 text-white">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Contact Us</h1>
          <p className="mt-2 max-w-2xl text-white/90">
            Let&apos;s plan your next unforgettable journey.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Get In Touch</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Fill the form and our travel experts will get back to you with a
              personalized plan.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Office</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{site.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">📞</span>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Phone</div>
                  <a href={`tel:${site.phone}`} className="text-sm text-brand-600 dark:text-brand-400">
                    {site.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">✉️</span>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Email</div>
                  <a href={`mailto:${site.email}`} className="text-sm text-brand-600 dark:text-brand-400">
                    {site.email}
                  </a>
                  <br />
                  <a href={`mailto:${site.email2}`} className="text-sm text-brand-600 dark:text-brand-400">
                    {site.email2}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🕒</span>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Hours</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{site.hours}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl ring-1 ring-slate-200 dark:ring-slate-700">
              <iframe
                title="Location"
                className="h-56 w-full"
                src="https://www.google.com/maps?q=Gaur%20City%20Mall%20Greater%20Noida%20West&output=embed"
                loading="lazy"
              />
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6 shadow-md ring-1 ring-slate-100 sm:p-8 dark:bg-slate-800 dark:ring-slate-700">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
