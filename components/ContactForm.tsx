"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccess("✅ Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      setSuccess("");
    }
  };

  return (
    <section
      aria-labelledby="contact-form-heading"
      className="bg-white dark:bg-gray-900 w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800"
    >
      <h2 id="contact-form-heading" className="sr-only">
        Contact Form
      </h2>

      <form className="space-y-5" onSubmit={handleSubmit} aria-label="Contact Form">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#1e3d59] dark:text-gray-200">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter your name"
            className={`mt-1 w-full rounded-lg border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm focus:ring-2 focus:ring-[#ff6e40] focus:outline-none shadow-sm`}
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#1e3d59] dark:text-gray-200">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="you@example.com"
            className={`mt-1 w-full rounded-lg border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm focus:ring-2 focus:ring-[#ff6e40] focus:outline-none shadow-sm`}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#1e3d59] dark:text-gray-200">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Type your message here..."
            className={`mt-1 w-full rounded-lg border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm focus:ring-2 focus:ring-[#ff6e40] focus:outline-none shadow-sm`}
          />
          {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
        </div>

        {/* Success */}
        {success && <p className="text-green-600 text-sm font-medium">{success}</p>}

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center px-6 py-2.5 bg-orange-400 hover:bg-[#e85c2c] text-white text-sm font-medium rounded-full transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff6e40] shadow-md"
          >
            ✉️ Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
