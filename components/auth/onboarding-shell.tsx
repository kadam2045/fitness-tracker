"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { 
  onboardingSchema, 
  OnboardingData,
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
  step5Schema
} from "@/lib/validations/onboarding";
import { Form } from "../ui/form";
import { OnboardingHeader } from "./onboarding-header";
import { OnboardingProgress } from "./onboarding-progress";
import { OnboardingNavigation } from "./onboarding-navigation";
import { useAuth } from "@/providers/auth-provider";

// Step Components
import { Step1CreateAccount } from "./steps/step-1-create-account";
import { Step2PersonalDetails } from "./steps/step-2-personal-details";
import { Step3FitnessGoals } from "./steps/step-3-fitness-goals";
import { Step4ActivityLevel } from "./steps/step-4-activity-level";
import { Step5ProfileSetup } from "./steps/step-5-profile-setup";

const TOTAL_STEPS = 5;

const stepSchemas = [
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
  step5Schema,
];

export function OnboardingShell() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [direction, setDirection] = React.useState(0);
  const [isCompleted, setIsCompleted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { register, updateOnboarding, user, loading } = useAuth();
  const [error, setError] = React.useState<string | null>(null);

  const form = useForm<OnboardingData>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "male",
      height: 170,
      weight: 70,
      unit: "metric",
      goals: [],
      activityLevel: "moderately-active",
      username: "",
      bio: "",
      notifications: true,
    },
    mode: "onChange",
  });

  const nextStep = async () => {
    setError(null);
    // Validate current step before proceeding
    const fieldsToValidate = Object.keys(stepSchemas[currentStep - 1].shape) as (keyof OnboardingData)[];
    const isValid = await form.trigger(fieldsToValidate);
    
    if (isValid) {
      try {
        setIsSubmitting(true);
        const values = form.getValues();

        if (currentStep === 1) {
          // Register user after Step 1
          await register(values.fullName, values.email, values.password);
        } else {
          // Update user data after each step (except the last one which is handled by onSubmit)
          if (currentStep < TOTAL_STEPS) {
            const dataToUpdate: Partial<OnboardingData> = {};
            fieldsToValidate.forEach(field => {
              // @ts-ignore
              dataToUpdate[field] = values[field];
            });
            await updateOnboarding(dataToUpdate);
          }
        }

        if (currentStep < TOTAL_STEPS) {
          setDirection(1);
          setCurrentStep((prev) => prev + 1);
        } else {
          await onSubmit(values);
        }
      } catch (err: any) {
        setError(err.response?.data?.message || err.message || "An error occurred");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  };

  const skipStep = async () => {
    if (currentStep === 4 || currentStep === 5) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const onSubmit = async (data: OnboardingData) => {
    try {
      setIsSubmitting(true);
      setError(null);
      
      // Final update
      await updateOnboarding({
        username: data.username,
        bio: data.bio,
        notificationPreferences: { notifications: data.notifications } as any
      });

      setIsCompleted(true);
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1CreateAccount form={form} />;
      case 2:
        return <Step2PersonalDetails form={form} />;
      case 3:
        return <Step3FitnessGoals form={form} />;
      case 4:
        return <Step4ActivityLevel form={form} />;
      case 5:
        return <Step5ProfileSetup form={form} isCompleted={isCompleted} />;
      default:
        return null;
    }
  };

  return (
    <>
      <OnboardingHeader />
      
      {!isCompleted && (
        <OnboardingProgress currentStep={currentStep} totalSteps={TOTAL_STEPS} />
      )}

      {error && (
        <div className="mx-auto max-w-md px-6 py-2">
          <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
            {error}
          </div>
        </div>
      )}

      <div className="relative overflow-hidden min-h-[500px]">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                {renderStep()}
                
                {!isCompleted && (
                  <OnboardingNavigation
                    onBack={prevStep}
                    onNext={nextStep}
                    isFirstStep={currentStep === 1}
                    isLastStep={currentStep === TOTAL_STEPS}
                    isSubmitting={isSubmitting}
                    canContinue={true}
                    showSkip={currentStep === 4 || currentStep === 5}
                    onSkip={skipStep}
                  />
                )}
              </form>
            </Form>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
