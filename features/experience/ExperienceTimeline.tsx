import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { DateRange } from "./DateRange";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            label="Experience"
            title="Where I've built"
            description="From web games and blockchain apps to IoT dashboards and enterprise panels — across Hexagon Studio, Signal Group, and beyond."
          />
        </FadeIn>

        <div className="relative">
          <div
            className="absolute left-0 top-0 hidden h-full w-px bg-border md:left-[7.5rem] md:block"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <FadeIn key={exp.id} delay={index * 0.1}>
                <article className="relative md:grid md:grid-cols-[7.5rem_1fr] md:gap-8">
                  <div className="mb-2 md:mb-0 md:text-right">
                    <DateRange range={exp.dateRange} />
                    {exp.location && (
                      <p className="mt-1 text-xs text-muted">{exp.location}</p>
                    )}
                  </div>

                  <div className="relative rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/20 md:ml-4">
                    <div
                      className="absolute -left-[1.8125rem] top-8 hidden h-3 w-3 rounded-full border-2 border-accent bg-background md:block"
                      aria-hidden="true"
                    />

                    <header>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="mt-1 text-muted">{exp.company}</p>
                    </header>

                    <ul className="mt-4 space-y-2" role="list">
                      {exp.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex gap-3 text-sm leading-relaxed text-muted"
                        >
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                            aria-hidden="true"
                          />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
