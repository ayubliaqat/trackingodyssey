// app/sitemap.xml/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const baseUrl = "https://trackingodyssey.com";

  // 1️⃣ Always include known static pages (root-level)
  const staticPages = ["", "about", "contact", "track", "couriers"];
  const staticUrls = staticPages
    .map(
      (slug) => `
    <url>
      <loc>${baseUrl}/${slug}</loc>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>`
    )
    .join("\n");

  // 2️⃣ Helper: recursively collect all pages under /app (excluding api & internal folders)
  function getAppRoutes(dir: string, basePath = ""): string[] {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    let routes: string[] = [];

    for (const entry of entries) {
      if (entry.isDirectory()) {
        routes = routes.concat(
          getAppRoutes(path.join(dir, entry.name), `${basePath}/${entry.name}`)
        );
      } else if (entry.isFile() && entry.name === "page.tsx") {
        // Skip API and sitemap folder
        if (basePath.startsWith("/api") || basePath.startsWith("/sitemap.xml")) {
          continue;
        }

        routes.push(basePath || "/"); // handle root
      }
    }
    return routes;
  }

  // 3️⃣ Collect all dynamic pages from app/
  const appDir = path.join(process.cwd(), "app");
  const dynamicRoutes = getAppRoutes(appDir);

  const dynamicUrls = dynamicRoutes
    .map(
      (route) => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>`
    )
    .join("\n");

  // 4️⃣ Final XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls}
  ${dynamicUrls}
  </urlset>`;

  // 5️⃣ Response
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=59",
    },
  });
}
