"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
};

export function SectionHeader({ eyebrow = "Portfolio", title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.4 }}
      className="mb-8"
    >
      <p className="text-xs uppercase tracking-[0.24em] text-sky-300">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      <p className="mt-3 max-w-2xl text-slate-300">{subtitle}</p>
    </motion.div>
  );
}
