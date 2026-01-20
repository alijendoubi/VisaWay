import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { VisaWizard } from "@/components/VisaWizard";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services",
  description: "Compare VisaWay service tracks for student, work, and professional visas."
};

const comparison = [
  { label: "Admission support", student: "Included", work: "Optional", professional: "N/A" },
  { label: "Document audit", student: "Full", work: "Full", professional: "Full" },
  { label: "Embassy appointment", student: "Managed", work: "Managed", professional: "Express" },
  { label: "Interview prep", student: "Included", work: "Included", professional: "Optional" },
  { label: "Post-submission follow-up", student: "Yes", work: "Yes", professional: "Yes" }
];

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Services"
        title="Choose the visa pathway that fits your plans"
        description="Compare VisaWay support levels and book the plan that gets you embassy-ready fastest."
      />
      <section className="section-padding pb-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Student Visa",
              description: "Admissions, scholarships, and visa filing for global education.",
              href: "/student-visa"
            },
            {
              title: "Work Visa",
              description: "Employment documentation and embassy prep for career mobility.",
              href: "/work-visa"
            },
            {
              title: "Professional Visa",
              description: "Business travel support for conferences, meetings, and corporate visits.",
              href: "/professional-visa"
            }
          ].map((item) => (
            <div key={item.title} className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{item.description}</p>
              <Button variant="secondary" href={item.href} className="mt-6" ariaLabel={`Explore ${item.title}`}>
                Explore {item.title}
              </Button>
            </div>
          ))}
        </div>
      </section>
      <section className="section-padding pb-20" id="eligibility">
        <div className="glass rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-ink">VisaWay service comparison</h3>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-wider text-ink/50">
                  <th className="py-3">Support</th>
                  <th>Student</th>
                  <th>Work</th>
                  <th>Professional</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label} className="border-t border-ink/5">
                    <td className="py-3 font-medium text-ink">{row.label}</td>
                    <td>{row.student}</td>
                    <td>{row.work}</td>
                    <td>{row.professional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <VisaWizard />
    </div>
  );
}
