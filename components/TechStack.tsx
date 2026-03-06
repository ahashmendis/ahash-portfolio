"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";
import { Cloud, Code2, Cpu, Layers, Server, Sparkles } from "lucide-react";

const tech = [
  { name: "Next.js", icon: Layers },
  { name: "React", icon: Code2 },
  { name: "Node.js", icon: Server },
  { name: "TailwindCSS", icon: Sparkles },
  { name: "AI Tools", icon: Cpu },
  { name: "Cloud Platforms", icon: Cloud },
];

export function TechStack() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
      <SectionHeader
        eyebrow="Stack"
        title="Technology Stack"
        subtitle="Core technologies powering development, automation, and product delivery."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tech.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.35 }}
              whileHover={{ y: -6, scale: 1.015 }}
            >
              <Card className="group overflow-hidden border-cyan-300/20 bg-gradient-to-br from-slate-900/85 via-slate-900/60 to-cyan-900/20 transition hover:border-cyan-300/65">
                <CardContent className="p-6">
                  <Badge className="gap-2 border-cyan-300/35 bg-cyan-300/10 text-cyan-100">
                    <Icon className="size-3.5" />
                    Tech
                  </Badge>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{item.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
