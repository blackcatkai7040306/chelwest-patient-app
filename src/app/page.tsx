import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProblemStats } from "@/components/ProblemStats";
import { DemoSection } from "@/components/DemoSection";
import { Features } from "@/components/Features";
import { BusinessCase } from "@/components/BusinessCase";
import { Technical } from "@/components/Technical";
import { Scope } from "@/components/Scope";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <ProblemStats />
        <DemoSection />
        <Features />
        <BusinessCase />
        <Technical />
        <Scope />
      </main>
      <Footer />
    </div>
  );
}
