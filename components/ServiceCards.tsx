import Link from "next/link";
import { ArrowUpRight, GraduationCap, Briefcase, Building2 } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const services = [
  {
    title: "Student Visa",
    description: "Admission support, scholarships, and visa filing from A to Z.",
    href: "/student-visa",
    icon: GraduationCap,
    highlights: ["University admission", "Scholarships support", "Visa procedure A→Z"]
  },
  {
    title: "Work Visa",
    description: "Employer-ready documentation and timelines for global opportunities.",
    href: "/work-visa",
    icon: Briefcase,
    highlights: ["Eligibility audit", "Contract & embassy prep", "Family relocation guidance"]
  },
  {
    title: "Professional Visa",
    description: "Business travel, conferences, and urgent corporate mobility needs.",
    href: "/professional-visa",
    icon: Building2,
    highlights: ["Invitation letter", "Itinerary planning", "Company documentation"]
  }
];

export const ServiceCards = () => {
  return (
    <section className="section-padding relative -mt-12 pb-20 pt-6" id="services">
      <SectionTitle
        eyebrow="Services"
        title="Visa pathways built for your ambition"
        description="Choose a clear track and get expert support tailored to your destination."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.title}
              href={service.href}
              className="group glass flex h-full flex-col justify-between rounded-2xl p-6 transition hover:-translate-y-2"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky/15 text-sky">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-semibold text-ink">{service.title}</h3>
                </div>
                <p className="text-sm text-ink/70">{service.description}</p>
                <ul className="space-y-2 text-sm text-ink/70">
                  {service.highlights.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                Explore path <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
