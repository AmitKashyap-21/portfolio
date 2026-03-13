"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28 px-6", className)}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-6xl"
      >
        {title && (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="mb-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-text-heading">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-balance">
                {subtitle}
              </p>
            )}
            <div className="w-16 h-[3px] bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mx-auto mt-4" />
          </motion.div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
