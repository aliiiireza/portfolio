"use client";

import { getTechMeta } from "@/lib/tech-stack";
import { cn } from "@/lib/utils";

interface ProjectFilterProps {
  technologies: string[];
  activeFilter: string | null;
  onFilterChange: (tech: string | null) => void;
}

export function ProjectFilter({
  technologies,
  activeFilter,
  onFilterChange,
}: ProjectFilterProps) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="Filter projects by technology"
    >
      <button
        onClick={() => onFilterChange(null)}
        className={cn(
          "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
          activeFilter === null
            ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
            : "bg-surface-elevated text-muted hover:bg-surface-hover hover:text-foreground"
        )}
        aria-pressed={activeFilter === null}
      >
        All
      </button>
      {technologies.map((tech) => (
        <button
          key={tech}
          onClick={() => onFilterChange(tech)}
          className={cn(
            "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
            activeFilter === tech
              ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
              : "bg-surface-elevated text-muted hover:bg-surface-hover hover:text-foreground"
          )}
          aria-pressed={activeFilter === tech}
        >
          {getTechMeta(tech).label}
        </button>
      ))}
    </div>
  );
}
