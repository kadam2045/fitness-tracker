"use client";

import { StatsGrid } from "./stats-grid";
import { TodaysWorkoutCard } from "./todays-workout-card";
import { WeeklyActivityChart } from "./weekly-activity-chart";
import { QuickActions } from "./quick-actions";

export function DashboardWidgets() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Section: Stats overview */}
      <div>
        <h2 className="text-xl font-semibold text-foreground">Overview</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Your fitness snapshot for this week.
        </p>
      </div>

      <StatsGrid />

      {/* Section: Workout + Quick Actions row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <TodaysWorkoutCard />
        </div>
        <QuickActions />
      </div>

      {/* Section: Weekly Activity */}
      <WeeklyActivityChart />
    </div>
  );
}
