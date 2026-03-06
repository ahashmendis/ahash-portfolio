"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const particles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  top: `${(i * 13) % 100}%`,
  left: `${(i * 23) % 100}%`,
  delay: (i % 7) * 0.25,
  duration: 4 + (i % 4),
}));

export function Hero() {
  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, [0, 500], [0, 90]);

  return (
    <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden px-6 py-24 text-center">
      <motion.div style={{ y: translateY }} className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center opacity-45" style={{ backgroundImage: "url('/ai/ai-technology-bg.png')" }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.28),transparent_40%),radial-gradient(circle_at_86%_12%,rgba(14,165,233,0.22),transparent_40%),radial-gradient(circle_at_70%_82%,rgba(59,130,246,0.2),transparent_45%),linear-gradient(135deg,rgba(6,182,212,0.05)_0%,rgba(2,6,23,0)_50%,rgba(56,189,248,0.06)_100%)]" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute h-1.5 w-1.5 rounded-full bg-cyan-200/80"
            style={{ top: particle.top, left: particle.left }}
            animate={{ opacity: [0.2, 1, 0.2], y: [0, -16, 0], scale: [0.9, 1.2, 0.9] }}
            transition={{ duration: particle.duration, delay: particle.delay, repeat: Number.POSITIVE_INFINITY }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-5xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-5xl font-semibold tracking-tight text-white [text-shadow:0_0_32px_rgba(56,189,248,0.3)] sm:text-7xl"
        >
          Ahash Mendis
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mx-auto mt-4 max-w-2xl text-base font-medium text-cyan-200 sm:text-xl"
        >
          Digital Creator | Tech Builder | Video Producer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mx-auto mt-5 max-w-3xl text-lg text-slate-200 sm:text-xl"
        >
          Ahash Mendis is a multi-disciplinary digital creator working across technology, video production, drone
          cinematography, and digital brand building. His work combines technical development with cinematic
          storytelling to build impactful digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.6 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.div whileHover={{ y: -3, scale: 1.02 }}>
            <a href="https://wa.me/94701987004" target="_blank" rel="noreferrer">
              <Button variant="default" size="lg" className="rounded-full">
                <Sparkles className="size-4" />
                Send Message
              </Button>
            </a>
          </motion.div>
          <motion.div whileHover={{ y: -3, scale: 1.02 }}>
            <Link href="#projects">
              <Button variant="secondary" size="lg" className="rounded-full">
                <Rocket className="size-4" />
                View Projects
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
