import { NextRequest } from "next/server";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

type Params = {
  params: Promise<{ username: string }>;
};

type Post = {
  id: string;
  shortcode: string;
  permalink: string;
  thumbnail: string;
  caption: string;
};

type CaptionEdge = {
  node?: {
    text?: string;
  };
};

type TimelineNode = {
  id?: string;
  shortcode?: string;
  display_url?: string;
  edge_media_to_caption?: {
    edges?: CaptionEdge[];
  };
};

type TimelineEdge = {
  node?: TimelineNode;
};

const execFileAsync = promisify(execFile);

async function fetchInstagramPayload(endpoint: string): Promise<unknown> {
  const headers = {
    "x-ig-app-id": "936619743392459",
    "user-agent": "Mozilla/5.0",
    accept: "application/json",
  };

  try {
    const response = await fetch(endpoint, {
      headers,
      cache: "no-store",
    });
    if (response.ok) {
      return await response.json();
    }
  } catch {
    // Fallback to curl below when fetch fails in certain environments.
  }

  const { stdout } = await execFileAsync("curl", [
    "-s",
    "-L",
    endpoint,
    "-H",
    "x-ig-app-id: 936619743392459",
    "-H",
    "user-agent: Mozilla/5.0",
    "-H",
    "accept: application/json",
  ]);

  return JSON.parse(stdout);
}

export async function GET(request: NextRequest, { params }: Params) {
  const { username } = await params;
  const countParam = Number(request.nextUrl.searchParams.get("count") ?? "6");
  const count = Number.isFinite(countParam) ? Math.min(Math.max(countParam, 1), 12) : 6;

  const endpoint = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${encodeURIComponent(username)}`;

  let payload: unknown;
  try {
    payload = await fetchInstagramPayload(endpoint);
  } catch {
    return Response.json({ error: "Failed to load Instagram profile" }, { status: 502 });
  }

  const user = (payload as { data?: { user?: { username?: string; edge_owner_to_timeline_media?: { edges?: TimelineEdge[] } } } })
    ?.data?.user;

  if (!user) {
    return Response.json({ error: "Instagram profile not found" }, { status: 404 });
  }

  const edges: TimelineEdge[] = user?.edge_owner_to_timeline_media?.edges ?? [];
  const posts: Post[] = edges.slice(0, count).map((edge) => {
    const node = edge?.node ?? {};
    const text = node?.edge_media_to_caption?.edges?.[0]?.node?.text ?? "";
    return {
      id: node?.id ?? node?.shortcode ?? String(Math.random()),
      shortcode: node?.shortcode ?? "",
      permalink: node?.shortcode ? `https://www.instagram.com/p/${node.shortcode}/` : `https://www.instagram.com/${user.username}/`,
      thumbnail: node?.display_url ?? "",
      caption: text,
    };
  });

  return Response.json(
    {
      username: user.username,
      profileUrl: `https://www.instagram.com/${user.username}/`,
      posts,
    },
    {
      headers: {
        "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
      },
    },
  );
}
