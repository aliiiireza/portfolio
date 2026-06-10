import { cn } from "@/lib/utils";
import {
  getTechMeta,
  techCategoryStyles,
  type TechCategory,
} from "@/lib/tech-stack";

interface TechStackListProps {
  techs: string[];
  limit?: number;
  size?: "sm" | "md";
  className?: string;
}

const sizeStyles = {
  sm: "px-2.5 py-1 text-[11px]",
  md: "px-3 py-1.5 text-xs",
};

export function TechStackList({
  techs,
  limit,
  size = "sm",
  className,
}: TechStackListProps) {
  const visible = limit ? techs.slice(0, limit) : techs;
  const overflow = limit && techs.length > limit ? techs.length - limit : 0;

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {visible.map((tech) => {
        const meta = getTechMeta(tech);
        return (
          <TechPill key={tech} label={meta.label} category={meta.category} size={size} />
        );
      })}
      {overflow > 0 && (
        <span
          className={cn(
            "inline-flex items-center rounded-full border border-border bg-surface-elevated font-medium text-muted",
            sizeStyles[size]
          )}
        >
          +{overflow}
        </span>
      )}
    </div>
  );
}

function TechPill({
  label,
  category,
  size,
}: {
  label: string;
  category: TechCategory;
  size: "sm" | "md";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border font-medium tracking-wide",
        sizeStyles[size],
        techCategoryStyles[category]
      )}
    >
      {label}
    </span>
  );
}
