// app/sitemap.xml/route.ts
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const baseUrl = "https://trackingodyssey.com";

  // 1️⃣ Static pages
  const staticPages = ["", "about", "contact", "track", "couriers"];
  const staticUrls = staticPages.map(
    (slug) => `
  <url>
    <loc>${baseUrl}/${slug}</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`
  );

  // 2️⃣ Fetch dynamic courier slugs from Supabase
  const { data: couriers } = await supabase.from("couriers").select("slug");

  const dynamicUrls =
    couriers?.map(
      (c) => `
  <url>
    <loc>${baseUrl}/couriers/${c.slug}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`
    ) || [];

  // 3️⃣ Combine all URLs
  const urls = [...staticUrls, ...dynamicUrls];

  // 4️⃣ Build XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("")}
</urlset>`;

  // 5️⃣ Return XML response
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
