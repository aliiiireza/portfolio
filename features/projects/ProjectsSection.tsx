import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { ProjectGrid } from "./ProjectGrid";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            label="Projects"
            title="Selected work"
            description="Blockchain games, NFT explorers, Telegram Mini Apps, and real-time platforms built at Honeyland, Didanist, and Signal Group."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <ProjectGrid projects={projects} />
        </FadeIn>
      </div>
    </section>
  );
}
