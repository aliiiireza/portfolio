import { Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="rounded-3xl border border-border bg-surface p-8 text-center sm:p-16">
            <SectionHeading
              label="Contact"
              title="Let's build something"
              description="Open to frontend engineering roles, consulting, and interesting collaborations."
              align="center"
              className="mb-8"
            />

            <div className="flex flex-col items-center gap-4">
              <Button href={`mailto:${profile.email}`} variant="primary" size="lg">
                <Mail size={18} />
                {profile.email}
              </Button>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
                {profile.phone && (
                  <a
                    href={`tel:${profile.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 transition-colors hover:text-accent"
                  >
                    <Phone size={16} />
                    {profile.phone}
                  </a>
                )}
                <span className="flex items-center gap-2">
                  <MapPin size={16} />
                  {profile.location}
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
