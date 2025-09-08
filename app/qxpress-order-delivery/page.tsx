// app/couriers/qxpress-order-delivery/page.tsx
import Link from "next/link";
import TrackFormApp from "@/components/SimpleTrackForm";
import Script from "next/script";
import ExploreCouriers from "@/components/ExploreCouriers";
import { Metadata } from "next";

// 🔹 Static courier data
const courier = {
  slug: "qxpress-order-delivery",
  name: "Qxpress Order Delivery",
  website: "https://www.qxpress.net/",
  city: "",
  address: "",
  phone_numbers: [],
  emails: [],
  logo: "",
};

// 🔹 Metadata
export const metadata: Metadata = {
  title: `${courier.name} Tracking - Real-Time Parcel Updates`,
  description: `Track your shipment with ${courier.name}. Get instant delivery updates for your parcels online.`,
  alternates: { canonical: `https://trackingodyssey.com/${courier.slug}` },
  openGraph: {
    title: `${courier.name} Tracking`,
    description: `Check your parcel status online with ${courier.name}.`,
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
  logo: courier.logo,
  contactPoint: [],
};

export default function QxpressOrderDeliveryPage() {
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

      {/* Official Website + Check Also */}
      {/* Official Website + Check Also */}
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

        <p className="text-gray-700">
          <strong>Check Also: </strong>
          <span className="mr-2">
            <Link
              href="/acs-courier-transport"
              className="text-blue-600 underline"
            >
              ACS Transport Order Shipment
            </Link>
          </span>
        </p>
      </section>

      {/* Explore All Couriers */}
      <ExploreCouriers currentSlug={courier.slug} />
    </main>
  );
}
