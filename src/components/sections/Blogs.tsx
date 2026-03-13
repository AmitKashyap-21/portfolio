"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export interface BlogPostMeta {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readingTime: string;
  tags: string[];
}

interface BlogsProps {
  posts: BlogPostMeta[];
}

export default function Blogs({ posts }: BlogsProps) {
  return (
    <SectionWrapper
      id="blog"
      title="Blog & Research Notes"
      subtitle="Deep dives into AI systems, ML techniques, and engineering practices"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {posts.map((post, idx) => (
          <motion.div
            key={post.slug}
            variants={fadeUp}
            custom={idx}
            className="premium-card premium-card-hover group relative overflow-hidden flex flex-col h-full"
          >
            {/* Gradient bar */}
            <div className="h-1 bg-gradient-to-r from-accent-secondary to-accent" />

            <div className="p-6">
              {/* Date & reading time */}
              <div className="flex items-center gap-4 text-xs text-text-secondary mb-3">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readingTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
                {post.title}
              </h3>

              {/* Summary */}
              <p className="text-sm text-text-secondary mb-4 leading-relaxed line-clamp-3">
                {post.summary}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[11px] rounded bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read more */}
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent/80 transition-colors group/link"
              >
                Read More
                <ArrowRight
                  size={14}
                  className="group-hover/link:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div variants={fadeUp} className="text-center mt-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/10 text-text-primary font-semibold text-sm hover:bg-white/5 hover:border-accent transition-all duration-300"
        >
          View All Posts
          <ArrowRight size={16} />
        </Link>
      </motion.div>
    </SectionWrapper>
  );
}
