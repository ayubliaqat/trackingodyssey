import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
export const metadata: Metadata = {
  title: "Contact Us | Tracking Odyssey",
  description:
    "Reach out to the Tracking Odyssey team for support, partnerships, or feedback.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-gray-900 dark:text-gray-100"
      role="main"
    >
      {/* Page Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-[#1e3d59] dark:text-white">
          Contact Us
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto text-sm sm:text-base">
          Got a question, feedback, or partnership inquiry? Fill out the form
          below and we’ll get back to you soon.
        </p>
      </header>

      {/* Contact Form */}
      <ContactForm />
    </main>
  );
}
