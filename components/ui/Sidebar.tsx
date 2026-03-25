"use client"

import Link from "next/link"

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-zinc-900 text-white p-5">
      <h1 className="text-xl font-bold mb-8">SellerGrid</h1>

      <nav className="flex flex-col gap-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/insights">Insights</Link>
        <Link href="/alerts">Alerts</Link>
      </nav>
    </div>
  )
}