"use client";

import * as React from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../ui/form";
import { Check, Flame, Dumbbell, Zap, Sparkles, Utensils, Heart } from "lucide-react";
import { OnboardingData } from "@/lib/validations/onboarding";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Step3FitnessGoalsProps {
  form: UseFormReturn<OnboardingData, any, OnboardingData>;
}

const goals = [
  {
    id: "lose-weight",
    title: "Lose Weight",
    icon: Flame,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    id: "build-muscle",
    title: "Build Muscle",
    icon: Dumbbell,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    id: "stay-active",
    title: "Stay Active",
    icon: Zap,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    id: "improve-flexibility",
    title: "Improve Flexibility",
    icon: Sparkles,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    id: "eat-healthier",
    title: "Eat Healthier",
    icon: Utensils,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    id: "reduce-stress",
    title: "Reduce Stress",
    icon: Heart,
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
];

export function Step3FitnessGoals({ form }: Step3FitnessGoalsProps) {
  const selectedGoals = form.watch("goals") || [];

  const toggleGoal = (goalId: string) => {
    if (selectedGoals.includes(goalId)) {
      form.setValue("goals", selectedGoals.filter((id: string) => id !== goalId));
    } else if (selectedGoals.length < 3) {
      form.setValue("goals", [...selectedGoals, goalId]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Fitness Goals</h1>
        <p className="text-muted-foreground">
          Select up to 3 goals. This helps us customize your experience.
        </p>
      </div>

      <FormField
        control={form.control}
        name="goals"
        render={() => (
          <FormItem>
            <FormControl>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {goals.map((goal) => {
                  const isSelected = selectedGoals.includes(goal.id);
                  const Icon = goal.icon;
                  
                  return (
                    <motion.div
                      key={goal.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleGoal(goal.id)}
                      className={cn(
                        "relative flex flex-col items-center justify-center p-6 rounded-3xl border-2 cursor-pointer transition-all duration-300",
                        isSelected 
                          ? "border-primary bg-primary/5 shadow-md" 
                          : "border-border bg-card hover:border-primary/50 hover:bg-muted/50"
                      )}
                    >
                      {isSelected && (
                        <div className="absolute top-3 right-3 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                          <Check className="h-4 w-4 text-primary-foreground" />
                        </div>
                      )}
                      
                      <div className={cn("p-3 rounded-2xl mb-4", goal.bg)}>
                        <Icon className={cn("h-8 w-8", goal.color)} />
                      </div>
                      
                      <span className="font-bold text-center">{goal.title}</span>
                    </motion.div>
                  );
                })}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
