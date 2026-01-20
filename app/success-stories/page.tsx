import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SuccessStoriesGrid } from "@/components/SuccessStoriesGrid";

export const metadata: Metadata = {
  title: "Success Stories",
  description: "VisaWay success stories from students and professionals."
};

export default function SuccessStoriesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Success Stories"
        title="Global outcomes powered by VisaWay"
        description="Filter by visa type to see how clients reached new destinations with our advisors."
      />
      <section className="section-padding pb-20">
        <SuccessStoriesGrid />
      </section>
    </div>
  );
}
