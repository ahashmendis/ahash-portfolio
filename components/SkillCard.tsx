"use client";

import { motion } from "framer-motion";

type SkillCardProps = {
  title: string;
  icon: string;
  skills: string[];
};

export function SkillCard({ title, icon, skills }: SkillCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ y: -5 }}
      className="rounded-2xl border border-cyan-300/20 bg-slate-950/80 p-5 shadow-[0_0_0_1px_rgba(125,211,252,0.12)]"
    >
      <div className="mb-4 flex items-center justify-between border-b border-cyan-200/15 pb-3">
        <h3 className="font-semibold text-cyan-100">{title}</h3>
        <span className="text-lg text-sky-300">{icon}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-200">
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
