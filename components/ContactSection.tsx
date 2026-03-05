"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const buttons = [
  { label: "WhatsApp", href: "https://wa.me/94701987004", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/ahashmendis", external: true },
  { label: "Instagram", href: "https://instagram.com/ahash_men", external: true },
  { label: "Facebook", href: "https://facebook.com/ahashmen", external: true },
];

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-slate-900/75 via-blue-950/45 to-cyan-900/20 p-8 backdrop-blur-md sm:p-12"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.3),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(6,182,212,0.25),transparent_35%)]" />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.24em] text-sky-300">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Let&apos;s collaborate.</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Open for technology work, video production, drone cinematography, and digital brand building.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <motion.div whileHover={{ y: -3, scale: 1.02 }}>
              <a href="/contact">
                <Button variant="default" className="rounded-full">
                  Send Message
                </Button>
              </a>
            </motion.div>
            {buttons.map((button) => (
              <motion.div key={button.label} whileHover={{ y: -3, scale: 1.02 }}>
                <a href={button.href} target={button.external ? "_blank" : undefined} rel={button.external ? "noreferrer" : undefined}>
                  <Button variant="secondary" className="rounded-full">
                    {button.label}
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
