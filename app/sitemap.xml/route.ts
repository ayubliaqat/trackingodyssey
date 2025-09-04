// app/sitemap.xml/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const baseUrl = "https://trackingodyssey.com";

  // 1️⃣ Static pages
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

  // 2️⃣ Dynamic courier pages from app/couriers folder
  const couriersDir = path.join(process.cwd(), "app", "couriers");
  const courierFolders = fs
    .readdirSync(couriersDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const dynamicUrls = courierFolders
    .map(
      (slug) => `
    <url>
      <loc>${baseUrl}/couriers/${encodeURIComponent(slug)}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>`
    )
    .join("\n");

  // 3️⃣ Final XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls}
  ${dynamicUrls}
  </urlset>`;

  // 4️⃣ Response
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=59",
    },
  });
}
