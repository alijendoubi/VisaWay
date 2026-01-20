"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/ui/Motion";

const benefits = [
  {
    title: "End-to-end support",
    description: "From admissions to embassy submissions, stay guided at every milestone."
  },
  {
    title: "Global network",
    description: "Partners across universities, training centers, and corporate sponsors."
  },
  {
    title: "Transparent steps",
    description: "Track progress with clear timelines, checklists, and alerts."
  },
  {
    title: "Faster preparation",
    description: "We pre-audit your documents to reduce back-and-forth delays."
  },
  {
    title: "Multilingual guidance",
    description: "Support in English today with French and Arabic expansion underway."
  }
];

export const WhyVisaWay = () => {
  return (
    <section className="section-padding py-20" id="why">
      <SectionTitle
        eyebrow="Why VisaWay"
        title="Premium expertise, accessible experience"
        description="We combine modern workflow tools with human advisors who keep your journey on track."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <FadeIn key={benefit.title} delay={index * 0.05}>
            <div className="glass h-full rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-ink">{benefit.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{benefit.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
