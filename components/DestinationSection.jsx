import Link from "next/link";
import Image from "next/image";
import ImageGallery from "./ImageGallery";

const destinationPackages = {
  bali: [
    {
      slug: "bali-bliss",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
      title: "Bali Bliss",
      duration: "5 Nights / 6 Days",
      tags: ["Temple Tours", "Beach Relaxation"],
      price: "₹45,000",
      badge: "Popular",
      icon: "🏝️",
    },
    {
      slug: "bali-adventure",
      image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80",
      title: "Ubud & Nusa Penida Explorer",
      duration: "6 Nights / 7 Days",
      tags: ["Ubud Tour", "Nusa Penida Cruise"],
      price: "₹55,000",
      badge: "Best Value",
      icon: "🌴",
    },
  ],
  thailand: [
    {
      slug: "thailand-highlights",
      image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&q=80",
      title: "Thailand Highlights",
      duration: "5 Nights / 6 Days",
      tags: ["Bangkok Tour", "Phuket Beaches"],
      price: "₹38,000",
      badge: "Popular",
      icon: "🛕",
    },
    {
      slug: "phuket-phi-phi",
      image: "https://images.unsplash.com/photo-1582562128780-badbb2900b0b?w=800&q=80",
      title: "Phuket & Phi Phi Island Hopping",
      duration: "6 Nights / 7 Days",
      tags: ["Phi Phi Tour", "Snorkelling"],
      price: "₹48,000",
      badge: "Best Value",
      icon: "🏖️",
    },
  ],
  dubai: [
    {
      slug: "dubai-luxury",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
      title: "Dubai Luxury Escape",
      duration: "4 Nights / 5 Days",
      tags: ["Burj Khalifa", "Desert Safari"],
      price: "₹55,000",
      badge: "Popular",
      icon: "🌆",
    },
    {
      slug: "dubai-family",
      image: "https://images.unsplash.com/photo-1451337519522-5f6c7113c0b2?w=800&q=80",
      title: "Dubai Family Adventure",
      duration: "5 Nights / 6 Days",
      tags: ["Theme Parks", "Marina Cruise"],
      price: "₹65,000",
      badge: "Family Pick",
      icon: "🎡",
    },
  ],
  paris: [
    {
      slug: "paris-romantic",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
      title: "Paris Romantic Escape",
      duration: "6 Nights / 7 Days",
      tags: ["Eiffel Tower", "Seine Cruise"],
      price: "₹95,000",
      badge: "Popular",
      icon: "🗼",
    },
    {
      slug: "paris-versailles",
      image: "https://images.unsplash.com/photo-1509439589835-b51046a2b12c?w=800&q=80",
      title: "Paris & Versailles Explorer",
      duration: "7 Nights / 8 Days",
      tags: ["Versailles Tour", "Louvre Museum"],
      price: "₹1,10,000",
      badge: "Best Value",
      icon: "🎨",
    },
  ],
  switzerland: [
    {
      slug: "swiss-alps",
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80",
      title: "Swiss Alps Adventure",
      duration: "7 Nights / 8 Days",
      tags: ["Interlaken", "Jungfraujoch"],
      price: "₹1,20,000",
      badge: "Popular",
      icon: "⛰️",
    },
    {
      slug: "switzerland-highlights",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      title: "Switzerland Highlights Tour",
      duration: "8 Nights / 9 Days",
      tags: ["Lucerne", "Glacier Express"],
      price: "₹1,35,000",
      badge: "Best Value",
      icon: "🚂",
    },
  ],
  maldives: [
    {
      slug: "maldives-honeymoon",
      image: "https://images.unsplash.com/photo-1573843981267-be1999169432?w=800&q=80",
      title: "Maldives Honeymoon Special",
      duration: "4 Nights / 5 Days",
      tags: ["Overwater Villa", "Candlelight Dinner"],
      price: "₹75,000",
      badge: "Popular",
      icon: "💙",
    },
    {
      slug: "maldives-island",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
      title: "Maldives Island Escape",
      duration: "5 Nights / 6 Days",
      tags: ["Snorkelling", "Sandbank Picnic"],
      price: "₹85,000",
      badge: "Best Value",
      icon: "🐠",
    },
  ],
  vietnam: [
    {
      slug: "vietnam-highlights",
      image: "https://images.unsplash.com/photo-1528121392420-1a11e5a5c4e3?w=800&q=80",
      title: "Vietnam Highlights",
      duration: "6 Nights / 7 Days",
      tags: ["Halong Bay", "Hanoi Tour"],
      price: "₹65,000",
      badge: "Popular",
      icon: "🇻🇳",
    },
    {
      slug: "vietnam-complete",
      image: "https://images.unsplash.com/photo-1559592414-e451adc2a6f4?w=800&q=80",
      title: "Vietnam Complete Journey",
      duration: "8 Nights / 9 Days",
      tags: ["Hoi An", "Ho Chi Minh City"],
      price: "₹78,000",
      badge: "Best Value",
      icon: "🏮",
    },
  ],
  shimla: [
    {
      slug: "shimla-manali",
      image: "https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?w=800&q=80",
      title: "Shimla Manali Family Tour",
      duration: "5 Nights / 6 Days",
      tags: ["Mall Road", "Kufri Adventure"],
      price: "₹18,000",
      badge: "Popular",
      icon: "🏔️",
    },
    {
      slug: "shimla-honeymoon",
      image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=800&q=80",
      title: "Shimla Honeymoon Special",
      duration: "3 Nights / 4 Days",
      tags: ["Toy Train", "Scenic Walks"],
      price: "₹12,000",
      badge: "Best Value",
      icon: "🚂",
    },
  ],
  manali: [
    {
      slug: "manali-adventure",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
      title: "Manali Adventure Package",
      duration: "4 Nights / 5 Days",
      tags: ["Solang Valley", "Rohtang Pass"],
      price: "₹14,500",
      badge: "Popular",
      icon: "🏕️",
    },
    {
      slug: "manali-offbeat",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      title: "Manali & Kasol Offbeat",
      duration: "5 Nights / 6 Days",
      tags: ["Kasol Trek", "Old Manali"],
      price: "₹18,000",
      badge: "Best Value",
      icon: "🌲",
    },
  ],
  goa: [
    {
      slug: "goa-beach",
      image: "https://images.unsplash.com/photo-1585405212253-ec2242311055?w=800&q=80",
      title: "Goa Beach Holiday",
      duration: "3 Nights / 4 Days",
      tags: ["Beach Hopping", "Water Sports"],
      price: "₹10,500",
      badge: "Popular",
      icon: "☀️",
    },
    {
      slug: "goa-heritage",
      image: "https://images.unsplash.com/photo-1597953533246-f53d6dbdd4d7?w=800&q=80",
      title: "Goa Heritage & Cruise",
      duration: "4 Nights / 5 Days",
      tags: ["Old Goa Churches", "Mandovi Cruise"],
      price: "₹13,500",
      badge: "Best Value",
      icon: "⛪",
    },
  ],
  kashmir: [
    {
      slug: "kashmir-paradise",
      image: "https://images.unsplash.com/photo-1597331447461-3834524a455d?w=800&q=80",
      title: "Kashmir Paradise Tour",
      duration: "5 Nights / 6 Days",
      tags: ["Dal Lake", "Gulmarg Gondola"],
      price: "₹18,000",
      badge: "Popular",
      icon: "🪷",
    },
    {
      slug: "kashmir-snow",
      image: "https://images.unsplash.com/photo-1596815061935-758bf55e65c0?w=800&q=80",
      title: "Gulmarg Snow Adventure",
      duration: "4 Nights / 5 Days",
      tags: ["Skiing", "Pahalgam Valley"],
      price: "₹22,000",
      badge: "Best Value",
      icon: "❄️",
    },
  ],
  rajasthan: [
    {
      slug: "rajasthan-heritage",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
      title: "Rajasthan Heritage Tour",
      duration: "6 Nights / 7 Days",
      tags: ["Jaipur", "Udaipur", "Jodhpur"],
      price: "₹22,000",
      badge: "Popular",
      icon: "🏰",
    },
    {
      slug: "rajasthan-desert",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80",
      title: "Desert Camp & Palace",
      duration: "5 Nights / 6 Days",
      tags: ["Jaisalmer Camp", "Camel Safari"],
      price: "₹25,000",
      badge: "Best Value",
      icon: "🏜️",
    },
  ],
  kerala: [
    {
      slug: "kerala-backwaters",
      image: "https://images.unsplash.com/photo-1593693397690-36240ae49ffb?w=800&q=80",
      title: "Kerala Backwater Escape",
      duration: "4 Nights / 5 Days",
      tags: ["Alleppey Cruise", "Kochi Tour"],
      price: "₹16,000",
      badge: "Popular",
      icon: "🛶",
    },
    {
      slug: "kerala-munnar",
      image: "https://images.unsplash.com/photo-1564005871064-57f01e0432b2?w=800&q=80",
      title: "Munnar & Alleppey Tour",
      duration: "5 Nights / 6 Days",
      tags: ["Tea Plantations", "Houseboat Stay"],
      price: "₹20,000",
      badge: "Best Value",
      icon: "🍃",
    },
  ],
  rishikesh: [
    {
      slug: "rishikesh-adventure",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
      title: "Rishikesh Adventure Camp",
      duration: "2 Nights / 3 Days",
      tags: ["River Rafting", "Camping"],
      price: "₹8,000",
      badge: "Popular",
      icon: "🏄",
    },
    {
      slug: "rishikesh-yoga",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
      title: "Yoga & Ganga Retreat",
      duration: "3 Nights / 4 Days",
      tags: ["Yoga Retreat", "Ganga Aarti"],
      price: "₹10,500",
      badge: "Best Value",
      icon: "🧘",
    },
  ],
  sikkim: [
    {
      slug: "sikkim-himalayan",
      image: "https://images.unsplash.com/photo-1528121392420-1a11e5a5c4e3?w=800&q=80",
      title: "Sikkim Himalayan Tour",
      duration: "5 Nights / 6 Days",
      tags: ["Gangtok", "Tsomgo Lake"],
      price: "₹16,000",
      badge: "Popular",
      icon: "🏔️",
    },
    {
      slug: "sikkim-darjeeling",
      image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=800&q=80",
      title: "Sikkim & Darjeeling Explorer",
      duration: "7 Nights / 8 Days",
      tags: ["Darjeeling Toy Train", "Monasteries"],
      price: "₹22,000",
      badge: "Best Value",
      icon: "🌸",
    },
  ],
};

export default function DestinationSection({ dest }) {
  const packages = destinationPackages[dest.slug] || [];

  return (
    <div className="mt-14 reveal">
      <div className="mb-12 text-center">
        <span className="section-eyebrow">{dest.name} · {dest.country}</span>
        <h2 className="section-title">Discover the Magic of {dest.name}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          {dest.tagline}
        </p>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        {packages.map((p) => (
          <div
            key={p.slug}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-800"
          >
            <div className="flex min-h-[240px] flex-col sm:flex-row">
              <div className="relative h-52 w-full sm:h-auto sm:w-72 lg:w-80">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 320px"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-accent-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                  {p.badge}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-center gap-3 p-6 sm:p-8">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {p.icon} {p.title}
                </h3>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  {p.duration}
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-brand-500/15 dark:text-brand-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-700">
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-500">Starting from</p>
                    <p className="text-xl font-extrabold text-slate-900 dark:text-white">
                      {p.price} <span className="text-xs font-medium text-slate-400">/ Person</span>
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-600/20 transition hover:bg-brand-700"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition duration-300 hover:shadow-2xl dark:bg-slate-800">
          <div className="relative h-56 w-full sm:h-60">
            <Image
              src={dest.gallery?.[0] || dest.image}
              alt={`Scenic view of ${dest.name}`}
              fill
              loading="lazy"
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <h3 className="absolute bottom-4 left-6 right-6 text-2xl font-bold leading-tight text-white sm:left-8 sm:text-3xl">
              Why Visit {dest.name}?
            </h3>
          </div>
          <div className="grid gap-3 p-6 sm:grid-cols-2 sm:p-8">
            {dest.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700 dark:bg-brand-500/20 dark:text-brand-300">
                  {i + 1}
                </span>
                <span className="text-sm leading-snug">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-16">
        <div className="mb-8 text-center">
          <span className="section-eyebrow">Gallery</span>
          <h2 className="section-title">Capturing the Beauty of {dest.name}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            A visual journey through the stunning landscapes and experiences that await you.
          </p>
        </div>
        <div className="px-4 sm:px-6 lg:px-8">
          <ImageGallery images={dest.gallery} name={dest.name} />
        </div>
      </section>
    </div>
  );
}
