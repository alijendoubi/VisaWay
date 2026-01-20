import { CheckCircle2 } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const steps = [
  "Document authenticity check and translation match",
  "Financial proof aligned to embassy thresholds",
  "Appointment readiness with required forms",
  "Final compliance review before submission"
];

export const VerificationSection = () => {
  return (
    <section className="section-padding py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <SectionTitle
          eyebrow="File Verification"
          title="How we verify your file"
          description="A tight review process so your application is embassy-ready before it is submitted."
        />
        <div className="glass rounded-2xl p-6">
          <ul className="space-y-3 text-sm text-ink/70">
            {steps.map((step) => (
              <li key={step} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-sky" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
