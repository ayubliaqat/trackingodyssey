// app/sitemap.xml/route.ts
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

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

  // 2️⃣ Dynamic pages (couriers)
  const { data: couriers, error } = await supabase
    .from("couriers")
    .select("slug");

  if (error) {
    console.error("❌ Error fetching couriers for sitemap:", error.message);
  }

  const dynamicUrls =
    couriers
      ?.map(
        (c) => `
    <url>
      <loc>${baseUrl}/couriers/${encodeURIComponent(c.slug)}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>`
      )
      .join("\n") || "";

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
