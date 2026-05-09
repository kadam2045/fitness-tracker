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

export function StatsGrid({ stats: apiStats }: { stats?: any }) {
  const displayStats = [
    {
      label: "Calories Burned",
      value: apiStats?.caloriesBurned?.value?.toLocaleString() || "0",
      icon: Flame,
      trend: apiStats?.caloriesBurned?.trend ? `+${apiStats.caloriesBurned.trend}%` : "0%",
      trendUp: true,
    },
    {
      label: "Workouts This Week",
      value: apiStats?.workoutsThisWeek?.value?.toString() || "0",
      icon: Dumbbell,
      trend: apiStats?.workoutsThisWeek?.trend ? `+${apiStats.workoutsThisWeek.trend}` : "0",
      trendUp: true,
    },
    {
      label: "Streak Days",
      value: apiStats?.streakDays?.value?.toString() || "0",
      icon: Zap,
      trend: "🔥",
      trendUp: true,
    },
    {
      label: "Goal Progress",
      value: apiStats?.goalProgress?.value ? `${apiStats.goalProgress.value}%` : "0%",
      icon: Target,
      trend: apiStats?.goalProgress?.trend ? `+${apiStats.goalProgress.trend}%` : "0%",
      trendUp: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {displayStats.map((stat, i) => (
        <StatCard key={stat.label} {...stat} index={i} />
      ))}
    </div>
  );
}
