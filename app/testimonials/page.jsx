import { destinations, testimonials } from "../../lib/data";
import Image from "next/image";

export const metadata = {
  title: "Testimonials",
  description: "What our travellers say about The Get Set Go Holidays.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="relative flex h-[40vh] min-h-[300px] items-end overflow-hidden">
        <Image
          src="/uploads/2026/04/thailand.jpg"
          alt="Testimonials"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="container-page relative z-10 pb-10 text-white">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Testimonials</h1>
          <p className="mt-2 max-w-2xl text-white/90">
            Real experiences from travellers who explored the world with us.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
              <div key={t.name} className="card p-6">
                <div className="mb-3 text-accent-500">
                  {"★".repeat(t.rating)}
                  <span className="text-slate-300 dark:text-slate-600">{"★".repeat(5 - t.rating)}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">“{t.quote}”</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 font-bold text-brand-700 dark:bg-brand-500/20 dark:text-brand-300">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">{t.name}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{t.location}</div>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </section>
    </>
  );
}
