// app/couriers/sanchar-couriers-tracking/page.tsx
import Link from "next/link";
import TrackForm from "@/components/TrackForm";
import Script from "next/script";
import { Metadata } from "next";
import ExploreCouriers from "@/components/ExploreCouriers";
const courier = {
  slug: "sanchar-couriers-tracking",
  name: "Sanchar Couriers",
  website: "https://sancharcouriers.in/index.html",
  city: "Secunderabad, Nagpur",
  address: "Shop No-15, 16, Minerva Complex, S.D. Road, Secunderabad-500 003T, Telangana; Behind Tata Parsl School, Opp. Durga Mata Mandir, Gandhi Sagar Road, Ganjipeth, Nagpur - 440018",
  phone_numbers: ["+91 86000 15388 (Mr Nilesh Singh)", "+91 90300 13230"],
  emails: ["sssancharcouriers@gmail.com"],
  logo: "",
};

export const metadata: Metadata = {
  title: `${courier.name} Tracking - Track Your Shipment`,
  description: `Track your shipment with ${courier.name} easily and get real-time updates.`,
  alternates: { canonical: `https://trackingodyssey.com/couriers/${courier.slug}` },
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
      telephone: courier.phone_numbers[0] || "N/A",
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: ["en"],
    },
  ],
};

export default function SancharCouriersPage() {
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
          <Link href="/couriers/kargokart-parcel-tracking" className="text-blue-600 underline">
            KargoKart Parcel Service
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
