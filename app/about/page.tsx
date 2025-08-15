import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Courier Tracker",
  description:
    "Discover our mission, story, and why users choose Courier Tracker as their go-to shipment tracking platform.",
  robots: "index, follow",
  alternates: {
    canonical: "https://trackingodyssey.com/about",
  },
  openGraph: {
    title: "About Us | Courier Tracker",
    description:
      "Learn why thousands rely on Courier Tracker for accurate, unified parcel tracking.",
    url: "https://trackingodyssey.com/about",
    siteName: "Courier Tracker",
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main
      className="text-gray-900 dark:text-gray-100"
      aria-labelledby="about-page-heading"
    >
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Courier Tracker",
            url: "https://yourdomain.com",
            logo: "https://yourdomain.com/logo.png",
            description:
              "Courier Tracker unifies parcel tracking for 100+ couriers in one place.",
            sameAs: [
              "https://www.facebook.com/yourpage",
              "https://twitter.com/yourpage",
            ],
          }),
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 space-y-24">
        {/* Our Story */}
        <article
          className="text-center space-y-6"
          aria-labelledby="our-story-heading"
        >
          <h1
            id="about-page-heading"
            className="text-4xl sm:text-5xl font-bold text-orange-400 dark:text-white"
          >
            Our Story
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Courier Tracker was born out of frustration — jumping between
            courier websites just to check a package status was exhausting. So,
            we built a solution: one place to track them all. From small
            startups to global carriers, our platform brings every courier under
            one roof.
          </p>
        </article>

        {/* Mission & Vision */}
        <section
          className="grid md:grid-cols-2 gap-10 sm:gap-12"
          aria-labelledby="mission-vision-heading"
        >
          <div
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition"
            aria-labelledby="mission-heading"
          >
            <h2
              id="mission-heading"
              className="text-2xl sm:text-3xl font-semibold text-orange-400 mb-4"
            >
              Our Mission
            </h2>
            <p className="text-[#1e3d59] leading-relaxed">
              To simplify parcel tracking and provide a seamless experience by
              unifying all couriers into one reliable platform.
            </p>
          </div>

          <div
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition"
            aria-labelledby="vision-heading"
          >
            <h2
              id="vision-heading"
              className="text-2xl sm:text-3xl font-semibold text-orange-400 mb-4"
            >
              Our Vision
            </h2>
            <p className="text-[#1e3d59] leading-relaxed">
              To become the most trusted, user-friendly, and intelligent parcel
              tracking system globally — empowering users with real-time updates
              and peace of mind.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section
          className="bg-white text-center py-12 px-6 rounded-2xl shadow-lg hover:shadow-xl transition space-y-6"
          aria-labelledby="what-we-do-heading"
        >
          <h2
            id="what-we-do-heading"
            className="text-3xl sm:text-4xl font-bold text-orange-400"
          >
            What We Do
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed text-[#1e3d59]">
            We aggregate courier data in real-time, so you can enter your
            tracking number and instantly get updates — no matter which courier
            you’re using. Our platform is fast, simple, and mobile-friendly,
            making shipment tracking hassle-free.
          </p>
        </section>

        {/* Why Choose Us */}
        <section
          className="bg-white dark:bg-gray-900 py-12 px-6 rounded-2xl text-center space-y-6 shadow"
          aria-labelledby="why-choose-heading"
        >
          <h2
            id="why-choose-heading"
            className="text-3xl sm:text-4xl font-bold text-[#1e3d59] dark:text-white"
          >
            Why Choose Us
          </h2>
          <ul className="list-disc text-left text-gray-600 dark:text-gray-300 space-y-3 max-w-3xl mx-auto px-4 sm:px-6">
            <li>
              <strong>🚀 Unified tracking:</strong> 100+ couriers in one place
            </li>
            <li>
              <strong>📱 Mobile-first design:</strong> Optimized for all devices
            </li>
            <li>
              <strong>🔒 Privacy-focused:</strong> We never store your tracking
              numbers
            </li>
            <li>
              <strong>📦 Real-time updates:</strong> Always stay informed
            </li>
            <li>
              <strong>🎯 For everyone:</strong> Individuals, businesses &
              developers
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section
          className="text-center bg-white text-[#1e3d59] py-14 px-6 sm:px-8 rounded-2xl shadow-lg hover:shadow-xl transition"
          aria-labelledby="cta-heading"
        >
          <h2
            id="cta-heading"
            className="text-2xl sm:text-3xl font-semibold mb-4 text-orange-400"
          >
            Ready to track your shipment?
          </h2>
          <p className="text-base sm:text-lg mb-6 max-w-2xl mx-auto">
            Join thousands who trust Courier Tracker to keep an eye on their
            packages — no more guessing!
          </p>
          <Link
            href="/"
            className="inline-block bg-orange-400 hover:bg-orange-500 px-8 py-3 rounded-full font-medium text-white transition"
            aria-label="Start tracking your shipment"
          >
            🚚 Track Now
          </Link>
        </section>
      </div>
    </main>
  );
}
