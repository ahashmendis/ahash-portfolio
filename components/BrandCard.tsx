"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BrandLogo } from "@/components/BrandLogo";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type BrandCardProps = {
  slug: string;
  name: string;
  category: string;
  description: string;
  href: string;
};

export function BrandCard({ slug, name, category, description, href }: BrandCardProps) {
  const tone = slug === "nexscape" ? "blue" : slug === "hover" ? "sky" : "cyan";

  return (
    <motion.div whileHover={{ y: -6, scale: 1.01 }} transition={{ type: "spring", stiffness: 260, damping: 18 }} className="h-full">
      <Link href={href} className="block h-full">
        <Card className="group relative h-full overflow-hidden border-cyan-300/20 bg-gradient-to-br from-slate-900/85 via-slate-900/55 to-blue-900/20 transition hover:border-cyan-300/70">
          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-300/25 blur-2xl" />
          </div>
          <CardContent className="relative p-6">
            <BrandLogo slug={slug} name={name} variant="short" tone={tone} className="mb-4 h-20 w-20" />
            <Badge variant="secondary" className="border-cyan-300/35 text-cyan-100">
              {category}
            </Badge>
            <h3 className="mt-3 text-2xl font-semibold text-white">{name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{description}</p>
            <div className="mt-5">
              <Button variant="ghost" className="px-0 text-cyan-200 hover:text-cyan-100">
                View brand page
              </Button>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
