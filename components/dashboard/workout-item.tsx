"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkoutItemProps {
  name: string;
  detail: string;
  completed: boolean;
  onToggle: () => void;
  index?: number;
}

export function WorkoutItem({
  name,
  detail,
  completed,
  onToggle,
  index = 0,
}: WorkoutItemProps) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      onClick={onToggle}
      className={cn(
        "flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors",
        "hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        completed && "opacity-60"
      )}
      aria-label={`${completed ? "Mark incomplete" : "Mark complete"}: ${name}`}
    >
      {/* Checkbox */}
      <div
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors",
          completed
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border bg-background"
        )}
      >
        {completed && <Check size={12} strokeWidth={3} />}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p
          className={cn(
            "text-sm font-medium text-foreground truncate",
            completed && "line-through"
          )}
        >
          {name}
        </p>
        <p className="text-xs text-muted-foreground">{detail}</p>
      </div>
    </motion.button>
  );
}
