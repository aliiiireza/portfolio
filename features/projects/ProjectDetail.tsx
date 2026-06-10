import { ArrowLeft, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";
import type { Project } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { TechStackList } from "@/components/ui/TechStackList";
import { ProjectGallery } from "./ProjectGallery";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article>
      <div className="mb-8">
        <Button href="/#projects" variant="ghost" size="sm">
          <ArrowLeft size={16} />
          Back to projects
        </Button>
      </div>

      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
          {project.longDescription}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.links?.live && (
            <Button href={project.links.live} external variant="primary">
              <ExternalLink size={16} />
              Live Demo
            </Button>
          )}
          {project.links?.github && (
            <Button href={project.links.github} external variant="secondary">
              <GitHubIcon size={16} />
              Source Code
            </Button>
          )}
        </div>
      </header>

      <ProjectGallery images={project.images} title={project.title} />

      <div className="mt-12 space-y-10">
        {project.role && (
          <section>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              Role
            </h2>
            <p className="max-w-3xl leading-relaxed text-muted">{project.role}</p>
          </section>
        )}

        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Tech Stack
          </h2>
          <TechStackList techs={project.techStack} size="md" />
        </section>
      </div>

      {project.features && project.features.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Key Features
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2" role="list">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-3 rounded-xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted"
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
