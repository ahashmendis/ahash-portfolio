"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function toDrivePreview(link: string): string | null {
  if (!link.trim()) {
    return null;
  }

  const fileMatch = link.match(/\/file\/d\/([^/]+)/);
  if (fileMatch?.[1]) {
    if (/replace|file_id/i.test(fileMatch[1])) {
      return null;
    }
    return `https://drive.google.com/file/d/${fileMatch[1]}/preview?rm=minimal`;
  }

  const idMatch = link.match(/[?&]id=([^&]+)/);
  if (idMatch?.[1]) {
    if (/replace|file_id/i.test(idMatch[1])) {
      return null;
    }
    return `https://drive.google.com/file/d/${idMatch[1]}/preview?rm=minimal`;
  }

  return null;
}

type VideoEmbedProps = {
  title: string;
  driveLink: string;
  description?: string;
  tag?: string;
  className?: string;
};

export function VideoEmbed({ title, driveLink, description, tag, className }: VideoEmbedProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const previewLink = useMemo(() => toDrivePreview(driveLink), [driveLink]);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className={`w-full ${className ?? ""}`}
    >
      <Card className="group overflow-hidden border-cyan-300/25 bg-white/10 backdrop-blur-md">
        <div className="relative w-full max-w-[300px] aspect-[9/16] overflow-hidden rounded-xl shadow-lg">
          {visible && previewLink ? (
            <iframe
              src={previewLink}
              title={title}
              allow="autoplay"
              loading="lazy"
              className="absolute inset-0 h-full w-full border-0"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900/80 to-cyan-900/20 text-sm text-slate-300">
              {previewLink ? "Loading preview..." : "Add a valid Google Drive file link to preview this video."}
            </div>
          )}
        </div>
        <CardContent className="p-5">
          {tag ? <Badge className="mb-3 border-cyan-300/35 bg-cyan-300/10 text-cyan-100">{tag}</Badge> : null}
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          {description ? <p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p> : null}
        </CardContent>
      </Card>
    </motion.div>
  );
}
