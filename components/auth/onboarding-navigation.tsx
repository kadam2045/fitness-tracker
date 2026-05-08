"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface OnboardingNavigationProps {
  onBack?: () => void;
  onNext?: () => void;
  isFirstStep?: boolean;
  isLastStep?: boolean;
  isSubmitting?: boolean;
  canContinue?: boolean;
  nextLabel?: string;
  showSkip?: boolean;
  onSkip?: () => void;
}

export function OnboardingNavigation({
  onBack,
  onNext,
  isFirstStep,
  isLastStep,
  isSubmitting,
  canContinue = true,
  nextLabel,
  showSkip,
  onSkip,
}: OnboardingNavigationProps) {
  return (
    <div className="flex flex-col gap-4 mt-8">
      <div
        className={cn(
          "flex items-center gap-4",
          isFirstStep ? "justify-end" : "justify-between",
        )}
      >
        {!isFirstStep && (
          <Button
            type="button"
            variant="ghost"
            onClick={onBack}
            disabled={isSubmitting}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        )}

        <div className="flex items-center gap-3">
          {showSkip && (
            <Button
              type="button"
              variant="ghost"
              onClick={onSkip}
              disabled={isSubmitting}
              className="text-muted-foreground"
            >
              Skip for now
            </Button>
          )}

          <Button
            type={isLastStep ? "submit" : "button"}
            onClick={isLastStep ? undefined : onNext}
            disabled={!canContinue || isSubmitting}
            className="min-w-[140px] flex items-center gap-2 group"
          >
            {isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                {nextLabel || (isLastStep ? "Complete Setup" : "Continue")}
                {!isLastStep && (
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                )}
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
