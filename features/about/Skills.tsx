import { skillGroups } from "@/data/skills";
import { Badge } from "@/components/ui/Badge";

export function Skills() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {skillGroups.map((group) => (
        <div
          key={group.category}
          className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/20"
        >
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <Badge key={skill} variant="default">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
