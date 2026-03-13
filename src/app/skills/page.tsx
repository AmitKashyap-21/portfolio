import Skills from "@/components/sections/Skills";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills — Amit Kashyap",
  description:
    "Technical skills in machine learning, data science, generative AI, and backend engineering.",
};

export default function SkillsPage() {
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
            Technical Skills
          </h1>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-balance">
            Tools and technologies I use to build practical AI and machine learning systems.
          </p>
          <div className="w-16 h-[3px] bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Full skills component */}
        <div className="w-full">
          <Skills hideHeader />
        </div>
      </div>
    </div>
  );
}
