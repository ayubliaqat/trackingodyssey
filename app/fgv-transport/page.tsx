// app/couriers/fgv-transport-tracking/page.tsx
import Link from "next/link";
import TrackFormApp from "@/components/SimpleTrackForm";
import Script from "next/script";
import { Metadata } from "next";
import ExploreCouriers from "@/components/ExploreCouriers";

// 🔹 Static courier data
const courier = {
  slug: "fgv-transport",
  name: "FGV Transport Courier",
  website: "https://www.fgvtransport.com/",
  city: "Kuala Lumpur",
  address: "Level 6 East, Wisma FGV, Jalan Raja Laut, 50350 Kuala Lumpur",
  phone_numbers: ["+603 – 2789 1155"],
  emails: ["fgvtransport@fgvholdings.com"],
  logo: "",
};

// 🔹 Metadata
export const metadata: Metadata = {
  title: `${courier.name} Tracking - Real-Time Parcel Updates`,
  description: `Track your shipment with ${courier.name} in Kuala Lumpur. Get instant delivery updates for your parcels online.`,
  alternates: { canonical: `https://trackingodyssey.com/${courier.slug}` },
  openGraph: {
    title: `${courier.name} Tracking`,
    description: `Check your parcel status online with ${courier.name} in Kuala Lumpur, Malaysia.`,
    url: `https://trackingodyssey.com/${courier.slug}`,
    siteName: "Tracking Odyssey",
    type: "website",
  },
};

export const revalidate = 60;

// 🔹 JSON-LD structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: courier.name,
  url: courier.website,
  logo: courier.logo || "",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: courier.phone_numbers[0],
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: ["en"],
    },
  ],
};

export default function FGVTransportPage() {
  return (
    <main className="px-4 sm:px-6 py-10 bg-white min-h-screen max-w-5xl mx-auto">
      {/* JSON-LD */}
      <Script id="json-ld" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      {/* Header */}
      <header className="flex flex-col items-center mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1e3d59] mb-4">{courier.name} Tracking</h1>
        <p className="text-base sm:text-lg text-gray-700">
          Enter your tracking number to check your shipment status online.
        </p>
      </header>

      {/* Tracking Form */}
      <section aria-labelledby="tracking-form" className="text-center mb-10">
        <h2 id="tracking-form" className="sr-only">
          Track Your Parcel
        </h2>
        <TrackFormApp slug="fgv-transport" />
      </section>

      {/* Official Website */}
      <section className="bg-gray-100 rounded-lg p-4 mb-10 text-sm sm:text-base" aria-label="Courier links">
        {courier.website && (
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
        )}

        {/* Check Also Section */}
        <p className="text-gray-700">
          <strong>Check Also: </strong>
          <span className="mr-2">
            <Link href="/post2u-courier" className="text-blue-600 underline">
              Post2U Courier Delivery
            </Link>
          </span>
        </p>
      </section>

      {/* Contact Table */}
      <section aria-labelledby="contact-info" className="mb-12 overflow-x-auto">
        <h2 id="contact-info" className="text-lg sm:text-xl font-semibold mb-4 text-[#1e3d59]">
          Contact Information
        </h2>
        <table className="min-w-full border border-gray-300 text-sm">
          <tbody>
            <tr className="border-b">
              <th scope="row" className="font-medium px-4 py-2 bg-gray-50 text-left">
                City
              </th>
              <td className="px-4 py-2">{courier.city}</td>
            </tr>
            <tr className="border-b">
              <th scope="row" className="font-medium px-4 py-2 bg-gray-50 text-left">
                Address
              </th>
              <td className="px-4 py-2">{courier.address}</td>
            </tr>
            <tr className="border-b">
              <th scope="row" className="font-medium px-4 py-2 bg-gray-50 text-left">
                Phone Numbers
              </th>
              <td className="px-4 py-2 break-words">{courier.phone_numbers.join(", ")}</td>
            </tr>
            <tr>
              <th scope="row" className="font-medium px-4 py-2 bg-gray-50 text-left">
                Emails
              </th>
              <td className="px-4 py-2 break-words">{courier.emails.join(", ")}</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Explore All Couriers */}
      <ExploreCouriers currentSlug={courier.slug} />
    </main>
  );
}
