import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "Meet VisaWay's mission, values, and advisory team."
};

const values = [
  { title: "Clarity", description: "Clear steps and honest timelines at every stage." },
  { title: "Precision", description: "Every file reviewed with embassy-ready rigor." },
  { title: "Human care", description: "Real advisors guide you with empathy and speed." }
];

const team = [
  { name: "Nadia K.", role: "Founder & Lead Advisor" },
  { name: "Walid M.", role: "Admissions Strategist" },
  { name: "Lamia T.", role: "Work Visa Specialist" },
  { name: "Youssef A.", role: "Business Travel Lead" }
];

const timeline = [
  { year: "2018", detail: "VisaWay founded in Tunis with a focus on student visas." },
  { year: "2020", detail: "Expanded to work and professional visa support." },
  { year: "2023", detail: "Partner network across EU, Canada, and GCC." }
];

export default function AboutPage() {
  return (
    <div>
      <section className="section-padding py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">About VisaWay</p>
            <h1 className="text-4xl font-semibold text-ink md:text-5xl">A premium visa partner with a human touch.</h1>
            <p className="text-sm text-ink/70">
              We combine modern workflow tools with expert advisors to support ambitious travelers across Tunisia and
              globally.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-4 shadow-soft">
            <Image
              src="/images/destinations/usa.jpg"
              alt="VisaWay team"
              width={640}
              height={480}
              className="h-64 w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-padding pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-3xl bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-ink">{value.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding pb-16">
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <h3 className="text-xl font-semibold text-ink">Our story</h3>
          <div className="mt-4 space-y-4">
            {timeline.map((item) => (
              <div key={item.year} className="flex items-start gap-4">
                <span className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">{item.year}</span>
                <p className="text-sm text-ink/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pb-20">
        <h3 className="text-2xl font-semibold text-ink">Meet the team</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="rounded-3xl bg-white p-6 shadow-soft">
              <Image
                src="/images/destinations/canada.jpg"
                alt={member.name}
                width={120}
                height={120}
                className="h-20 w-20 rounded-full object-cover"
              />
              <p className="mt-4 text-sm font-semibold text-ink">{member.name}</p>
              <p className="text-xs text-ink/60">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
