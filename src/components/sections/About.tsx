"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Rocket, BarChart3, Target, Zap } from "lucide-react";

const principles = [
  {
    icon: Rocket,
    title: "Ship Fast, Iterate with Data",
    description:
      "Speed to market beats perfection. I get MVPs to real users in days, not months. Real feedback loops are better than theoretical optimization.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: BarChart3,
    title: "Measure Everything",
    description:
      "If you can't measure it, you can't improve it. Every feature I ship has metrics. Every decision is data-driven — hunches are testing hypotheses, not gospel.",
    color: "text-highlight",
    bgColor: "bg-highlight/10",
  },
  {
    icon: Target,
    title: "Solve Real Problems",
    description:
      "The worst code solves a problem that doesn't exist. I always validate that a problem is real and worth solving before writing a single line of code.",
    color: "text-accent-warm",
    bgColor: "bg-accent-warm/10",
  },
  {
    icon: Zap,
    title: "Design for Scale",
    description:
      "Design for 10x from day one. Systems thinking over feature thinking. Consider tradeoffs, edge cases, and failure modes before they become production fires.",
    color: "text-accent-secondary",
    bgColor: "bg-accent-secondary/10",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 w-full flex flex-col items-center px-6">
      <div className="mb-12 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-text-heading">
          My Approach
        </h2>
        <div className="w-16 h-[3px] bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mx-auto mt-4" />
        <p className="mt-6 text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-balance">
          How I think about building AI systems that actually work
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
        {principles.map((item, idx) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            custom={idx}
            className="premium-card premium-card-hover p-6 md:p-8 flex flex-col relative overflow-hidden h-full"
          >
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className={`p-3 rounded-xl ${item.bgColor} ${item.color}`}>
                <item.icon size={22} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-text-heading">
                {item.title}
              </h3>
            </div>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed relative z-10 m-0">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
