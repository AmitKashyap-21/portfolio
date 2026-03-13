"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import dynamic from "next/dynamic";

const ParticleBackground = dynamic(
  () => import("@/components/shared/ParticleBackground"),
  { ssr: false }
);

export default function Hero() {
  return (
    <section className="relative min-h-screen grid place-items-center px-6 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
        <ParticleBackground />
        {/* Animated Gradient Glows */}
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-glow hero-glow-3" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
        {/* Signature name */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-caveat)] text-[32px] md:text-[36px] font-normal mb-2 tracking-[0.02em] hero-name-gradient"
        >
          Amit Kashyap
        </motion.p>

        {/* Title / Role Line */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[13px] md:text-[14px] text-accent/80 font-semibold tracking-[0.15em] uppercase mb-[18px]"
        >
          DATA SCIENCE | MACHINE LEARNING | GEN AI
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[30px] md:text-[46px] lg:text-[52px] font-bold leading-[1.2] mb-[18px] text-text-primary px-4 md:px-0 max-w-[700px] mx-auto text-balance"
        >
          I build practical AI and machine learning systems that solve <span className="hero-name-gradient">real-world problems</span>.
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[15px] md:text-[16px] lg:text-[17px] text-text-secondary leading-[1.6] md:leading-[1.7] mb-[28px] mx-auto"
        >
          Focused on translating complex models into production-ready solutions. I enjoy building intelligent systems, experimenting with models, and turning data into actionable AI products.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-4 w-full md:w-auto"
        >
          <a
            href="/projects"
            className="flex-1 md:flex-none bg-accent text-background px-[22px] md:px-[26px] py-[12px] rounded-full font-semibold text-[15px] transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_0_20px_rgba(0,255,195,0.3)] text-center"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="flex-1 md:flex-none border border-[rgba(255,255,255,0.2)] text-text-primary px-[22px] md:px-[26px] py-[12px] rounded-full font-semibold text-[15px] transition-all duration-200 hover:bg-white/5 hover:translate-y-[-2px] text-center"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Visual Background Element (Centered behind) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] -z-10 pointer-events-none opacity-30">
        <div
          className="absolute inset-0 rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0,217,217,0.1) 0%, rgba(157,78,221,0.03) 50%, transparent 70%)",
          }}
        />
      </div>
    </section>
  );
}
