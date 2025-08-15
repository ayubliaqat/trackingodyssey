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
};

export default function Home() {
  return (
    <main>
      <Hero/>
      <FeaturesSection />
      <PopularCouriers />
      <HowItWorks />
    </main>
  );
}
