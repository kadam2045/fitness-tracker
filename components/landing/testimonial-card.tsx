"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
  delay?: number;
}

export function TestimonialCard({ name, role, avatar, rating, quote, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Card className="h-full border-border bg-card rounded-3xl overflow-hidden p-8 flex flex-col gap-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}
            />
          ))}
        </div>
        
        <CardContent className="p-0 flex-1">
          <p className="text-lg italic text-foreground leading-relaxed">
            "{quote}"
          </p>
        </CardContent>
        
        <div className="flex items-center gap-4 pt-4 border-t border-border/50">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/10">
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-bold tracking-tight text-foreground">{name}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
