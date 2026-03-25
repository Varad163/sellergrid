"use client"

import Sidebar from "../../components/ui/Sidebar"
import DashboardCard from "../../components/ui/DashboardCard"
import ReviewCard from "../../components/charts/ReviewChart"

const reviews = [
  {
    id: 1,
    product: "Running Shoes",
    rating: 2,
    text: "Delivery was late",
    sentiment: "Negative",
  },
  {
    id: 2,
    product: "T-shirt",
    rating: 5,
    text: "Amazing quality!",
    sentiment: "Positive",
  },
]

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 bg-slate-50 min-h-screen text-gray-900">
        <h1 className="text-3xl font-bold mb-6 tracking-tight">
          Dashboard
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <DashboardCard title="Total Reviews" value="1,245" />
          <DashboardCard title="Positive" value="980" />
          <DashboardCard title="Negative" value="265" />
        </div>

        {/* Insights */}
        <div className="bg-white p-5 rounded-2xl shadow-md border border-gray-200 mb-6">
          <h2 className="font-semibold text-lg mb-3 text-gray-800">
            AI Insights
          </h2>

          <p className="text-gray-700">
            🚚 Delivery delay is the most common complaint
          </p>
          <p className="text-gray-700">
            📦 Customers love product quality
          </p>
        </div>

        {/* Recent Reviews */}
        <div>
          <h2 className="font-semibold text-lg mb-4 text-gray-800">
            Recent Reviews
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {reviews.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}