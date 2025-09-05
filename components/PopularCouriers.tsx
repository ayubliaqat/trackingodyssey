// app/components/PopularCouriers.tsx
import Link from "next/link";
import couriersData from "@/app/data/couriers.json";

interface Courier {
  name: string;
  slug: string;
  website?: string;
  city?: string;
  address?: string;
  phone_numbers?: string[];
  emails?: string[];
}

export default function PopularCouriers() {
  // Get all couriers from JSON and pick first 12
  const allCouriers: Courier[] = couriersData;
  const couriers = allCouriers.slice(0, 12); // pick first 12

  return (
    <section className="py-16 bg-white" role="region" aria-labelledby="popular-couriers-heading">
      <div className="container mx-auto px-4">
        <h2 id="popular-couriers-heading" className="text-3xl font-bold mb-8 text-center text-[#1e3d59]">
          Popular <span className="text-orange-400">Couriers..!</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {couriers.length > 0 ? (
            couriers.map((courier, idx) => (
              <article
                key={idx}
                className="flex flex-col justify-center items-center border rounded-xl px-4 py-6 shadow-sm hover:shadow-md transition bg-white"
                aria-labelledby={`courier-title-${idx}`}
              >
                <h3
                  id={`courier-title-${idx}`}
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
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-sm">
              No couriers found.
            </div>
          )}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/couriers"
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
