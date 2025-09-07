// app/couriers/shree-mahabali-tracking/page.tsx
import Link from "next/link";
import TrackForm from "@/components/TrackForm";
import Script from "next/script";
import { Metadata } from "next";
import ExploreCouriers from "@/components/ExploreCouriers";
const courier = {
  slug: "shree-mahabali-tracking",
  name: "Shree Mahabali Courier Express",
  website: "http://shreemahabaliexpress.com/",
  city: "Surat",
  address: "Opp of the Gulambaba Mill Compound, Amisha Lodging, Unapani Street, Surat, India",
  phone_numbers: ["(0261)2410414"],
  emails: ["inquiry@shreemahabaliexpress.com"],
  logo: "",
};

export const metadata: Metadata = {
  title: `${courier.name} Tracking - Track Your Shipment`,
  description: `Track your shipment with Shree Mahabali Courier Express easily and get real-time updates.`,
  alternates: { canonical: `https://trackingodyssey.com/couriers/${courier.slug}` },
};

export const revalidate = 60;

// JSON-LD structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: courier.name,
  url: courier.website,
  logo: courier.logo || "",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: courier.phone_numbers[0] || "N/A",
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: ["en"],
    },
  ],
};

// Other couriers from JSON excluding current

export default function ShreeMahabaliPage() {
  return (
    <main className="px-4 sm:px-6 py-10 bg-white min-h-screen max-w-5xl mx-auto">
      {/* JSON-LD */}
      <Script id="json-ld" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      {/* Header */}
      <header className="flex flex-col items-center mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1e3d59] mb-4">{courier.name} Tracking</h1>
        <p className="text-base sm:text-lg text-gray-700 mb-8">
          Enter your tracking number to check your shipment status.
        </p>
      </header>

      {/* Tracking Form */}
      <section aria-labelledby="tracking-form" className="text-center mb-10 mt-4">
        <h2 id="tracking-form" className="sr-only">Track Your Parcel</h2>
        <TrackForm slug={courier.slug} />
      </section>

      {/* Official Website & Check Also */}
      <section className="bg-gray-100 rounded-lg p-4 mb-10 text-sm sm:text-base" aria-label="Courier links">
        {courier.website && (
          <p className="mb-2 text-gray-700 break-words">
            <strong>Official Website: </strong>
            <a href={courier.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              {courier.website}
            </a>
          </p>
        )}
        <p className="text-gray-700">
          <strong>Check Also: </strong>
          <span className="mr-2">
            <Link href="/couriers/sanchar-couriers-tracking" className="text-blue-600 underline">Sanchar Couriers</Link>
          </span>
        </p>
      </section>

      {/* Contact Table */}
      <section aria-labelledby="contact-info" className="mb-12 overflow-x-auto">
        <h2 id="contact-info" className="text-lg sm:text-xl font-semibold mb-4 text-[#1e3d59]">Contact Information</h2>
        <table className="min-w-full border border-gray-300 text-sm">
          <tbody>
            <tr className="border-b">
              <th className="font-medium px-4 py-2 bg-gray-50 text-left">City</th>
              <td className="px-4 py-2">{courier.city}</td>
            </tr>
            <tr className="border-b">
              <th className="font-medium px-4 py-2 bg-gray-50 text-left">Address</th>
              <td className="px-4 py-2 break-words">{courier.address}</td>
            </tr>
            <tr className="border-b">
              <th className="font-medium px-4 py-2 bg-gray-50 text-left">Phone Numbers</th>
              <td className="px-4 py-2 break-words">{courier.phone_numbers.join(", ")}</td>
            </tr>
            <tr>
              <th className="font-medium px-4 py-2 bg-gray-50 text-left">Emails</th>
              <td className="px-4 py-2 break-words">{courier.emails.length ? courier.emails.join(", ") : "N/A"}</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Explore All Couriers */}
       <ExploreCouriers currentSlug={courier.slug} />
    </main>
  );
}
