"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      className="relative"
    >
      <div className="relative z-10 w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-border bg-card">
        <Image
          src="/hero-visual.png"
          alt="FitTrack Dashboard"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Decorative Elements */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 -right-6 z-20 bg-background/90 backdrop-blur shadow-xl border border-border p-4 rounded-2xl hidden md:block"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7"/></svg>
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Goal Achieved</p>
            <p className="text-sm font-bold">Daily Step Goal</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-10 -left-10 z-20 bg-background/90 backdrop-blur shadow-xl border border-border p-5 rounded-2xl hidden md:block"
      >
        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider mb-1">Heart Rate</p>
        <div className="flex items-end gap-1 h-12">
          {[40, 60, 30, 80, 50, 70, 45, 90].map((h, i) => (
            <div 
              key={i} 
              className="w-2 bg-primary rounded-t-sm" 
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <p className="text-xl font-bold mt-2">128 <span className="text-xs font-normal text-muted-foreground">BPM</span></p>
      </motion.div>
    </motion.div>
  );
}
