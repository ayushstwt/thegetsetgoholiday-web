import Image from "next/image";
import { services } from "../../lib/data";
import Icon from "../../components/Icon";

export const metadata = {
  title: "Services",
  description:
    "Hotel booking, taxi & cab, flight booking, complete tour planning and passport/visa services by The Get Set Go Holidays.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative flex h-[42vh] min-h-[320px] items-end overflow-hidden">
        <Image
          src="/uploads/2026/04/thailand.jpg"
          alt="Services"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="container-page relative z-10 pb-10 text-white">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Our Services</h1>
          <p className="mt-2 max-w-2xl text-white/90">
            Reliable, affordable and personalized travel solutions — from
            planning to booking, we handle everything.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="card flex gap-4 p-6">
              <div className="shrink-0 inline-flex rounded-xl bg-brand-50 p-3 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
                <Icon name={s.icon} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <Image src="/uploads/2026/04/paris.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-brand-900/80" />
        <div className="container-page relative z-10 text-center text-white">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Need a Custom Plan?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            Tell us your dream destination and budget — we&apos;ll craft the
            perfect itinerary.
          </p>
          <a href="/contact" className="btn-accent mt-7">Contact Our Team</a>
        </div>
      </section>
    </>
  );
}
