"use client"

import { UserPlus, Send, ShieldAlert, Download } from "lucide-react"
import { useState } from "react"

const actions = [
  { label: "إضافة مستخدم", icon: UserPlus, color: "text-emerald-400", bg: "bg-emerald-500/10 hover:bg-emerald-500/20" },
  { label: "إرسال إشعار", icon: Send, color: "text-blue-400", bg: "bg-blue-500/10 hover:bg-blue-500/20" },
  { label: "تقرير أمني", icon: ShieldAlert, color: "text-amber-400", bg: "bg-amber-500/10 hover:bg-amber-500/20" },
  { label: "تصدير البيانات", icon: Download, color: "text-violet-400", bg: "bg-violet-500/10 hover:bg-violet-500/20" },
]

export default function QuickActions() {
  const [clicked, setClicked] = useState<string | null>(null)

  const handleClick = (label: string) => {
    setClicked(label)
    setTimeout(() => setClicked(null), 1500)
  }

  return (
    <div className="bg-[#13151e] border border-white/5 rounded-xl p-5">
      <h3 className="text-sm font-semibold text-white mb-4">إجراءات سريعة</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => {
          const Icon = action.icon
          const isClicked = clicked === action.label
          return (
            <button
              key={action.label}
              onClick={() => handleClick(action.label)}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border border-white/5 transition-all ${action.bg}`}
            >
              <Icon className={`w-5 h-5 ${action.color}`} />
              <span className="text-xs text-white/60">
                {isClicked ? "تم!" : action.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
