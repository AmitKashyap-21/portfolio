"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { experiments } from "@/data/experiments";

export default function Experiments() {
  return (
    <SectionWrapper
      id="experiments"
      title="AI Experiments"
      subtitle="Interactive demos showcasing AI capabilities — try them out"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {experiments.map((exp, idx) => (
          <motion.div
            key={exp.title}
            variants={fadeUp}
            custom={idx}
            className="premium-card premium-card-hover p-6 md:p-8 group relative overflow-hidden flex flex-col h-full"
          >
            {/* Status badge */}
            <div className="absolute top-5 right-5">
              <span
                className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                  exp.status === "live"
                    ? "bg-green-500/10 text-green-400 border border-green-500/30"
                    : exp.status === "prototype"
                    ? "bg-blue-500/10 text-blue-400 border border-blue-500/30"
                    : "bg-purple-500/10 text-purple-400 border border-purple-500/30"
                }`}
              >
                {exp.status === "live" ? "Live Demo" : exp.status === "prototype" ? "Prototype" : "Experiment"}
              </span>
            </div>

            {/* Icon */}
            <div className="text-4xl mb-4">{exp.icon}</div>

            {/* Title */}
            <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
              {exp.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-text-secondary mb-4 leading-relaxed">
              {exp.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[11px] font-mono rounded bg-background/80 text-text-secondary border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Demo button */}
            {exp.status === "live" && exp.demoUrl && (
              <a
                href={exp.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
              >
                Try Demo →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
