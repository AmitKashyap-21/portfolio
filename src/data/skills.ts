import {
  Brain,
  BarChart3,
  Sparkles,
  Server,
  Wrench,
} from "lucide-react";

export interface SkillCategory {
  title: string;
  icon: typeof Brain;
  skills: string[];
  color: string;
  bgColor: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Machine Learning",
    icon: Brain,
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "MLflow"],
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "Data Science",
    icon: BarChart3,
    skills: ["Pandas", "NumPy", "Matplotlib", "SQL", "Jupyter"],
    color: "text-accent-secondary",
    bgColor: "bg-accent-secondary/10",
  },
  {
    title: "Generative AI",
    icon: Sparkles,
    skills: ["LangChain", "OpenAI API", "RAG Pipelines", "Prompt Engineering", "LLM Fine-tuning"],
    color: "text-accent-warm",
    bgColor: "bg-accent-warm/10",
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: ["Python", "FastAPI", "Docker", "Redis", "PostgreSQL"],
    color: "text-accent-green",
    bgColor: "bg-accent-green/10",
  },
  {
    title: "Tools & Infrastructure",
    icon: Wrench,
    skills: ["Git", "GitHub Actions", "AWS / GCP", "Kubernetes", "Streamlit"],
    color: "text-highlight",
    bgColor: "bg-highlight/10",
  },
];
