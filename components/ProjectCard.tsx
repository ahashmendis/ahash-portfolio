"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ProjectCardProps = {
  title: string;
  type: string;
  description: string;
  technologies: string[];
  href: string;
  previewImage?: string;
};

export function ProjectCard({ title, type, description, technologies, href, previewImage }: ProjectCardProps) {
  return (
    <motion.article whileHover={{ y: -5, scale: 1.01 }} transition={{ type: "spring", stiffness: 220, damping: 20 }}>
      <Card className="group relative overflow-hidden border-cyan-300/20 bg-gradient-to-br from-slate-900/80 to-slate-900/45">
        {previewImage ? (
          <div
            className="mx-6 mt-6 h-40 w-[calc(100%-3rem)] rounded-xl border border-white/10 bg-cover bg-center"
            style={{ backgroundImage: `url(${previewImage})` }}
          />
        ) : null}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
          <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-300/20 blur-2xl" />
        </div>
        <CardContent className="relative p-6">
          <Badge variant="default">{type}</Badge>
          <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="border-white/15 text-slate-200">
                {tech}
              </Badge>
            ))}
          </div>
          <Link href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="mt-5 inline-flex">
            <Button variant="ghost" className="px-0 text-cyan-200 hover:text-cyan-100">
              View project details
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.article>
  );
}
