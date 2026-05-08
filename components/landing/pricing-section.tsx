"use client";

import { motion } from "framer-motion";
import { PricingCard } from "./pricing-card";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started with your fitness journey.",
    features: [
      "Basic workout tracking",
      "Standard nutrition tips",
      "Community forum access",
      "Weekly progress summary",
      "Mobile app access",
    ],
    ctaText: "Get Started",
    isPopular: false,
  },
  {
    name: "Pro",
    price: "$19",
    description: "Advanced features for serious fitness enthusiasts.",
    features: [
      "Everything in Free",
      "Personalized workout plans",
      "Detailed nutrition analysis",
      "Advanced progress analytics",
      "Priority community support",
      "Custom goal setting",
    ],
    ctaText: "Upgrade to Pro",
    isPopular: true,
  },
  {
    name: "Elite",
    price: "$49",
    description: "The ultimate experience with professional guidance.",
    features: [
      "Everything in Pro",
      "1-on-1 coaching session",
      "Personalized meal plans",
      "Biometric data integration",
      "VIP community access",
      "Early access to features",
    ],
    ctaText: "Go Elite",
    isPopular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6 md:px-12 lg:px-24 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-bold uppercase tracking-widest text-xs"
          >
            Pricing Plans
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-6"
          >
            Choose the Right Plan <br /> for Your Goals
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Whether you're just starting out or looking for advanced training, we have a plan that fits your needs and budget.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              {...plan}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          All plans include a 14-day money-back guarantee. No questions asked.
        </motion.p>
      </div>
    </section>
  );
}
