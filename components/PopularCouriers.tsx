"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { ArrowRight } from "lucide-react";

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
        .select("id, name, slug")
        .limit(30);

      if (!error && data) {
        setCouriers(data);
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
          className="text-3xl font-bold mb-8 text-center text-gray-900"
        >
          Popular Couriers
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {couriers.map((courier) => (
            <div
              key={courier.id}
              className="flex flex-col justify-between items-center border rounded-xl px-4 py-6 shadow-sm hover:shadow-md transition bg-white"
            >
              {/* Courier Name */}
              <h3 className="text-center text-base font-semibold text-gray-800 mb-6">
                {courier.name}
              </h3>

              {/* Track Button */}
              <Link
                href={`/couriers/${courier.slug}`}
                className="flex items-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700 transition"
                aria-label={`Track ${courier.name}`}
              >
                Track <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/couriers"
            className="inline-block px-6 py-3 text-white bg-orange-500 hover:bg-orange-600 rounded-lg text-sm font-semibold transition"
          >
            View All Couriers
          </Link>
        </div>
      </div>
    </section>
  );
}
