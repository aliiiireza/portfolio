import type { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Alireza Abdollahi",
  role: "Frontend Engineer",
  tagline:
    "Building web applications, real-time systems, and interactive web games for 10+ years.",
  bio: "Frontend Engineer with 10+ years of experience building web applications, real-time systems, and interactive web games. Proficient in TypeScript, React, Next.js, and Vue/Nuxt.js. Deeply experienced in integrating rich animation frameworks (Phaser, Rive, Spine), handling intensive data streams over WebSockets, and optimizing frontend performance for heavy user traffic. A practical engineer focused on clean code, responsive layouts, and stable product delivery.",
  email: "aliiiireza.dev@gmail.com",
  phone: "+90 501 703 7152",
  location: "Istanbul, Türkiye",
  links: {
    github: "https://github.com/aliiiireza",
    linkedin: "https://www.linkedin.com/in/aliiiireza/",
  },
};

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
] as const;
