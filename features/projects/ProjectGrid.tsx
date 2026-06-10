"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/types";
import { getAllTechStacks } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilter } from "./ProjectFilter";

interface ProjectGridProps {
  projects: Project[];
  showFilter?: boolean;
}

export function ProjectGrid({ projects, showFilter = true }: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const technologies = useMemo(() => getAllTechStacks(projects), [projects]);

  const filtered = useMemo(() => {
    if (!activeFilter) return projects;
    return projects.filter((p) => p.techStack.includes(activeFilter));
  }, [projects, activeFilter]);

  return (
    <div>
      {showFilter && (
        <div className="mb-10">
          <ProjectFilter
            technologies={technologies}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>
      )}

      <div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        role="list"
        aria-label="Projects"
      >
        {filtered.map((project, index) => (
          <div key={project.id} role="listitem">
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-muted">
          No projects match this filter.
        </p>
      )}
    </div>
  );
}
