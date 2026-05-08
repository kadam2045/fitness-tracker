"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
  delay?: number;
}

export function PricingCard({
  name,
  price,
  description,
  features,
  ctaText,
  isPopular = false,
  delay = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <Card
        className={cn(
          "relative h-full flex flex-col border-border bg-card transition-all duration-300 rounded-3xl overflow-hidden",
          isPopular ? "border-primary shadow-2xl shadow-primary/10 scale-105 z-10" : "hover:shadow-xl hover:shadow-primary/5"
        )}
      >
        {isPopular && (
          <div className="absolute top-0 right-0 left-0 h-1.5 bg-primary" />
        )}
        
        {isPopular && (
          <div className="absolute top-4 right-4">
            <span className="bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
              Most Popular
            </span>
          </div>
        )}

        <CardHeader className="pt-8 pb-4">
          <CardTitle className="text-sm font-bold uppercase tracking-widest text-primary/60">
            {name}
          </CardTitle>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-4xl font-bold tracking-tight">{price}</span>
            <span className="text-muted-foreground text-sm">/month</span>
          </div>
          <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </CardHeader>

        <CardContent className="flex-1 pb-8">
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-primary/10 p-0.5 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="pb-8">
          <Button
            className={cn(
              "w-full rounded-2xl h-12 text-sm font-semibold transition-all duration-300",
              isPopular 
                ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20" 
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            {ctaText}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
