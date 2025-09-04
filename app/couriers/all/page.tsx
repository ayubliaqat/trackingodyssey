// app/couriers/all/page.tsx
import { getAllCouriers, type Courier } from "@/lib/getCouriers";
import CourierList from "@/components/CourierList";

export const revalidate = 60;

export default async function CouriersPage() {
  const couriers: Courier[] = getAllCouriers("all"); // server-side fetch

  return (
    <main className="px-4 sm:px-6 py-10 bg-white min-h-screen">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-[#1e3d59]">
          All Couriers <span className="text-orange-400">Here....!</span>
        </h1>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Explore a wide range of courier partners. Click any to start tracking.
        </p>
      </header>

      {/* Search + List */}
      <CourierList couriers={couriers} />
    </main>
  );
}
