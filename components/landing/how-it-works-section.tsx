"use client";

import { motion } from "framer-motion";
import { UserPlus, Target, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: <UserPlus size={32} />,
    title: "Sign Up",
    description: "Create your profile in seconds and connect your favorite devices.",
  },
  {
    icon: <Target size={32} />,
    title: "Set Goals",
    description: "Define what success looks like for you, from weight loss to marathon prep.",
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Track Progress",
    description: "Watch your stats improve in real-time as you follow your custom plan.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest">The Process</h2>
          <p className="text-4xl md:text-5xl font-bold tracking-tight text-foreground max-w-2xl">
            Start your transformation in three simple steps
          </p>
        </div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-background border-2 border-border flex items-center justify-center text-primary mb-8 shadow-sm group-hover:border-primary group-hover:scale-110 transition-all duration-500 relative z-10">
                    {step.icon}
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full bg-primary/5 blur-xl group-hover:bg-primary/10 transition-colors duration-500" />
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm shadow-md border-2 border-background z-20">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{step.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
