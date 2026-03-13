"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

interface ContactProps {
  hideHeader?: boolean;
  title?: string;
  subtitle?: string;
}

export default function Contact({ 
  hideHeader = false,
  title = "Get in Touch",
  subtitle = "Let's build something together"
}: ContactProps) {
  const content = (
    <div className="max-w-[700px] mx-auto flex flex-col items-center">
      {/* Main CTA Section */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col items-center text-center space-y-8 w-full"
      >
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:amitkashyap1164@gmail.com"
            className="bg-accent text-background px-8 py-3 rounded-full font-semibold text-[16px] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_4px_20px_rgba(0,255,195,0.25)]"
          >
            Contact Me
          </a>
          <a
            href="https://www.linkedin.com/in/amit-kashyap-b39b371a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 border border-white/10 text-text-primary px-8 py-3 rounded-full font-semibold text-[16px] transition-all duration-300 hover:bg-white/10 hover:border-accent hover:translate-y-[-2px]"
          >
            LinkedIn
          </a>
        </div>
 
        {/* Contact Method Icons with Labels */}
        <div className="flex justify-center gap-8 pt-4">
          <div className="flex flex-col items-center gap-2 group">
            <a
              href="mailto:amitkashyap1164@gmail.com"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-text-secondary hover:text-accent hover:border-accent/40 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
            <span className="text-[12px] text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <a
              href="https://github.com/AmitKashyap-21/AmitKashyap-21"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-text-secondary hover:text-accent hover:border-accent/40 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <span className="text-[12px] text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <a
              href="https://www.linkedin.com/in/amit-kashyap-b39b371a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-text-secondary hover:text-accent hover:border-accent/40 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <span className="text-[12px] text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
          </div>
        </div>
      </motion.div>

    </div>
  );

  if (hideHeader) {
    return content;
  }

  return (
    <SectionWrapper id="contact" title={title} subtitle={subtitle}>
      {content}
    </SectionWrapper>
  );
}
