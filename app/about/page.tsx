import { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Metrics } from "@/components/Metrics";

export const metadata: Metadata = {
  title: "About",
  description: "Meet VisaWay's mission, values, and advisory team."
};

const values = [
  { title: "Clarity", description: "We explain every step with transparent milestones." },
  { title: "Precision", description: "Every file is reviewed with embassy-ready rigor." },
  { title: "Human care", description: "Advisors stay by your side from discovery to approval." }
];

const team = [
  { name: "Nadia K.", role: "Founder & Lead Advisor" },
  { name: "Walid M.", role: "Admissions Strategist" },
  { name: "Lamia T.", role: "Work Visa Specialist" },
  { name: "Youssef A.", role: "Business Travel Lead" }
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="About VisaWay"
        title="A modern visa agency built for global ambition"
        description="VisaWay blends advisory expertise with modern workflow tools so clients move with confidence."
      />
      <section className="section-padding pb-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-ink">Our mission</h3>
              <p className="mt-3 text-sm text-ink/70">
                To make international opportunities accessible with clear guidance, premium service, and human support.
              </p>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-ink">Our story</h3>
              <p className="mt-3 text-sm text-ink/70">
                VisaWay started in Tunis with a simple idea: bring clarity to the visa process. Today we support clients
                across Europe, North America, and the Gulf region.
              </p>
            </div>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-ink">Our values</h3>
            <div className="mt-4 space-y-4">
              {values.map((value) => (
                <div key={value.title}>
                  <p className="text-sm font-semibold text-ink">{value.title}</p>
                  <p className="text-sm text-ink/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding pb-16">
        <Metrics />
      </section>
      <section className="section-padding pb-20">
        <h3 className="text-2xl font-semibold text-ink">Meet the team</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="glass rounded-2xl p-6">
              <div className="mb-4 h-16 w-16 rounded-full bg-ink/10">
                <Image src="/logos/atlas.svg" alt="Team placeholder" width={64} height={64} />
              </div>
              <p className="text-sm font-semibold text-ink">{member.name}</p>
              <p className="text-xs text-ink/60">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
