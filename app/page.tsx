// app/page.tsx

import type { Metadata } from "next";
export const dynamic = "force-dynamic"; // Enables SSR

import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import { HowItWorks } from "@/components/HowItWorks";
import PopularCouriers from "@/components/PopularCouriers";

export const metadata: Metadata = {
  title: "Home — TrackingSite",
  description: "Track parcels from many couriers. Fast SSR pages for SEO.",
  openGraph: {
    title: "Home — TrackingSite",
    description: "Track parcels from many couriers. Fast SSR pages for SEO.",
    url: "https://trackingodyssey.com",
    siteName: "TrackingSite",
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TrackingSite Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home — TrackingSite",
    description: "Track parcels from many couriers. Fast SSR pages for SEO.",
    images: ["https://trackingodyssey.com/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <section aria-labelledby="features-section">
        <FeaturesSection />
      </section>
      <section aria-labelledby="popular-couriers-section">
        <PopularCouriers />
      </section>
      <section aria-labelledby="how-it-works-section">
        <HowItWorks />
      </section>
    </main>
  );
}
