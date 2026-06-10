export interface ProjectLinks {
  github?: string;
  live?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  techStack: string[];
  role?: string;
  features?: string[];
  featured?: boolean;
  links?: ProjectLinks;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  dateRange: string;
  location?: string;
  achievements: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  phone?: string;
  location: string;
  links: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
}

export interface Education {
  degree: string;
  institution: string;
  dateRange: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface NavLink {
  label: string;
  href: string;
}
