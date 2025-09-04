"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type Courier = {
  id: number;
  name: string;
  slug: string;
};

export default function PopularCouriers() {
  const [couriers, setCouriers] = useState<Courier[]>([]);

  useEffect(() => {
    const fetchCouriers = async () => {
      const { data, error } = await supabase
        .from("couriers")
        .select("id, name, slug");

      if (!error && data) {
        // Shuffle randomly
        const shuffled = data.sort(() => 0.5 - Math.random());
        // Pick first 12
        setCouriers(shuffled.slice(0, 12));
      } else {
        console.error("Failed to fetch couriers", error?.message);
      }
    };

    fetchCouriers();
  }, []);

  return (
    <section
      className="py-16 bg-white"
      role="region"
      aria-labelledby="popular-couriers-heading"
    >
      <div className="container mx-auto px-4">
        <h2
          id="popular-couriers-heading"
          className="text-3xl font-bold mb-8 text-center text-[#1e3d59]"
        >
          Popular <span className="text-orange-400">Couriers..!</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {couriers.map((courier) => (
            <article
              key={courier.id}
              className="flex flex-col justify-center items-center border rounded-xl px-4 py-6 shadow-sm hover:shadow-md transition bg-white"
              aria-labelledby={`courier-title-${courier.id}`}
            >
              <h3
                id={`courier-title-${courier.id}`}
                className="text-center text-base sm:text-lg font-semibold text-gray-800"
              >
                <Link
                  href={`/couriers/${courier.slug}`}
                  className="text-orange-600 hover:text-orange-700 transition"
                  aria-label={`Track shipment with ${courier.name}`}
                >
                  Track {courier.name}
                </Link>
              </h3>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/couriers/all"
            className="inline-block px-6 py-3 text-white bg-orange-500 hover:bg-orange-600 rounded-full text-sm font-semibold transition"
            aria-label="View all available couriers"
          >
            View All Couriers
          </Link>
        </div>
      </div>
    </section>
  );
}
