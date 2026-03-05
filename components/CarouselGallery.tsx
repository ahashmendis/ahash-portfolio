"use client";

import { motion } from "framer-motion";

type CarouselItem = {
  tag: string;
  title: string;
  description: string;
};

type CarouselGalleryProps = {
  items: CarouselItem[];
};

export function CarouselGallery({ items }: CarouselGalleryProps) {
  return (
    <div className="flex snap-x gap-4 overflow-x-auto pb-2">
      {items.map((item, index) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: index * 0.06 }}
          viewport={{ once: true, amount: 0.4 }}
          whileHover={{ y: -5, scale: 1.01 }}
          className="min-h-56 min-w-[280px] snap-start rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-sky-300">{item.tag}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>
        </motion.article>
      ))}
    </div>
  );
}
