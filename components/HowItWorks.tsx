"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/ui/Motion";

const steps = [
  {
    title: "Discovery call",
    description: "Understand your timeline, destination, and visa goals in a 20-minute call."
  },
  {
    title: "Personalized roadmap",
    description: "We map your admission, documents, and appointments in a clear plan."
  },
  {
    title: "Document assembly",
    description: "Our team prepares and reviews every file with transparent checklists."
  },
  {
    title: "Submission + follow-up",
    description: "We track appointments, submissions, and updates until decision day."
  }
];

export const HowItWorks = () => {
  return (
    <section className="section-padding py-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <SectionTitle
          eyebrow="How VisaWay Works"
          title="Clarity in every step of your journey"
          description="A streamlined approach that keeps you in control, while we handle the complexity."
        />
        <div className="grid gap-4">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.05}>
              <div className="glass flex items-start gap-4 rounded-2xl p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <div>
                  <p className="text-lg font-semibold text-ink">{step.title}</p>
                  <p className="text-sm text-ink/70">{step.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
