'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

interface Courier {
  name: string
  slug: string
}

export default function CouriersPage() {
  const [couriers, setCouriers] = useState<Courier[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [error, setError] = useState<string | null>(null)

  // Fetch couriers from Supabase
  useEffect(() => {
    const fetchCouriers = async () => {
      const { data, error } = await supabase.from('couriers').select('name, slug')

      if (error) {
        console.error('Error fetching couriers:', error.message)
        setError('Failed to load couriers.')
      } else {
        setCouriers(data ?? [])
      }
    }

    fetchCouriers()
  }, [])

  // Filtered list based on search input
  const filteredCouriers = couriers.filter((courier) =>
    courier.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main className="px-4 sm:px-6 py-10 bg-white min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-[#1e3d59]">
        All Couriers Here
      </h1>

      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
        Explore a wide range of courier partners. Click any to start tracking.
      </p>

      {/* Search Bar */}
      <div className="mb-10 max-w-md mx-auto px-2">
        <input
          type="text"
          placeholder="Search courier..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffc13b] text-sm sm:text-base"
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-red-500 text-center mb-6 text-sm sm:text-base">
          {error}
        </div>
      )}

      {/* Courier Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {filteredCouriers.length > 0 ? (
          filteredCouriers.map((courier) => (
            <div
              key={courier.slug}
              className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition p-4 flex flex-col items-center text-center"
            >
              <h3 className="text-sm font-semibold mb-3 text-[#1e3d59] break-words">
                {courier.name}
              </h3>
              <Link href={`/couriers/${courier.slug}`} className="w-full">
                <button
                  className="w-full py-2 rounded-full text-white text-sm font-medium"
                  style={{ backgroundColor: '#ff6e40' }}
                >
                  Track Now
                </button>
              </Link>
            </div>
          ))
        ) : (
          !error && (
            <div className="col-span-full text-center text-gray-500 text-sm">
              No couriers found.
            </div>
          )
        )}
      </div>
    </main>
  )
}
