"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { useState } from "react";

const LOGO_VERSION = "2026-03-06-1";

const clients = [
  {
    name: "Hydrant Food Hall",
    mark: "HF",
    service: "Restaurant, AU",
    logo: "/clients/hydrant-food-hall.png",
  },
  {
    name: "Peakstate Fitness",
    mark: "PF",
    service: "Fitness Studio",
    logo: "/clients/peakstate-fitness.png",
  },
  {
    name: "First Lane",
    mark: "FL",
    service: "Music Group",
    logo: "/clients/first-lane.png",
  },
  {
    name: "Gear Chain",
    mark: "GC",
    service: "NFT Chain",
    logo: "/clients/gear-chain.png",
  },
  {
    name: "Active Edge",
    mark: "AE",
    service: "Clothing Brand",
    logo: "/clients/active-edge.png",
  },
  {
    name: "Comun",
    mark: "CM",
    service: "Restaurant, AU",
    logo: "/clients/comun.png",
  },
  {
    name: "AGRA Photography",
    mark: "AP",
    service: "Event Coverage",
    logo: "/clients/agra-photography.png",
  },
  {
    name: "Great Ryrie",
    mark: "GR",
    service: "Restaurant, AU",
    logo: "/clients/great-ryrie.png",
  },
  {
    name: "Ranshe Homes",
    mark: "RH",
    service: "Construction/Property",
    logo: "/clients/ranshe-homes.png",
  },
];

function ClientLogo({
  logo,
  name,
  mark,
}: {
  logo: string;
  name: string;
  mark: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-300/40 bg-cyan-300/10 text-sm font-semibold tracking-[0.15em] text-cyan-100 shadow-[0_8px_24px_rgba(8,145,178,0.2)]">
        {mark}
      </div>
    );
  }

  return (
    <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-cyan-300/40 bg-slate-900/90 p-1 shadow-[0_10px_28px_rgba(8,145,178,0.28)] ring-1 ring-cyan-300/25">
      <img
        src={`${logo}?v=${LOGO_VERSION}`}
        alt={`${name} logo`}
        className="h-full w-full object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export function ClientsSection() {
  return (
    <section id="clients" className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
      <SectionHeader
        eyebrow="Clients"
        title="Trusted By Client Brands"
        subtitle="A selected client list across restaurants, fitness, events, property, Web3, music, and brand-focused creative production."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {clients.map((client, index) => (
          <motion.article
            key={client.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="rounded-2xl border border-cyan-300/20 bg-white/10 p-5 backdrop-blur-md"
          >
            <div className="flex items-center gap-4">
              <ClientLogo logo={client.logo} name={client.name} mark={client.mark} />
              <div>
                <h3 className="text-lg font-semibold text-white">{client.name}</h3>
                <p className="text-sm text-slate-300">{client.service}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
