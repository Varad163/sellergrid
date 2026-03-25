"use client"

import { useState } from "react"
import Sidebar from "../../components/ui/Sidebar"
import ReviewCard from "../../components/charts/ReviewChart"

const reviewsData = [
  {
    id: 1,
    product: "Running Shoes",
    rating: 2,
    text: "Delivery was late",
    sentiment: "Negative",
    platform: "Amazon",
  },
  {
    id: 2,
    product: "T-shirt",
    rating: 5,
    text: "Amazing quality!",
    sentiment: "Positive",
    platform: "Flipkart",
  },
  {
    id: 3,
    product: "Watch",
    rating: 3,
    text: "Okay product",
    sentiment: "Neutral",
    platform: "Amazon",
  },
]

export default function ReviewsPage() {
  const [search, setSearch] = useState("")
  const [sentiment, setSentiment] = useState("All")
  const [platform, setPlatform] = useState("All")

  const filtered = reviewsData.filter((r) => {
    return (
      r.text.toLowerCase().includes(search.toLowerCase()) &&
      (sentiment === "All" || r.sentiment === sentiment) &&
      (platform === "All" || r.platform === platform)
    )
  })

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 bg-slate-50 min-h-screen text-gray-900">
        <h1 className="text-3xl font-bold mb-6 tracking-tight">
          Reviews
        </h1>

        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Search reviews..."
            className="p-2 rounded-lg border border-gray-300 w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSentiment(e.target.value)}
          >
            <option>All</option>
            <option>Positive</option>
            <option>Negative</option>
            <option>Neutral</option>
          </select>

          <select
            className="p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPlatform(e.target.value)}
          >
            <option>All</option>
            <option>Amazon</option>
            <option>Flipkart</option>
          </select>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-2 gap-4">
          {filtered.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>
      </div>
    </div>
  )
}