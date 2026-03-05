"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { BrandCard } from "@/components/BrandCard";
import { brandEcosystem } from "@/data/brands";

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-[0.24em] text-sky-300">Brand Ecosystem</p>
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Built to Scale Creative Work</h1>
          <p className="mt-4 max-w-3xl text-slate-300">
            Each brand is focused on a specific craft while sharing a unified creative direction.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {brandEcosystem.map((brand) => (
            <BrandCard key={brand.name} {...brand} />
          ))}
        </div>
      </section>
    </main>
  );
}
