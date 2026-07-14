export const site = {
  name: "The Get Set Go Holidays",
  shortName: "Get Set Go Holidays",
  tagline: "Explore the World with Ease & Comfort",
  description:
    "We turn your travel dreams into reality with personalised tour packages, hotel bookings, taxi services, flights and complete trip planning.",
  phone: "+918796042440",
  whatsapp: "+918796042440",
  email: "info@thegetsetgoholidays.com",
  email2: "thegetsetgoholidays@gmail.com",
  address:
    "1138, 11th Floor, Gaur City Mall, Greater Noida West, Uttar Pradesh 201318",
  hours: "Monday to Sunday 10am — 8:30pm",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61579521610645",
    instagram: "https://www.instagram.com/thegetsetgo.holidays/",
    linkedin: "https://www.linkedin.com/in/the-get-set-go-holidays-428a413b8/",
    x: "https://x.com/thegetsetgo",
    youtube: "https://www.youtube.com/@getsetgoholidays",
    whatsapp: "https://wa.me/918796042440",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Destinations",
    href: "/destinations",
    children: [
      { label: "International", href: "/destinations?type=international" },
      { label: "Domestic", href: "/destinations?type=domestic" },
    ],
  },
  { label: "Packages", href: "/packages" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    title: "Customized Tour Packages",
    icon: "map",
    description:
      "Tailor-made domestic and international holiday packages crafted around your budget, interests and travel dates.",
  },
  {
    title: "Hotel Booking",
    icon: "bed",
    description:
      "Hand-picked stays from budget hotels to luxury resorts, secured at the best available rates.",
  },
  {
    title: "Taxi & Cab Services",
    icon: "car",
    description:
      "Reliable, sanitized cabs with professional drivers for sightseeing, transfers and outstation trips.",
  },
  {
    title: "Flight Booking",
    icon: "ticket",
    description:
      "Competitive air fares across domestic and international routes with complete ticketing support.",
  },
  {
    title: "Complete Tour Planning",
    icon: "clipboard",
    description:
      "End-to-end itinerary design, bookings and on-trip assistance for a completely hassle-free experience.",
  },
  {
    title: "Passport / Visa Services",
    icon: "passport",
    description:
      "Step-by-step guidance and documentation support for passports and tourist visas worldwide.",
  },
  {
    title: "Honeymoon & Group Tours",
    icon: "heart",
    description:
      "Romantic honeymoon escapes and well-organised group, rider and corporate travel experiences.",
  },
  {
    title: "Corporate Tours",
    icon: "briefcase",
    description:
      "Professional corporate travel, MICE and team outings with seamless logistics, stays and conference arrangements.",
  },
];

export const destinations = [
  // ---------------- International ----------------
  {
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    region: "international",
    tagline: "Discover Bali's beautiful beaches, peaceful temples & unforgettable experiences.",
    image: "/uploads/2026/04/bali.jpg",
    bestTime: "April to October",
    duration: "5 Nights / 6 Days",
    price: "From ₹45,000 per person",
    summary:
      "Bali blends golden beaches, lush rice terraces and a deeply spiritual culture. From the cliffs of Uluwatu to the art villages of Ubud, every corner feels like a postcard.",
    highlights: [
      "Uluwatu Temple & Kecak Fire Dance at sunset",
      "Ubud rice terraces and sacred monkey forest",
      "Seminyak beach clubs and Canggu surf spots",
      "Nusa Penida island day cruise",
      "Balinese spa and authentic local cuisine",
    ],
    gallery: [
      "/uploads/2026/04/bali.jpg",
      "/uploads/2026/04/bali.jpg",
      "/uploads/2026/04/thailand.jpg",
    ],
  },
  {
    slug: "thailand",
    name: "Thailand",
    country: "Thailand",
    region: "international",
    tagline: "Beautiful beaches, exciting nightlife, and rich culture.",
    image: "/uploads/2026/04/thailand.jpg",
    bestTime: "November to April",
    duration: "5 Nights / 6 Days",
    price: "From ₹38,000 per person",
    summary:
      "Thailand is the perfect mix of buzzing city life, island hopping and golden beaches. Bangkok's markets, Phuket's shores and Phi Phi's turquoise water make it a traveller favourite.",
    highlights: [
      "Bangkok temples, markets and rooftop nightlife",
      "Phuket beaches and Patong entertainment",
      "Phi Phi & James Bond island tours",
      "Thai street food trails",
      "Coral island snorkelling",
    ],
    gallery: [
      "/uploads/2026/04/thailand.jpg",
      "/uploads/2026/04/thailand.jpg",
      "/uploads/2026/04/maldives.jpg",
    ],
  },
  {
    slug: "dubai",
    name: "Dubai",
    country: "UAE",
    region: "international",
    tagline: "Experience luxury, adventure, and world-class attractions.",
    image: "/uploads/2026/04/dubai.jpg",
    bestTime: "November to March",
    duration: "4 Nights / 5 Days",
    price: "From ₹55,000 per person",
    summary:
      "Dubai is a city of superlatives — towering skylines, desert safaris and futuristic attractions. From the Burj Khalifa to dune bashing, it delivers luxury at every turn.",
    highlights: [
      "Burj Khalifa & Dubai Mall fountain show",
      "Desert safari with BBQ dinner",
      "Marina cruise and Palm Jumeirah",
      "Global Village and theme parks",
      "Gold & spice souks",
    ],
    gallery: [
      "/uploads/2026/04/dubai.jpg",
      "/uploads/2026/04/shimla.jpg",
      "/uploads/2026/04/dubai.jpg",
    ],
  },
  {
    slug: "paris",
    name: "Paris",
    country: "France",
    region: "international",
    tagline: "Stunning views and romantic vibes at the iconic Eiffel Tower.",
    image: "/uploads/2026/04/paris.jpg",
    bestTime: "April to June",
    duration: "6 Nights / 7 Days",
    price: "From ₹95,000 per person",
    summary:
      "Paris is the city of love, art and timeless architecture. Stroll the Seine, gaze at the Eiffel Tower and explore world-class museums, cafés and boulevards.",
    highlights: [
      "Eiffel Tower and Seine river cruise",
      "Louvre Museum and Notre-Dame",
      "Versailles Palace day trip",
      "Montmartre & Champs-Élysées",
      "Disneyland Paris option",
    ],
    gallery: [
      "/uploads/2026/04/paris.jpg",
      "/uploads/2026/04/paris.jpg",
      "/uploads/2026/04/switzerland.jpg",
    ],
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    country: "Switzerland",
    region: "international",
    tagline: "Snow peaks, scenic railways and storybook villages.",
    image: "/uploads/2026/04/switzerland.jpg",
    bestTime: "May to September",
    duration: "7 Nights / 8 Days",
    price: "From ₹1,20,000 per person",
    summary:
      "Switzerland is a paradise of alpine lakes, glaciers and charming towns. Ride panoramic trains, visit Interlaken and Zermatt, and breathe in the crisp mountain air.",
    highlights: [
      "Interlaken adventure sports",
      "Jungfraujoch — Top of Europe",
      "Scenic Glacier Express railway",
      "Lake Geneva and Lucerne",
      "Zermatt & the Matterhorn",
    ],
    gallery: [
      "/uploads/2026/04/switzerland.jpg",
      "/uploads/2026/04/switzerland.jpg",
      "/uploads/2026/04/paris.jpg",
    ],
  },
  {
    slug: "maldives",
    name: "Maldives",
    country: "Maldives",
    region: "international",
    tagline: "Overwater villas and crystal-clear lagoons.",
    image: "/uploads/2026/04/maldives.jpg",
    bestTime: "November to April",
    duration: "4 Nights / 5 Days",
    price: "From ₹75,000 per person",
    summary:
      "The Maldives is the ultimate island escape — overwater villas, house reefs and endless turquoise horizons. Perfect for honeymoons and slow, sunny getaways.",
    highlights: [
      "Overwater villa stay",
      "Snorkelling & dolphin watching",
      "Sandbank picnics",
      "Sunset candle-light dinners",
      "Water sports and spas",
    ],
    gallery: [
      "/uploads/2026/04/maldives.jpg",
      "/uploads/2026/04/maldives.jpg",
      "/uploads/2026/04/bali.jpg",
    ],
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    country: "Vietnam",
    region: "international",
    tagline: "Limestone bays, lantern towns and rich street food.",
    image: "/uploads/2026/04/thailand.jpg",
    bestTime: "February to April & August to October",
    duration: "6 Nights / 7 Days",
    price: "From ₹65,000 per person",
    summary:
      "Vietnam blends emerald Halong Bay, the lantern-lit streets of Hoi An and the buzzing energy of Hanoi and Ho Chi Minh City. A feast of culture, cuisine and scenery.",
    highlights: [
      "Halong Bay cruise",
      "Hoi An ancient town",
      "Hanoi Old Quarter",
      "Cu Chi tunnels",
      "Street food trails",
    ],
    gallery: [
      "/uploads/2026/04/thailand.jpg",
      "/uploads/2026/04/thailand.jpg",
      "/uploads/2026/04/bali.jpg",
    ],
  },
  // ---------------- Domestic ----------------
  {
    slug: "shimla",
    name: "Shimla",
    country: "Himachal Pradesh, India",
    region: "domestic",
    tagline: "The Queen of Hills and her colonial charm.",
    image: "/uploads/2026/04/shimla.jpg",
    bestTime: "March to June & Dec-Jan",
    duration: "3 Nights / 4 Days",
    price: "From ₹12,000 per person",
    summary:
      "Shimla's pine-covered ridges, toy train and Mall Road capture the romance of the Himalayas. A classic hill-station retreat for families and couples alike.",
    highlights: [
      "Mall Road and Ridge",
      "Kufri adventure point",
      "Jakhoo Temple",
      "Heritage toy train ride",
      "Scenic ridge walks",
    ],
    gallery: [
      "/uploads/2026/04/shimla.jpg",
      "/uploads/2026/04/shimla.jpg",
      "/uploads/2026/04/manali.jpg",
    ],
  },
  {
    slug: "manali",
    name: "Manali",
    country: "Himachal Pradesh, India",
    region: "domestic",
    tagline: "Snow, rivers and endless mountain adventure.",
    image: "/uploads/2026/04/manali.jpg",
    bestTime: "May to June & Oct-Nov",
    duration: "4 Nights / 5 Days",
    price: "From ₹14,500 per person",
    summary:
      "Manali is where roaring rivers meet snow-capped peaks. From Solang Valley adventures to Atal Tunnel and Old Manali cafés, it's a complete mountain holiday.",
    highlights: [
      "Solang Valley adventure sports",
      "Rohtang / Atal Tunnel",
      "Hadimba Temple",
      "Old Manali cafés",
      "Beas River riverside",
    ],
    gallery: [
      "/uploads/2026/04/manali.jpg",
      "/uploads/2026/04/manali.jpg",
      "/uploads/2026/04/kashmir.jpg",
    ],
  },
  {
    slug: "goa",
    name: "Goa",
    country: "Goa, India",
    region: "domestic",
    tagline: "Sun, sand, parties and Portuguese heritage.",
    image: "/uploads/2026/04/goa.jpg",
    bestTime: "November to February",
    duration: "3 Nights / 4 Days",
    price: "From ₹10,500 per person",
    summary:
      "Goa is India's beach capital — golden shores, lively shacks, water sports and a laid-back Portuguese soul. Equally great for groups, families and couples.",
    highlights: [
      "North & South Goa beaches",
      "Water sports at Baga & Calangute",
      "Old Goa churches",
      "Cruise on the Mandovi river",
      "Anjuna flea market",
    ],
    gallery: [
      "/uploads/2026/04/goa.jpg",
      "/uploads/2026/04/goa.jpg",
      "/uploads/2026/04/kerala.jpg",
    ],
  },
  {
    slug: "kashmir",
    name: "Kashmir",
    country: "Jammu & Kashmir, India",
    region: "domestic",
    tagline: "Paradise on Earth — lakes, meadows and mountains.",
    image: "/uploads/2026/04/kashmir.jpg",
    bestTime: "March to October",
    duration: "5 Nights / 6 Days",
    price: "From ₹18,000 per person",
    summary:
      "Kashmir's Dal Lake, Mughal gardens and Gulmarg meadows are the stuff of dreams. Houseboats, gondola rides and snow make it unforgettable in every season.",
    highlights: [
      "Dal Lake houseboat stay",
      "Gulmarg Gondola",
      "Pahalgam & Betaab Valley",
      "Mughal gardens of Srinagar",
      "Sonamarg day trip",
    ],
    gallery: [
      "/uploads/2026/04/kashmir.jpg",
      "/uploads/2026/04/kashmir.jpg",
      "/uploads/2026/04/shimla.jpg",
    ],
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    country: "Rajasthan, India",
    region: "domestic",
    tagline: "Forts, palaces and the colours of royal India.",
    image: "/uploads/2026/04/rajasthan.jpg",
    bestTime: "October to March",
    duration: "6 Nights / 7 Days",
    price: "From ₹22,000 per person",
    summary:
      "Rajasthan is a land of maharajas — amber forts, desert dunes, lake palaces and vibrant bazaars across Jaipur, Udaipur, Jodhpur and Jaisalmer.",
    highlights: [
      "Jaipur City Palace & Amber Fort",
      "Udaipur Lake Pichola",
      "Jaisalmer desert camp",
      "Jodhpur Mehrangarh Fort",
      "Pushkar fair (seasonal)",
    ],
    gallery: [
      "/uploads/2026/04/rajasthan.jpg",
      "/uploads/2026/04/rajasthan.jpg",
      "/uploads/2026/04/goa.jpg",
    ],
  },
  {
    slug: "kerala",
    name: "Kerala",
    country: "Kerala, India",
    region: "domestic",
    tagline: "Backwaters, tea hills and Ayurveda.",
    image: "/uploads/2026/04/kerala.jpg",
    bestTime: "September to March",
    duration: "4 Nights / 5 Days",
    price: "From ₹16,000 per person",
    summary:
      "God's Own Country charms with houseboats on the backwaters, misty Munnar tea plantations and the cultural rhythms of Kochi and Alleppey.",
    highlights: [
      "Alleppey houseboat cruise",
      "Munnar tea plantations",
      "Kochi fort & Chinese nets",
      "Thekkady wildlife",
      "Ayurvedic wellness",
    ],
    gallery: [
      "/uploads/2026/04/kerala.jpg",
      "/uploads/2026/04/kerala.jpg",
      "/uploads/2026/04/goa.jpg",
    ],
  },
  {
    slug: "rishikesh",
    name: "Rishikesh",
    country: "Uttarakhand, India",
    region: "domestic",
    tagline: "Yoga, Ganga and adventure by the river.",
    image: "/uploads/2026/04/rishikesh.jpg",
    bestTime: "September to April",
    duration: "2 Nights / 3 Days",
    price: "From ₹8,000 per person",
    summary:
      "Rishikesh is the yoga capital and India's adventure hub — river rafting, cliff jumps, Ganga aarti and peaceful ashrams along the Himalayan foothills.",
    highlights: [
      "Ganga Aarti at Triveni Ghat",
      "White-water rafting",
      "Laxman Jhula & Ram Jhula",
      "Yoga & meditation retreats",
      "Beatles Ashram",
    ],
    gallery: [
      "/uploads/2026/04/rishikesh.jpg",
      "/uploads/2026/04/rishikesh.jpg",
      "/uploads/2026/04/shimla.jpg",
    ],
  },
  {
    slug: "sikkim",
    name: "Sikkim",
    country: "Sikkim, India",
    region: "domestic",
    tagline: "Monasteries, rhododendrons and Kanchenjunga views.",
    image: "/uploads/2026/04/shimla.jpg",
    bestTime: "March to June & October to December",
    duration: "5 Nights / 6 Days",
    price: "From ₹16,000 per person",
    summary:
      "Sikkim is a serene Himalayan gem — Buddhist monasteries, the high-altitude Gurudongmar Lake, colourful Gangtok markets and breathtaking views of the Kanchenjunga range.",
    highlights: [
      "Gangtok & MG Marg",
      "Tsomgo (Changu) Lake",
      "Gurudongmar Lake",
      "Rumtek Monastery",
      "Kanchenjunga views",
    ],
    gallery: [
      "/uploads/2026/04/shimla.jpg",
      "/uploads/2026/04/shimla.jpg",
      "/uploads/2026/04/manali.jpg",
    ],
  },
];

export const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    quote:
      "Our Bali trip was flawlessly planned. Hotels, transfers and tours were all on time. Truly hassle-free holidays!",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    location: "Noida",
    quote:
      "Booked a Rajasthan family tour. Great pricing and the team stayed in touch throughout the trip. Highly recommended.",
    rating: 5,
  },
  {
    name: "Anita & Mohit",
    location: "Gurgaon",
    quote:
      "Our Maldives honeymoon was straight out of a dream. Thank you Get Set Go Holidays for the perfect arrangements.",
    rating: 5,
  },
  {
    name: "Sandeep Rao",
    location: "Pune",
    quote:
      "Visa and flight booking handled end-to-end. Smooth, transparent and reliable service every step of the way.",
    rating: 4,
  },
  {
    name: "Meera Nair",
    location: "Bengaluru",
    quote:
      "Kerala backwaters houseboat was the highlight. The itinerary was well paced and the driver was excellent.",
    rating: 5,
  },
  {
    name: "Karan Singh",
    location: "Lucknow",
    quote:
      "Group trip to Thailand was so well organised. Great value and zero stress. We'll travel with them again.",
    rating: 5,
  },
];

export function getDestination(slug) {
  return destinations.find((d) => d.slug === slug);
}

export const blog = [
  {
    slug: "best-time-to-visit-kashmir",
    title: "Best Time to Visit Kashmir — A Seasonal Travel Guide",
    excerpt:
      "From tulip gardens in spring to snowy Gulmarg in winter, here's when to plan your perfect Kashmir escape.",
    image: "/uploads/2026/04/kashmir.jpg",
    date: "2026-04-12",
    category: "Domestic",
    author: "Get Set Go Holidays",
    readTime: "5 min read",
    content: [
      "Kashmir is often called Paradise on Earth, and for good reason. Every season paints the valley in a different mood — making it one of the most versatile destinations in India.",
      "Spring (March to May) brings the famous tulip festival in Srinagar, with Indira Gandhi Memorial Tulip Garden bursting into colour. The weather is pleasant, perfect for shikara rides on Dal Lake.",
      "Summer (June to August) is ideal for family trips and sightseeing in Pahalgam, Sonamarg and Gulmarg. The meadows are lush and the skies are clear.",
      "Autumn (September to November) covers the Chinars in gold and crimson — a photographer's dream and the best time for peaceful getaways.",
      "Winter (December to February) turns Gulmarg into a snow paradise. If you love skiing or the Gondola, this is your season.",
      "Whenever you choose to go, our team handles stays, transfers and sightseeing so you can simply soak in the beauty.",
    ],
  },
  {
    slug: "bali-travel-tips-for-first-timers",
    title: "Bali Travel Tips for First-Timers",
    excerpt:
      "Everything you need to know before your first trip to the Island of the Gods — from visa to local etiquette.",
    image: "/uploads/2026/04/bali.jpg",
    date: "2026-03-28",
    category: "International",
    author: "Get Set Go Holidays",
    readTime: "6 min read",
    content: [
      "Bali blends golden beaches, spiritual temples and vibrant culture. If it's your first visit, a little planning goes a long way.",
      "Most Indian travellers can get a visa on arrival or an e-VOA. Keep your passport valid for at least six months and carry a return ticket.",
      "Stay zones matter: Seminyak and Canggu are great for beaches and nightlife, while Ubud is the hub for culture, rice terraces and yoga.",
      "Respect temple customs — carry a sarong, dress modestly and avoid pointing feet at shrines.",
      "Local transport is easiest with a private cab. We arrange sanitized vehicles with experienced drivers for stress-free exploration.",
      "With the right plan, Bali is safe, welcoming and unforgettable. Talk to us for a customised itinerary.",
    ],
  },
  {
    slug: "how-to-plan-a-budget-honeymoon",
    title: "How to Plan a Budget-Friendly Honeymoon",
    excerpt:
      "A dream honeymoon doesn't have to break the bank. Smart tips to plan a romantic trip on a budget.",
    image: "/uploads/2026/04/maldives.jpg",
    date: "2026-03-15",
    category: "Honeymoon",
    author: "Get Set Go Holidays",
    readTime: "4 min read",
    content: [
      "Your honeymoon should feel magical, not stressful. With smart choices you can enjoy luxury experiences without overspending.",
      "Travel in the shoulder season. Prices for hotels and flights drop just before and after peak months, with fewer crowds.",
      "Pick one or two experiences to splurge on — like a candle-light dinner or an overwater villa night — and keep the rest simple.",
      "Book packages instead of separate components. Bundled stays, transfers and sightseeing almost always cost less.",
      "Use a trusted planner. We negotiate the best rates and handle everything, so you only focus on each other.",
    ],
  },
  {
    slug: "top-5-family-destinations-in-india",
    title: "Top 5 Family Destinations in India",
    excerpt:
      "Planning a trip with kids and grandparents? These Indian destinations offer fun for every age group.",
    image: "/uploads/2026/04/goa.jpg",
    date: "2026-02-20",
    category: "Family",
    author: "Get Set Go Holidays",
    readTime: "5 min read",
    content: [
      "India is incredibly family-friendly once you pick the right place. Here are five favourites our travellers love.",
      "Goa — beaches, water sports and easy relaxed days that work for all ages.",
      "Rajasthan — forts, palaces and colourful culture that fascinate kids and adults alike.",
      "Kerala — backwater cruises and gentle hill stations perfect for multi-generational trips.",
      "Shimla & Manali — snow play for children and scenic calm for grandparents.",
      "Kashmir — houseboats and gardens that create memories for the whole family.",
      "We design balanced itineraries with rest days, kid-friendly meals and comfortable pacing.",
    ],
  },
];

export function getPost(slug) {
  return blog.find((p) => p.slug === slug);
}
