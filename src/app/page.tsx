import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import HomeCTA from "@/components/sections/HomeCTA";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      {/* 1. Hero */}
      <div className="w-full">
        <Hero />
      </div>

      <div className="w-full max-w-[1100px] px-6">
        {/* 2. Featured Projects Preview */}
        <div className="pt-[40px] md:pt-[60px]">
          <Projects 
            previewMode 
            title="Featured Projects"
            subtitle="Products and systems I&apos;ve built using machine learning and AI."
          />
          <div className="text-center pt-[48px] pb-[80px] md:pb-[110px]">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-accent hover:text-accent/80 transition-all group"
            >
              View All Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 3. Skills Preview */}
        <div className="pb-[80px] md:pb-[110px]">
          <Skills previewMode />
          <div className="text-center pt-[40px]">
            <Link
              href="/skills"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-accent hover:text-accent/80 transition-all group"
            >
              View Full Skills
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* 4. Home CTA Section */}
      <div className="w-full">
        <HomeCTA />
      </div>
    </main>
  );
}
