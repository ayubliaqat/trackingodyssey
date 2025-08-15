// app/sitemap.xml/route.ts
import { NextResponse } from 'next/server'

// Example slugs; you’ll replace this with your actual dynamic slugs from DB
const staticPages = [
  '',
  'about',
  'contact',
  'track',
  'couriers',
]

export async function GET() {
  const baseUrl = 'https://yourdomain.com' // Change this to your domain

  const urls = staticPages.map((slug) => {
    return `
      <url>
        <loc>${baseUrl}/${slug}</loc>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>
    `
  })

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
  ${urls.join('')}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
