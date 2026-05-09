import { ComingSoonPlaceholder } from "@/components/dashboard/coming-soon-placeholder";

export const metadata = {
  title: "Progress | FitTrack",
  description: "View your fitness progress and analytics.",
};

export default function ProgressPage() {
  return (
    <ComingSoonPlaceholder
      title="Progress"
      description="Your fitness analytics, charts, and progress history will appear here."
      icon="trending-up"
    />
  );
}
