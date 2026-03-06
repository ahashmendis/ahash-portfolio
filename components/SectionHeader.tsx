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
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="mb-8"
    >
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.06, duration: 0.4 }}
        viewport={{ once: true, amount: 0.4 }}
        className="text-xs uppercase tracking-[0.24em] text-sky-300"
      >
        {eyebrow}
      </motion.p>
      <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      <motion.div
        initial={{ width: 0, opacity: 0.4 }}
        whileInView={{ width: 112, opacity: 1 }}
        transition={{ delay: 0.12, duration: 0.55, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="mt-3 h-px bg-gradient-to-r from-cyan-300/90 via-sky-300/60 to-transparent"
      />
      <p className="mt-3 max-w-2xl text-slate-300">{subtitle}</p>
    </motion.div>
  );
}
