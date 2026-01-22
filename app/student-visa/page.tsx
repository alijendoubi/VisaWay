import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

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

const faqs = [
  {
    q: "Do you help with university admissions?",
    a: "Yes. We support admission strategy, document preparation, and deadlines."
  },
  {
    q: "Can you review my financial proof?",
    a: "Absolutely. We align your proof of funds with embassy expectations."
  },
  {
    q: "How early should I start?",
    a: "Ideally 3-6 months before your intended intake."
  }
];

export default function StudentVisaPage() {
  return (
    <div>
      <section className="section-padding py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">Student Visa</p>
            <h1 className="text-4xl font-semibold text-ink md:text-5xl">Study abroad with clarity and confidence.</h1>
            <p className="text-sm text-ink/70">
              From admissions to embassy submission, we build a structured student visa roadmap tailored to your
              destination.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/eligibility" ariaLabel="Check eligibility">Check Eligibility</Button>
              <Button variant="secondary" href="/contact" ariaLabel="Book consultation">Book Free Consultation</Button>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-4 shadow-soft">
            <Image
              src="/images/destinations/france.jpg"
              alt="Student visa"
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
          <aside className="space-y-6">
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-ink">Checklist download</h3>
              <p className="mt-3 text-sm text-ink/70">
                Get the complete student visa checklist with deadlines and document tips.
              </p>
              <Button variant="secondary" className="mt-6" ariaLabel="Download checklist">
                Download Checklist
              </Button>
            </div>
            <div className="rounded-3xl border border-ink/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase text-sky">Success story</p>
              <p className="mt-2 text-sm font-semibold text-ink">Hiba · France</p>
              <p className="mt-2 text-sm text-ink/70">
                Approved in 7 weeks after restructuring her funding proof and accommodation letter.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-padding pb-20">
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <h3 className="text-xl font-semibold text-ink">Student visa FAQs</h3>
          <div className="mt-4 space-y-3 text-sm text-ink/70">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <p className="font-semibold text-ink">{faq.q}</p>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
