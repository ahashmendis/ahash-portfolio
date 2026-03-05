"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
      <div className="space-y-5">
        {experiences.map((item, index) => (
          <motion.article
            key={`${item.role}-${item.company}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -4 }}
            className="relative rounded-2xl border border-cyan-300/25 bg-white/5 p-6 backdrop-blur-md"
          >
            <div className="pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-cyan-300/80 to-blue-400/40" />
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">{item.period}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{item.role}</h3>
            <p className="mt-1 text-slate-300">
              {item.company} · {item.type} · {item.location}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{item.summary}</p>
            <ul className="mt-4 space-y-2">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="text-sm text-slate-200">
                  • {highlight}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      <motion.a
        href="https://linkedin.com/in/ahashmendis"
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -3, scale: 1.01 }}
        className="mt-8 inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-5 py-3 text-sm text-cyan-100"
      >
        View full experience on LinkedIn
      </motion.a>
    </section>
  );
}
