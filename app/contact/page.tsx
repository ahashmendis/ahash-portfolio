"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { socialLinks } from "@/data/socialLinks";

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <Navbar />

      <section className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <motion.div
          animate={{ x: [0, 18, -14, 0], y: [0, -12, 8, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="pointer-events-none absolute -left-16 top-8 h-52 w-52 rounded-full bg-sky-400/20 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -16, 12, 0], y: [0, 12, -8, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-10 top-24 h-60 w-60 rounded-full bg-cyan-300/10 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl"
        >
          <p className="text-xs uppercase tracking-[0.24em] text-sky-300">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight text-white sm:text-6xl">Ahash Mendis</h1>
          <p className="mt-4 max-w-3xl text-lg text-cyan-200">Digital Creator | Tech Builder | Video Producer</p>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Ahash Mendis is a multi-disciplinary digital creator working across technology, video production, drone
            cinematography, and digital brand building.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="relative z-10 mt-10"
        >
          <motion.a
            whileHover={{ y: -4, scale: 1.01 }}
            href="https://wa.me/94701987004"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex rounded-3xl border border-sky-300/30 bg-gradient-to-br from-slate-900 to-slate-800 p-8"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-sky-200">Direct Contact</p>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">WhatsApp</h2>
              <p className="mt-4 text-slate-300">Open direct chat</p>
            </div>
          </motion.a>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:pb-24">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-2xl font-semibold text-white sm:text-3xl"
        >
          Social Platforms
        </motion.h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.07, duration: 0.45 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="group rounded-2xl border border-white/15 bg-slate-900/70 p-6"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-sky-300">{social.name}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{social.name}</h3>
              <p className="mt-4 text-sm text-slate-300 transition group-hover:text-slate-100">Open link</p>
            </motion.a>
          ))}
        </div>
      </section>
    </main>
  );
}
