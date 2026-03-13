"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const tintClasses: Record<string, string> = {
  blue: "card-tint-blue",
  purple: "card-tint-purple",
  green: "card-tint-green",
};

const accentBarColors: Record<string, string> = {
  blue: "from-highlight to-highlight/40",
  purple: "from-accent-secondary to-accent-secondary/40",
  green: "from-accent to-accent/40",
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const tint = tintClasses[project.accentColor] || "";
  const barColor = accentBarColors[project.accentColor] || "from-accent to-accent-secondary";

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className={`premium-card premium-card-hover group relative flex flex-col ${tint}`}
    >

      {/* Colored accent bar */}
      <div className={`h-[2px] bg-gradient-to-r ${barColor} relative z-10`} />

      <div className="p-[22px] lg:p-7 flex flex-col h-full relative z-10">
        {/* Header: badge + category */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-[12px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
            {project.category === "genai"
              ? "Generative AI"
              : project.category === "ml"
              ? "Machine Learning"
              : project.category === "cv"
              ? "Computer Vision"
              : "Full Stack"}
          </span>
          {project.badge && (
            <span className="text-[12px] font-semibold uppercase tracking-wider text-accent-warm bg-accent-warm/10 px-3 py-1 rounded-full border border-accent-warm/20">
              {project.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-[22px] font-bold text-text-heading mb-3 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[15px] md:text-[16px] text-text-secondary mb-5 leading-[1.6] line-clamp-3">
          {project.problem}
        </p>

        {/* Impact metrics — visually distinct badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.impact.map((metric) => (
            <div
              key={metric}
              className="text-[13px] font-medium text-accent bg-accent/5 px-3 py-1 rounded-md border border-accent/10 whitespace-nowrap"
            >
              {metric}
            </div>
          ))}
        </div>

        <div className="flex-1" />

        {/* Tech stack tags — small pills */}
        <div className="flex flex-wrap gap-2 mb-6 pt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[12px] font-medium rounded-full bg-surface-light/40 text-text-subtitle border border-[rgba(255,255,255,0.06)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-5 border-t border-[rgba(255,255,255,0.06)]">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent hover:text-accent/80 transition-all group/link underline-offset-4 hover:underline"
          >
            View Case Study
            <ArrowRight
              size={16}
              className="group-hover/link:translate-x-1 transition-transform"
            />
          </Link>
          <div className="flex items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-subtitle hover:text-text-heading transition-colors"
                aria-label={`GitHub: ${project.title}`}
              >
                <Github size={18} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-subtitle hover:text-text-heading transition-colors"
                aria-label={`Demo: ${project.title}`}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
