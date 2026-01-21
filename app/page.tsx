import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Pathways } from "@/components/sections/Pathways";
import { FullSupport } from "@/components/sections/FullSupport";

export const metadata: Metadata = {
  title: "Home",
  description: "VisaWay provides premium yet accessible visa guidance for students, professionals, and business travelers."
};

export default function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Pathways />
      <FullSupport />
    </div>
  );
}
