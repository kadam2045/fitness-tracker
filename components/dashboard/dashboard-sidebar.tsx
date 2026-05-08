"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Dumbbell,
  Target,
  TrendingUp,
  UtensilsCrossed,
  User,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Workouts", href: "/dashboard/workouts", icon: Dumbbell },
  { name: "Goals", href: "/dashboard/goals", icon: Target },
  { name: "Progress", href: "/dashboard/progress", icon: TrendingUp },
  { name: "Nutrition", href: "/dashboard/nutrition", icon: UtensilsCrossed },
  { name: "Profile", href: "/dashboard/profile", icon: User },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-64 border-r border-border bg-card h-full">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">F</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            FitTrack
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1" aria-label="Dashboard navigation">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <motion.div key={item.name} whileHover={{ x: 2 }} transition={{ duration: 0.15 }}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="p-4 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          © 2026 FitTrack
        </p>
      </div>
    </aside>
  );
}
