import Link from "next/link";
import Image from "next/image";
import { destinations, services, site, blog } from "../lib/data";
import DestinationCard from "../components/DestinationCard";
import BlogCard from "../components/BlogCard";
import BookNowForm from "../components/BookNowForm";
import Icon from "../components/Icon";

export default function HomePage() {
  const international = destinations.filter((d) => d.region === "international" && d.slug !== "paris");
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
          <source src="/herosection.mp4" type="video/mp4" />
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

      {/* Book Now */}
      <section className="relative z-20 -mt-20 sm:-mt-24">
        <div className="container-page">
          <div className="card overflow-hidden !p-0 shadow-2xl">
            <div className="grid gap-0 md:grid-cols-[1fr_2.4fr]">
              <div className="flex flex-col justify-center gap-1.5 bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-5 text-white">
                <span className="animate-gradient inline-block w-fit rounded-full bg-gradient-to-r from-accent-500 via-brand-400 to-accent-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider shadow">
                  Quick Enquiry
                </span>
                <h2 className="text-xl font-extrabold leading-tight">
                  Book Your Trip
                </h2>
                <p className="text-sm text-brand-100">
                  Share a few details and our team will craft the perfect plan for you.
                </p>
              </div>
              <div className="p-5 sm:p-6">
                <BookNowForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-slate-50 py-16 dark:bg-slate-900">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div className="relative reveal">
            <img
              src="/White-Blue-Exciting-Travel-Photo-Collage.png"
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
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0">
          <img
            src="/images/home/switerland.jpg"
            alt="International destinations"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-white/85 dark:bg-slate-900/85" />
        </div>
        <div className="container-page relative z-10 reveal">
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
            {international.slice(0, 9).map((d) => {
              const homeImage = {
                "abu-dhabi": "/images/home/abudabihome.jpg",
                "bali": "https://images.unsplash.com/photo-1671034456366-77aff6bd3316?auto=format&fit=crop&w=800&q=80",
                "bangkok-pattaya": "/images/home/bankok.jpg",
                "bhutan": "/images/home/bhutan.jpg",
                "canada": "/images/home/canada.jpg",
                "dubai": "/images/home/dubai.jpg",
                "kazakhstan": "/images/home/kazakistan.jpg",
                "laos": "https://images.unsplash.com/photo-1693039880389-62840065382c?auto=format&fit=crop&w=800&q=80",
                "london": "/images/home/london.jpg",
                "malaysia": "https://images.unsplash.com/photo-1566914447826-bf04e54bf1be?auto=format&fit=crop&w=800&q=80",
                "maldives": "https://images.unsplash.com/photo-1777199663418-3dd126c9fd40?auto=format&fit=crop&w=800&q=80",
                "mauritius": "https://images.unsplash.com/photo-1686740339586-391c79cba290?auto=format&fit=crop&w=800&q=80",
                "paris": "https://images.unsplash.com/photo-1760281854309-3c5ea36d5d83?auto=format&fit=crop&w=800&q=80",
                "philippines": "https://images.unsplash.com/photo-1750184698059-1f664fd21a48?auto=format&fit=crop&w=800&q=80",
                "phuket-krabi": "https://images.unsplash.com/photo-1754295560175-86037557a4fd?auto=format&fit=crop&w=800&q=80",
                "sri-lanka": "https://images.unsplash.com/photo-1751247026229-518bfec9b5e6?auto=format&fit=crop&w=800&q=80",
                "switzerland": "/images/home/switerland.jpg",
                "vietnam": "/images/home/vietnam.jpg",
              }[d.slug];
              return (
                <DestinationCard key={d.slug} dest={{ ...d, image: homeImage || d.image }} />
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link href="/destinations?type=international" className="btn-outline !text-brand-700 !border-brand-600 hover:!bg-brand-50 dark:!border-white/70 dark:!text-white dark:hover:!bg-white/10">
              View All International
            </Link>
          </div>
        </div>
      </section>

      {/* Domestic */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0">
          <img
            src="/images/domestic/kashmir/1.jpg"
            alt="Indian destinations"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-50/85 dark:bg-slate-800/85" />
        </div>
        <div className="container-page relative z-10 reveal">
          <div className="mb-10 text-center">
            <span className="section-eyebrow">Domestic</span>
            <h2 className="section-title">Explore Incredible India</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
              Discover the beauty and diversity of India with well-planned
              domestic packages — from scenic hill stations to spiritual retreats.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {domestic.slice(0, 8).map((d) => {
              const homeImage = {
                "andhra-pradesh": "https://images.unsplash.com/photo-1741003415192-ea5c163aadd4?auto=format&fit=crop&w=800&q=80",
                "darjeeling": "/images/domestic/darjeeling/1.jpg",
                "dehradun": "/images/domestic/dehradun/1.jpg",
                "goa": "/images/domestic/goa/1.jpg",
                "haridwar": "/images/domestic/haridwar/1.jpg",
                "kashmir": "/images/domestic/kashmir/1.jpg",
                "kerala": "https://images.unsplash.com/photo-1772729134950-7db4b3a7be4e?auto=format&fit=crop&w=800&q=80",
                "manali": "/images/domestic/manali/1.jpg",
                "nainital": "/images/domestic/nainital/1.jpg",
                "rajasthan": "https://images.unsplash.com/photo-1705861144929-91df892af5d6?auto=format&fit=crop&w=800&q=80",
                "rishikesh": "/images/domestic/rishikesh/1.jpg",
                "shimla": "/images/domestic/shimla/1.jpg",
                "sikkim": "/images/domestic/sikkim/1.jpg",
                "varanasi": "/images/domestic/varanasi/1.jpg",
              }[d.slug];
              return (
                <DestinationCard key={d.slug} dest={{ ...d, image: homeImage || d.image }} />
              );
            })}
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
