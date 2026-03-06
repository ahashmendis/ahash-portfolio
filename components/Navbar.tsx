"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BrandLogo } from "@/components/BrandLogo";
import { brandEcosystem } from "@/data/brands";

const links = [
  { label: "Home", href: "/" },
  { label: "Brands", href: "/#brands" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
  { label: "Client Projects", href: "/client-reels" },
  { label: "Blog", href: "https://medium.com/@ahashmendis", external: true },
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/75 backdrop-blur-md"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-100 transition duration-300 hover:text-cyan-100">
          Ahash Mendis
        </Link>
        <div className="flex items-center gap-1">
          {links.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.04, duration: 0.35 }}
              whileHover={{ y: -2 }}
            >
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-cyan-400/10 hover:text-white md:inline-flex"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="hidden rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-cyan-400/10 hover:text-white md:inline-flex"
                >
                  {link.label}
                </Link>
              )}
            </motion.div>
          ))}
          <div className="ml-3 hidden items-center gap-2.5 lg:flex">
            {brandEcosystem.map((brand, index) => (
              <motion.div
                key={`nav-brand-${brand.slug}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 + index * 0.05, duration: 0.35 }}
                whileHover={{ y: -2, scale: 1.04 }}
              >
                <Link href={brand.href} className="block">
                  <BrandLogo
                    slug={brand.slug}
                    name={brand.name}
                    variant="short"
                    tone={brand.slug === "nexscape" ? "blue" : brand.slug === "hover" ? "sky" : "cyan"}
                    className="h-11 w-11 rounded-xl border-cyan-300/35"
                    imageClassName="object-contain p-1.5"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
