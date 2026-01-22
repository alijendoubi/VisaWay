import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Suspense } from "react";
import { EligibilityClient } from "@/components/EligibilityClient";

export const metadata: Metadata = {
  title: "Eligibility",
  description: "Check your visa eligibility and get a personalized roadmap."
};

export const dynamic = "force-dynamic";

export default function EligibilityPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Eligibility"
        title="Check your visa eligibility"
        description="A quick assessment to guide your next steps."
      />
      <section className="section-padding pb-20">
        <Suspense fallback={<div className="rounded-2xl bg-white p-6 shadow-soft">Loading eligibility flow...</div>}>
          <EligibilityClient />
        </Suspense>
      </section>
    </div>
  );
}
