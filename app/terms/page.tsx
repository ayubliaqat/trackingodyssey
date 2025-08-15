// app/terms/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Your Company Name",
  description: "Read the terms and conditions of using our courier tracking services.",
};

export default function TermsPage() {
  return (
    <main className="w-full max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white border-b pb-2">Terms & Conditions</h1>

      <section className="mb-8 border-b pb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p className="text-gray-700 dark:text-gray-300">
          These Terms and Conditions govern your use of our website and services. By accessing our platform, you agree to these terms. If you do not agree, please do not use our website.
        </p>
      </section>

      <section className="mb-8 border-b pb-6">
        <h2 className="text-xl font-semibold mb-2">2. Use of the Website</h2>
        <p className="text-gray-700 dark:text-gray-300">
          You agree to use this site only for lawful purposes. You must not use it in any way that causes harm, interruption, or affects other users.
        </p>
      </section>

      <section className="mb-8 border-b pb-6">
        <h2 className="text-xl font-semibold mb-2">3. Service Limitations</h2>
        <p className="text-gray-700 dark:text-gray-300">
          We offer courier tracking information by linking to third-party APIs or websites. We are not responsible for delays, errors, or data inaccuracies caused by third-party services.
        </p>
      </section>

      <section className="mb-8 border-b pb-6">
        <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
        <p className="text-gray-700 dark:text-gray-300">
          All content, logos, and designs on this website are owned or licensed to us. You may not copy, reuse, or republish any material without our written permission.
        </p>
      </section>

      <section className="mb-8 border-b pb-6">
        <h2 className="text-xl font-semibold mb-2">5. Privacy Policy</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Please read our <Link href="/privacy" className="text-blue-600 underline">Privacy Policy</Link> to understand how we collect, use, and protect your data.
        </p>
      </section>

      <section className="mb-8 border-b pb-6">
        <h2 className="text-xl font-semibold mb-2">6. Termination</h2>
        <p className="text-gray-700 dark:text-gray-300">
          We may suspend or terminate your access if you violate these terms or use our service inappropriately.
        </p>
      </section>

      <section className="mb-8 border-b pb-6">
        <h2 className="text-xl font-semibold mb-2">7. Changes to Terms</h2>
        <p className="text-gray-700 dark:text-gray-300">
          We may update these Terms from time to time. Changes take effect immediately after they are posted on this page.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
        <p className="text-gray-700 dark:text-gray-300">
          If you have any questions about these Terms, please contact us through our contact page or email.
        </p>
      </section>
    </main>
  );
}
