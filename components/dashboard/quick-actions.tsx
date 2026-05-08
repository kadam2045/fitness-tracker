"use client";

import { motion } from "framer-motion";
import { Play, UtensilsCrossed, TrendingUp, type LucideIcon } from "lucide-react";

interface QuickAction {
  label: string;
  icon: LucideIcon;
  href: string;
  description: string;
}

/** Mock actions — structured for easy replacement with API/route data */
const actions: QuickAction[] = [
  {
    label: "Start Workout",
    icon: Play,
    href: "/dashboard/workouts",
    description: "Begin a new session",
  },
  {
    label: "Log Meal",
    icon: UtensilsCrossed,
    href: "/dashboard/nutrition",
    description: "Track your meals",
  },
  {
    label: "View Progress",
    icon: TrendingUp,
    href: "/dashboard/progress",
    description: "Check your stats",
  },
];

function ActionButton({
  action,
  index,
}: {
  action: QuickAction;
  index: number;
}) {
  const Icon = action.icon;

  return (
    <motion.a
      href={action.href}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.5 + index * 0.08 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="flex items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <Icon size={18} className="text-primary" />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium text-foreground">{action.label}</p>
        <p className="text-xs text-muted-foreground">{action.description}</p>
      </div>
    </motion.a>
  );
}

export function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.45 }}
      className="rounded-2xl border border-border bg-card p-5"
    >
      {/* Header */}
      <h3 className="mb-4 text-base font-semibold text-foreground">
        Quick Actions
      </h3>

      {/* Actions list */}
      <div className="space-y-1">
        {actions.map((action, i) => (
          <ActionButton key={action.label} action={action} index={i} />
        ))}
      </div>
    </motion.div>
  );
}
