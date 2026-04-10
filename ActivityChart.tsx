"use client"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { day: "السبت", messages: 3200, users: 820 },
  { day: "الأحد", messages: 4100, users: 950 },
  { day: "الاثنين", messages: 5800, users: 1200 },
  { day: "الثلاثاء", messages: 4900, users: 1050 },
  { day: "الأربعاء", messages: 6200, users: 1380 },
  { day: "الخميس", messages: 7100, users: 1490 },
  { day: "الجمعة", messages: 5400, users: 1100 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1c1f2e] border border-white/10 rounded-lg px-4 py-3 text-xs text-white shadow-xl">
        <p className="font-semibold mb-2 text-white/70">{label}</p>
        {payload.map((entry: any) => (
          <p key={entry.name} style={{ color: entry.color }}>
            {entry.name === "messages" ? "الرسائل" : "المستخدمون"}: {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export default function ActivityChart() {
  return (
    <div className="bg-[#13151e] border border-white/5 rounded-xl p-5">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-sm font-semibold text-white">نشاط التطبيق</h3>
          <p className="text-xs text-white/40 mt-0.5">الرسائل والمستخدمين خلال الأسبوع</p>
        </div>
        <div className="flex items-center gap-4 text-xs text-white/40">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            الرسائل
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
            المستخدمون
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="messagesGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#34d399" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="usersGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#60a5fa" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
          <XAxis
            dataKey="day"
            tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="messages"
            stroke="#34d399"
            strokeWidth={2}
            fill="url(#messagesGrad)"
          />
          <Area
            type="monotone"
            dataKey="users"
            stroke="#60a5fa"
            strokeWidth={2}
            fill="url(#usersGrad)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
