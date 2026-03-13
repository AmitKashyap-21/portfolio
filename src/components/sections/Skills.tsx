"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";

interface SkillsProps {
  previewMode?: boolean;
  hideHeader?: boolean;
}

export default function Skills({ previewMode = false, hideHeader = false }: SkillsProps) {
  const content = (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-6xl mx-auto w-full">
      {skillCategories.map((category, idx) => (
        <motion.div
          key={category.title}
          variants={fadeUp}
          custom={idx}
          className={cn(
            "premium-card premium-card-hover group relative overflow-hidden",
            previewMode 
              ? "rounded-full px-5 py-2 md:px-6 md:py-3 flex items-center justify-center gap-2 md:gap-3 w-fit"
              : "p-6 md:p-8 w-[calc(50%-8px)] md:w-[calc(50%-16px)] lg:w-[calc(33.33%-22px)]"
          )}
        >
          {previewMode ? (
            <>
              <div className={`${category.color} group-hover:scale-110 transition-transform`}>
                <div className="md:hidden">
                  <category.icon size={18} />
                </div>
                <div className="hidden md:block">
                  <category.icon size={22} />
                </div>
              </div>
              <span className={`text-[14px] md:text-[16px] font-semibold tracking-wide ${category.color}`}>
                {category.title}
              </span>
            </>
          ) : (
            <>

              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 relative z-10">
                <div
                  className={`p-2 md:p-2.5 rounded-lg md:rounded-xl ${category.bgColor} ${category.color} transition-colors duration-300`}
                >
                  <div className="md:hidden">
                    <category.icon size={18} />
                  </div>
                  <div className="hidden md:block">
                    <category.icon size={22} />
                  </div>
                </div>
                <h3 className={`font-semibold text-[16px] md:text-[20px] ${category.color}`}>
                  {category.title}
                </h3>
              </div>
              
              <ul className="flex flex-col gap-2 md:gap-3 relative z-10 list-none p-0 m-0">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm md:text-base text-text-secondary flex items-center gap-1.5 md:gap-2 leading-relaxed"
                  >
                    <span className="text-accent/60 flex-shrink-0">•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </>
          )}
        </motion.div>
      ))}
    </div>
  );

  if (hideHeader) {
    return (
      <div className="w-full flex justify-center">
        {content}
      </div>
    );
  }

  return (
    <SectionWrapper
      id="skills"
      title="Technical Skills"
      subtitle="Tools and technologies I work with"
    >
      {content}
    </SectionWrapper>
  );
}
