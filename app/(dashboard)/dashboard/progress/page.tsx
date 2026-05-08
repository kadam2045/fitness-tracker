import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { ComingSoonPlaceholder } from "@/components/dashboard/coming-soon-placeholder";

export const metadata = {
  title: "Progress | FitTrack",
  description: "View your fitness progress and analytics.",
};

export default function ProgressPage() {
  return (
    <DashboardLayout>
      <ComingSoonPlaceholder
        title="Progress"
        description="Your fitness analytics, charts, and progress history will appear here."
        icon="trending-up"
      />
    </DashboardLayout>
  );
}
