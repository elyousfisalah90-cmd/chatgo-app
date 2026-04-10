"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  BarChart2,
  Settings,
  Shield,
  Bell,
  CreditCard,
  X,
  MessageCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "لوحة التحكم", href: "/admin", icon: LayoutDashboard },
  { label: "المستخدمون", href: "/admin/users", icon: Users },
  { label: "المحادثات", href: "/admin/conversations", icon: MessageSquare },
  { label: "الإحصائيات", href: "/admin/analytics", icon: BarChart2 },
  { label: "الإشعارات", href: "/admin/notifications", icon: Bell },
  { label: "الاشتراكات", href: "/admin/subscriptions", icon: CreditCard },
  { label: "الأمان", href: "/admin/security", icon: Shield },
  { label: "الإعدادات", href: "/admin/settings", icon: Settings },
]

interface Props {
  open: boolean
  onClose: () => void
}

export default function AdminSidebar({ open, onClose }: Props) {
  const pathname = usePathname()

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-30 w-64 bg-[#13151e] border-r border-white/5 flex flex-col transition-transform duration-300",
        "lg:relative lg:translate-x-0",
        open ? "translate-x-0" : "-translate-x-full"
      )}
    >
      {/* Logo */}
      <div className="flex items-center justify-between px-5 py-5 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-white text-sm">ChatGo Admin</span>
        </div>
        <button onClick={onClose} className="lg:hidden text-white/50 hover:text-white">
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        <p className="text-[10px] font-semibold text-white/30 uppercase px-3 mb-2 tracking-wider">
          القائمة الرئيسية
        </p>
        {navItems.map((item) => {
          const Icon = item.icon
          const active = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                active
                  ? "bg-emerald-500/15 text-emerald-400 font-medium"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              )}
            >
              <Icon className={cn("w-4 h-4 shrink-0", active ? "text-emerald-400" : "")} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Bottom */}
      <div className="p-4 border-t border-white/5">
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/5">
          <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-bold text-white shrink-0">
            م
          </div>
          <div className="min-w-0">
            <p className="text-xs font-medium text-white truncate">المدير العام</p>
            <p className="text-[10px] text-white/40 truncate">admin@chatapp.com</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
