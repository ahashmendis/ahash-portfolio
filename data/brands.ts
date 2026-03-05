export type BrandSummary = {
  slug: "lenscape" | "hover" | "nexscape" | "growthscape";
  name: string;
  category: string;
  description: string;
  href: string;
};

export const brandEcosystem: BrandSummary[] = [
  {
    slug: "lenscape",
    name: "Lenscape Studios",
    category: "Video Production Studio",
    description:
      "Lenscape Studios is a cinematic video production studio that focuses on storytelling-driven visual work for weddings, events, and commercial productions.",
    href: "/brands/lenscape",
  },
  {
    slug: "hover",
    name: "Hover by Ahash",
    category: "Drone Videography",
    description:
      "Hover by Ahash provides professional aerial cinematography for landscapes, real estate properties, and events.",
    href: "/brands/hover",
  },
  {
    slug: "nexscape",
    name: "Nexscape",
    category: "Technology Startup",
    description:
      "Nexscape is a technology startup building innovative digital solutions, scalable platforms, and future-ready systems.",
    href: "/brands/nexscape",
  },
  {
    slug: "growthscape",
    name: "Growthscape",
    category: "Digital Marketing & Social Media Growth Agency",
    description:
      "Growthscape helps brands scale through content strategy, social media management, and targeted digital growth campaigns.",
    href: "/brands/growthscape",
  },
];

export function getLogoCandidates(slug: string, variant: "long" | "short"): string[] {
  const preferred = variant === "long" ? ["long", "logo", "short"] : ["short", "logo", "long"];
  const exts = ["png", "webp", "jpg", "jpeg", "svg"];
  const candidates: string[] = [`/api/brand-logo/${slug}?variant=${variant}`];

  for (const baseName of preferred) {
    for (const ext of exts) {
      candidates.push(`/brands/${slug}/${baseName}.${ext}`);
    }
  }

  for (const ext of exts) {
    candidates.push(`/brands/${slug}.${ext}`);
  }

  return [
    ...new Set(candidates),
  ];
}
