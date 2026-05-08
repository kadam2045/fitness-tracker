"use client";

import { motion } from "framer-motion";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
  userName?: string;
  avatarUrl?: string;
}

export function DashboardHeader({
  userName = "User",
  avatarUrl,
}: DashboardHeaderProps) {
  const greeting = getGreeting();

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex items-center justify-between px-6 py-4 border-b border-border bg-card"
    >
      {/* Welcome text */}
      <div className="flex flex-col gap-0.5">
        <h1 className="text-lg font-semibold text-foreground">
          {greeting}, {userName} 👋
        </h1>
        <p className="text-sm text-muted-foreground">
          Here&apos;s your fitness overview for today.
        </p>
      </div>

      {/* Right section: notification + avatar */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-xl text-muted-foreground hover:text-foreground"
          aria-label="Notifications"
        >
          <Bell size={18} />
        </Button>

        <div
          className="w-9 h-9 rounded-full bg-muted flex items-center justify-center overflow-hidden border border-border"
          aria-label="User avatar"
        >
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={`${userName}'s avatar`}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-sm font-semibold text-muted-foreground">
              {userName.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
      </div>
    </motion.header>
  );
}

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}
