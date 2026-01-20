import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Professional Visa",
  description: "Professional and business visa support for corporate travel."
};

const focusAreas = [
  "Business travel strategy and itinerary",
  "Invitation letter validation",
  "Company registration and compliance",
  "Multi-entry options",
  "Fast-track appointment coordination"
];

export default function ProfessionalVisaPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Professional Visa"
        title="Business travel visas built for fast-moving teams"
        description="VisaWay supports corporate visits, conferences, and urgent meetings with clear, embassy-ready files."
      />
      <section className="section-padding pb-16">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-ink">Business travel focus</h3>
            <p className="mt-3 text-sm text-ink/70">
              Our professional visa team manages invitation letters, itineraries, and corporate documents to accelerate
              approvals.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink/70">
              {focusAreas.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-ink">Ready to go?</h3>
            <p className="mt-3 text-sm text-ink/70">
              Book a strategy call and receive a tailored business visa roadmap within 24 hours.
            </p>
            <Button variant="secondary" className="mt-6" href="/contact" ariaLabel="Talk to an advisor">
              Talk to an Advisor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
