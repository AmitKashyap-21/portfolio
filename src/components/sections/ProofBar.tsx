"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Users, Rocket, Star, Shield } from "lucide-react";

const stats = [
  { icon: Users, number: "50K+", label: "Users Served" },
  { icon: Rocket, number: "3", label: "ML Products Shipped" },
  { icon: Star, number: "200+", label: "GitHub Stars" },
  { icon: Shield, number: "99.9%", label: "System Uptime" },
];

export default function ProofBar() {
  return (
    <section className="relative py-16 md:py-24 px-6 overflow-hidden">
      {/* Subtle top/bottom dividers */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mx-auto max-w-6xl grid grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            custom={idx}
            className="group relative rounded-2xl p-6 text-center premium-card premium-card-hover"
          >
            {/* Icon */}
            <div className="flex justify-center mb-3">
              <div className="p-2 rounded-lg bg-accent/8 text-accent/60 group-hover:bg-accent/15 group-hover:text-accent transition-colors duration-300">
                <stat.icon size={20} strokeWidth={1.5} />
              </div>
            </div>
            {/* Number */}
            <div className="stat-number">{stat.number}</div>
            {/* Label */}
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
