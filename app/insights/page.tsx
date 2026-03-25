"use client"

import Sidebar from "../../components/ui/Sidebar"

export default function InsightsPage() {
  const insights = {
    complaints: [
      { text: "Delivery Delay", count: 120 },
      { text: "Poor Packaging", count: 80 },
      { text: "Wrong Size", count: 45 },
    ],
    praises: [
      { text: "Good Quality", count: 200 },
      { text: "Fast Shipping", count: 150 },
      { text: "Value for Money", count: 110 },
    ],
    sentiment: {
      positive: 980,
      negative: 265,
      neutral: 120,
    },
  }

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 bg-slate-50 min-h-screen text-gray-900">
        <h1 className="text-3xl font-bold mb-6 tracking-tight">
          AI Insights
        </h1>

        {/* Top Complaints */}
        <div className="bg-white p-5 rounded-2xl shadow-md border border-gray-200 mb-6">
          <h2 className="font-semibold text-lg mb-4 text-gray-800">
            ❌ Top Complaints
          </h2>

          <div className="flex gap-3 flex-wrap">
            {insights.complaints.map((c, i) => (
              <span
                key={i}
                className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {c.text} ({c.count})
              </span>
            ))}
          </div>
        </div>

        {/* Top Praises */}
        <div className="bg-white p-5 rounded-2xl shadow-md border border-gray-200 mb-6">
          <h2 className="font-semibold text-lg mb-4 text-gray-800">
            ✅ Top Praises
          </h2>

          <div className="flex gap-3 flex-wrap">
            {insights.praises.map((p, i) => (
              <span
                key={i}
                className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {p.text} ({p.count})
              </span>
            ))}
          </div>
        </div>

        {/* Sentiment Breakdown */}
        <div className="bg-white p-5 rounded-2xl shadow-md border border-gray-200 mb-6">
          <h2 className="font-semibold text-lg mb-4 text-gray-800">
            📊 Sentiment Breakdown
          </h2>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-100 p-4 rounded-xl text-center border border-green-200">
              <p className="text-sm text-green-700">Positive</p>
              <h3 className="text-2xl font-bold text-green-900">
                {insights.sentiment.positive}
              </h3>
            </div>

            <div className="bg-red-100 p-4 rounded-xl text-center border border-red-200">
              <p className="text-sm text-red-700">Negative</p>
              <h3 className="text-2xl font-bold text-red-900">
                {insights.sentiment.negative}
              </h3>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl text-center border border-gray-200">
              <p className="text-sm text-gray-700">Neutral</p>
              <h3 className="text-2xl font-bold text-gray-900">
                {insights.sentiment.neutral}
              </h3>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="bg-white p-5 rounded-2xl shadow-md border border-gray-200">
          <h2 className="font-semibold text-lg mb-2 text-gray-800">
            📈 Key Insight
          </h2>
          <p className="text-gray-700">
            🚚 Delivery-related complaints have increased by 20% this week,
            indicating a potential logistics issue.
          </p>
        </div>
      </div>
    </div>
  )
}