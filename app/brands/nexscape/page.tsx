"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";
import { CarouselGallery } from "@/components/CarouselGallery";
import { BrandLogo } from "@/components/BrandLogo";
import { AnimatedGradient } from "@/components/AnimatedGradient";

const portfolioItems = [
  {
    tag: "Nexscape",
    title: "Web Platform Engineering",
    description: "Modern web development projects focused on speed, reliability, and user experience.",
  },
  {
    tag: "Nexscape",
    title: "Software Product Development",
    description: "End-to-end software development for practical business and startup use cases.",
  },
  {
    tag: "Nexscape",
    title: "Scalable Digital Systems",
    description: "Future-ready platform architecture built for growth, scale, and automation.",
  },
];

const services = [
  "Web development",
  "Software development",
  "Startup MVP development",
  "Scalable digital platforms",
  "Automation and digital tools",
];

export default function NexscapePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <AnimatedGradient className="opacity-60" />
      <Navbar />

      <section className="relative mx-auto max-w-7xl px-6 pb-14 pt-20 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.18),transparent_45%)]" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl"
        >
          <BrandLogo slug="nexscape" name="Nexscape" variant="long" tone="blue" className="mb-6 h-20 w-64 sm:h-24 sm:w-80" />
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Technology Startup</p>
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-6xl">Nexscape</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            Nexscape is a modern technology startup focused on building innovative digital solutions. The company
            specializes in web development, software development, and scalable digital platforms, helping businesses
            transform ideas into powerful technology products and future-ready systems.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 sm:py-12">
        <SectionHeader
          eyebrow="Portfolio"
          title="Projects & Platforms"
          subtitle="A showcase of technology builds across web, software, and scalable systems."
        />
        <CarouselGallery items={portfolioItems} />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-12 sm:pb-20">
        <SectionHeader
          eyebrow="Services"
          title="Nexscape Services"
          subtitle="Core services offered under the Nexscape technology ecosystem."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true, amount: 0.35 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-cyan-300/25 bg-white/5 p-5 backdrop-blur-md"
            >
              <h3 className="text-lg font-medium text-white">{service}</h3>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-3xl border border-cyan-300/25 bg-white/5 p-8 backdrop-blur-md sm:p-10"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Call To Action</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Build your next digital product with Nexscape.</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            From MVP strategy to scalable software systems, Nexscape helps transform product ideas into working digital
            solutions.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
