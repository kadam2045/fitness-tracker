"use client";

import * as React from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "../../ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Camera, PartyPopper } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { OnboardingData } from "@/lib/validations/onboarding";

interface Step5ProfileSetupProps {
  form: UseFormReturn<OnboardingData, any, OnboardingData>;
  isCompleted?: boolean;
}

export function Step5ProfileSetup({ form, isCompleted }: Step5ProfileSetupProps) {
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);

  if (isCompleted) {
    return (
      <div className="flex flex-col items-center justify-center text-center space-y-8 py-8">
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", damping: 12, stiffness: 200 }}
          className="h-24 w-24 rounded-full bg-success/10 flex items-center justify-center text-success"
        >
          <PartyPopper className="h-12 w-12" />
        </motion.div>
        
        <div className="space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold tracking-tight"
          >
            Welcome to FitTrack!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-sm mx-auto"
          >
            Your profile is all set. You&apos;re ready to start your journey towards a healthier you.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full pt-4"
        >
          <Button size="lg" className="w-full h-14 text-lg font-bold rounded-2xl shadow-xl hover:shadow-primary/20 transition-all" asChild>
            <Link href="/dashboard">
              Go to Dashboard
            </Link>
          </Button>
        </motion.div>

        {/* Success Confetti-like elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              x: 0, 
              y: 0,
              scale: 0
            }}
            animate={{ 
              opacity: [0, 1, 0], 
              x: (i % 2 === 0 ? 1 : -1) * (Math.random() * 150 + 50), 
              y: -(Math.random() * 200 + 100),
              scale: [0, 1, 0.5],
              rotate: Math.random() * 360
            }}
            transition={{ 
              duration: 2, 
              delay: 0.2,
              repeat: Infinity,
              repeatDelay: 1
            }}
            className={cn(
              "absolute h-3 w-3 rounded-sm pointer-events-none",
              i % 3 === 0 ? "bg-primary" : i % 3 === 1 ? "bg-accent" : "bg-success"
            )}
            style={{ top: "50%", left: "50%" }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Final Touches</h1>
        <p className="text-muted-foreground">
          Let&apos;s finish setting up your profile.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="relative group">
          <div className="h-32 w-32 rounded-full bg-muted border-4 border-background overflow-hidden shadow-inner flex items-center justify-center transition-all group-hover:bg-muted/80">
            {previewUrl ? (
              <img src={previewUrl} alt="Avatar Preview" className="h-full w-full object-cover" />
            ) : (
              <Camera className="h-10 w-10 text-muted-foreground transition-transform group-hover:scale-110" />
            )}
          </div>
          <label 
            htmlFor="avatar-upload" 
            className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform"
          >
            <Camera className="h-5 w-5" />
            <input 
              id="avatar-upload" 
              type="file" 
              className="sr-only" 
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const url = URL.createObjectURL(file);
                  setPreviewUrl(url);
                  form.setValue("avatar", file);
                }
              }}
            />
          </label>
        </div>
        <div className="text-center">
          <p className="font-semibold">Profile Picture</p>
          <p className="text-xs text-muted-foreground">Drag and drop or click to upload</p>
        </div>
      </div>

      <div className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">@</span>
                  <Input placeholder="fit_warrior" className="pl-8" {...field} />
                </div>
              </FormControl>
              <FormDescription>This is how other users will see you.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio (Optional)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about your fitness journey..." 
                  className="min-h-[100px] resize-none" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Preferences</h3>
          <FormField
            control={form.control}
            name="notifications"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-border/50">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Push Notifications</FormLabel>
                  <FormDescription className="text-xs">
                    Get reminders for workouts and goal progress.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
}
