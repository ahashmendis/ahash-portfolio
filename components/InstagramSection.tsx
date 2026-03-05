"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

type InstagramPost = {
  id: string;
  permalink: string;
  thumbnail: string;
  caption: string;
};

type InstagramResponse = {
  username: string;
  profileUrl: string;
  posts: InstagramPost[];
};

type InstagramSectionProps = {
  username: string;
};

export function InstagramSection({ username }: InstagramSectionProps) {
  const [data, setData] = useState<InstagramResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const res = await fetch(`/api/instagram/${username}?count=6`, { cache: "no-store" });
        if (!res.ok) {
          throw new Error("Failed to load");
        }
        const json: InstagramResponse = await res.json();
        if (active) {
          setData(json);
        }
      } catch {
        if (active) {
          setData(null);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    load();
    return () => {
      active = false;
    };
  }, [username]);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-12 sm:pb-24">
      <SectionHeader
        eyebrow="Social"
        title="Instagram"
        subtitle="Latest posts from Instagram."
      />

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={`skeleton-${index}`}
              className="h-56 animate-pulse rounded-2xl border border-white/10 bg-white/5"
            />
          ))}
        </div>
      ) : null}

      {!loading && data?.posts?.length ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.posts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group overflow-hidden rounded-2xl border border-cyan-300/25 bg-white/5 backdrop-blur-md"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.thumbnail}
                alt="Instagram post"
                className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </motion.a>
          ))}
        </div>
      ) : null}

      {!loading && !data?.posts?.length ? (
        <motion.a
          whileHover={{ y: -3, scale: 1.01 }}
          href={`https://www.instagram.com/${username}/`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-5 py-3 text-sm text-cyan-100"
        >
          Open Instagram
        </motion.a>
      ) : null}
    </section>
  );
}
