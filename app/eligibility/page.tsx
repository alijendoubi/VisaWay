import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { EligibilityFlow } from "@/components/EligibilityFlow";

export const metadata: Metadata = {
  title: "Eligibility",
  description: "Check your visa eligibility and get a personalized roadmap."
};

export default function EligibilityPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Eligibility"
        title="Check your visa eligibility"
        description="A quick assessment to guide your next steps."
      />
      <section className="section-padding pb-20">
        <EligibilityFlow />
      </section>
    </div>
  );
}
