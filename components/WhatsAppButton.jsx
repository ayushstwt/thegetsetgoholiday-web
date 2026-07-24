"use client";

import { motion } from "framer-motion";
import { site } from "../lib/data";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={site.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/30 transition-colors duration-300 hover:bg-green-600"
    >
      <svg width="30" height="30" fill="white" viewBox="0 0 24 24">
        <path d="M.1 23.9 2.4 17c-.5-1-.8-2-.8-3.1C1.6 8.6 6.2 4 12.1 4c2.7 0 5.2 1 7.1 2.9 1.9 1.9 2.9 4.4 2.9 7.1 0 5.9-4.6 10.5-10.5 10.5-1.4 0-2.7-.3-3.9-.8L.1 23.9zm6.3-3.2 1.1-.2c1-.3 1.9-.8 2.7-1.5l1.3-.9-1-1.3-.6.4c-.6.4-1.1.6-1.6.6-.5 0-.8-.1-1-.4-.2-.2-.4-.5-.5-1 0-.3.1-.7.4-1.1l.3-.5-1.2-1.6c-.5-.7-.8-1.3-.8-1.9 0-.8.4-1.5 1.1-2 .4-.3.9-.5 1.5-.5.3 0 .6 0 1 .1.3.1.6.3.9.5l.7.5c.3.2.5.4.6.5l.3-.2c.4-.3.8-.5 1.2-.6.4-.1.8-.2 1.2-.1.6.1 1.1.5 1.4 1 .3.6.4 1.3.3 2 0 .6-.2 1.2-.5 1.8-.3.6-.6 1.1-1 1.6-.5.5-1 .9-1.6 1.3-.6.4-1.2.7-1.8 1-.4.2-.8.3-1.1.4l-1 .3z"/>
      </svg>
    </motion.a>
  );
}
