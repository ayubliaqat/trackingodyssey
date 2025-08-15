import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - YourCompany",
  description: "Read our privacy policy to understand how YourCompany handles your personal data and protects your privacy.",
  robots: "index, follow",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">Privacy Policy</h1>

      <section className="border-b pb-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          At YourCompany, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website or services.
        </p>
      </section>

      <section className="border-b pb-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Personal identification information (Name, email address, phone number, etc.)</li>
          <li>Tracking information (IP address, browser type, device, etc.)</li>
          <li>Usage data (pages visited, clicks, interactions, etc.)</li>
        </ul>
      </section>

      <section className="border-b pb-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Provide and improve our services</li>
          <li>Respond to customer support requests</li>
          <li>Send updates and marketing (only with your permission)</li>
          <li>Analyze usage to improve user experience</li>
        </ul>
      </section>

      <section className="border-b pb-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Cookies & Tracking</h2>
        <p>
          We use cookies to personalize your experience and collect analytics. You can choose to accept or refuse cookies through your browser settings.
        </p>
      </section>

      <section className="border-b pb-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
        <p>
          We follow industry best practices to protect your data. However, no online service is 100% secure, so we cannot guarantee absolute security.
        </p>
      </section>

      <section className="border-b pb-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Third-Party Services</h2>
        <p>
          We may use third-party tools (like analytics or ads) that collect their own data. We recommend checking their privacy policies too.
        </p>
      </section>

      <section className="border-b pb-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
        <p>
          You can request to access, update, or delete your data. Please contact us at <a href="mailto:support@yourcompany.com" className="text-blue-600 underline">support@yourcompany.com</a>.
        </p>
      </section>

      <section className="pb-6">
        <h2 className="text-xl font-semibold mb-2">8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy anytime. Changes will be posted on this page with the updated date.
        </p>
      </section>

      <p className="text-sm text-gray-500 mt-8">Last updated: August 7, 2025</p>
    </main>
  );
}
