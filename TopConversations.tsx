"use client"

import { MessageCircle } from "lucide-react"

const conversations = [
  { id: 1, user: "أحمد ونورة", count: 842, percent: 92 },
  { id: 2, user: "خالد وفاطمة", count: 631, percent: 69 },
  { id: 3, user: "يوسف وأحمد", count: 487, percent: 53 },
  { id: 4, user: "نورة ويوسف", count: 321, percent: 35 },
  { id: 5, user: "فاطمة وخالد", count: 198, percent: 22 },
]

export default function TopConversations() {
  return (
    <div className="bg-[#13151e] border border-white/5 rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-sm font-semibold text-white">أكثر المحادثات نشاطاً</h3>
          <p className="text-xs text-white/40 mt-0.5">مقارنة بأكثر محادثة</p>
        </div>
        <MessageCircle className="w-4 h-4 text-white/20" />
      </div>

      <div className="space-y-4">
        {conversations.map((c) => (
          <div key={c.id}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs text-white/70">{c.user}</span>
              <span className="text-xs text-white/40">{c.count.toLocaleString()} رسالة</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-700"
                style={{ width: `${c.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
