"use client"

import { Menu, Bell, Search } from "lucide-react"
import Link from "next/link"

interface Props {
  onMenuClick: () => void
}

export default function AdminHeader({ onMenuClick }: Props) {
  return (
    <header className="h-14 border-b border-white/5 bg-[#13151e] flex items-center px-4 gap-4 shrink-0">
      <button
        onClick={onMenuClick}
        className="lg:hidden text-white/50 hover:text-white transition-colors"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Search */}
      <div className="flex-1 max-w-sm">
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5">
          <Search className="w-4 h-4 text-white/30 shrink-0" />
          <input
            type="text"
            placeholder="بحث..."
            className="bg-transparent text-sm text-white placeholder-white/30 outline-none w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 mr-auto">
        {/* Notifications */}
        <button className="relative w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center transition-colors">
          <Bell className="w-4 h-4 text-white/50" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full" />
        </button>

        {/* Go to app */}
        <Link
          href="/"
          className="text-xs text-white/50 hover:text-emerald-400 transition-colors px-3 py-1.5 border border-white/10 rounded-lg hover:border-emerald-500/30"
        >
          العودة للتطبيق
        </Link>
      </div>
    </header>
  )
}
