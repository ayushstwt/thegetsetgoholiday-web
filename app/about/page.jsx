import Image from "next/image";
import Link from "next/link";
import { services } from "../../lib/data";
import Icon from "../../components/Icon";

export const metadata = {
  title: "About Us",
  description:
    "The Get Set Go Holidays — 5 years of crafting smooth, comfortable and affordable travel experiences.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative flex h-[42vh] min-h-[320px] items-end overflow-hidden">
        <Image
          src="/uploads/2026/04/rajasthan.jpg"
          alt="About"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="container-page relative z-10 pb-10 text-white">
          <h1 className="text-4xl font-extrabold sm:text-5xl">About Us</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow">5 Years of Experience</span>
            <h2 className="section-title">Your Journey, Our Responsibility</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              At {`The Get Set Go Holidays`}, we believe travel is more than just
              visiting places — it&apos;s about creating unforgettable memories.
              We provide complete travel solutions designed to make your journey
              smooth, enjoyable and completely hassle-free.
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              From customized tour packages tailored to your preferences to
              seamless hotel bookings, reliable taxi services, punctual airport
              transfers and end-to-end trip planning, we take care of every
              detail. Our mission is to make travel simple, reliable and
              enjoyable with a customer-first approach.
            </p>
            <Link href="/contact" className="btn-primary mt-7">
              Plan With Us
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/uploads/2026/04/kerala.jpg" alt="" width={400} height={300} loading="lazy" sizes="(max-width: 1024px) 50vw, 25vw" className="w-full rounded-2xl shadow" />
            <Image src="/uploads/2026/04/goa.jpg" alt="" width={400} height={300} loading="lazy" sizes="(max-width: 1024px) 50vw, 25vw" className="mt-6 w-full rounded-2xl shadow" />
            <Image src="/uploads/2026/04/manali.jpg" alt="" width={400} height={300} loading="lazy" sizes="(max-width: 1024px) 50vw, 25vw" className="w-full rounded-2xl shadow" />
            <Image src="/uploads/2026/04/shimla.jpg" alt="" width={400} height={300} loading="lazy" sizes="(max-width: 1024px) 50vw, 25vw" className="mt-6 w-full rounded-2xl shadow" />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-slate-800">
        <div className="container-page">
          <div className="mb-10 text-center">
            <span className="section-eyebrow">What We Offer</span>
            <h2 className="section-title">A Wide Range of Travel Solutions</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="card p-6">
                <div className="mb-4 inline-flex rounded-xl bg-brand-50 p-3 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
                  <Icon name={s.icon} />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
