import Sidebar from "../../components/ui/Sidebar"

const alerts = [
  {
    id: 1,
    type: "critical",
    message: "Spike in 1-star reviews for Running Shoes",
    change: "+35% this week",
  },
  {
    id: 2,
    type: "warning",
    message: "Delivery complaints increasing",
    change: "+20%",
  },
  {
    id: 3,
    type: "info",
    message: "Positive reviews increased for T-shirts",
    change: "+15%",
  },
]

export default function AlertsPage() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
       <h1 className="text-2xl font-bold mb-6 text-black">
  Alerts
</h1>

        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 rounded-xl shadow flex justify-between items-center ${
                alert.type === "critical"
                  ? "bg-red-100 text-red-700"
                  : alert.type === "warning"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              <div>
                <p className="font-semibold">{alert.message}</p>
                <p className="text-sm">{alert.change}</p>
              </div>

              <span className="text-sm font-bold uppercase">
                {alert.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}