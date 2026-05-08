import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { ComingSoonPlaceholder } from "@/components/dashboard/coming-soon-placeholder";

export const metadata = {
  title: "Settings | FitTrack",
  description: "Manage your FitTrack settings.",
};

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <ComingSoonPlaceholder
        title="Settings"
        description="Manage your account settings, notifications, and preferences."
        icon="settings"
      />
    </DashboardLayout>
  );
}
