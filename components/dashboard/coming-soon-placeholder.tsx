"use client";

import { motion } from "framer-motion";
import {
  Dumbbell,
  Target,
  TrendingUp,
  UtensilsCrossed,
  User,
  Settings,
  Construction,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  dumbbell: Dumbbell,
  target: Target,
  "trending-up": TrendingUp,
  utensils: UtensilsCrossed,
  user: User,
  settings: Settings,
};

interface ComingSoonPlaceholderProps {
  title: string;
  description: string;
  icon?: string;
}

export function ComingSoonPlaceholder({
  title,
  description,
  icon,
}: ComingSoonPlaceholderProps) {
  const Icon = icon ? iconMap[icon] ?? Construction : Construction;

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex max-w-md flex-col items-center text-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10"
        >
          <Icon size={28} className="text-primary" />
        </motion.div>

        {/* Title */}
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
        >
          <Construction size={12} />
          Coming Soon
        </motion.span>
      </motion.div>
    </div>
  );
}
