"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-14 sm:pb-24 sm:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative overflow-hidden rounded-3xl border border-cyan-300/25 bg-gradient-to-br from-cyan-900/25 via-blue-900/30 to-slate-900/75 p-10 text-center backdrop-blur-md sm:p-14"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.35),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.25),transparent_40%)]" />
        <div className="relative">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Let&apos;s Build Something Great Together</h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <motion.div whileHover={{ y: -3, scale: 1.02 }}>
              <a href="https://wa.me/94701987004" target="_blank" rel="noreferrer">
                <Button size="lg" className="rounded-full">
                  Work With Me
                </Button>
              </a>
            </motion.div>
            <motion.div whileHover={{ y: -3, scale: 1.02 }}>
              <a href="/contact">
                <Button variant="secondary" size="lg" className="rounded-full">
                  Contact
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
