"use client";

import { motion } from "framer-motion";

type ReelCardProps = {
  title: string;
  driveLink: string;
  description?: string;
  tag?: string;
};

function toEmbedUrl(link: string): string | null {
  if (!link.trim()) return null;

  const instagramMatch = link.match(/instagram\.com\/(?:p|reel)\/([^/?#]+)/i);
  if (instagramMatch?.[1]) {
    return `https://www.instagram.com/reel/${instagramMatch[1]}/embed`;
  }

  const fileMatch = link.match(/\/file\/d\/([^/]+)/);
  if (fileMatch?.[1]) {
    if (/replace|file_id/i.test(fileMatch[1])) return null;
    return `https://drive.google.com/file/d/${fileMatch[1]}/preview?rm=minimal`;
  }

  const idMatch = link.match(/[?&]id=([^&]+)/);
  if (idMatch?.[1]) {
    if (/replace|file_id/i.test(idMatch[1])) return null;
    return `https://drive.google.com/file/d/${idMatch[1]}/preview?rm=minimal`;
  }

  return null;
}

export function ReelCard({ title, driveLink, description, tag }: ReelCardProps) {
  const embedUrl = toEmbedUrl(driveLink);

  return (
    <motion.article whileHover={{ y: -6, scale: 1.02 }} className="w-full max-w-[300px]">
      <div className="relative w-full max-w-[300px] aspect-[9/16] rounded-xl overflow-hidden shadow-lg ring-1 ring-cyan-300/25">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={title}
            className="absolute inset-0 w-full h-full border-0"
            allow="autoplay"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/70 px-4 text-center text-sm text-slate-300">
            Add a valid reel link.
          </div>
        )}
      </div>
      <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-white/10 p-4 backdrop-blur-md">
        {tag ? (
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">{tag}</p>
        ) : null}
        <h3 className="mt-1 text-lg font-semibold text-white">{title}</h3>
        {description ? <p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p> : null}
      </div>
    </motion.article>
  );
}
