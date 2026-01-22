import type { Metadata } from "next";
import Image from "next/image";
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
      <section className="section-padding py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">Professional Visa</p>
            <h1 className="text-4xl font-semibold text-ink md:text-5xl">Business travel made smooth and precise.</h1>
            <p className="text-sm text-ink/70">
              We manage invitation letters, corporate documents, and travel itineraries for fast approvals.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/eligibility" ariaLabel="Check eligibility">Check Eligibility</Button>
              <Button variant="secondary" href="/contact" ariaLabel="Book consultation">Book Free Consultation</Button>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-4 shadow-soft">
            <Image
              src="/images/destinations/uae.jpg"
              alt="Business visa"
              width={640}
              height={480}
              className="h-64 w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-padding pb-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl bg-white p-6 shadow-soft">
            <h3 className="text-xl font-semibold text-ink">Business travel focus</h3>
            <p className="mt-3 text-sm text-ink/70">
              Our professional visa team ensures every corporate detail is aligned with embassy expectations.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-ink/70">
              {focusAreas.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <aside className="space-y-6">
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-ink">Checklist + timeline</h3>
              <p className="mt-3 text-sm text-ink/70">
                We deliver a verified checklist and scheduling strategy within 24 hours.
              </p>
              <Button variant="secondary" className="mt-6" ariaLabel="Download checklist">
                Request Checklist
              </Button>
            </div>
            <div className="rounded-3xl border border-ink/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase text-sky">Success story</p>
              <p className="mt-2 text-sm font-semibold text-ink">Sana · UAE</p>
              <p className="mt-2 text-sm text-ink/70">
                Approved in 3 weeks after restructuring invitation letter and itinerary.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-padding pb-20">
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <h3 className="text-xl font-semibold text-ink">FAQs</h3>
          <div className="mt-4 space-y-3 text-sm text-ink/70">
            <div>
              <p className="font-semibold text-ink">Do you handle multi-entry visas?</p>
              <p>Yes. We evaluate eligibility and prepare supporting documents.</p>
            </div>
            <div>
              <p className="font-semibold text-ink">Can you help with urgent travel?</p>
              <p>We prioritize urgent cases and track embassy openings daily.</p>
            </div>
            <div>
              <p className="font-semibold text-ink">Is approval guaranteed?</p>
              <p>No. We prepare a strong file, but approval remains at embassy discretion.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
