"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";
import { CarouselGallery } from "@/components/CarouselGallery";
import { BrandLogo } from "@/components/BrandLogo";

const portfolioItems = [
  {
    tag: "Growthscape",
    title: "Social Growth Campaigns",
    description: "Brand growth campaigns focused on audience expansion and measurable engagement.",
  },
  {
    tag: "Growthscape",
    title: "Content Strategy Systems",
    description: "Strategic content planning built to improve platform consistency and performance.",
  },
  {
    tag: "Growthscape",
    title: "Digital Marketing Execution",
    description: "Targeted digital campaigns designed to turn attention into business outcomes.",
  },
];

const services = [
  "Social media management",
  "Content strategy",
  "Brand growth campaigns",
  "Audience engagement strategy",
  "Digital marketing campaigns",
];

export default function GrowthscapePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="relative mx-auto max-w-7xl px-6 pb-14 pt-20 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.18),transparent_45%)]" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl"
        >
          <BrandLogo
            slug="growthscape"
            name="Growthscape"
            variant="long"
            tone="sky"
            className="mb-6 h-20 w-64 sm:h-24 sm:w-80"
          />
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Digital Marketing & Social Media Growth Agency</p>
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-6xl">Growthscape</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            Growthscape is a digital marketing and social media growth agency dedicated to helping brands expand their
            online presence. Through content strategy, social media management, and targeted digital campaigns, the
            agency helps businesses reach wider audiences and turn attention into measurable growth.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 sm:py-12">
        <SectionHeader
          eyebrow="Portfolio"
          title="Campaign Portfolio"
          subtitle="Recent examples of digital growth, campaign strategy, and social performance work."
        />
        <CarouselGallery items={portfolioItems} />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-12 sm:pb-20">
        <SectionHeader
          eyebrow="Services"
          title="Growthscape Services"
          subtitle="Growth-focused services designed for modern brands and digital products."
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
          <h2 className="mt-3 text-3xl font-semibold text-white">Scale your brand presence with Growthscape.</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            Build consistent audience engagement through strategy-driven content and performance-focused campaigns.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
