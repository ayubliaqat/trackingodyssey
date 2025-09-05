"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Courier {
  name: string;
  slug: string;
}

export default function CouriersPage() {
  const [couriers, setCouriers] = useState<Courier[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Fetch couriers from local JSON
  useEffect(() => {
    const fetchCouriers = async () => {
      try {
        const res = await fetch("/data/couriers.json");
        if (!res.ok) throw new Error("Failed to fetch couriers.");
        const data: Courier[] = await res.json();
        setCouriers(data);
      } catch (err: any) {
        console.error("Error fetching couriers:", err.message);
        setError("Failed to load couriers.");
      }
    };

    fetchCouriers();
  }, []);

  // Filtered list based on search input
  const filteredCouriers = couriers.filter((courier) =>
    courier.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="px-4 sm:px-6 py-10 bg-white min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-[#1e3d59]">
          All Couriers <span className="text-orange-400">Here....!</span>
        </h1>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Explore a wide range of courier partners. Click any to start tracking.
        </p>
      </header>

      {/* Search Bar */}
      <section
        aria-label="Search Couriers"
        className="mb-10 max-w-md mx-auto px-2"
      >
        <label htmlFor="courier-search" className="sr-only">
          Search courier
        </label>
        <input
          id="courier-search"
          type="text"
          placeholder="Search courier..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffc13b] text-sm sm:text-base"
        />
      </section>

      {/* Error Message */}
      {error && (
        <div
          className="text-red-500 text-center mb-6 text-sm sm:text-base"
          role="alert"
        >
          {error}
        </div>
      )}

      {/* Courier Cards */}
      <section
        aria-label="List of Couriers"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
      >
        {filteredCouriers.length > 0
          ? filteredCouriers.map((courier) => (
              <article
                key={courier.slug}
                className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition p-4 flex flex-col items-center text-center"
              >
                <h2 className="text-sm font-semibold mb-3 text-[#1e3d59] break-words">
                  {courier.name}
                </h2>
                <Link
                  href={`/couriers/${courier.slug}`}
                  aria-label={`Track ${courier.name}`}
                >
                  <button
                    className="w-full px-3 py-2 rounded-full text-white text-sm font-medium hover:bg-orange-500 transition-colors"
                    style={{ backgroundColor: "#ff8f26ff" }}
                  >
                    Track Now
                  </button>
                </Link>
              </article>
            ))
          : !error && (
              <div className="col-span-full text-center text-gray-500 text-sm">
                No couriers found.
              </div>
            )}
      </section>
    </main>
  );
}
