import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { ComingSoonPlaceholder } from "@/components/dashboard/coming-soon-placeholder";

export const metadata = {
  title: "Goals | FitTrack",
  description: "Set and track your fitness goals.",
};

export default function GoalsPage() {
  return (
    <DashboardLayout>
      <ComingSoonPlaceholder
        title="Goals"
        description="Set your fitness goals and track your progress toward them."
        icon="target"
      />
    </DashboardLayout>
  );
}
