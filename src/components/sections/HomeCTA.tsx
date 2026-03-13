"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="py-24 md:py-32 px-6 text-center border-t border-white/5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-[720px] mx-auto flex flex-col items-center"
      >
        {/* Availability Label */}
        <span className="text-[11px] md:text-[12px] font-bold tracking-[0.2em] text-accent bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20 mb-8 uppercase">
          AVAILABLE FOR DATA SCIENCE / ML INTERNSHIPS
        </span>
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-8 text-balance">
          Get In Touch
        </h2>
        
        {/* Description Paragraphs */}
        <div className="space-y-6 mb-12">
          <p className="text-text-secondary text-base md:text-xl leading-relaxed text-balance">
            Interested in collaborating on data-driven products, machine learning systems, or impactful AI solutions.
          </p>
          <p className="text-text-secondary/80 text-sm md:text-base leading-relaxed text-balance max-w-lg mx-auto">
            Currently open to Data Science, Machine Learning, and AI internship opportunities.
          </p>
        </div>

        {/* Primary CTA Button */}
        <Link
          href="/contact"
          className="bg-accent text-background px-10 py-4 rounded-full font-bold text-[16px] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_10px_40px_rgba(0,255,195,0.3)] active:scale-95"
        >
          Contact Me
        </Link>
      </motion.div>
    </section>
  );
}
