import StatsCards from "@/components/admin/StatsCards"
import ActivityChart from "@/components/admin/ActivityChart"
import RecentUsers from "@/components/admin/RecentUsers"
import TopConversations from "@/components/admin/TopConversations"
import QuickActions from "@/components/admin/QuickActions"

export default function AdminDashboard() {
  return (
    <div className="space-y-6 max-w-screen-xl mx-auto">
      {/* Page header */}
      <div>
        <h1 className="text-xl font-bold text-white">لوحة التحكم</h1>
        <p className="text-xs text-white/40 mt-1">مرحباً بك في لوحة إدارة ChatApp</p>
      </div>

      {/* Stats */}
      <StatsCards />

      {/* Chart + Quick actions */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2">
          <ActivityChart />
        </div>
        <QuickActions />
      </div>

      {/* Users table + Top conversations */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2">
          <RecentUsers />
        </div>
        <TopConversations />
      </div>
    </div>
  )
}
