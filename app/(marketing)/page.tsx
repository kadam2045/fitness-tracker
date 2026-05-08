import { LandingNavbar } from "@/components/landing/landing-navbar";
import { HeroSection } from "@/components/landing/hero-section";

export default function LandingPage() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <LandingNavbar />
      <main className="flex-1">
        <HeroSection />
        
        {/* Placeholder for future sections */}
        <section id="features" className="py-24 bg-muted/30">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 text-muted-foreground/50 italic underline">Features Section Coming Soon</h2>
            <div className="h-96 border-2 border-dashed border-muted rounded-3xl" />
          </div>
        </section>
      </main>
      
      {/* Basic Footer Placeholder */}
      <footer className="py-12 border-t border-border bg-background">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2026 FitTrack. Built for excellence.</p>
        </div>
      </footer>
    </div>
  );
}
