"use client";

import React, { useEffect, useState } from "react";
import { StatsGrid } from "./stats-grid";
import { TodaysWorkoutCard } from "./todays-workout-card";
import { WeeklyActivityChart } from "./weekly-activity-chart";
import { QuickActions } from "./quick-actions";
import { useAuth } from "@/context/AuthContext";
import api from "@/lib/api";
import { DashboardLoading } from "./dashboard-loading";

export function DashboardWidgets() {
  const { user } = useAuth();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!user?._id) return;
      
      try {
        setLoading(true);
        const response = await api.get(`/dashboard/${user._id}`);
        setData(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || err.message || "Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [user?._id]);

  if (loading) return <DashboardLoading />;

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-6 bg-destructive/5 rounded-xl border border-destructive/20">
        <h3 className="text-lg font-semibold text-destructive">Oops! Something went wrong</h3>
        <p className="text-muted-foreground mt-2">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Section: Stats overview */}
      <div>
        <h2 className="text-xl font-semibold text-foreground">Overview</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Your fitness snapshot for this week.
        </p>
      </div>

      <StatsGrid stats={data?.stats} />

      {/* Section: Workout + Quick Actions row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <TodaysWorkoutCard workout={data?.todaysWorkout} />
        </div>
        <QuickActions />
      </div>

      {/* Section: Weekly Activity */}
      <WeeklyActivityChart data={data?.weeklyActivity} />
    </div>
  );
}
