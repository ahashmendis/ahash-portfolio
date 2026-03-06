"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";
import { CarouselGallery } from "@/components/CarouselGallery";
import { BrandLogo } from "@/components/BrandLogo";
import { InstagramSection } from "@/components/InstagramSection";
import { AnimatedGradient } from "@/components/AnimatedGradient";
import { ReelCard } from "@/components/ReelCard";

const lenscapeGallery = [
  {
    tag: "Lenscape Studios",
    title: "Wedding Cinematography",
    description: "Cinematic storytelling-driven wedding visuals.",
  },
  {
    tag: "Lenscape Studios",
    title: "Event Video Production",
    description: "Event productions captured and delivered with cinematic quality.",
  },
  {
    tag: "Lenscape Studios",
    title: "Brand and Music Visuals",
    description: "Brand content and music video productions built for strong visual impact.",
  },
];

const services = [
  "Wedding cinematography",
  "Event video production",
  "Brand content",
  "Music video production",
  "Cinematic storytelling",
];

const cinematicReels = [
  {
    title: "Wedding Story Film",
    driveLink: "https://www.instagram.com/p/DIMdsvezKj3/",
    description: "Cinematic wedding edit focused on emotional storytelling and documentary pacing.",
  },
  {
    title: "Brand Film Cut",
    driveLink: "https://www.instagram.com/p/DS2ixIdki51/",
    description: "Story-led brand content with cinematic grading and rhythm-based editing.",
  },
  {
    title: "Event Highlights",
    driveLink: "",
    description: "Premium event recap with dynamic sequencing and polished visual flow.",
  },
];

export default function LenscapeStudiosPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <AnimatedGradient className="opacity-60" />
      <Navbar />

      <section className="relative mx-auto max-w-7xl px-6 pb-14 pt-20 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.2),transparent_45%)]" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl"
        >
          <BrandLogo
            slug="lenscape"
            name="Lenscape Studios"
            variant="long"
            tone="cyan"
            className="mb-6 h-20 w-64 sm:h-24 sm:w-80"
          />
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Video Production Studio</p>
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-6xl">Lenscape Studios</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            Lenscape Studios is a cinematic video production brand focused on storytelling-driven visuals including
            weddings, events, brand films, and cinematic productions.
          </p>
          <motion.a
            whileHover={{ y: -3, scale: 1.02 }}
            href="https://www.youtube.com/@LenscapeStudiosSL"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-5 py-3 text-sm text-cyan-100"
          >
            Lenscape Studios YouTube
          </motion.a>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 sm:py-12">
        <SectionHeader
          eyebrow="Portfolio"
          title="Video Portfolio Gallery"
          subtitle="Storytelling-driven productions across weddings, events, and cinematic brand visuals."
        />
        <CarouselGallery items={lenscapeGallery} />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-12 sm:pb-24">
        <SectionHeader
          eyebrow="Services"
          title="Lenscape Studios Services"
          subtitle="Core services offered by Lenscape Studios."
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
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Lenscape Studios</p>
              <h3 className="mt-2 text-lg font-medium text-white">{service}</h3>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <SectionHeader
          eyebrow="Instagram"
          title="Cinematic Visual Storytelling"
          subtitle="Instagram reel embeds for Lenscape Studios edits and visual storytelling work."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {cinematicReels.map((video) => (
            <div key={video.title} className="w-full max-w-[300px]">
              <ReelCard
                title={video.title}
                driveLink={video.driveLink}
                description={video.description}
                tag="Lenscape Studios"
              />
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
          <h2 className="mt-3 text-3xl font-semibold text-white">Create your next cinematic story with Lenscape Studios.</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            Book production support for weddings, events, brand films, and cinematic visual storytelling.
          </p>
        </motion.div>
      </section>

      <InstagramSection username="lenscapestudios.sl" />
    </main>
  );
}
