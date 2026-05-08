"use client";

import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface OnboardingProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function OnboardingProgress({
  currentStep,
  totalSteps,
}: OnboardingProgressProps) {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full space-y-4 mb-8">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-muted-foreground uppercase tracking-wider">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="font-bold text-primary">
          {Math.round(percentage)}%
        </span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
}
