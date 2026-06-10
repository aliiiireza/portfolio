import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAllTechStacks(
  projects: { techStack: string[] }[]
): string[] {
  const stacks = new Set<string>();
  for (const project of projects) {
    for (const tech of project.techStack) {
      stacks.add(tech);
    }
  }
  return Array.from(stacks).sort();
}
