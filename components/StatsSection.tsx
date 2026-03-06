"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Digital Campaigns", value: 250, suffix: "+" },
  { label: "Projects Delivered", value: 1000, suffix: "+" },
  { label: "Digital Brands Built", value: 4, suffix: "" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const duration = 1400;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.floor(value * progress));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const items = useMemo(() => stats, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.35 }}
            whileHover={{ y: -6, scale: 1.015 }}
          >
            <Card className="group overflow-hidden border-cyan-300/20 bg-gradient-to-br from-slate-900/85 via-slate-900/60 to-blue-900/20 transition hover:border-cyan-300/60">
              <CardContent className="p-6">
                <p className="text-4xl font-semibold text-white [text-shadow:0_0_20px_rgba(56,189,248,0.25)]">
                  <Counter value={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-300">{item.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
