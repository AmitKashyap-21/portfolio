import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 pt-10 pb-6 border-t border-white/5 bg-surface/40 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-[family-name:var(--font-caveat)] text-xl text-accent">
              Amit Kashyap
            </p>
            <p className="text-sm text-text-secondary mt-1">
              AI & Machine Learning Engineer
            </p>
          </div>

          <div className="flex items-center gap-6 justify-center">
            <a
              href="https://github.com/AmitKashyap-21/AmitKashyap-21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/amit-kashyap-b39b371a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:amitkashyap1164@gmail.com"
              className="text-text-secondary hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-text-secondary">
            © 2026 Amit Kashyap. Turning data into intelligent systems.
          </p>
        </div>
      </div>
    </footer>
  );
}
