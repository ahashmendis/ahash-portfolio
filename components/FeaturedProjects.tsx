"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

      <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -5 }}
        >
          <Card className="overflow-hidden border-cyan-300/20 bg-gradient-to-br from-slate-900/90 to-cyan-950/20">
            <div className="h-72 w-full bg-cover bg-center" style={{ backgroundImage: "url('/ai/builder-visual.png')" }} />
            <CardContent className="p-6">
              <Badge className="border-cyan-300/40 bg-cyan-300/10 text-cyan-100">Project Illustration</Badge>
              <h3 className="mt-4 text-2xl font-semibold text-white">Builder Systems Showcase</h3>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -5, scale: 1.01 }}
            >
              <Card className="border-cyan-300/20 bg-white/5 transition hover:border-cyan-300/60">
                <CardContent className="p-5">
                  <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
