import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedGradient } from "@/components/AnimatedGradient";
import { ReelCard } from "@/components/ReelCard";

const clientVideos = [
  {
    client: "Client Project Highlight",
    driveLink: "https://www.instagram.com/reel/DTX-9PJj44-/",
    description: "Featured client reel with social-first campaign storytelling and cinematic delivery.",
  },
];

export default function ClientReelsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <AnimatedGradient className="opacity-60" />
      <Navbar />

      <section className="relative mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pb-10">
        <SectionHeader
          eyebrow="Client Reels"
          title="Client Projects"
          subtitle="Video projects crafted for client brands, campaigns, and digital storytelling."
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:pb-24">
        <div className="grid justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clientVideos.map((video) => (
            <ReelCard key={video.client} title={video.client} driveLink={video.driveLink} description={video.description} tag="Client" />
          ))}
        </div>
      </section>
    </main>
  );
}
