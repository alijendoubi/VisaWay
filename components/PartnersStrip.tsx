import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";

const partners = ["atlas", "northstar", "bridge", "summit", "horizon"];

export const PartnersStrip = () => {
  return (
    <section className="section-padding py-16">
      <SectionTitle
        eyebrow="Partners"
        title="Connected to global universities and employers"
        description="Placeholder partners representing VisaWay's expanding network."
        align="center"
      />
      <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
        {partners.map((partner) => (
          <div key={partner} className="rounded-full border border-ink/10 bg-white px-6 py-3">
            <Image
              src={`/logos/${partner}.svg`}
              alt={`${partner} logo`}
              width={120}
              height={32}
              className="h-6 w-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
