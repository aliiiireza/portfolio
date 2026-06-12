import { getFeaturedProjects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { ProjectGrid } from "@/features/projects/ProjectGrid";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            label="Featured"
            title="Highlighted projects"
            description="Flagship projects from Honeyland — a Solana play-to-earn game, its NFT ecosystem explorer, and a Telegram prediction app."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <ProjectGrid projects={featured} showFilter={false} />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-12 text-center">
            <a
              href="/#projects"
              className="text-sm font-medium text-accent transition-colors hover:text-accent/80"
            >
              View all projects &darr;
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
