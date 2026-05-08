import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { ComingSoonPlaceholder } from "@/components/dashboard/coming-soon-placeholder";

export const metadata = {
  title: "Nutrition | FitTrack",
  description: "Track your meals and nutrition.",
};

export default function NutritionPage() {
  return (
    <DashboardLayout>
      <ComingSoonPlaceholder
        title="Nutrition"
        description="Log your meals, track macros, and manage your nutrition plan."
        icon="utensils"
      />
    </DashboardLayout>
  );
}
