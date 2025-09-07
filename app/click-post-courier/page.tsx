// app/couriers/click-post-courier-tracking/page.tsx
import Link from "next/link";
import TrackFormApp from "@/components/SimpleTrackForm";
import Script from "next/script";
import { Metadata } from "next";
import ExploreCouriers from "@/components/ExploreCouriers";
import couriersData from "@/app/data/couriers.json";

// 🔹 Static courier data
const courier = {
  slug: "click-post-courier",
  name: "ClickPost Courier Shipment",
  website: "https://www.clickpost.ai/",
  city: "New Delhi",
  address: "1/22, First Floor, Aruna Asaf Ali Marg, Vasant Kunj, New Delhi, Delhi 110002",
  phone_numbers: ["6361696474"],
  emails: ["sales@clickpost.in"],
  logo: "",
};

// 🔹 Metadata
export const metadata: Metadata = {
  title: `${courier.name} Tracking - Real-Time Parcel Updates`,
  description: `Track your shipment with ${courier.name} in New Delhi. Get instant delivery updates for your parcels online.`,
  alternates: { canonical: `https://trackingodyssey.com/${courier.slug}` },
  openGraph: {
    title: `${courier.name} Tracking`,
    description: `Check your parcel status online with ${courier.name} in New Delhi, India.`,
    url: `https://trackingodyssey.com/${courier.slug}`,
    siteName: "Tracking Odyssey",
    type: "website",
  },
};

export const revalidate = 60;

// 🔹 Get all other couriers from JSON excluding current
const otherCouriers = couriersData.filter((c) => c.slug !== courier.slug);

// 🔹 JSON-LD structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: courier.name,
  url: courier.website || "",
  logo: courier.logo || "",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: courier.phone_numbers[0] || "",
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: ["en"],
    },
  ],
};

export default function ClickPostPage() {
  return (
    <main className="px-4 sm:px-6 py-10 bg-white min-h-screen max-w-5xl mx-auto">
      {/* JSON-LD */}
      <Script id="json-ld" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      {/* Header */}
      <header className="flex flex-col items-center mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1e3d59] mb-4">
          {courier.name} Tracking
        </h1>
        <p className="text-base sm:text-lg text-gray-700">
          Enter your tracking number to check your shipment status online.
        </p>
      </header>

      {/* Tracking Form */}
      <section aria-labelledby="tracking-form" className="text-center mb-10">
        <h2 id="tracking-form" className="sr-only">
          Track Your Parcel
        </h2>
        <TrackFormApp slug={courier.slug} />
      </section>

      {/* Official Website & Check Also */}
      {courier.website && (
        <section
          className="bg-gray-100 rounded-lg p-4 mb-10 text-sm sm:text-base"
          aria-label="Courier links"
        >
          <p className="mb-2 text-gray-700 break-words">
            <strong>Visit Official Website: </strong>
            <a
              href={courier.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {courier.website}
            </a>
          </p>

          {/* Check Also Section using otherCouriers */}
          {otherCouriers.length > 0 && (
            <p className="text-gray-700">
              <strong>Check Also: </strong>
              {otherCouriers.map((c, idx) => (
                <span key={c.slug} className="mr-2">
                  <Link href={`/couriers/${c.slug}`} className="text-blue-600 underline">
                    {c.name}
                  </Link>
                  {idx < otherCouriers.length - 1 && ","}
                </span>
              ))}
            </p>
          )}
        </section>
      )}

      {/* Contact Table */}
      <section aria-labelledby="contact-info" className="mb-12 overflow-x-auto">
        <h2
          id="contact-info"
          className="text-lg sm:text-xl font-semibold mb-4 text-[#1e3d59]"
        >
          Contact Information
        </h2>
        <table className="min-w-full border border-gray-300 text-sm">
          <tbody>
            <tr className="border-b">
              <th
                scope="row"
                className="font-medium px-4 py-2 bg-gray-50 text-left"
              >
                City
              </th>
              <td className="px-4 py-2">{courier.city}</td>
            </tr>
            <tr className="border-b">
              <th
                scope="row"
                className="font-medium px-4 py-2 bg-gray-50 text-left"
              >
                Address
              </th>
              <td className="px-4 py-2">{courier.address}</td>
            </tr>
            {courier.phone_numbers.length > 0 && (
              <tr className="border-b">
                <th
                  scope="row"
                  className="font-medium px-4 py-2 bg-gray-50 text-left"
                >
                  Phone Numbers
                </th>
                <td className="px-4 py-2 break-words">
                  {courier.phone_numbers.join(", ")}
                </td>
              </tr>
            )}
            {courier.emails.length > 0 && (
              <tr>
                <th
                  scope="row"
                  className="font-medium px-4 py-2 bg-gray-50 text-left"
                >
                  Emails
                </th>
                <td className="px-4 py-2 break-words">
                  {courier.emails.join(", ")}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

      {/* Explore All Couriers */}
      <ExploreCouriers currentSlug={courier.slug} />
    </main>
  );
}
