import Contact from "@/components/sections/Contact";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Amit Kashyap",
  description:
    "Get in touch with Amit Kashyap for internship opportunities in Data Science, Machine Learning, or Generative AI.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 md:py-28 px-6">
      <div className="mx-auto max-w-6xl flex flex-col items-center">
        <Link
          href="/"
          className="md:hidden self-center inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>

        {/* Vertically centered block */}
        <div className="contact-page-container">
          {/* Header */}
          <div className="mb-16 w-full max-w-3xl flex flex-col items-center text-center">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6 group transition-all duration-300 hover:bg-accent/15">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
              </span>
              <span className="text-[12px] font-medium text-accent tracking-wide uppercase">
                Available for Data Science / ML Internships
              </span>
            </div>
 
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
              Get In Touch
            </h1>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-balance">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <p className="text-[16px] text-text-secondary/70 italic mt-4">
              Currently open to Data Science, Machine Learning, and AI internship opportunities.
            </p>
            <div className="w-16 h-[3px] bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mx-auto mt-4" />
          </div>

          {/* Full contact component */}
          <div className="w-full">
            <Contact hideHeader />
          </div>
        </div>
      </div>
    </div>
  );
}
