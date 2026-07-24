"use client";

import { motion } from "framer-motion";

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
};

const motionProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-60px" },
};

export function FadeUp({ children, className, delay = 0, ...props }) {
  return (
    <motion.div
      variants={variants.fadeUp}
      custom={delay}
      {...motionProps}
      transition={{ ...variants.fadeUp.visible.transition, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeLeft({ children, className, delay = 0, ...props }) {
  return (
    <motion.div
      variants={variants.fadeLeft}
      custom={delay}
      {...motionProps}
      transition={{ ...variants.fadeLeft.visible.transition, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeRight({ children, className, delay = 0, ...props }) {
  return (
    <motion.div
      variants={variants.fadeRight}
      custom={delay}
      {...motionProps}
      transition={{ ...variants.fadeRight.visible.transition, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, className, delay = 0, ...props }) {
  return (
    <motion.div
      variants={variants.scaleIn}
      custom={delay}
      {...motionProps}
      transition={{ ...variants.scaleIn.visible.transition, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className, ...props }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, ...props }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
