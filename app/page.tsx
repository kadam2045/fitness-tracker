import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { SocialProofSection } from "@/components/landing/social-proof-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SocialProofSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
      </main>
      
      {/* Basic Footer Placeholder - to be updated in next phase */}
      <footer className="py-12 border-t border-border bg-background">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2026 FitTrack. Built for excellence.</p>
        </div>
      </footer>
    </div>
  );
}
