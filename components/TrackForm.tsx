'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaSearch } from 'react-icons/fa'

export default function TrackForm({ slug }: { slug: string }) {
  const [number, setNumber] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (number.trim().length < 5) return
    router.push(`/result/${slug}?number=${encodeURIComponent(number)}`)
  }

  return (
    <div className="bg-white shadow-md rounded-xl p-6 max-w-lg mx-auto mt-10">
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
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffc13b] text-gray-800"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <button
          type="submit"
          disabled={number.trim().length < 5}
          className={`w-full py-3 rounded-lg font-semibold text-white transition ${
            number.trim().length < 5
              ? 'bg-[#1e3d59] cursor-not-allowed'
              : 'bg-[#ff6e40] hover:bg-[#ff5c2a]'
          }`}
        >
          Track Now
        </button>
      </form>
    </div>
  )
}
