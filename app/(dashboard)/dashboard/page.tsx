import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { DashboardWidgets } from "@/components/dashboard/dashboard-widgets";

export const metadata = {
  title: "Dashboard | FitTrack",
  description:
    "Your personal fitness dashboard — track workouts, goals, and progress.",
};

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardWidgets />
    </DashboardLayout>
  );
}
