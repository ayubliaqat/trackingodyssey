// app/couriers/overseas-logistics-tracking/page.tsx
import Link from "next/link";
import TrackForm from "@/components/TrackForm";
import Script from "next/script";
import { Metadata } from "next";
import fs from "fs";
import path from "path";

// 🔹 Static data
const courier = {
  slug: "overseas-logistics-tracking",
  name: "Overseas Express Logistics",
  website: "https://overseas.hr/en/",
  city: "Vinkovci",
  address: "Vinkovci, Slavonski Brod, Virovitica, Kutina, Sisak, Krapina, Sesvete, Karlovac, Gospić, Šibenik, Metković and Dubrovnik",
  phone_numbers: ["+385 1 3454 555"],
  emails: ["info@overseas.hr"],
  logo: "", // optional
};

// 🔹 Metadata (general, without city name)
export const metadata: Metadata = {
  title: `${courier.name} Tracking - Real-Time Parcel Updates`,
  description: `Track your shipment with ${courier.name}. Get instant delivery updates for your parcels online.`,
  alternates: { canonical: `https://trackingodyssey.com/couriers/${courier.slug}` },
  openGraph: {
    title: `${courier.name} Tracking`,
    description: `Check your parcel status online with ${courier.name}.`,
    url: `https://trackingodyssey.com/couriers/${courier.slug}`,
    siteName: "Tracking Odyssey",
    type: "website",
  },
};

export const revalidate = 60;

// 🔹 Read all couriers dynamically for "Explore Other Couriers"
const couriersDir = path.join(process.cwd(), "app", "couriers");
let otherCouriers: { slug: string; name: string }[] = [];

try {
  const folders = fs.readdirSync(couriersDir, { withFileTypes: true }).filter((d) => d.isDirectory());
  otherCouriers = folders
    .map((d) => ({ slug: d.name, name: d.name.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) }))
    .filter((c) => c.slug !== courier.slug); // exclude current
} catch (err) {
  console.error(err);
}

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
      telephone: courier.phone_numbers[0] || "N/A",
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: ["en"],
    },
  ],
};

export default function OverseasLogisticsPage() {
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
          <span className="mr-2">
            <strong>Previous Courier: </strong>
            <Link href="/couriers/udx-transport-tracking" className="text-blue-600 underline">
              UDX Worldwide Transport
            </Link>
          </span>
          {/* Next Courier link can be added when available */}
        </p>
      </section>

      {/* Contact Table */}
      <section aria-labelledby="contact-info" className="mb-12 overflow-x-auto">
        <h2 id="contact-info" className="text-lg sm:text-xl font-semibold mb-4 text-[#1e3d59]">Contact Information</h2>
        <table className="min-w-full border border-gray-300 text-sm">
          <tbody>
            <tr className="border-b">
              <th scope="row" className="font-medium px-4 py-2 bg-gray-50 text-left">City</th>
              <td className="px-4 py-2">{courier.city}</td>
            </tr>
            <tr className="border-b">
              <th scope="row" className="font-medium px-4 py-2 bg-gray-50 text-left">Address</th>
              <td className="px-4 py-2">{courier.address}</td>
            </tr>
            <tr className="border-b">
              <th scope="row" className="font-medium px-4 py-2 bg-gray-50 text-left">Phone Numbers</th>
              <td className="px-4 py-2 break-words">{courier.phone_numbers.length ? courier.phone_numbers.join(", ") : "N/A"}</td>
            </tr>
            <tr>
              <th scope="row" className="font-medium px-4 py-2 bg-gray-50 text-left">Emails</th>
              <td className="px-4 py-2 break-words">{courier.emails.length ? courier.emails.join(", ") : "N/A"}</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Explore Other Couriers */}
      <section aria-labelledby="other-couriers" className="pt-8 border-t border-gray-200">
        <h2 id="other-couriers" className="text-lg sm:text-xl font-semibold mb-4 text-[#1e3d59] text-center">
          Explore Other Couriers
        </h2>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {otherCouriers.map((c) => (
            <Link
              key={c.slug}
              href={`/couriers/${c.slug}`}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition text-center"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
