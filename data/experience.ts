export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  highlights: string[];
};

export const experiences: ExperienceItem[] = [
  {
    role: "Founder & Creative Director",
    company: "Lenscape Studios",
    period: "2022 - Present",
    location: "Colombo, Sri Lanka",
    type: "Full-time",
    summary:
      "Leading cinematic video production projects with a focus on storytelling-driven brand and wedding films.",
    highlights: [
      "Directed end-to-end video productions from concept to post",
      "Built creative systems for social-first video deliverables",
      "Managed client campaigns across weddings, events, and brands",
    ],
  },
  {
    role: "Founder",
    company: "Hover by Ahash",
    period: "2023 - Present",
    location: "Sri Lanka",
    type: "Full-time",
    summary:
      "Running a drone cinematography brand for landscape visuals, real estate campaigns, and event coverage.",
    highlights: [
      "Delivered aerial visual campaigns for premium properties",
      "Produced cinematic landscape and travel reels",
      "Created repeatable drone production workflows",
    ],
  },
  {
    role: "Digital Creator & Developer",
    company: "Independent",
    period: "2021 - Present",
    location: "Remote",
    type: "Contract / Freelance",
    summary:
      "Building websites, creative software utilities, and social growth systems for personal and client brands.",
    highlights: [
      "Developed modern web experiences using Next.js and Tailwind",
      "Built automation and AI-assisted creative tools",
      "Executed content systems for audience growth",
    ],
  },
];
