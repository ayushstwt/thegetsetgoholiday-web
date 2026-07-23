import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { packageDetails, getPackageDetail, packageSlugs } from "../../../lib/packageData";

export function generateStaticParams() {
  return packageSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const pkg = getPackageDetail(params.slug);
  if (!pkg) return { title: "Package not found" };
  return {
    title: `${pkg.title} | The Get Set Go Holidays`,
    description: pkg.subtitle,
  };
}

export default function PackageDetailPage({ params }) {
  const pkg = getPackageDetail(params.slug);
  if (!pkg) notFound();

  return (
    <>
      <section className="relative flex h-[55vh] min-h-[400px] items-end overflow-hidden">
        <Image
          src={pkg.hero}
          alt={pkg.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-slate-900/20" />
        <div className="container-page relative z-10 pb-12 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">
            Tour Package
          </p>
          <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl lg:text-6xl">{pkg.title}</h1>
          <p className="mt-3 max-w-3xl text-lg text-white/90">{pkg.subtitle}</p>
        </div>
      </section>

      {pkg.sections.map((section, i) => (
        <section key={i} className={i % 2 === 0 ? "py-14" : "bg-slate-50 py-14 dark:bg-slate-800"}>
          <div className="container-page">
            <div className={`grid items-center gap-10 ${i < pkg.images.length ? "lg:grid-cols-2" : ""}`}>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{section.heading}</h2>
                <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">{section.body}</p>
              </div>
              {i < pkg.images.length && (
                <div className="order-first lg:order-last">
                  <Image
                    src={pkg.images[i]}
                    alt={section.heading}
                    width={800}
                    height={600}
                    className="rounded-2xl object-cover shadow-lg"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      <section className="py-14">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">What&apos;s Included</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pkg.inclusions.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl bg-brand-50 p-4 dark:bg-brand-500/10">
                <span className="mt-0.5 shrink-0 text-accent-500">✓</span>
                <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {pkg.destinations && (
        <section className="bg-slate-50 py-14 dark:bg-slate-800">
          <div className="container-page">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Popular Destinations</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {pkg.destinations.map((d) => (
                <span key={d} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:bg-slate-700 dark:text-slate-200">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {pkg.visaDestinations && (
        <section className="bg-slate-50 py-14 dark:bg-slate-800">
          <div className="container-page">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Visa Destinations We Cover</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {pkg.visaDestinations.map((d) => (
                <span key={d} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:bg-slate-700 dark:text-slate-200">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {pkg.honeymoonHeroSections && (
        <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50 py-16 dark:from-pink-950/20 dark:via-slate-900 dark:to-rose-950/20">
          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <span className="section-eyebrow">Honeymoon Special</span>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {pkg.honeymoonHeroSections.map((s, i) => (
                <div key={i} className="card p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-xl text-pink-600 dark:bg-pink-500/20 dark:text-pink-300">
                    {i === 0 ? "💕" : i === 1 ? "✨" : "🌟"}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{s.heading}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {pkg.honeymoonPackages && (
        <section className="py-16">
          <div className="container-page">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <span className="section-eyebrow">Packages</span>
              <h2 className="section-title mt-2">Choose Your Honeymoon Plan</h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              {pkg.honeymoonPackages.map((p, i) => (
                <div key={i} className="card overflow-hidden">
                  <div className="relative h-48">
                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{p.title}</h3>
                    <div className="mt-3 space-y-1">
                      <p className="text-sm font-medium text-brand-600">{p.duration}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{p.includes}</p>
                    </div>
                    <p className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white">{p.price}</p>
                    <Link href="/contact" className="btn-primary mt-5 inline-block w-full">
                      Book Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {pkg.honeymoonReasons && (
        <section className="bg-gradient-to-br from-rose-50 via-white to-pink-50 py-14 dark:from-rose-950/20 dark:via-slate-900 dark:to-pink-950/20">
          <div className="container-page">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <span className="section-eyebrow">Why Us</span>
              <h2 className="section-title mt-2">Why Choose Honeymoon Packages</h2>
            </div>
            <div className="mx-auto grid max-w-3xl gap-4">
              {pkg.honeymoonReasons.map((r, i) => (
                <div key={i} className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm dark:bg-slate-800">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-100 text-sm font-bold text-pink-600 dark:bg-pink-500/20 dark:text-pink-300">
                    {i + 1}
                  </span>
                  <p className="text-slate-700 dark:text-slate-300">{r}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {pkg.popularDestinations && (
        <section className="bg-slate-50 py-14 dark:bg-slate-800">
          <div className="container-page grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Popular Honeymoon Destinations</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {pkg.popularDestinations.honeymoon.map((d) => (
                  <span key={d} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:bg-slate-700 dark:text-slate-200">
                    {d}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Popular Group Tour Destinations</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {pkg.popularDestinations.group.map((d) => (
                  <span key={d} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:bg-slate-700 dark:text-slate-200">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {pkg.corporateTypes && (
        <section className="bg-slate-50 py-14 dark:bg-slate-800">
          <div className="container-page">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Occasions We Cover</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {pkg.corporateTypes.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm dark:bg-slate-700">
                  <span className="mt-0.5 shrink-0 text-accent-500">✓</span>
                  <span className="text-sm text-slate-700 dark:text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative overflow-hidden py-20">
        <Image src={pkg.hero} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-brand-900/85" />
        <div className="container-page relative z-10 text-center text-white">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Let&apos;s Plan Your Trip</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/90">{pkg.cta}</p>
          <Link href="/contact" className="btn-accent mt-7 inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
