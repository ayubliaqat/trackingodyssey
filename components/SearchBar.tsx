"use client";

import { ChangeEvent, useState, KeyboardEvent } from "react";
import couriersData from "@/app/data/couriers.json";

interface SearchBarProps {
  query: string;
  setQuery: (value: string) => void;
  setSelectedPath: (value: string | null) => void;
}

export default function SearchBar({ query, setQuery, setSelectedPath }: SearchBarProps) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const filteredSuggestions = couriersData
    .filter((c) => c.name.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 5);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setSelectedPath(null);
    setShowSuggestions(true);
    setActiveIndex(-1);
  };

  const handleSuggestionClick = (name: string, path: string) => {
    setQuery(name);
    setSelectedPath(path);
    setShowSuggestions(false);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!filteredSuggestions.length || !showSuggestions) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev < filteredSuggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : filteredSuggestions.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0) {
        const selected = filteredSuggestions[activeIndex];
        handleSuggestionClick(selected.name, selected.path);
      }
    }
  };

  return (
    <div className="w-full relative">
      <input
        type="text"
        placeholder="Enter Courier Name (e.g. DHL)"
        value={query}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
      />

      {showSuggestions && query && filteredSuggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-300 rounded-lg mt-1 w-full max-h-60 overflow-y-auto shadow-lg">
          {filteredSuggestions.map((c, index) => (
            <li
              key={c.id}
              onClick={() => handleSuggestionClick(c.name, c.path)}
              className={`px-4 py-2 cursor-pointer text-sm ${
                index === activeIndex ? "bg-orange-100" : "hover:bg-orange-100"
              }`}
            >
              {c.name}
            </li>
          ))}
        </ul>
      )}

      {showSuggestions && query && filteredSuggestions.length === 0 && (
        <p className="absolute z-10 bg-white border border-gray-300 rounded-lg mt-1 w-full px-4 py-2 text-sm text-gray-500">
          No results found
        </p>
      )}
    </div>
  );
}
