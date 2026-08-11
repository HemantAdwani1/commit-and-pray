import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PROJECTS } from "@/lib/content";
import type { Project } from "@/types";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200/70 bg-card shadow-soft transition-shadow duration-300 hover:shadow-soft-lg dark:border-slate-800 dark:bg-card-dark">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={`Screenshot of the ${project.title} website`}
          loading="lazy"
          decoding="async"
          width={1200}
          height={750}
          className="h-full w-full object-cover object-left transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/0 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center gap-3 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-primary"
          >
            <ExternalLink size={13} /> Live demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur"
          >
            <Github size={13} /> Code
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-ink dark:text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted dark:text-muted-dark">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-card py-24 dark:bg-card-dark/40 sm:py-32">
      <div className="container-content">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected work"
          description="A handful of recent projects — each shipped to production and still live."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
