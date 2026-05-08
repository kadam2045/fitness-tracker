import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { ComingSoonPlaceholder } from "@/components/dashboard/coming-soon-placeholder";

export const metadata = {
  title: "Workouts | FitTrack",
  description: "Browse and manage your workout routines.",
};

export default function WorkoutsPage() {
  return (
    <DashboardLayout>
      <ComingSoonPlaceholder
        title="Workouts"
        description="Your workout routines and exercise library will appear here."
        icon="dumbbell"
      />
    </DashboardLayout>
  );
}
