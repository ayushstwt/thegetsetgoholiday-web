import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

const BASE = "D:\\thegetsetgoholiday\\wp-content\\uploads";

const TYPES = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".avif": "image/avif",
};

export async function GET(request, { params }) {
  const slug = params.slug || [];
  const rel = slug.join("/");
  const filePath = path.join(BASE, rel);

  if (!filePath.startsWith(BASE)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  try {
    const data = await readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const type = TYPES[ext] || "application/octet-stream";
    return new NextResponse(data, {
      status: 200,
      headers: {
        "Content-Type": type,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new NextResponse("Not Found", { status: 404 });
  }
}
