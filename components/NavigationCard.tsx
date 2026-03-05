"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type NavigationCardProps = {
  title: string;
  href: string;
  icon: string;
};

export function NavigationCard({ title, href, icon }: NavigationCardProps) {
  return (
    <motion.div whileHover={{ y: -6, scale: 1.015 }} transition={{ type: "spring", stiffness: 260, damping: 18 }}>
      <Link href={href}>
        <Card className="group relative overflow-hidden border-cyan-300/20 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-cyan-900/20 transition hover:border-cyan-300/60">
          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-300/20 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-blue-400/20 blur-2xl" />
          </div>
          <CardContent className="relative flex min-h-36 flex-col justify-between p-5">
            <Badge variant="secondary" className="w-fit border-cyan-300/35 text-cyan-100">
              {icon}
            </Badge>
            <h3 className="text-lg font-medium text-slate-100 transition group-hover:text-cyan-100">{title}</h3>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
