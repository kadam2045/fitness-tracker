"use client";

import { Flame, Dumbbell, Zap, Target } from "lucide-react";
import { StatCard } from "./stat-card";

/** Mock data — structured for easy replacement with API data */
const stats = [
  {
    label: "Calories Burned",
    value: "1,284",
    icon: Flame,
    trend: "+12%",
    trendUp: true,
  },
  {
    label: "Workouts This Week",
    value: "5",
    icon: Dumbbell,
    trend: "+2",
    trendUp: true,
  },
  {
    label: "Streak Days",
    value: "14",
    icon: Zap,
    trend: "🔥",
    trendUp: true,
  },
  {
    label: "Goal Progress",
    value: "72%",
    icon: Target,
    trend: "+8%",
    trendUp: true,
  },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <StatCard key={stat.label} {...stat} index={i} />
      ))}
    </div>
  );
}
