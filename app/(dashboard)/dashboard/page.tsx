import { DashboardLayout } from "@/components/dashboard/dashboard-layout";

export const metadata = {
  title: "Dashboard | FitTrack",
  description: "Your personal fitness dashboard — track workouts, goals, and progress.",
};

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Placeholder heading */}
        <div>
          <h2 className="text-xl font-semibold text-foreground">Overview</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Your dashboard widgets will appear here.
          </p>
        </div>

        {/* Skeleton placeholder cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Calories Burned", "Workouts This Week", "Streak Days", "Goal Progress"].map(
            (label) => (
              <div
                key={label}
                className="rounded-2xl border border-border bg-card p-5 space-y-3"
              >
                <div className="h-3 w-20 rounded-full bg-muted animate-pulse" />
                <div className="h-8 w-24 rounded-lg bg-muted animate-pulse" />
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            )
          )}
        </div>

        {/* Skeleton content area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Today's workout placeholder */}
          <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-5 space-y-4">
            <div className="h-4 w-36 rounded-full bg-muted animate-pulse" />
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-10 rounded-xl bg-muted animate-pulse" />
              ))}
            </div>
          </div>

          {/* Quick actions placeholder */}
          <div className="rounded-2xl border border-border bg-card p-5 space-y-4">
            <div className="h-4 w-28 rounded-full bg-muted animate-pulse" />
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-10 rounded-xl bg-muted animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
