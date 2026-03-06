"use client";

import { motion } from "framer-motion";

export function VisionSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-white/5 p-10 text-center backdrop-blur-md sm:p-14"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url('/ai/innovation-bg.png')" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/35 via-transparent to-slate-900/45" />
        <div className="relative mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.24em] text-sky-300">Vision</p>
          <h2 className="mt-2 text-4xl font-semibold text-white sm:text-5xl">My Vision</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-2xl leading-relaxed text-slate-200">
            To build an ecosystem of digital brands that combine technology, creativity, and innovation to create
            impactful digital experiences.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
