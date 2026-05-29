import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Benefits } from "@/components/benefits";
import { EarningsBreakdown } from "@/components/earnings-breakdown";
import { HowItWorks } from "@/components/how-it-works";
import { ShiftStructure } from "@/components/shift-structure";
import { Fleet } from "@/components/fleet";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Benefits />
        <EarningsBreakdown />
        <HowItWorks />
        <ShiftStructure />
        <Fleet />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
