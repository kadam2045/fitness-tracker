"use client";

import { UseFormReturn } from "react-hook-form";
import { OnboardingData } from "@/lib/validations/onboarding";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "../../ui/form";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Ruler, Weight } from "lucide-react";

interface Step2PersonalDetailsProps {
  form: UseFormReturn<OnboardingData, any, OnboardingData>;
}

export function Step2PersonalDetails({ form }: Step2PersonalDetailsProps) {
  const unitValue = form.watch("unit");

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Personal Details</h1>
        <p className="text-muted-foreground">
          Tell us a bit about yourself to personalize your plan.
        </p>
      </div>

      <FormField
        control={form.control}
        name="dob"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Date of Birth</FormLabel>
            <FormControl>
              <Input type="date" className="w-full" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="gender"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Gender</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3"
              >
                {["male", "female", "other", "prefer-not-to-say"].map((option) => (
                  <div key={option}>
                    <RadioGroupItem
                      value={option}
                      id={option}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={option}
                      className="flex h-12 items-center justify-center rounded-xl border-2 border-muted bg-popover px-2 text-center hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 [&:has([data-state=checked])]:border-primary capitalize cursor-pointer text-xs font-medium transition-all"
                    >
                      {option.replace(/-/g, " ")}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <Card className="border-border/50 bg-muted/30">
        <CardContent className="p-6 space-y-8">
          <div className="flex items-center justify-between">
            <Label className="text-base font-semibold">Measurement Units</Label>
            <FormField
              control={form.control}
              name="unit"
              render={({ field }) => (
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex bg-muted p-1 rounded-lg"
                >
                  <div className="flex items-center">
                    <RadioGroupItem value="metric" id="metric" className="peer sr-only" />
                    <Label
                      htmlFor="metric"
                      className="px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer peer-data-[state=checked]:bg-background peer-data-[state=checked]:shadow-sm transition-all"
                    >
                      Metric (cm/kg)
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <RadioGroupItem value="imperial" id="imperial" className="peer sr-only" />
                    <Label
                      htmlFor="imperial"
                      className="px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer peer-data-[state=checked]:bg-background peer-data-[state=checked]:shadow-sm transition-all"
                    >
                      Imperial (in/lb)
                    </Label>
                  </div>
                </RadioGroup>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Ruler className="h-4 w-4 text-primary" />
                    <FormLabel className="text-base">Height</FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      className="w-20 h-9 text-right font-bold"
                      value={field.value}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                    <span className="text-sm font-medium text-muted-foreground">
                      {unitValue === "metric" ? "cm" : "in"}
                    </span>
                  </div>
                </div>
                <FormControl>
                  <Slider
                    min={unitValue === "metric" ? 50 : 20}
                    max={unitValue === "metric" ? 250 : 100}
                    step={1}
                    value={[field.value || 170]}
                    onValueChange={(vals) => field.onChange(vals[0])}
                    className="py-4"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Weight className="h-4 w-4 text-primary" />
                    <FormLabel className="text-base">Weight</FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      className="w-20 h-9 text-right font-bold"
                      value={field.value}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                    <span className="text-sm font-medium text-muted-foreground">
                      {unitValue === "metric" ? "kg" : "lb"}
                    </span>
                  </div>
                </div>
                <FormControl>
                  <Slider
                    min={unitValue === "metric" ? 20 : 40}
                    max={unitValue === "metric" ? 300 : 660}
                    step={0.5}
                    value={[field.value || 70]}
                    onValueChange={(vals) => field.onChange(vals[0])}
                    className="py-4"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
      </Card>
    </div>
  );
}
