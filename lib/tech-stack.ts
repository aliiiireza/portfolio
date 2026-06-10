export type TechCategory =
  | "framework"
  | "language"
  | "animation"
  | "data"
  | "platform";

export interface TechMeta {
  label: string;
  category: TechCategory;
}

const TECH_REGISTRY: Record<string, TechMeta> = {
  "React.js": { label: "React.js", category: "framework" },
  "Next.js": { label: "Next.js", category: "framework" },
  "Nuxt.js": { label: "Nuxt.js", category: "framework" },
  "Vue.js": { label: "Vue.js", category: "framework" },
  TypeScript: { label: "TypeScript", category: "language" },
  "Phaser 3": { label: "Phaser 3", category: "animation" },
  "Spine 2D": { label: "Spine 2D", category: "animation" },
  Rive: { label: "Rive", category: "animation" },
  GraphQL: { label: "GraphQL", category: "data" },
  "Apollo Client": { label: "Apollo Client", category: "data" },
  Highcharts: { label: "Highcharts", category: "data" },
  WebSockets: { label: "WebSockets", category: "data" },
  Leaflet: { label: "Leaflet", category: "data" },
  Stripe: { label: "Stripe Payments", category: "platform" },
  Solana: { label: "Solana", category: "platform" },
  "Telegram Mini Apps": {
    label: "Telegram Mini Apps",
    category: "platform",
  },
};

export const techCategoryStyles: Record<TechCategory, string> = {
  framework:
    "border-accent/25 bg-accent/10 text-accent shadow-sm shadow-accent/5",
  language:
    "border-sky-500/20 bg-sky-500/10 text-sky-400 shadow-sm shadow-sky-500/5",
  animation:
    "border-violet-500/20 bg-violet-500/10 text-violet-400 shadow-sm shadow-violet-500/5",
  data: "border-amber-500/20 bg-amber-500/10 text-amber-400 shadow-sm shadow-amber-500/5",
  platform:
    "border-emerald-500/20 bg-emerald-500/10 text-emerald-400 shadow-sm shadow-emerald-500/5",
};

export function getTechMeta(tech: string): TechMeta {
  return (
    TECH_REGISTRY[tech] ?? {
      label: tech,
      category: "data",
    }
  );
}

export function resolveTechStack(techs: string[]): TechMeta[] {
  return techs.map(getTechMeta);
}
