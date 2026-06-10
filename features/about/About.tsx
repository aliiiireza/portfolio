import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { languages } from "@/data/languages";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { Skills } from "./Skills";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            label="About"
            title="Practical engineering, polished delivery"
            description={profile.bio}
          />
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-3">
          <FadeIn className="lg:col-span-1" delay={0.1}>
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-surface p-6">
                <dl className="space-y-4">
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                      Location
                    </dt>
                    <dd className="mt-1 text-foreground">{profile.location}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-accent transition-colors hover:text-accent/80"
                      >
                        {profile.email}
                      </a>
                    </dd>
                  </div>
                  {profile.phone && (
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                        Phone
                      </dt>
                      <dd className="mt-1">
                        <a
                          href={`tel:${profile.phone.replace(/\s/g, "")}`}
                          className="text-foreground transition-colors hover:text-accent"
                        >
                          {profile.phone}
                        </a>
                      </dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                      Experience
                    </dt>
                    <dd className="mt-1 text-foreground">10+ years</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                  Education
                </h3>
                <ul className="space-y-4">
                  {education.map((item) => (
                    <li key={item.institution}>
                      <p className="text-sm font-medium text-foreground">
                        {item.degree}
                      </p>
                      <p className="mt-1 text-sm text-muted">
                        {item.institution}
                      </p>
                      <p className="mt-0.5 text-xs text-muted">
                        {item.dateRange}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                  Languages
                </h3>
                <ul className="space-y-3">
                  {languages.map((lang) => (
                    <li
                      key={lang.name}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="font-medium text-foreground">
                        {lang.name}
                      </span>
                      <span className="text-muted">{lang.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-2" delay={0.2}>
            <Skills />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
