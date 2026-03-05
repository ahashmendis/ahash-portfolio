"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/data/socialLinks";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/90">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(14,165,233,0.2),transparent_30%),radial-gradient(circle_at_90%_90%,rgba(56,189,248,0.15),transparent_30%)]" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          className="text-sm uppercase tracking-[0.2em] text-slate-400"
        >
          Connect with Ahash
        </motion.p>

        <div className="flex flex-wrap gap-3">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.35 }}
              viewport={{ once: true, amount: 0.7 }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="rounded-full border border-white/20 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 transition hover:border-sky-300/50 hover:text-white"
            >
              {social.name}
            </motion.a>
          ))}
        </div>

        <p className="text-xs text-slate-500">© {new Date().getFullYear()} Ahash Mendis. All rights reserved.</p>
      </div>
    </footer>
  );
}
