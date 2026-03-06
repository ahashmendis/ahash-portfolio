"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGradient } from "@/components/AnimatedGradient";

const particles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  top: `${(i * 13) % 100}%`,
  left: `${(i * 23) % 100}%`,
  delay: (i % 7) * 0.25,
  duration: 4 + (i % 4),
}));
const nameWords = ["Ahash", "Mendis"];

export function Hero() {
  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, [0, 500], [0, 90]);

  return (
    <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden px-6 py-24 text-center">
      <AnimatedGradient className="opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(56,189,248,0.14),transparent_38%),radial-gradient(circle_at_80%_22%,rgba(167,139,250,0.12),transparent_34%),radial-gradient(circle_at_50%_82%,rgba(6,182,212,0.14),transparent_44%)] animate-aurora-slow" />
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
          initial={{ opacity: 0, y: 36, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ amount: 0.65 }}
          className="relative mx-auto inline-flex items-center gap-[0.28em] whitespace-nowrap text-5xl font-semibold tracking-tight text-white sm:text-7xl"
        >
          <span className="sr-only">Ahash Mendis</span>
          <motion.span
            aria-hidden="true"
            initial={{ opacity: 0.55, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ amount: 0.65 }}
            className="pointer-events-none absolute -inset-x-10 -inset-y-5 -z-10 rounded-3xl bg-[radial-gradient(circle_at_50%_55%,rgba(56,189,248,0.26),transparent_58%)] blur-2xl"
          />
          {nameWords.map((word, index) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 56, rotateX: index === 0 ? 35 : -35, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.72, delay: 0.12 + index * 0.14, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ amount: 0.65 }}
              className="inline-block [text-shadow:0_0_32px_rgba(56,189,248,0.38)]"
              style={{ transformOrigin: "50% 80%" }}
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "78%", opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.45, ease: "easeOut" }}
            viewport={{ amount: 0.65 }}
            className="mt-3 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
            aria-hidden="true"
          />
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <div className="flex items-center gap-2 rounded-full border border-cyan-300/30 bg-slate-900/40 px-4 py-2 backdrop-blur-md">
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] text-cyan-100">Scroll to explore</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
