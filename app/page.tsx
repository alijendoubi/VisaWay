import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ServiceCards } from "@/components/ServiceCards";
import { WhyVisaWay } from "@/components/WhyVisaWay";
import { Testimonials } from "@/components/Testimonials";
import { PartnersStrip } from "@/components/PartnersStrip";
import { FAQ } from "@/components/FAQ";
import { CTABand } from "@/components/CTABand";
import { VisaWizard } from "@/components/VisaWizard";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <VisaWizard />
      <HowItWorks />
      <ServiceCards />
      <WhyVisaWay />
      <Testimonials />
      <PartnersStrip />
      <FAQ />
      <CTABand />
    </div>
  );
}
