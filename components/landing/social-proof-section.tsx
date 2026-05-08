"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const partners = [
  { name: "FitLife", logo: "FL" },
  { name: "HealthPlus", logo: "HP" },
  { name: "Pulse", logo: "PL" },
  { name: "Zenith", logo: "ZN" },
  { name: "Vitality", logo: "VT" },
];

export function SocialProofSection() {
  return (
    <section className="py-12 border-y border-border bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="flex flex-col gap-1 text-center md:text-left shrink-0">
            <p className="text-sm font-bold text-primary uppercase tracking-widest">Trusted by</p>
            <p className="text-2xl font-bold text-foreground">50,000+ athletes</p>
          </div>
          
          <div className="w-px h-12 bg-border hidden md:block" />

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-12 gap-y-8 flex-1 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-lg bg-foreground/10 flex items-center justify-center font-bold text-xs">
                  {partner.logo}
                </div>
                <span className="font-semibold tracking-tight text-foreground">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
