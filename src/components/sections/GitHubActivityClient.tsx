"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Star, GitFork, ExternalLink } from "lucide-react";
import type { GitHubData } from "@/lib/github";

export default function GitHubActivityClient({ data }: { data: GitHubData }) {
  return (
    <SectionWrapper
      id="github"
      title="GitHub Activity"
      subtitle={`${data.totalContributions}+ contributions this year`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {data.repos.map((repo, idx) => (
          <motion.a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            custom={idx}
            className="premium-card premium-card-hover p-6 group block h-full"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-text-primary text-sm group-hover:text-accent transition-colors font-mono">
                {repo.name}
              </h3>
              <ExternalLink
                size={14}
                className="text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2 mt-0.5"
              />
            </div>

            <p className="text-xs text-text-secondary mb-4 leading-relaxed line-clamp-2">
              {repo.description}
            </p>

            <div className="flex items-center gap-4 text-xs text-text-secondary">
              {repo.primaryLanguage && (
                <span className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.primaryLanguage.color }}
                  />
                  {repo.primaryLanguage.name}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Star size={12} />
                {repo.stargazerCount}
              </span>
              <span className="flex items-center gap-1">
                <GitFork size={12} />
                {repo.forkCount}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
}
