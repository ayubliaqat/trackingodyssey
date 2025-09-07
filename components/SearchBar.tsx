"use client";

import { ChangeEvent } from "react";
import couriersData from "@/app/data/couriers.json";

interface SearchBarProps {
  query: string;
  setQuery: (value: string) => void;
  onSuggestionClick: (slug: string) => void;
}

export default function SearchBar({ query, setQuery, onSuggestionClick }: SearchBarProps) {
  // Filter suggestions by query and limit to 5
  const filteredSuggestions = couriersData
    .filter((c) => c.name.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 5);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClick = (slug: string, name: string) => {
    setQuery(name);          // fill input
    onSuggestionClick(slug); // trigger navigation in parent
  };

  return (
    <div className="w-full relative">
      <input
        type="text"
        placeholder="Enter Courier Name (e.g. DHL)"
        value={query}
        onChange={handleInput}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
      />

      {query && filteredSuggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-300 rounded-lg mt-1 w-full max-h-60 overflow-y-auto shadow-lg">
          {filteredSuggestions.map((s) => (
            <li
              key={s.slug}
              onClick={() => handleClick(s.slug, s.name)}
              className="px-4 py-2 hover:bg-orange-100 cursor-pointer text-sm"
            >
              {s.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
