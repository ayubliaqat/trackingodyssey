"use client";

import {
  LucideSearch,
  PackageSearch,
  Globe,
  ShieldCheck,
  Smartphone,
  Lightbulb,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <PackageSearch className="w-8 h-8 text-orange-500" />,
      title: "Real-Time Tracking",
      description: "Get live status updates from major couriers in one place.",
    },
    {
      icon: <LucideSearch className="w-8 h-8 text-orange-500" />,
      title: "Lightning-Fast Search",
      description: "Find your courier instantly with intelligent suggestions.",
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: "Supports 100+ Couriers",
      description: "From DHL to small regional carriers – we’ve got them all.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: "Mobile-Friendly Design",
      description: "Track packages on-the-go, anytime, anywhere with ease.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
      title: "Secure & Private",
      description: "Your search data is never stored, shared, or misused.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-orange-500" />,
      title: "Smart Suggestions",
      description: "Can’t remember the courier? We help you find the right one fast.",
    },
  ];

  return (
    <section
      className="py-16 px-4 md:px-8 lg:px-20 bg-white text-[#1e3d59]"
      role="region"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2
          id="features-heading"
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          All-in-One Tracking Solution
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We make it simple, fast, and reliable to track packages from all major
          couriers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300 bg-white text-left"
          >
            <div className="mb-4" aria-hidden="true">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
