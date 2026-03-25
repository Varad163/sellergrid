export default function ReviewCard({ review }: any) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <div className="flex justify-between mb-2">
        <p className="font-semibold">{review.product}</p>
        <span className="text-yellow-500">⭐ {review.rating}</span>
      </div>

      <p className="text-gray-600">{review.text}</p>

      <span
        className={`text-xs mt-2 inline-block px-2 py-1 rounded ${
          review.sentiment === "Negative"
            ? "bg-red-100 text-red-600"
            : "bg-green-100 text-green-600"
        }`}
      >
        {review.sentiment}
      </span>
    </div>
  )
}