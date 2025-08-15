// app/contact/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Tracking Odyssey',
  description: 'Reach out to the Tracking Odyssey team for support, partnerships, or feedback.',
  robots: {
    index: false, // 🔒 Keep private from search engines
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-900 dark:text-gray-100">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4 text-[#1e3d59] dark:text-white">Contact Us</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Got a question, feedback, or partnership inquiry? We’d love to hear from you.
          Fill out the form and we’ll respond as soon as possible.
        </p>
      </header>

      <form className="space-y-6" method="POST" action="/api/contact" aria-label="Contact Form">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Enter your name"
            className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm focus:ring-2 focus:ring-[#ff6e40] focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm focus:ring-2 focus:ring-[#ff6e40] focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Type your message here..."
            className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 text-sm focus:ring-2 focus:ring-[#ff6e40] focus:outline-none"
          />
        </div>

        <div>
          <button
            type="submit"
            className="inline-flex items-center px-6 py-2 bg-[#ff6e40] hover:bg-[#e85c2c] text-white text-sm font-medium rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff6e40]"
          >
            ✉️ Send Message
          </button>
        </div>
      </form>
    </main>
  );
}
