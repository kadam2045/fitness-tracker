"use client";

import { Activity, Apple, BarChart3, Users } from "lucide-react";
import { FeatureCard } from "./feature-card";

const features = [
  {
    icon: <Activity size={24} />,
    title: "Workout Tracking",
    description: "Log every set, rep, and mile with ease. Our intuitive interface stays out of your way while you train.",
  },
  {
    icon: <Apple size={24} />,
    title: "Nutrition Plans",
    description: "Personalized meal guides and macro tracking to fuel your performance and recovery goals.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Progress Analytics",
    description: "Visualize your journey with detailed charts and insights that help you stay motivated and on track.",
  },
  {
    icon: <Users size={24} />,
    title: "Community",
    description: "Connect with like-minded athletes, join challenges, and share your wins with a supportive network.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest">Core Features</h2>
          <p className="text-4xl md:text-5xl font-bold tracking-tight text-foreground max-w-2xl">
            Everything you need to reach your peak potential
          </p>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Powerful tools designed to simplify your fitness journey and deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
