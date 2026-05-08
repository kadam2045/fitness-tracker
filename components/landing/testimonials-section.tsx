"use client";

import { TestimonialCard } from "./testimonial-card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marathon Runner",
    avatar: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    quote: "FitTrack completely changed how I prepare for races. The progress analytics are second to none, giving me the edge I needed to beat my PR by 12 minutes.",
  },
  {
    name: "David Chen",
    role: "Casual Gym-goer",
    avatar: "https://i.pravatar.cc/150?img=11",
    rating: 5,
    quote: "I love how easy it is to log my nutrition and workouts in one place. The UI is stunning and it actually makes me want to stay consistent with my goals.",
  },
  {
    name: "Marcus Williams",
    role: "Personal Trainer",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    quote: "As a professional, I've tried dozens of apps. FitTrack is the first one that combines premium aesthetics with serious data depth. I recommend it to all my clients.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest">Success Stories</h2>
          <p className="text-4xl md:text-5xl font-bold tracking-tight text-foreground max-w-2xl">
            Joined by thousands of achievers worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
