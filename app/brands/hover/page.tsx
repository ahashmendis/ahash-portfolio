"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";
import { CarouselGallery } from "@/components/CarouselGallery";
import { BrandLogo } from "@/components/BrandLogo";
import { InstagramSection } from "@/components/InstagramSection";
import { AnimatedGradient } from "@/components/AnimatedGradient";
import { ReelCard } from "@/components/ReelCard";

const droneGallery = [
  {
    tag: "Hover by Ahash",
    title: "Aerial Cinematography",
    description: "Professional aerial cinematography visuals for cinematic productions.",
  },
  {
    tag: "Hover by Ahash",
    title: "Real Estate Drone Filming",
    description: "Drone filming focused on real estate properties and location showcases.",
  },
  {
    tag: "Hover by Ahash",
    title: "Landscape and Event Visuals",
    description: "Landscape aerial visuals and event drone coverage.",
  },
];

const services = [
  "Aerial cinematography",
  "Real estate drone filming",
  "Event drone coverage",
  "Landscape aerial visuals",
];

const droneReels = [
  {
    title: "Aerial Hero Reel",
    driveLink: "https://www.instagram.com/p/DS2ixIdki51/",
    description: "Signature drone showreel featuring cinematic aerial scenes and transitions.",
  },
  {
    title: "Real Estate Flythrough",
    driveLink: "",
    description: "Property-focused aerial flythrough designed for listing showcases and campaigns.",
  },
  {
    title: "Event Drone Coverage",
    driveLink: "",
    description: "Dynamic overhead event captures with motion-driven storytelling and atmosphere.",
  },
  {
    title: "Landscape Visual Sequence",
    driveLink: "",
    description: "Natural landscape aerial visuals crafted for cinematic destination storytelling.",
  },
];

export default function HoverPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <AnimatedGradient className="opacity-60" />
      <Navbar />

      <section className="relative mx-auto max-w-7xl px-6 pb-14 pt-20 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(34,211,238,0.2),transparent_45%)]" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl"
        >
          <BrandLogo
            slug="hover"
            name="Hover by Ahash"
            variant="short"
            tone="sky"
            className="mb-6 h-24 w-24 sm:h-28 sm:w-28"
          />
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Drone Videography</p>
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-6xl">Hover by Ahash</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            Hover by Ahash provides professional aerial cinematography services capturing landscapes, real estate
            properties, events, and cinematic drone visuals.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 sm:py-12">
        <SectionHeader
          eyebrow="Portfolio"
          title="Drone Video Gallery"
          subtitle="Aerial cinematography across landscapes, real estate, and events."
        />
        <CarouselGallery items={droneGallery} />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-12 sm:pb-24">
        <SectionHeader
          eyebrow="Services"
          title="Hover Services"
          subtitle="Core services offered by Hover by Ahash."
        />
        <div className="grid gap-4 sm:grid-cols-2">
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

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <SectionHeader
          eyebrow="Drone Reel"
          title="Drone Cinematography Reel"
          subtitle="Instagram reel embeds for Hover by Ahash aerial cinematography and drone productions."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {droneReels.map((video) => (
            <div key={video.title} className="w-full max-w-[300px]">
              <ReelCard title={video.title} driveLink={video.driveLink} description={video.description} tag="Hover by Ahash" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-3xl border border-cyan-300/25 bg-white/5 p-8 backdrop-blur-md sm:p-10"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Call To Action</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Capture premium aerial visuals with Hover by Ahash.</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            Plan cinematic drone shoots for landscapes, real estate, live events, and branded productions.
          </p>
        </motion.div>
      </section>

      <InstagramSection username="hoverbyahash" />
    </main>
  );
}
