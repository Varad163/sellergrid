export default function DashboardCard({ title, value }: any) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-md">
      <p className="text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  )
}