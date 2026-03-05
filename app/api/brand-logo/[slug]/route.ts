import { promises as fs } from "node:fs";
import path from "node:path";

type Params = {
  params: Promise<{ slug: string }>;
};

const contentTypes: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
};

async function findLogoPath(slug: string, variant: "long" | "short"): Promise<{ filePath: string; ext: string } | null> {
  const exts = [".png", ".webp", ".jpg", ".jpeg", ".svg"];
  const names = variant === "long" ? ["long", "logo", "short"] : ["short", "logo", "long"];
  const candidates: string[] = [];

  for (const name of names) {
    for (const ext of exts) {
      candidates.push(path.join(process.cwd(), "public", "brands", slug, `${name}${ext}`));
      candidates.push(path.join(process.cwd(), "app", "brands", slug, `${name}${ext}`));
    }
  }

  for (const ext of exts) {
    candidates.push(path.join(process.cwd(), "public", "brands", `${slug}${ext}`));
  }

  for (const filePath of candidates) {
    try {
      await fs.access(filePath);
      const ext = path.extname(filePath).toLowerCase();
      return { filePath, ext };
    } catch {
      continue;
    }
  }

  return null;
}

export async function GET(request: Request, { params }: Params) {
  const { slug } = await params;
  const requested = new URL(request.url).searchParams.get("variant");
  const variant: "long" | "short" = requested === "long" ? "long" : "short";
  const found = await findLogoPath(slug, variant);

  if (!found) {
    return new Response("Logo not found", { status: 404 });
  }

  const buffer = await fs.readFile(found.filePath);
  return new Response(buffer, {
    status: 200,
    headers: {
      "Content-Type": contentTypes[found.ext] ?? "application/octet-stream",
      "Cache-Control": "no-store",
    },
  });
}
