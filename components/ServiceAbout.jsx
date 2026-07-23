"use client";
import { motion } from "framer-motion";
import * as Lucide from "lucide-react";

const iconMap = {
  Map: Lucide.Map,
  Compass: Lucide.Compass,
  Wallet: Lucide.Wallet,
  Globe: Lucide.Globe,
  Gem: Lucide.Gem,
  Users: Lucide.Users,
  Heart: Lucide.Heart,
  Briefcase: Lucide.Briefcase,
  ShieldCheck: Lucide.ShieldCheck,
  Eye: Lucide.Eye,
  CheckCircle: Lucide.CheckCircle,
  Headphones: Lucide.Headphones,
  Hotel: Lucide.Hotel,
  Tag: Lucide.Tag,
  Shield: Lucide.Shield,
  Sparkles: Lucide.Sparkles,
  Star: Lucide.Star,
  Building2: Lucide.Building2,
  Umbrella: Lucide.Umbrella,
  Mountain: Lucide.Mountain,
  Clock: Lucide.Clock,
  RotateCcw: Lucide.RotateCcw,
  Plane: Lucide.Plane,
  Route: Lucide.Route,
  MapPinned: Lucide.MapPinned,
  ArrowRight: Lucide.ArrowRight,
  RefreshCcw: Lucide.RefreshCcw,
  Bus: Lucide.Bus,
  Car: Lucide.Car,
  ClipboardList: Lucide.ClipboardList,
  Passport: Lucide.BookOpen,
  FileText: Lucide.FileText,
  Stamp: Lucide.Stamp,
  Calendar: Lucide.Calendar,
  Search: Lucide.Search,
  Bell: Lucide.Bell,
  Award: Lucide.Award,
  Presentation: Lucide.Presentation,
  Building: Lucide.Building,
  Handshake: Lucide.Handshake,
  BookOpen: Lucide.BookOpen,
  Factory: Lucide.Factory,
};

export function Icon({ name, className = "w-5 h-5" }) {
  const IconComp = iconMap[name];
  if (!IconComp) return null;
  return <IconComp className={className} />;
}

export default function ServiceAbout({ content }) {
  return (
    <section className="py-16">
      <div className="container-page">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl">
          {content.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={i > 0 ? "mt-10" : ""}
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{section.heading}</h2>
              <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300" dangerouslySetInnerHTML={{ __html: section.body }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
