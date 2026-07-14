import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollReveal from "../components/ScrollReveal";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://thegetsetgoholidays.com"),
  title: {
    default: "The Get Set Go Holidays — Personalised Tours & Travel",
    template: "%s | The Get Set Go Holidays",
  },
  description:
    "The Get Set Go Holidays turns your travel dreams into reality with customized tour packages, hotel bookings, taxi services, flights and complete trip planning.",
  keywords: [
    "tour packages",
    "holiday packages",
    "travel agency",
    "honeymoon packages",
    "international tours",
    "domestic tours",
    "hotel booking",
    "flight booking",
    "visa services",
  ],
  authors: [{ name: "The Get Set Go Holidays" }],
  openGraph: {
    type: "website",
    siteName: "The Get Set Go Holidays",
    title: "The Get Set Go Holidays — Personalised Tours & Travel",
    description:
      "Customized tour packages, hotel & flight bookings, taxi services and complete trip planning across India and the world.",
    url: "/",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "The Get Set Go Holidays" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Get Set Go Holidays — Personalised Tours & Travel",
    description:
      "Customized tour packages, hotel & flight bookings, taxi services and complete trip planning across India and the world.",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/logo.png" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="preload" as="video" href="/herosection.mp4" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&m)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollReveal />
      </body>
    </html>
  );
}
