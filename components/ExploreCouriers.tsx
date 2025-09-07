"use client";

import Link from "next/link";
import couriersData from "@/app/data/couriers.json";

interface Courier {
  name: string;
  slug: string;
  path: string;
}

interface ExploreCouriersProps {
  currentSlug?: string; // optional, to exclude current page
}

export default function ExploreCouriers({ currentSlug }: ExploreCouriersProps) {
  const otherCouriers = couriersData.filter((c: Courier) => c.slug !== currentSlug);

  return (
    <section aria-labelledby="all-couriers" className="pt-8 border-t border-gray-200">
      <h2
        id="all-couriers"
        className="text-lg sm:text-xl font-semibold mb-4 text-[#1e3d59] text-center"
      >
        Explore All Couriers
      </h2>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {otherCouriers.map((c) => (
          <Link
            key={c.slug}
            href={c.path} // use path from JSON
            className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition text-center"
          >
            {c.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
