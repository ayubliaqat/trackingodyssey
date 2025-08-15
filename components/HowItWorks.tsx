"use client";

import { Search, MousePointerClick, PackageSearch } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-12 h-12 text-blue-600" aria-hidden="true" />,
      title: "Step 1: Search",
      desc: "Enter your courier name or tracking number in the search bar.",
    },
    {
      icon: (
        <MousePointerClick
          className="w-12 h-12 text-green-600"
          aria-hidden="true"
        />
      ),
      title: "Step 2: Click",
      desc: "Click on the matching result to view tracking details instantly.",
    },
    {
      icon: (
        <PackageSearch
          className="w-12 h-12 text-purple-600"
          aria-hidden="true"
        />
      ),
      title: "Step 3: Track",
      desc: "Stay updated with live courier tracking in one place.",
    },
  ];

  return (
    <section
      className="py-20 bg-white"
      role="region"
      aria-labelledby="how-it-works-heading"
    >
      <div className="container mx-auto px-4">
        <h2
          id="how-it-works-heading"
          className="text-3xl font-bold text-center mb-12 text-[#1e3d59]"
        >
          How It <span className="text-orange-400">Works?</span>
        </h2>

        <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 list-decimal list-inside">
          {steps.map((step, index) => (
            <article
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center"
              aria-labelledby={`step-title-${index}`}
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3
                id={`step-title-${index}`}
                className="text-xl font-semibold text-gray-800 mb-2"
              >
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </article>
          ))}
        </ol>
      </div>
    </section>
  );
}
