import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ServiceCards } from "@/components/ServiceCards";
import { WhyVisaWay } from "@/components/WhyVisaWay";
import { Testimonials } from "@/components/Testimonials";
import { PartnersStrip } from "@/components/PartnersStrip";
import { FAQ } from "@/components/FAQ";
import { CTABand } from "@/components/CTABand";
import { VisaWizard } from "@/components/VisaWizard";
import { VerificationSection } from "@/components/VerificationSection";
import { CallAgenda } from "@/components/CallAgenda";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "VisaWay is a premium yet accessible visa assistance agency for students and professionals."
};

export default function HomePage() {
  return (
    <div>
      <Hero />
      <VisaWizard />
      <HowItWorks />
      <ServiceCards />
      <VerificationSection />
      <WhyVisaWay />
      <CallAgenda />
      <Testimonials />
      <PartnersStrip />
      <FAQ />
      <CTABand />
    </div>
  );
}
