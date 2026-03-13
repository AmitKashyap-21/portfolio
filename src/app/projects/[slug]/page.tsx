import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  CheckCircle2,
  Layers,
  Target,
  Cpu,
  Rocket,
} from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Amit Kashyap`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage(props: PageProps) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const sections = [
    {
      icon: Target,
      title: "Problem Statement",
      content: project.problem,
    },
    {
      icon: Layers,
      title: "System Architecture",
      content: project.architecture,
    },
    {
      icon: Cpu,
      title: "Technologies Used",
      content: null,
      list: project.technologies,
    },
    {
      icon: CheckCircle2,
      title: "Evaluation Metrics",
      content: null,
      list: project.metrics,
    },
    {
      icon: Rocket,
      title: "Deployment Strategy",
      content: project.deployment,
    },
  ];

  return (
    <div className="min-h-screen py-20 md:py-28 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Back */}
        <Link
          href="/#projects"
          className="md:hidden self-center inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to Projects
        </Link>

        {/* Header */}
        <header className="mb-16 flex flex-col items-center text-center">
          <span className="text-[12px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20 mb-6 font-mono">
            {project.category === "genai"
              ? "Generative AI"
              : project.category === "ml"
              ? "Machine Learning"
              : project.category === "cv"
              ? "Computer Vision"
              : "Full Stack"}
          </span>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
            {project.title}
          </h1>

          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-balance mb-8">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono rounded-md bg-white/5 text-text-secondary border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center justify-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 text-text-primary text-sm font-semibold hover:border-accent hover:text-accent transition-all duration-300"
              >
                <Github size={16} />
                View Source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent text-background text-sm font-semibold hover:shadow-[0_4px_20px_rgba(0,255,195,0.3)] transition-all duration-300"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
 
          <div className="w-16 h-[3px] bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mx-auto mt-12" />
        </header>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title} className="premium-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <section.icon size={20} />
                </div>
                <h2 className="text-xl font-bold text-text-primary">
                  {section.title}
                </h2>
              </div>

              {section.content && (
                <p className="text-text-secondary leading-relaxed">
                  {section.content}
                </p>
              )}

              {section.list && (
                <ul className="space-y-2">
                  {section.list.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-text-secondary"
                    >
                      <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
