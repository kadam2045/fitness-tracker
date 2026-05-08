import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { ComingSoonPlaceholder } from "@/components/dashboard/coming-soon-placeholder";

export const metadata = {
  title: "Profile | FitTrack",
  description: "Manage your FitTrack profile.",
};

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <ComingSoonPlaceholder
        title="Profile"
        description="View and edit your profile, preferences, and account details."
        icon="user"
      />
    </DashboardLayout>
  );
}
