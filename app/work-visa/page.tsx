import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Work Visa",
  description: "Work visa guidance for international professionals and employer sponsors."
};

const requirements = [
  "Employment contract or offer letter",
  "Employer sponsorship documentation",
  "Proof of qualifications and work history",
  "Valid passport and biometric photos",
  "Health insurance and compliance forms"
];

const process = [
  "Eligibility review with VisaWay advisor",
  "Employer document coordination",
  "Embassy appointment scheduling",
  "Interview preparation and submission",
  "Post-submission tracking"
];

export default function WorkVisaPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Work Visa"
        title="Work visas that align with employer expectations"
        description="VisaWay coordinates between employers and applicants to keep your career move on schedule."
      />
      <section className="section-padding pb-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-ink">Core requirements</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink/70">
              {requirements.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-ink">Process steps</h3>
            <ol className="mt-4 space-y-3 text-sm text-ink/70">
              {process.map((item, index) => (
                <li key={item}>
                  <span className="mr-2 font-semibold text-ink">{index + 1}.</span>
                  {item}
                </li>
              ))}
            </ol>
            <Button variant="secondary" className="mt-6" href="/services" ariaLabel="Check eligibility">
              Check Eligibility
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
