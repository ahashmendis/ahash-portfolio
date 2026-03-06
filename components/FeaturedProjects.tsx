"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";

const items = [
  {
    title: "AI Portfolio Platform",
    description: "A cinematic personal platform combining creative storytelling with high-performance web UX.",
  },
  {
    title: "Startup Brand Ecosystem Platform",
    description: "A multi-brand startup-style ecosystem website connecting products, media, and services.",
  },
  {
    title: "Cinematic Drone Visuals",
    description: "Aerial visual system for premium brand reels, event cinematography, and destination stories.",
  },
  {
    title: "Content Creation Systems",
    description: "Integrated content operations for social growth, campaign planning, and publishing consistency.",
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
      <SectionHeader
        eyebrow="Featured"
        title="Featured Projects"
        subtitle="Selected startup-style projects spanning technology, visuals, and brand growth systems."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -5, scale: 1.01 }}
          >
            <Card className="h-full border-cyan-300/20 bg-white/5 transition hover:border-cyan-300/60">
              <CardContent className="p-6">
                <h4 className="text-2xl font-semibold text-white">{item.title}</h4>
                <p className="mt-3 text-base leading-relaxed text-slate-300">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
