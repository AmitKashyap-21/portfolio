"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

const categories = [
  { key: "all", label: "All" },
  { key: "genai", label: "Generative AI" },
  { key: "ml", label: "Machine Learning" },
  { key: "cv", label: "Computer Vision" },
  { key: "fullstack", label: "Full Stack" },
];

interface ProjectsProps {
  previewMode?: boolean;
  hideHeader?: boolean;
  title?: string;
  subtitle?: string;
}

export default function Projects({ 
  previewMode = false, 
  hideHeader = false,
  title = "Featured Projects",
  subtitle = "Products and systems I've shipped to production"
}: ProjectsProps) {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  const displayed = previewMode ? filtered.slice(0, 3) : filtered;

  const content = (
    <>
      {/* Filter tabs — only on full page */}
      {!previewMode && (
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-6 py-2.5 text-[14px] rounded-full border transition-all duration-300 font-medium ${
                active === cat.key
                  ? "bg-accent text-background border-accent shadow-[0_0_20px_rgba(0,255,195,0.2)]"
                  : "border-[rgba(255,255,255,0.06)] bg-[rgba(15,23,42,0.4)] text-text-secondary hover:border-accent/40 hover:text-text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>
      )}

      {/* Project grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayed.map((project, idx) => (
          <ProjectCard key={project.slug} project={project} index={idx} />
        ))}
      </div>
    </>
  );

  if (hideHeader) {
    return (
      <div className="w-full">
        {content}
      </div>
    );
  }

  return (
    <SectionWrapper
      id="projects"
      title={title}
      subtitle={subtitle}
    >
      {content}
    </SectionWrapper>
  );
}
