import { OnboardingLayout } from "@/components/auth/onboarding-layout";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <OnboardingLayout>{children}</OnboardingLayout>;
}
