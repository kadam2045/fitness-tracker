"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function OnboardingHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 p-6 md:p-8 flex items-center justify-between z-20">
      <Link href="/" className="flex items-center gap-2 group">
        <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold italic transition-transform group-hover:scale-110">
          FT
        </div>
        <span className="text-xl font-bold tracking-tight">FitTrack</span>
      </Link>
      
      <div className="flex items-center gap-4">
        <span className="hidden sm:inline text-base font-medium text-muted-foreground">
          Already have an account?
        </span>
        <Button variant="ghost" size="sm" className="text-base font-medium" asChild>
          <Link href="/login">Sign In</Link>
        </Button>
      </div>
    </header>
  );
}
