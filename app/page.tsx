import { Hero } from "@/features/home/Hero";
import { FeaturedProjects } from "@/features/home/FeaturedProjects";
import { About } from "@/features/about/About";
import { ExperienceTimeline } from "@/features/experience/ExperienceTimeline";
import { ProjectsSection } from "@/features/projects/ProjectsSection";
import { Contact } from "@/features/contact/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <About />
      <ExperienceTimeline />
      <ProjectsSection />
      <Contact />
    </>
  );
}
