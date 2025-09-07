// app/couriers/bluedart-tracking/page.tsx
import Link from "next/link";
import TrackForm from "@/components/TrackForm";
import Script from "next/script";
import { Metadata } from "next";
import ExploreCouriers from "@/components/ExploreCouriers";
const courier = {
  slug: "bluedart-tracking",
  name: "BlueDart Express",
  website: "https://www.bluedart.com",
  city: "Ahmedabad",
  address: `BLUE DART EXPRESS LTD SHALIMAR CO-OP HSG SOC,
NEAR EMBASSY MARKET, OFF ASHRAM ROAD.`,
  phone_numbers: ["+91-22-12345678"],
  emails: ["customerservice@bluedart.com"],
  logo: "",
};

export const metadata: Metadata = {
  title: `${courier.name} Tracking - Real-Time Parcel Updates`,
  description: `Track your ${courier.name} shipments in Ahmedabad and across India. Enter your tracking number to get instant delivery updates.`,
  alternates: { canonical: `https://trackingodyssey.com/couriers/${courier.slug}` },
  openGraph: {
    title: `${courier.name} Tracking`,
    description: `Track your ${courier.name} shipments in Ahmedabad and across India.`,
    url: `https://trackingodyssey.com/couriers/${courier.slug}`,
    siteName: "Tracking Odyssey",
    type: "website",
  },
};

export const revalidate = 60;

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

export default function BlueDartPage() {
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
          Enter your tracking number to find your parcel in real-time.
        </p>
      </header>

      {/* Tracking Form */}
      <section aria-labelledby="tracking-form" className="text-center mb-10">
        <h2 id="tracking-form" className="sr-only">Track Your Parcel</h2>
        <TrackForm slug={courier.slug} />
      </section>

      {/* Official Website & Check Also */}
      <section className="bg-gray-100 rounded-lg p-4 mb-10 text-sm sm:text-base" aria-label="Courier links">
        {courier.website && (
          <p className="mb-2 text-gray-700 break-words">
            <strong>Visit Official Website: </strong>
            <a href={courier.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              {courier.website}
            </a>
          </p>
        )}
        <p className="text-gray-700">
          <strong>Check Also: </strong>
          <Link href="/couriers/jai-maharashtra-tracking" className="text-blue-600 underline">
            Jai Maharashtra Cargo Movers Tracking
          </Link>
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
              <td className="px-4 py-2 whitespace-pre-wrap">{courier.address}</td>
            </tr>
            <tr className="border-b">
              <th className="font-medium px-4 py-2 bg-gray-50 text-left">Phone Numbers</th>
              <td className="px-4 py-2 break-words">{courier.phone_numbers.join(", ")}</td>
            </tr>
            <tr>
              <th className="font-medium px-4 py-2 bg-gray-50 text-left">Emails</th>
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
