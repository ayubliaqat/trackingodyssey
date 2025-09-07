// app/tracking/[slug]/page.tsx
import couriers from "@/app/data/couriers.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import type { Courier } from "@/types/courier";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ number?: string }>;
};

// 🔹 Metadata generation
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!slug) return {};

  const courier = couriers.find((c) => c.slug === slug);
  if (!courier) return {};

  return {
    title: `Tracking Results - ${courier.name}`,
    description: `Check tracking results for your courier.`,
    robots: { index: false, follow: true },
  };
}

// 🔹 Static params for pre-rendering
export async function generateStaticParams() {
  return couriers.map((c) => ({ slug: c.slug }));
}

// 🔹 Tracking Result Page
export default async function TrackingResultPage({
  params,
  searchParams,
}: PageProps) {
  const { slug } = await params;
  const { number } = (await searchParams) || {};

  const trackingNumber = number ?? "N/A";
  const courier: Courier | undefined = couriers.find((c) => c.slug === slug);

  if (!courier) notFound();

  const currentTime = format(new Date(), "PPpp");

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 bg-white text-[#1e3d59]">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Tracking Results <span className="text-orange-400">..... </span>🙂
      </h1>

      <section className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-orange-400">
        <p className="text-lg font-bold mb-6">
          Ooops, Something went wrong.{" "}
          <a
            href={courier.website}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-orange-500 transition"
          >
            <span className="text-orange-400">Visit Official Website</span>
          </a>
        </p>

        <div className="overflow-x-auto rounded-lg border border-gray-300">
          <table className="min-w-full table-auto border-collapse">
            <tbody className="text-sm sm:text-base">
              <tr className="border-b border-gray-300">
                <td className="bg-gray-50 font-semibold px-4 py-3 border-r border-gray-300 w-1/2">
                  Courier Name:
                </td>
                <td className="px-4 py-3">{courier.name}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="bg-gray-50 font-semibold px-4 py-3 border-r border-gray-300">
                  Tracking Number:
                </td>
                <td className="px-4 py-3">{trackingNumber}</td>
              </tr>
              <tr>
                <td className="bg-gray-50 font-semibold px-4 py-3 border-r border-gray-300">
                  Checked At:
                </td>
                <td className="px-4 py-3">{currentTime}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="text-center mt-8">
        <Link
          href={`/couriers/${slug}`}
          className="inline-block px-6 py-3 bg-orange-400 text-white font-semibold rounded-full hover:bg-orange-500 transition"
        >
          ← Go Back to {courier.name}
        </Link>
      </div>
    </main>
  );
}
