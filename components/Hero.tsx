"use client";

import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function Hero() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length < 2) {
        setSuggestions([]);
        return;
      }

      const { data, error } = await supabase
        .from("couriers")
        .select("name")
        .ilike("name", `%${query}%`)
        .limit(5);

      if (!error && data) {
        setSuggestions(data.map((item) => item.name));
      }
    };

    fetchSuggestions();
  }, [query]);

  const onSuggestionClick = (name: string) => {
    setQuery(name);
    setSuggestions([]);
  };

  const handleSearch = async () => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;

    setLoading(true);

    const { data, error } = await supabase
      .from("couriers")
      .select("slug")
      .ilike("name", `%${trimmedQuery}%`)
      .limit(1);

    setLoading(false);

    if (error) {
      alert("Something went wrong. Try again.");
      return;
    }

    if (data && data.length > 0) {
      router.push(`/couriers/${data[0].slug}`);
    } else {
      alert("Courier not found.");
    }
  };

  return (
    <section className="w-full pt-6 md:pt-8 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-8">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e3d59] dark:text-white leading-tight">
            Your One-Stop<br />
            <span className="text-orange-500">Tracking Solution</span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-[#1e3d59]">
            Fast. Simple. Courier Tracking Made Easy, Just a Click Away.
          </p>

          <div className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-2xl w-full max-w-xl mx-auto md:mx-0">
            <SearchBar
              query={query}
              setQuery={setQuery}
              suggestions={suggestions}
              onSuggestionClick={onSuggestionClick}
            />

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button
                onClick={handleSearch}
                disabled={loading}
                className="px-6 py-3 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition font-semibold w-full sm:w-auto"
              >
                {loading ? "Loading..." : "Track Now"}
              </button>
              <Link
                href="/couriers"
                className="px-6 py-3 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-gray-700 transition font-semibold w-full sm:w-auto text-center"
              >
                Explore All
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/assets/banner.png"
            alt="Courier and package delivery illustration"
            width={500}
            height={500}
            className="object-contain w-full max-w-[320px] md:max-w-[480px] h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
