"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BrandCard } from "@/components/BrandCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { CarouselGallery } from "@/components/CarouselGallery";
import { NavigationCard } from "@/components/NavigationCard";
import { SkillCard } from "@/components/SkillCard";
import { ContactSection } from "@/components/ContactSection";
import { brandEcosystem } from "@/data/brands";
import { StatsSection } from "@/components/StatsSection";
import { TechStack } from "@/components/TechStack";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { VisionSection } from "@/components/VisionSection";
import { CTASection } from "@/components/CTASection";

const navigationItems = [
  { title: "Web Development", href: "#web-dev", icon: "Web Development" },
  { title: "Software Development", href: "#software-tools", icon: "Software Development" },
  { title: "Video Production", href: "#video-production", icon: "Video Production" },
  { title: "Drone Cinematography", href: "#drone-videography", icon: "Drone Cinematography" },
  { title: "Social Media", href: "#social-projects", icon: "Social Media" },
  { title: "Brand Ecosystem", href: "#brands", icon: "Brands" },
];

const skillCategories = [
  {
    title: "Web Development",
    icon: "Web",
    skills: ["Next.js", "React", "Tailwind", "TypeScript"],
  },
  {
    title: "Software Development",
    icon: "Software",
    skills: ["Software Architecture", "Automation", "Digital Tools"],
  },
  {
    title: "Video Production",
    icon: "Video",
    skills: ["Cinematic Storytelling", "Event Video Production", "Brand Films"],
  },
  {
    title: "Drone Cinematography",
    icon: "Drone",
    skills: ["Aerial Cinematography", "Real Estate Drone Filming", "Landscape Visuals"],
  },
  {
    title: "Social Media Management",
    icon: "Social",
    skills: ["Digital Brand Building", "Content Production", "Platform Strategy"],
  },
];

const recentProjects = [
  {
    title: "Menro Furniture Website",
    type: "Web",
    description:
      "Website for Menro Furniture focused on furniture products, visual catalog presentation, and a clean shopping experience.",
    technologies: ["WordPress", "Responsive Web Design", "Product Catalog"],
    href: "https://www.menrofurniture.com",
    previewImage:
      "https://static.wixstatic.com/media/ea26fd_6a75d4e07469483aadda0a0a67b00be5~mv2.jpg/v1/fill/w_1340,h_893,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ea26fd_6a75d4e07469483aadda0a0a67b00be5~mv2.jpg",
  },
];

const webProjects = [
  {
    title: "Menro Furniture Website",
    type: "Web",
    description:
      "Website developed for Menro Furniture to present products and brand information in a modern storefront style.",
    technologies: ["WordPress", "Responsive Web Design", "Visual Content Layout"],
    href: "https://www.menrofurniture.com",
    previewImage:
      "https://static.wixstatic.com/media/ea26fd_6a75d4e07469483aadda0a0a67b00be5~mv2.jpg/v1/fill/w_1340,h_893,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ea26fd_6a75d4e07469483aadda0a0a67b00be5~mv2.jpg",
  },
];

const softwareProjects = [
  {
    title: "Creative Technology Workflows",
    type: "Software",
    description: "Digital systems that support content production, brand building, and project delivery.",
    technologies: ["Software Development", "Automation", "Workflow Design"],
    href: "/#projects",
  },
  {
    title: "Tech Builder Utilities",
    type: "Software",
    description: "Utility-focused software implementations for fast creative and operational execution.",
    technologies: ["Technical Development", "System Design", "Digital Tools"],
    href: "/#projects",
  },
];

const videoGallery = [
  {
    tag: "Lenscape Studios",
    title: "Wedding Cinematography",
    description: "Cinematic wedding productions centered on emotional storytelling.",
  },
  {
    tag: "Lenscape Studios",
    title: "Event Video Production",
    description: "Event-focused visual coverage with cinematic quality and clean delivery.",
  },
  {
    tag: "Lenscape Studios",
    title: "Brand and Music Visuals",
    description: "Brand content and music video production crafted for strong digital impact.",
  },
];

const droneGallery = [
  {
    tag: "Hover by Ahash",
    title: "Aerial Cinematography",
    description: "Professional drone visuals for cinematic landscape and destination storytelling.",
  },
  {
    tag: "Hover by Ahash",
    title: "Real Estate Drone Filming",
    description: "Property-focused aerial filming for real estate presentations and campaigns.",
  },
  {
    tag: "Hover by Ahash",
    title: "Event Drone Coverage",
    description: "Aerial event coverage capturing scale, atmosphere, and movement.",
  },
];

const socialProjects = [
  {
    title: "Instagram Brand Building",
    type: "Social Media",
    description: "Ongoing digital brand presence through visual storytelling and content consistency.",
    technologies: ["Instagram", "Content Production", "Brand Positioning"],
    href: "https://instagram.com/ahash_men",
  },
  {
    title: "Facebook Community Presence",
    type: "Social Media",
    description: "Public brand communication and creative updates for audience connection.",
    technologies: ["Facebook", "Social Content", "Community Reach"],
    href: "https://facebook.com/ahashmen",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(56,189,248,0.15),transparent_35%),radial-gradient(circle_at_90%_15%,rgba(14,165,233,0.12),transparent_40%),radial-gradient(circle_at_50%_85%,rgba(59,130,246,0.1),transparent_45%)]" />
      <Navbar />
      <Hero />

      {/* New additions */}
      <StatsSection />
      <FeaturedProjects />

      {/* Previous sections restored */}
      <section className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        <SectionHeader
          eyebrow="Navigation"
          title="Explore the Ecosystem"
          subtitle="Navigate through web development, software, video production, drone work, social media, and brands."
        />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {navigationItems.map((item) => (
            <NavigationCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section id="brands" className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <SectionHeader
          eyebrow="Brands"
          title="Brand Ecosystem"
          subtitle="Creative and technical brands led by Ahash Mendis."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {brandEcosystem.map((brand) => (
            <BrandCard key={brand.name} {...brand} />
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <SectionHeader
          eyebrow="Skills"
          title="Skills Dashboard"
          subtitle="Categorized capabilities across development, production, and digital brand building."
        />
        <div className="rounded-3xl border border-cyan-300/20 bg-slate-950/80 p-6 sm:p-8">
          <div className="mb-6 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <p className="ml-3 text-xs uppercase tracking-[0.2em] text-slate-400">Ahash Skills</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <SkillCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <SectionHeader
          eyebrow="Recent Work"
          title="Recent Projects"
          subtitle="Featured work across web, software, video, drone, and social media categories."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {recentProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section id="portfolio-categories" className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <SectionHeader
          eyebrow="Portfolio"
          title="Portfolio Categories"
          subtitle="Dedicated visual sections for each core discipline in the ecosystem."
        />

        <section id="web-dev" className="pt-2">
          <SectionHeader
            eyebrow="Web Development"
            title="Web Development"
            subtitle="Websites and web experiences built for modern digital brands."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {webProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section id="software-tools" className="pt-14">
          <SectionHeader
            eyebrow="Software Development"
            title="Software Development"
            subtitle="Technology solutions and software systems supporting creative execution."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {softwareProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section id="video-production" className="pt-14">
          <SectionHeader
            eyebrow="Video Production"
            title="Video Production"
            subtitle="Storytelling-driven visuals by Lenscape Studios."
          />
          <CarouselGallery items={videoGallery} />
        </section>

        <section id="drone-videography" className="pt-14">
          <SectionHeader
            eyebrow="Drone Cinematography"
            title="Drone Cinematography"
            subtitle="Professional aerial cinematography by Hover by Ahash."
          />
          <CarouselGallery items={droneGallery} />
        </section>

        <section id="social-projects" className="pt-14">
          <SectionHeader
            eyebrow="Social Media"
            title="Social Media Projects"
            subtitle="Digital brand building work across social platforms."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {socialProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </section>

      {/* New additions */}
      <TechStack />
      <VisionSection />
      <ContactSection />
      <CTASection />
    </main>
  );
}
