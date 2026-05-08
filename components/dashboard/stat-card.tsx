"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  index?: number;
}

export function StatCard({
  label,
  value,
  icon: Icon,
  trend,
  trendUp,
  index = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className="group rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
    >
      {/* Icon */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
          <Icon size={20} className="text-primary" />
        </div>
        {trend && (
          <span
            className={cn(
              "text-xs font-medium px-2 py-0.5 rounded-full",
              trendUp
                ? "bg-success/10 text-success"
                : "bg-destructive/10 text-destructive"
            )}
          >
            {trend}
          </span>
        )}
      </div>

      {/* Value */}
      <p className="text-2xl font-bold tracking-tight text-foreground">
        {value}
      </p>

      {/* Label */}
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </motion.div>
  );
}
