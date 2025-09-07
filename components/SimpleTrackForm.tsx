"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

export default function TrackFormApp({ slug }: { slug: string }) {
  const [number, setNumber] = useState("");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (loading && progress < 100) {
      timer = setInterval(() => {
        setProgress((prev) => {
          const nextValue = prev + 1;
          if (nextValue >= 100) {
            clearInterval(timer);
            router.push(`/tracking/${slug}?number=${encodeURIComponent(number)}`);
          }
          return nextValue;
        });
      }, 100); // 100ms * 100 = ~10s
    }

    return () => clearInterval(timer);
  }, [loading, progress, number, slug, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (number.trim().length < 5) return;
    setProgress(0);
    setLoading(true);
  };

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Track Your Parcel
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Enter tracking number (e.g. 12345...)"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            disabled={loading}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 disabled:opacity-70"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Progress Bar */}
        {loading && (
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-orange-400 transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        <button
          type="submit"
          disabled={number.trim().length < 5 || loading}
          className={`w-full py-2.5 rounded-lg font-semibold text-white transition ${
            number.trim().length < 5 || loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-orange-400 hover:bg-orange-500"
          }`}
        >
          {loading ? `Tracking... ${progress}%` : "Track Now"}
        </button>
      </form>
    </div>
  );
}
