import Link from "next/link";
import Image from "next/image";
import ImageGallery from "./ImageGallery";

const destinationPackages = {
  "abu-dhabi": [
    {
      slug: "abu-dhabi-luxury",
      image: "/abu-dhabi/1.jpg",
      title: "Abu Dhabi Luxury Escape",
      duration: "4 Nights / 5 Days",
      tags: ["Grand Mosque", "Ferrari World"],
      price: "₹60,000",
      badge: "Popular",
      icon: "🏛️",
    },
    {
      slug: "abu-dhabi-desert",
      image: "/abu-dhabi/7.jpg",
      title: "Abu Dhabi Desert & Culture",
      duration: "5 Nights / 6 Days",
      tags: ["Desert Safari", "Louvre Abu Dhabi"],
      price: "₹72,000",
      badge: "Best Value",
      icon: "🏜️",
    },
  ],
  bali: [
    {
      slug: "bali-bliss",
      image: "/bali/1.jpg",
      title: "Bali Bliss",
      duration: "5 Nights / 6 Days",
      tags: ["Temple Tours", "Beach Relaxation"],
      price: "₹45,000",
      badge: "Popular",
      icon: "🏝️",
    },
    {
      slug: "bali-adventure",
      image: "/bali/8.jpg",
      title: "Ubud & Nusa Penida Explorer",
      duration: "6 Nights / 7 Days",
      tags: ["Ubud Tour", "Nusa Penida Cruise"],
      price: "₹55,000",
      badge: "Best Value",
      icon: "🌴",
    },
  ],
  "bangkok-pattaya": [
    {
      slug: "bangkok-pattaya-highlights",
      image: "/bangkok-pattya/1.jpg",
      title: "Bangkok & Pattaya Highlights",
      duration: "5 Nights / 6 Days",
      tags: ["Grand Palace", "Pattaya Beach"],
      price: "₹35,000",
      badge: "Popular",
      icon: "🛕",
    },
    {
      slug: "bangkok-pattaya-combo",
      image: "/bangkok-pattya/7.jpg",
      title: "Bangkok & Pattaya Combo",
      duration: "6 Nights / 7 Days",
      tags: ["Floating Market", "Coral Island"],
      price: "₹42,000",
      badge: "Best Value",
      icon: "🏖️",
    },
  ],
  bhutan: [
    {
      slug: "bhutan-cultural",
      image: "/bhutan/1.jpg",
      title: "Bhutan Cultural Tour",
      duration: "5 Nights / 6 Days",
      tags: ["Tiger's Nest", "Punakha Dzong"],
      price: "₹55,000",
      badge: "Popular",
      icon: "🏔️",
    },
    {
      slug: "bhutan-himalayan",
      image: "/bhutan/7.jpg",
      title: "Bhutan Himalayan Retreat",
      duration: "7 Nights / 8 Days",
      tags: ["Thimphu", "Paro Valley", "Festival"],
      price: "₹72,000",
      badge: "Best Value",
      icon: "🧘",
    },
  ],
  canada: [
    {
      slug: "canada-east",
      image: "/canada/1.jpg",
      title: "Eastern Canada Explorer",
      duration: "8 Nights / 9 Days",
      tags: ["Niagara Falls", "Toronto"],
      price: "₹1,50,000",
      badge: "Popular",
      icon: "🍁",
    },
    {
      slug: "canada-west",
      image: "/canada/7.jpg",
      title: "Western Canada & Rockies",
      duration: "10 Nights / 11 Days",
      tags: ["Banff", "Lake Louise", "Vancouver"],
      price: "₹1,80,000",
      badge: "Best Value",
      icon: "⛰️",
    },
  ],
  dubai: [
    {
      slug: "dubai-luxury",
      image: "/dubai/1.jpg",
      title: "Dubai Luxury Escape",
      duration: "4 Nights / 5 Days",
      tags: ["Burj Khalifa", "Desert Safari"],
      price: "₹55,000",
      badge: "Popular",
      icon: "🌆",
    },
    {
      slug: "dubai-family",
      image: "/dubai/8.jpg",
      title: "Dubai Family Adventure",
      duration: "5 Nights / 6 Days",
      tags: ["Theme Parks", "Marina Cruise"],
      price: "₹65,000",
      badge: "Family Pick",
      icon: "🎡",
    },
  ],
  kazakhstan: [
    {
      slug: "kazakhstan-discovery",
      image: "/kazakhstan/1.jpg",
      title: "Kazakhstan Discovery",
      duration: "6 Nights / 7 Days",
      tags: ["Astana", "Almaty"],
      price: "₹65,000",
      badge: "Popular",
      icon: "🌏",
    },
    {
      slug: "kazakhstan-nature",
      image: "/kazakhstan/7.jpg",
      title: "Kazakhstan Nature & Canyon",
      duration: "7 Nights / 8 Days",
      tags: ["Charyn Canyon", "Kolsai Lakes"],
      price: "₹78,000",
      badge: "Best Value",
      icon: "🏞️",
    },
  ],
  laos: [
    {
      slug: "laos-cultural",
      image: "/laos/1.jpg",
      title: "Laos Cultural Escape",
      duration: "5 Nights / 6 Days",
      tags: ["Luang Prabang", "Kuang Si"],
      price: "₹50,000",
      badge: "Popular",
      icon: "🛕",
    },
    {
      slug: "laos-mekong",
      image: "/laos/7.jpg",
      title: "Laos Mekong Explorer",
      duration: "6 Nights / 7 Days",
      tags: ["Mekong Cruise", "Vientiane"],
      price: "₹58,000",
      badge: "Best Value",
      icon: "🛶",
    },
  ],
  london: [
    {
      slug: "london-classic",
      image: "/london/1.jpg",
      title: "London Classic Tour",
      duration: "6 Nights / 7 Days",
      tags: ["Buckingham Palace", "London Eye"],
      price: "₹1,20,000",
      badge: "Popular",
      icon: "🎡",
    },
    {
      slug: "london-complete",
      image: "/london/7.jpg",
      title: "Complete London Experience",
      duration: "7 Nights / 8 Days",
      tags: ["West End", "British Museum", "Windsor"],
      price: "₹1,40,000",
      badge: "Best Value",
      icon: "🏛️",
    },
  ],
  malaysia: [
    {
      slug: "malaysia-highlights",
      image: "/malaysia/1.jpg",
      title: "Malaysia Highlights",
      duration: "5 Nights / 6 Days",
      tags: ["KL", "Langkawi"],
      price: "₹40,000",
      badge: "Popular",
      icon: "🏙️",
    },
    {
      slug: "malaysia-borneo",
      image: "/malaysia/7.jpg",
      title: "Malaysia & Borneo Adventure",
      duration: "7 Nights / 8 Days",
      tags: ["Borneo", "Cameron Highlands"],
      price: "₹55,000",
      badge: "Best Value",
      icon: "🌴",
    },
  ],
  maldives: [
    {
      slug: "maldives-honeymoon",
      image: "/maldives/1.jpg",
      title: "Maldives Honeymoon Special",
      duration: "4 Nights / 5 Days",
      tags: ["Overwater Villa", "Candlelight Dinner"],
      price: "₹75,000",
      badge: "Popular",
      icon: "💙",
    },
    {
      slug: "maldives-island",
      image: "/maldives/8.jpg",
      title: "Maldives Island Escape",
      duration: "5 Nights / 6 Days",
      tags: ["Snorkelling", "Sandbank Picnic"],
      price: "₹85,000",
      badge: "Best Value",
      icon: "🐠",
    },
  ],
  mauritius: [
    {
      slug: "mauritius-beach",
      image: "/mauritius/1.jpg",
      title: "Mauritius Beach Holiday",
      duration: "5 Nights / 6 Days",
      tags: ["Île aux Cerfs", "Beach Relaxation"],
      price: "₹80,000",
      badge: "Popular",
      icon: "🏖️",
    },
    {
      slug: "mauritius-adventure",
      image: "/mauritius/7.jpg",
      title: "Mauritius Nature & Culture",
      duration: "6 Nights / 7 Days",
      tags: ["Chamarel", "Black River Gorges"],
      price: "₹92,000",
      badge: "Best Value",
      icon: "🌋",
    },
  ],
  paris: [
    {
      slug: "paris-romantic",
      image: "/paris/1.jpg",
      title: "Paris Romantic Escape",
      duration: "6 Nights / 7 Days",
      tags: ["Eiffel Tower", "Seine Cruise"],
      price: "₹95,000",
      badge: "Popular",
      icon: "🗼",
    },
    {
      slug: "paris-versailles",
      image: "/paris/7.jpg",
      title: "Paris & Versailles Explorer",
      duration: "7 Nights / 8 Days",
      tags: ["Versailles Tour", "Louvre Museum"],
      price: "₹1,10,000",
      badge: "Best Value",
      icon: "🎨",
    },
  ],
  philippines: [
    {
      slug: "philippines-beach",
      image: "/philippines/1.jpg",
      title: "Philippines Beach Paradise",
      duration: "6 Nights / 7 Days",
      tags: ["Palawan", "Boracay"],
      price: "₹55,000",
      badge: "Popular",
      icon: "🏝️",
    },
    {
      slug: "philippines-adventure",
      image: "/philippines/7.jpg",
      title: "Philippines Island Explorer",
      duration: "7 Nights / 8 Days",
      tags: ["Cebu", "Bohol", "Manila"],
      price: "₹68,000",
      badge: "Best Value",
      icon: "🐋",
    },
  ],
  "phuket-krabi": [
    {
      slug: "phuket-krabi-highlights",
      image: "/phuket-krabi/1.jpg",
      title: "Phuket & Krabi Highlights",
      duration: "6 Nights / 7 Days",
      tags: ["Phi Phi", "Railay Beach"],
      price: "₹42,000",
      badge: "Popular",
      icon: "🏖️",
    },
    {
      slug: "phuket-krabi-island",
      image: "/phuket-krabi/8.jpg",
      title: "Phuket & Krabi Island Hopping",
      duration: "7 Nights / 8 Days",
      tags: ["James Bond Island", "Snorkelling"],
      price: "₹52,000",
      badge: "Best Value",
      icon: "🏄",
    },
  ],
  "sri-lanka": [
    {
      slug: "sri-lanka-highlights",
      image: "/srilanka/1.jpg",
      title: "Sri Lanka Highlights",
      duration: "6 Nights / 7 Days",
      tags: ["Sigiriya", "Kandy", "Bentota"],
      price: "₹38,000",
      badge: "Popular",
      icon: "🛕",
    },
    {
      slug: "sri-lanka-nature",
      image: "/srilanka/7.jpg",
      title: "Sri Lanka Nature & Safari",
      duration: "7 Nights / 8 Days",
      tags: ["Yala Safari", "Nuwara Eliya"],
      price: "₹48,000",
      badge: "Best Value",
      icon: "🐘",
    },
  ],
  switzerland: [
    {
      slug: "swiss-alps",
      image: "/switzerland/1.jpg",
      title: "Swiss Alps Adventure",
      duration: "7 Nights / 8 Days",
      tags: ["Interlaken", "Jungfraujoch"],
      price: "₹1,20,000",
      badge: "Popular",
      icon: "⛰️",
    },
    {
      slug: "switzerland-highlights",
      image: "/switzerland/8.jpg",
      title: "Switzerland Highlights Tour",
      duration: "8 Nights / 9 Days",
      tags: ["Lucerne", "Glacier Express"],
      price: "₹1,35,000",
      badge: "Best Value",
      icon: "🚂",
    },
  ],
  vietnam: [
    {
      slug: "vietnam-highlights",
      image: "/vietnam/1.jpg",
      title: "Vietnam Highlights",
      duration: "6 Nights / 7 Days",
      tags: ["Halong Bay", "Hanoi Tour"],
      price: "₹65,000",
      badge: "Popular",
      icon: "🇻🇳",
    },
    {
      slug: "vietnam-complete",
      image: "/vietnam/7.jpg",
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
      image: "/uploads/2026/04/goa.jpg",
      title: "Goa Beach Holiday",
      duration: "3 Nights / 4 Days",
      tags: ["Beach Hopping", "Water Sports"],
      price: "₹10,500",
      badge: "Popular",
      icon: "☀️",
    },
    {
      slug: "goa-heritage",
      image: "/goa/1.jpg",
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
      image: "/uploads/2026/04/kashmir.jpg",
      title: "Kashmir Paradise Tour",
      duration: "5 Nights / 6 Days",
      tags: ["Dal Lake", "Gulmarg Gondola"],
      price: "₹18,000",
      badge: "Popular",
      icon: "🪷",
    },
    {
      slug: "kashmir-snow",
      image: "/kashmir/1.jpg",
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
      image: "/uploads/2026/04/kerala.jpg",
      title: "Kerala Backwater Escape",
      duration: "4 Nights / 5 Days",
      tags: ["Alleppey Cruise", "Kochi Tour"],
      price: "₹16,000",
      badge: "Popular",
      icon: "🛶",
    },
    {
      slug: "kerala-complete",
      image: "https://images.unsplash.com/photo-1564005871064-57f01e0432b2?w=800&q=80",
      title: "Complete Kerala Explorer",
      duration: "7 Nights / 8 Days",
      tags: ["Munnar", "Thekkady", "Alleppey", "Kochi"],
      price: "₹28,000",
      badge: "Best Value",
      icon: "🌴",
    },
  ],
  rishikesh: [
    {
      slug: "rishikesh-adventure",
      image: "/rishikesh/1.jpg",
      title: "Rishikesh Adventure Camp",
      duration: "2 Nights / 3 Days",
      tags: ["River Rafting", "Camping"],
      price: "₹8,000",
      badge: "Popular",
      icon: "🏄",
    },
    {
      slug: "rishikesh-yoga",
      image: "/rishikesh/7.jpg",
      title: "Yoga & Ganga Retreat",
      duration: "3 Nights / 4 Days",
      tags: ["Yoga Retreat", "Ganga Aarti"],
      price: "₹10,500",
      badge: "Best Value",
      icon: "🧘",
    },
  ],
  nainital: [
    {
      slug: "nainital-lake-retreat",
      image: "/nainital/1.jpg",
      title: "Nainital Lake Retreat",
      duration: "2 Nights / 3 Days",
      tags: ["Naini Lake", "Mall Road"],
      price: "₹9,000",
      badge: "Popular",
      icon: "🛶",
    },
    {
      slug: "nainital-hills",
      image: "/nainital/7.jpg",
      title: "Nainital Hills & Views",
      duration: "3 Nights / 4 Days",
      tags: ["Snow View Point", "Tiffin Top", "Cave Garden"],
      price: "₹12,000",
      badge: "Best Value",
      icon: "🏔️",
    },
  ],
  haridwar: [
    {
      slug: "haridwar-spiritual",
      image: "/haridwar/1.jpg",
      title: "Haridwar Spiritual Retreat",
      duration: "2 Nights / 3 Days",
      tags: ["Ganga Aarti", "Temple Tour"],
      price: "₹6,500",
      badge: "Popular",
      icon: "🪷",
    },
    {
      slug: "haridwar-rishikesh",
      image: "/haridwar/7.jpg",
      title: "Haridwar & Rishikesh Combo",
      duration: "4 Nights / 5 Days",
      tags: ["Har Ki Pauri", "Rafting", "Yoga"],
      price: "₹12,000",
      badge: "Best Value",
      icon: "🌊",
    },
  ],
  dehradun: [
    {
      slug: "dehradun-explorer",
      image: "/dehradun/1.jpg",
      title: "Dehradun City Explorer",
      duration: "2 Nights / 3 Days",
      tags: ["Robber's Cave", "FRI", "Sahastradhara"],
      price: "₹7,500",
      badge: "Popular",
      icon: "🏞️",
    },
    {
      slug: "dehradun-mussoorie",
      image: "/dehradun/7.jpg",
      title: "Dehradun & Mussoorie Getaway",
      duration: "4 Nights / 5 Days",
      tags: ["Mussoorie", "Kempty Falls", "Cable Car"],
      price: "₹13,000",
      badge: "Best Value",
      icon: "🏔️",
    },
  ],
  darjeeling: [
    {
      slug: "darjeeling-heritage",
      image: "/darjeeling/1.jpg",
      title: "Darjeeling Heritage Retreat",
      duration: "3 Nights / 4 Days",
      tags: ["Toy Train Ride", "Tea Garden Tour"],
      price: "₹12,000",
      badge: "Popular",
      icon: "🚂",
    },
    {
      slug: "darjeeling-himalayan",
      image: "/darjeeling/7.jpg",
      title: "Darjeeling Himalayan Experience",
      duration: "4 Nights / 5 Days",
      tags: ["Tiger Hill", "Monastery Tour", "Tea Tasting"],
      price: "₹16,000",
      badge: "Best Value",
      icon: "🏔️",
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
