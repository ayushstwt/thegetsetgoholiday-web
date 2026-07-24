"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { destinations, services, site, blog, homeImageMap } from "../lib/data";
import DestinationCard from "../components/DestinationCard";
import BlogCard from "../components/BlogCard";
import BookNowForm from "../components/BookNowForm";
import Icon from "../components/Icon";
import { FadeUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const childVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function HomePage() {
  const domestic = destinations.filter((d) => d.region === "domestic");

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-slate-900">
        <motion.video
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/herosection.mp4" type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900/70" />
        <div className="container-page relative z-10 text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="animate-gradient mb-4 inline-block rounded-full bg-gradient-to-r from-brand-500 via-accent-500 to-brand-500 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-lg"
          >
            Your Trusted Travel Partner
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
          >
            Explore the World with Ease &amp; Comfort
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mx-auto mt-5 max-w-2xl text-base text-white/90 sm:text-lg"
          >
            At {site.shortName}, we turn your travel dreams into reality. From
            relaxing holidays to adventure-packed trips, we offer personalised
            travel solutions designed just for you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/destinations" className="btn-primary">
              Explore Destinations
            </Link>
            <Link href="/contact" className="btn-outline">
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Book Now */}
      <section className="relative z-20 -mt-20 sm:-mt-24">
        <div className="container-page">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="card overflow-hidden !p-0 shadow-2xl"
          >
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
          </motion.div>
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-slate-50 py-16 dark:bg-slate-900">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <img
              src="/White-Blue-Exciting-Travel-Photo-Collage.png"
              alt="Incredible India travel"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
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
          </motion.div>
        </div>
      </section>

      {/* International */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <FadeUp className="mb-10 text-center">
            <span className="section-eyebrow">International</span>
            <h2 className="section-title">Expertly Crafted Global Escapes</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
              Complete international travel solutions to destinations across the
              globe — relaxing beach holidays, luxury getaways and cultural
              explorations.
            </p>
          </FadeUp>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["bali", "vietnam", "bangkok-pattaya", "dubai", "abu-dhabi", "bhutan"].map((slug) => {
              const d = destinations.find((dest) => dest.slug === slug);
              if (!d) return null;
              const homeImage = homeImageMap[slug];
              return (
                <StaggerItem key={slug}>
                  <DestinationCard dest={{ ...d, image: homeImage || d.image }} />
                </StaggerItem>
              );
            })}
          </StaggerContainer>
          <FadeUp className="mt-10 text-center" delay={0.2}>
            <Link href="/destinations?type=international" className="btn-outline !text-brand-700 !border-brand-600 hover:!bg-brand-50 dark:!border-white/70 dark:!text-white dark:hover:!bg-white/10">
              View All International
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Domestic */}
      <section className="bg-slate-50 py-16 lg:py-20 dark:bg-slate-800">
        <div className="container-page">
          <FadeUp className="mb-10 text-center">
            <span className="section-eyebrow">Domestic</span>
            <h2 className="section-title">Explore Incredible India</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
              Discover the beauty and diversity of India with well-planned
              domestic packages — from scenic hill stations to spiritual retreats.
            </p>
          </FadeUp>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["kashmir", "goa", "manali", "sikkim", "rajasthan", "kerala"].map((slug) => {
              const d = destinations.find((dest) => dest.slug === slug);
              if (!d) return null;
              const homeImage = homeImageMap[slug];
              return (
                <StaggerItem key={slug}>
                  <DestinationCard dest={{ ...d, image: homeImage || d.image }} />
                </StaggerItem>
              );
            })}
          </StaggerContainer>
          <FadeUp className="mt-10 text-center" delay={0.2}>
            <Link href="/destinations?type=domestic" className="btn-outline !text-brand-700 !border-brand-600 hover:!bg-brand-50 dark:!border-white/70 dark:!text-white dark:hover:!bg-white/10">
              View All Domestic
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <FadeUp className="mb-10 text-center">
            <span className="section-eyebrow">What We Offer</span>
            <h2 className="section-title">Complete Travel Solutions</h2>
          </FadeUp>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <StaggerItem key={s.title} className="h-full">
                <Link href={`/services/${s.slug}`} className="card group flex h-full flex-col p-6">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="mb-4 inline-flex rounded-xl bg-brand-50 p-3 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-500/15 dark:text-brand-300"
                  >
                    <Icon name={s.icon} />
                  </motion.div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">{s.description}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 8, ease: "linear" }}
          className="absolute inset-0"
        >
          <Image
            src="/uploads/2026/04/thailand.jpg"
            alt="Travel destination"
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="container-page relative z-10 text-center text-white">
          <FadeUp>
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Turn Your Dream Trip Into Reality
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/90">
              Customized journeys with complete support — from flights to
              sightseeing. Travel smart, travel safe, travel stress-free.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-slate-50 py-16 lg:py-20 dark:bg-slate-800">
        <div className="container-page">
          <FadeUp className="mb-10 flex flex-wrap items-end justify-between gap-3">
            <div>
              <span className="section-eyebrow">Travel Blog</span>
              <h2 className="section-title">Tips &amp; Inspiration</h2>
            </div>
            <Link href="/blog" className="text-sm font-semibold text-brand-600 transition-colors duration-300 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300">
              View All Posts →
            </Link>
          </FadeUp>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blog.slice(0, 3).map((post) => (
              <StaggerItem key={post.slug} className="h-full">
                <BlogCard post={post} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
