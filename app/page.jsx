import Link from "next/link";
import Image from "next/image";
import { destinations, services, site, blog } from "../lib/data";
import DestinationCard from "../components/DestinationCard";
import BlogCard from "../components/BlogCard";
import Icon from "../components/Icon";

export default function HomePage() {
  const international = destinations.filter((d) => d.region === "international");
  const domestic = destinations.filter((d) => d.region === "domestic");

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-slate-900">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/home.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900/70" />
        <div className="container-page relative z-10 animate-fade-up text-center text-white">
            <span className="animate-gradient mb-4 inline-block rounded-full bg-gradient-to-r from-brand-500 via-accent-500 to-brand-500 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-lg">
              Your Trusted Travel Partner
            </span>
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Explore the World with Ease &amp; Comfort
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/90 sm:text-lg">
            At {site.shortName}, we turn your travel dreams into reality. From
            relaxing holidays to adventure-packed trips, we offer personalised
            travel solutions designed just for you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/destinations" className="btn-primary">
              Explore Destinations
            </Link>
            <Link href="/contact" className="btn-outline">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-700 text-white">
        <div className="container-page grid grid-cols-2 gap-6 py-10 reveal sm:grid-cols-4">
          {[
            ["5+", "Years of Experience"],
            ["1000+", "Tours Completed"],
            ["74k", "Visa Assistance"],
            ["10k+", "Hotel Bookings"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-3xl font-extrabold sm:text-4xl">{n}</div>
              <div className="mt-1 text-sm text-brand-100">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-slate-50 py-16 dark:bg-slate-900">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div className="relative reveal">
            <img
              src="/uploads/2026/04/rajasthan.jpg"
              alt="Incredible India travel"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-5 -right-5 h-28 w-28 rounded-2xl border-4 border-slate-50 bg-brand-600 shadow-lg animate-float dark:border-slate-900" />
          </div>
          <div className="reveal">
            <span className="section-eyebrow">About Us</span>
            <h2 className="section-title">Your Journey, Our Responsibility</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              We believe travel is more than just visiting places — it&apos;s
              about creating unforgettable memories. We offer complete travel
              solutions including customized tour packages, hotel bookings, taxi
              services, airport transfers and full trip planning.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Customized tour packages",
                "Seamless hotel bookings",
                "Reliable taxi services",
                "Punctual airport transfers",
              ].map((i) => (
                <li key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                  <span className="text-accent-500">✓</span> {i}
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-primary mt-8">
              Know More
            </Link>
          </div>
        </div>
      </section>

      {/* International */}
      <section className="py-16">
        <div className="container-page reveal">
          <div className="mb-10 text-center">
            <span className="section-eyebrow">International</span>
            <h2 className="section-title">Expertly Crafted Global Escapes</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
              Complete international travel solutions to destinations across the
              globe — relaxing beach holidays, luxury getaways and cultural
              explorations.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {international.slice(0, 6).map((d) => (
              <DestinationCard key={d.slug} dest={d} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/destinations?type=international" className="btn-outline !text-brand-700 !border-brand-600 hover:!bg-brand-50 dark:!border-white/70 dark:!text-white dark:hover:!bg-white/10">
              View All International
            </Link>
          </div>
        </div>
      </section>

      {/* Domestic */}
      <section className="bg-slate-50 py-16 dark:bg-slate-800">
        <div className="container-page reveal">
          <div className="mb-10 text-center">
            <span className="section-eyebrow">Domestic</span>
            <h2 className="section-title">Explore Incredible India</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
              Discover the beauty and diversity of India with well-planned
              domestic packages — from scenic hill stations to spiritual retreats.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {domestic.slice(0, 8).map((d) => (
              <DestinationCard key={d.slug} dest={d} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/destinations?type=domestic" className="btn-outline !text-brand-700 !border-brand-600 hover:!bg-brand-50 dark:!border-white/70 dark:!text-white dark:hover:!bg-white/10">
              View All Domestic
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container-page reveal">
          <div className="mb-10 text-center">
            <span className="section-eyebrow">What We Offer</span>
            <h2 className="section-title">Complete Travel Solutions</h2>
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

      {/* CTA */}
      <section className="relative overflow-hidden py-20">
        <Image
          src="/uploads/2026/04/thailand.jpg"
          alt="Travel destination"
          fill
          className="object-cover animate-hero-zoom"
        />
        <div className="absolute inset-0 bg-brand-900/80" />
        <div className="container-page relative z-10 animate-fade-up text-center text-white">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Turn Your Dream Trip Into Reality
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            Customized journeys with complete support — from flights to
            sightseeing. Travel smart, travel safe, travel stress-free.
          </p>
          <Link href="/contact" className="btn-accent mt-7">
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-slate-50 py-16 dark:bg-slate-800">
        <div className="container-page reveal">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-3">
            <div>
              <span className="section-eyebrow">Travel Blog</span>
              <h2 className="section-title">Tips &amp; Inspiration</h2>
            </div>
            <Link href="/blog" className="text-sm font-semibold text-brand-600 dark:text-brand-400">
              View All Posts →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blog.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
