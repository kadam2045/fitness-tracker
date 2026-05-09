import { LandingNavbar } from "@/components/landing/landing-navbar";
import { Footer } from "@/components/landing/footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <LandingNavbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
