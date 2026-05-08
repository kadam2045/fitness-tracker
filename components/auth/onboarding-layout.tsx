"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface OnboardingLayoutProps {
  children: React.ReactNode;
  sideContent?: React.ReactNode;
  className?: string;
}

export function OnboardingLayout({
  children,
  sideContent,
  className,
}: OnboardingLayoutProps) {
  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Side Content - Visible on Desktop */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-[45%] sticky top-0 h-screen bg-muted overflow-hidden">
        {sideContent || (
          <div className="relative h-full w-full flex flex-col items-center justify-center p-12 text-center">
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-primary/5" />
            <div className="relative z-10 space-y-6">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-xl">
                <span className="text-3xl font-bold italic">FT</span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-foreground">
                Transform your life with FitTrack
              </h2>
              <p className="text-xl text-muted-foreground max-w-md mx-auto">
                Join thousands of users who have already started their fitness journey with our personalized plans.
              </p>
            </div>
            {/* Abstract Decorative Elements */}
            <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          </div>
        )}
      </div>

      {/* Main Content */}
      <main className={cn(
        "flex-1 flex flex-col min-h-screen",
        className
      )}>
        <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 lg:p-16">
          <div className="w-full max-w-xl">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
