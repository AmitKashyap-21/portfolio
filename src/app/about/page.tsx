import About from "@/components/sections/About";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Amit Kashyap",
  description:
    "Learn about Amit Kashyap's approach to building AI and machine learning systems.",
};

export default function AboutPage() {
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
            About Me
          </h1>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-balance">
            Focused on building practical Data Science and Machine Learning systems.
          </p>
          <div className="w-16 h-[3px] bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Bio */}
        <div className="w-full max-w-[700px] mb-[80px] space-y-[20px] text-center">
          <p className="text-[16px] md:text-[18px] text-text-secondary leading-[1.7]">
            I am a computer science student passionate about artificial
            intelligence, machine learning, and generative AI. I enjoy building
            AI systems, experimenting with models, and learning how intelligent
            systems work in real-world environments.
          </p>
          <p className="text-[16px] md:text-[18px] text-text-secondary leading-[1.7]">
            My focus is on practical machine learning applications including RAG
            systems, recommendation systems, and AI automation. I love working 
            with real-world datasets to solve hard problems and drive actionable 
            insights.
          </p>
        </div>

        {/* My Approach section */}
        <div className="w-full">
          <About />
        </div>
      </div>
    </div>
  );
}
