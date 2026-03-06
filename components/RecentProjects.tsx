"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedGradient } from "@/components/AnimatedGradient";

type RecentProject = {
  title: string;
  type: string;
  description: string;
  href: string;
  previewImage: string;
};

type RecentProjectsProps = {
  projects: RecentProject[];
};

function toInstagramEmbed(url: string): string | null {
  const match = url.match(/instagram\.com\/(?:p|reel)\/([^/?#]+)/i);
  if (!match?.[1]) return null;
  return `https://www.instagram.com/reel/${match[1]}/embed`;
}

function InfoCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-white/10 p-4 backdrop-blur-md">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p>
    </div>
  );
}

export function RecentProjects({ projects }: RecentProjectsProps) {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl overflow-hidden px-6 py-14 sm:py-20">
      <AnimatedGradient className="opacity-60" />
      <SectionHeader
        eyebrow="Recent Work"
        title="Recent Projects"
        subtitle="Reel-style previews from recent brand and client-focused production work."
      />
      <div className="grid grid-cols-1 gap-8 justify-items-center md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => {
          const instagramEmbed = project.href.startsWith("http") ? toInstagramEmbed(project.href) : null;

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="w-full max-w-[300px]"
            >
              {project.href.startsWith("http") ? (
                <a href={project.href} target="_blank" rel="noreferrer" className="group block">
                  {instagramEmbed ? (
                    <div className="relative w-[260px] aspect-[9/16] overflow-hidden rounded-xl border border-cyan-300/35 bg-slate-900 p-1.5 shadow-[0_12px_35px_rgba(8,145,178,0.18)]">
                      <div className="relative h-full w-full overflow-hidden rounded-lg bg-slate-950">
                        <iframe
                          src={instagramEmbed}
                          title={project.title}
                          loading="lazy"
                          allow="autoplay"
                          className="absolute inset-0 h-full w-full border-0"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-[260px] aspect-[9/16] overflow-hidden rounded-xl border border-cyan-300/35 bg-slate-900 p-1.5 shadow-[0_12px_35px_rgba(8,145,178,0.18)]">
                      <div className="relative h-full w-full overflow-hidden rounded-lg bg-slate-950">
                        <Image
                          src={project.previewImage}
                          alt={project.title}
                          fill
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="rounded-full bg-cyan-300/20 p-4 text-white backdrop-blur-md transition group-hover:scale-110">
                            ▶
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <InfoCard title={project.title} description={project.description} />
                </a>
              ) : (
                <Link href={project.href} className="group block">
                  <div className="relative w-[260px] aspect-[9/16] overflow-hidden rounded-xl border border-cyan-300/35 bg-slate-900 p-1.5 shadow-[0_12px_35px_rgba(8,145,178,0.18)]">
                    <div className="relative h-full w-full overflow-hidden rounded-lg bg-slate-950">
                      <Image
                        src={project.previewImage}
                        alt={project.title}
                        fill
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-full bg-cyan-300/20 p-4 text-white backdrop-blur-md transition group-hover:scale-110">
                          ▶
                        </div>
                      </div>
                    </div>
                  </div>
                  <InfoCard title={project.title} description={project.description} />
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
