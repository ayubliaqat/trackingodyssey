"use client";

type Props = {
  query: string;
  setQuery: (val: string) => void;
  suggestions: string[];
  onSuggestionClick: (name: string) => void;
};

export default function SearchBar({
  query,
  setQuery,
  suggestions,
  onSuggestionClick,
}: Props) {
  return (
    <div className="w-full space-y-2 relative">
      <input
        type="text"
        placeholder="Enter Courier Name (e.g. DHL)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      {suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white dark:bg-gray-800 border border-gray-300 rounded-lg mt-1 w-full max-h-60 overflow-y-auto shadow-md">
          {suggestions.map((name, index) => (
            <li
              key={index}
              onClick={() => onSuggestionClick(name)}
              className="px-4 py-2 hover:bg-orange-100 dark:hover:bg-gray-700 cursor-pointer"
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
