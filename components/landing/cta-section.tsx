"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[3rem] bg-primary px-8 py-16 md:px-16 md:py-20 text-center shadow-2xl shadow-primary/20"
        >
          {/* Decorative background elements */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary-foreground mb-6">
              Ready to Transform Your Fitness Journey?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
              Join 50,000+ members who have already started their transformation. 
              Get early access to exclusive workouts and personalized nutrition plans.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="h-14 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-2xl px-6 focus-visible:ring-white/30"
              />
              <Button 
                size="lg" 
                className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-white text-primary hover:bg-white/90 font-bold transition-all duration-300 group"
              >
                Join Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <p className="mt-6 text-primary-foreground/60 text-xs">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
