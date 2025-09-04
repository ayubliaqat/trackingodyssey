// app/components/CourierList.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

interface Courier {
  name: string;
  slug: string;
}

interface Props {
  couriers: Courier[];
}

export default function CourierList({ couriers }: Props) {
  const [query, setQuery] = useState("");

  // Filter couriers based on search
  const filteredCouriers = couriers.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Search Bar */}
      <section aria-label="Search Couriers" className="mb-10 max-w-md mx-auto px-2">
        <input
          type="text"
          placeholder="Search courier..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffc13b] text-sm sm:text-base"
        />
      </section>

      {/* Courier Cards */}
      <section
        aria-label="List of Couriers"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
      >
        {filteredCouriers.length > 0 ? (
          filteredCouriers.map((courier) => (
            <article
              key={courier.slug}
              className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition p-4 flex flex-col items-center text-center"
            >
              <h2 className="text-sm font-semibold mb-3 text-[#1e3d59] break-words">
                {courier.name}
              </h2>
              <Link href={`/couriers/${courier.slug}`} aria-label={`Track ${courier.name}`}>
                <button
                  className="w-full px-3 py-2 rounded-full text-white text-sm font-medium hover:bg-orange-500 transition-colors"
                  style={{ backgroundColor: "#ff8f26ff" }}
                >
                  Track Now
                </button>
              </Link>
            </article>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-sm">
            No couriers found.
          </div>
        )}
      </section>
    </>
  );
}
