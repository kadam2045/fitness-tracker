"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -mr-48 -mt-24" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -ml-24 -mb-24" />

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            New: Personalized AI Workouts
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            Elevate Your <span className="text-primary">Fitness</span> Experience
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Track workouts, monitor nutrition, and achieve your goals with our premium all-in-one fitness platform. Designed for those who demand excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full h-14 px-8 text-lg gap-2" asChild>
              <Link href="/onboarding">
                Get Started Free <ArrowRight size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg gap-2" asChild>
              <Link href="#demo">
                <PlayCircle size={20} /> Watch Demo
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-zinc-200 overflow-hidden">
                  <Image 
                    src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                    alt="User" 
                    width={40} 
                    height={40} 
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">10k+</span> active members joined this month
            </p>
          </div>
        </motion.div>

        {/* Visual */}
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
      </div>
    </section>
  );
}
