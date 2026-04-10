"use client"

import { useState } from "react"
import { MoreVertical, UserCheck, UserX } from "lucide-react"

const users = [
  { id: 1, name: "أحمد محمد", email: "ahmed@example.com", status: "نشط", joined: "منذ ٣ أيام", messages: 142, plan: "مجاني" },
  { id: 2, name: "فاطمة علي", email: "fatima@example.com", status: "نشط", joined: "منذ أسبوع", messages: 89, plan: "مدفوع" },
  { id: 3, name: "خالد إبراهيم", email: "khalid@example.com", status: "موقوف", joined: "منذ شهر", messages: 0, plan: "مجاني" },
  { id: 4, name: "نورة سعد", email: "noura@example.com", status: "نشط", joined: "منذ يومين", messages: 231, plan: "مدفوع" },
  { id: 5, name: "يوسف حسن", email: "youssef@example.com", status: "نشط", joined: "منذ ٥ أيام", messages: 67, plan: "مجاني" },
]

export default function RecentUsers() {
  const [menuOpen, setMenuOpen] = useState<number | null>(null)

  return (
    <div className="bg-[#13151e] border border-white/5 rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-sm font-semibold text-white">أحدث المستخدمين</h3>
          <p className="text-xs text-white/40 mt-0.5">المستخدمون المسجلون مؤخراً</p>
        </div>
        <button className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors">
          عرض الكل
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left text-xs text-white/30 font-medium pb-3 pr-2">المستخدم</th>
              <th className="text-left text-xs text-white/30 font-medium pb-3">الحالة</th>
              <th className="text-left text-xs text-white/30 font-medium pb-3 hidden md:table-cell">الرسائل</th>
              <th className="text-left text-xs text-white/30 font-medium pb-3 hidden lg:table-cell">الخطة</th>
              <th className="text-left text-xs text-white/30 font-medium pb-3 hidden lg:table-cell">الانضمام</th>
              <th className="pb-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-white/2 transition-colors">
                <td className="py-3 pr-2">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs font-bold text-emerald-400 shrink-0">
                      {user.name[0]}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white">{user.name}</p>
                      <p className="text-[10px] text-white/30">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="py-3">
                  <span
                    className={`inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full ${
                      user.status === "نشط"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {user.status === "نشط" ? (
                      <UserCheck className="w-3 h-3" />
                    ) : (
                      <UserX className="w-3 h-3" />
                    )}
                    {user.status}
                  </span>
                </td>
                <td className="py-3 text-xs text-white/50 hidden md:table-cell">
                  {user.messages.toLocaleString()}
                </td>
                <td className="py-3 hidden lg:table-cell">
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      user.plan === "مدفوع"
                        ? "bg-amber-500/10 text-amber-400"
                        : "bg-white/5 text-white/40"
                    }`}
                  >
                    {user.plan}
                  </span>
                </td>
                <td className="py-3 text-[10px] text-white/30 hidden lg:table-cell">{user.joined}</td>
                <td className="py-3 relative">
                  <button
                    onClick={() => setMenuOpen(menuOpen === user.id ? null : user.id)}
                    className="w-6 h-6 flex items-center justify-center rounded hover:bg-white/5 text-white/30 hover:text-white transition-colors"
                  >
                    <MoreVertical className="w-3.5 h-3.5" />
                  </button>
                  {menuOpen === user.id && (
                    <div className="absolute left-8 top-2 z-10 bg-[#1c1f2e] border border-white/10 rounded-lg shadow-xl py-1 min-w-32">
                      <button className="w-full text-left px-3 py-2 text-xs text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                        عرض الملف
                      </button>
                      <button className="w-full text-left px-3 py-2 text-xs text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                        إرسال رسالة
                      </button>
                      <button className="w-full text-left px-3 py-2 text-xs text-red-400 hover:bg-red-500/5 transition-colors">
                        إيقاف الحساب
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
