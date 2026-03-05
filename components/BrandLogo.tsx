"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { getLogoCandidates } from "@/data/brands";

type BrandLogoProps = {
  slug: string;
  name: string;
  variant?: "long" | "short";
  tone?: "cyan" | "sky" | "blue";
  className?: string;
  imageClassName?: string;
};

const toneClasses = {
  cyan: "from-cyan-300/14 via-sky-300/8 to-blue-300/14",
  sky: "from-sky-300/14 via-cyan-300/8 to-blue-400/14",
  blue: "from-blue-300/14 via-sky-300/8 to-cyan-300/14",
};

export function BrandLogo({
  slug,
  name,
  variant = "short",
  tone = "cyan",
  className,
  imageClassName,
}: BrandLogoProps) {
  const sources = useMemo(() => getLogoCandidates(slug, variant), [slug, variant]);
  const [sourceIndex, setSourceIndex] = useState(0);
  const [usePlaceholder, setUsePlaceholder] = useState(false);

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  if (usePlaceholder) {
    return (
      <div
        className={`flex items-center justify-center rounded-2xl border border-cyan-200/20 bg-slate-900/80 text-sm font-semibold tracking-[0.15em] text-cyan-100 ${className ?? ""}`}
      >
        {initials}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 ${className ?? ""}`}>
      <div
        className={`pointer-events-none absolute inset-0 z-10 bg-gradient-to-br ${toneClasses[tone]} mix-blend-screen`}
      />
      <Image
        src={sources[sourceIndex]}
        alt={`${name} logo`}
        fill
        unoptimized
        sizes="160px"
        className={`${imageClassName ?? "object-contain p-3"} [filter:drop-shadow(0_0_10px_rgba(56,189,248,0.4))_drop-shadow(0_0_20px_rgba(14,165,233,0.22))]`}
        onError={() => {
          if (sourceIndex < sources.length - 1) {
            setSourceIndex((value) => value + 1);
            return;
          }
          setUsePlaceholder(true);
        }}
      />
    </div>
  );
}
