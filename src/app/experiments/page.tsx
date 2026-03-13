import Experiments from "@/components/sections/Experiments";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiments — Amit Kashyap",
  description:
    "AI experiments and explorations in RNN bias, transformers, and ranking systems.",
};

export default function ExperimentsPage() {
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
            AI Experiments
          </h1>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-balance">
            Exploring the boundaries of machine learning through research and prototyping.
          </p>
          <div className="w-16 h-[3px] bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Full experiments component */}
        <Experiments />
      </div>
    </div>
  );
}
