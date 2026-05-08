"use client";

import * as React from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Bed, User, Activity, Dumbbell, Trophy } from "lucide-react";
import { OnboardingData } from "@/lib/validations/onboarding";
import { cn } from "@/lib/utils";

interface Step4ActivityLevelProps {
  form: UseFormReturn<OnboardingData, any, OnboardingData>;
}

const activities = [
  {
    id: "sedentary",
    title: "Sedentary",
    description: "Little to no exercise, desk job",
    icon: Bed,
  },
  {
    id: "lightly-active",
    title: "Lightly Active",
    description: "Light exercise 1-3 days/week",
    icon: User,
  },
  {
    id: "moderately-active",
    title: "Moderately Active",
    description: "Moderate exercise 3-5 days/week",
    icon: Activity,
  },
  {
    id: "very-active",
    title: "Very Active",
    description: "Hard exercise 6-7 days/week",
    icon: Dumbbell,
  },
  {
    id: "athlete",
    title: "Athlete",
    description: "Very hard exercise, physical job or training",
    icon: Trophy,
  },
];

export function Step4ActivityLevel({ form }: Step4ActivityLevelProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Activity Level</h1>
        <p className="text-muted-foreground">
          How active are you on a daily basis?
        </p>
      </div>

      <FormField
        control={form.control}
        name="activityLevel"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid grid-cols-1 gap-4"
              >
                {activities.map((activity) => {
                  const Icon = activity.icon;
                  const isSelected = field.value === activity.id;

                  return (
                    <div key={activity.id}>
                      <RadioGroupItem
                        value={activity.id}
                        id={activity.id}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={activity.id}
                        className={cn(
                          "flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200",
                          isSelected
                            ? "border-primary bg-primary/5 shadow-sm"
                            : "border-border bg-card hover:border-primary/30 hover:bg-muted/50"
                        )}
                      >
                        <div className={cn(
                          "h-12 w-12 rounded-xl flex items-center justify-center transition-colors",
                          isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        )}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="font-bold leading-none">{activity.title}</p>
                          <p className="text-sm text-muted-foreground">{activity.description}</p>
                        </div>
                        {isSelected && (
                          <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                          </div>
                        )}
                      </Label>
                    </div>
                  );
                })}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
