import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us",
  description:
    "The Get Set Go Holidays — 5 years of crafting smooth, comfortable and affordable travel experiences.",
};

const stats = [
  ["6k+", "Successes Tours"],
  ["5k", "Success Visa"],
  ["8K", "Hotel Bookings"],
  ["150", "Complete Tour Planning"],
];

const progress = [
  ["Success Tours", 95],
  ["Complete Tour Planning", 85],
];

const offerings = [
  "Customized Tour Packages",
  "Hotel Bookings",
  "Taxi & Cab Services",
  "Airport Transfers",
  "Honeymoon & Family Trips",
  "Group Tours",
  "Domestic Packages",
  "International Packages",
  "Visa Assistance",
  "Sightseeing",
  "Road Trip Getaways",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative flex h-[42vh] min-h-[320px] items-end overflow-hidden">
        <Image
          src="/uploads/2026/04/rishikesh.jpg"
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
            <Image src="/aboutus1.png" alt="About The Get Set Go Holidays" width={600} height={600} priority sizes="(max-width: 1024px) 100vw, 50vw" className="w-full rounded-2xl shadow-xl" />
          </div>
          <div>
            <span className="section-eyebrow">5 Years of Experience</span>
            <h2 className="section-title">Your Journey, Our Responsibility</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              We provide complete travel solutions designed to make your journey
              smooth, enjoyable, and completely hassle-free. From customized tour
              packages tailored to your preferences to seamless hotel bookings,
              reliable taxi services, punctual airport transfers, and end-to-end
              trip planning, we take care of every detail so you don&apos;t have
              to. Whether you are planning a relaxing family vacation, a romantic
              honeymoon, an exciting group tour, or a professional business trip,
              our experienced team ensures everything is perfectly organized with
              precision and care. We focus strongly on customer satisfaction by
              offering the best pricing, transparent services, and dependable
              support at every step of your journey. Our goal is not just to plan
              trips, but to create meaningful travel experiences filled with
              comfort, joy, and unforgettable memories that stay with you long
              after the journey ends.
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              We believe that every journey tells a story, and our mission is to
              make yours truly unforgettable. With a deep understanding of
              travelers&apos; needs, we go beyond basic bookings to craft
              personalized experiences that match your interests, budget, and
              expectations. From selecting the perfect destinations to arranging
              comfortable stays and smooth transportation, every element is
              thoughtfully planned. Our team stays connected with you throughout
              the trip, ensuring real-time support and quick solutions whenever
              needed, so you can travel with complete peace of mind.
            </p>
            <Link href="/contact" className="btn-primary mt-7">
              Plan With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-700 text-white">
        <div className="container-page grid grid-cols-2 gap-6 py-10 reveal sm:grid-cols-4">
          {stats.map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-3xl font-extrabold sm:text-4xl">{n}</div>
              <div className="mt-1 text-sm text-brand-100">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Image src="/aboutus2.png" alt="Why choose The Get Set Go Holidays" width={600} height={600} loading="lazy" sizes="(max-width: 1024px) 100vw, 50vw" className="w-full rounded-2xl shadow-xl" />
          </div>
          <div>
            <span className="section-eyebrow">Why Choose Us</span>
            <h2 className="section-title">Reliable, Affordable &amp; Personalized</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              We provide reliable, affordable, and personalized travel solutions
              to make your journey smooth and stress-free. From planning to
              booking, we handle everything so you can enjoy your trip without any
              worries.
            </p>
            <div className="mt-8 space-y-6">
              {progress.map(([label, value]) => (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-200">
                    <span>{label}</span>
                    <span>{value}%</span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <div
                      className="h-full rounded-full bg-brand-600"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <Link href="/testimonials" className="btn-outline mt-8 !text-brand-700 !border-brand-600 hover:!bg-brand-50 dark:!border-white/70 dark:!text-white dark:hover:!bg-white/10">
              View Review
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-slate-800">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Image src="/aboutus3.png" alt="What The Get Set Go Holidays offers" width={600} height={600} loading="lazy" sizes="(max-width: 1024px) 100vw, 50vw" className="w-full rounded-2xl shadow-xl" />
          </div>
          <div>
            <span className="section-eyebrow">What We Offer</span>
            <h2 className="section-title">A Wide Range of Travel Solutions</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              We provide a wide range of travel solutions designed to make every
              journey smooth, comfortable, and memorable. From planning your trip
              to managing every detail, we ensure a hassle-free experience
              tailored to your needs.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {offerings.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                  <span className="text-accent-500">✓</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
