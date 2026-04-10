"use client"

import { Users, MessageSquare, TrendingUp, CreditCard } from "lucide-react"

const stats = [
  {
    label: "إجمالي المستخدمين",
    value: "12,489",
    change: "+8.2%",
    positive: true,
    icon: Users,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    label: "الرسائل اليومية",
    value: "48,320",
    change: "+14.5%",
    positive: true,
    icon: MessageSquare,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    label: "المستخدمون النشطون",
    value: "3,241",
    change: "+3.1%",
    positive: true,
    icon: TrendingUp,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    label: "إيرادات الشهر",
    value: "$2,840",
    change: "-1.2%",
    positive: false,
    icon: CreditCard,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
]

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <div
            key={stat.label}
            className="bg-[#13151e] border border-white/5 rounded-xl p-5 flex flex-col gap-4 hover:border-white/10 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/40 font-medium">{stat.label}</span>
              <div className={`w-8 h-8 rounded-lg ${stat.bg} flex items-center justify-center`}>
                <Icon className={`w-4 h-4 ${stat.color}`} />
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p
                className={`text-xs mt-1 font-medium ${
                  stat.positive ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {stat.change} مقارنة بالشهر الماضي
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
