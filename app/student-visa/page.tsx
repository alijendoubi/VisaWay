import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/Button";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Student Visa",
  description: "VisaWay guides student visa applicants from admission to embassy submission."
};

const timeline = [
  "Admission",
  "Scholarship",
  "Documents",
  "Appointment",
  "Interview prep",
  "Submission",
  "Follow-up"
];

export default function StudentVisaPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Student Visa"
        title="Student visas done with precision and care"
        description="From university acceptance to embassy submission, VisaWay keeps your student journey organized end-to-end."
      />
      <section className="section-padding pb-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-ink">A→Z journey timeline</h3>
            <ol className="mt-6 space-y-4">
              {timeline.map((step, index) => (
                <li key={step} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <span className="text-sm font-semibold text-ink">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-ink">Student visa checklist</h3>
            <p className="mt-3 text-sm text-ink/70">
              Download a ready-to-use checklist covering admissions, proof of funds, translations, and embassy forms.
            </p>
            <Button variant="secondary" className="mt-6" ariaLabel="Download checklist">
              Download Checklist
            </Button>
            <div className="mt-6 rounded-xl bg-ink/5 p-4 text-sm text-ink/70">
              Includes personalized deadlines and document audit tips for 2025 intakes.
            </div>
          </div>
        </div>
      </section>
      <FAQ />
    </div>
  );
}
