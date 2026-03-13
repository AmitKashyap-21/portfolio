import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Amit Kashyap",
  description:
    "Technical blog posts on AI, machine learning, deep learning, and production ML engineering.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen py-20 md:py-28 px-6">
      <div className="mx-auto max-w-6xl flex flex-col items-center">
        {/* Header */}
        <div className="mb-16 w-full max-w-3xl flex flex-col items-center text-center">
          <Link
            href="/"
            className="md:hidden self-center inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
            Blog & Research Notes
          </h1>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-balance">
            Technical notes from my journey learning machine learning systems, LLMs, and AI engineering.
          </p>
          <div className="w-16 h-[3px] bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
            className="premium-card premium-card-hover p-6 md:p-8 block transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 text-[13px] text-text-secondary mb-3">
                <span>{post.date}</span>
                <span className="opacity-40">•</span>
                <span>{post.readingTime}</span>
                <span className="opacity-40">•</span>
                <span className="text-accent font-medium">{post.category}</span>
              </div>

              <h2 className="text-[22px] font-bold text-text-heading group-hover:text-accent transition-colors mb-2">
                {post.title}
              </h2>

              <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
                {post.summary}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-[rgba(15,23,42,0.4)] text-text-secondary border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="flex items-center gap-1 text-[13px] font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  Read Notes
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}

          {posts.length === 0 && (
            <p className="text-center text-text-secondary py-12">
              No blog posts yet. Check back soon!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
