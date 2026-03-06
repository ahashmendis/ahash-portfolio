"use client";

import { cn } from "@/lib/utils";

type AnimatedGradientProps = {
  className?: string;
};

export function AnimatedGradient({ className }: AnimatedGradientProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div className="absolute -inset-40 animate-[spin_40s_linear_infinite] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(30,58,138,0.35),rgba(76,29,149,0.28),rgba(8,145,178,0.3),rgba(30,58,138,0.35))] blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.14),transparent_35%),radial-gradient(circle_at_60%_80%,rgba(14,165,233,0.2),transparent_40%)]" />
    </div>
  );
}
