import { OnboardingShell } from "@/components/auth/onboarding-shell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onboarding | FitTrack",
  description: "Start your fitness journey with FitTrack. Tell us about your goals and preferences.",
};

export default function OnboardingPage() {
  return <OnboardingShell />;
}
