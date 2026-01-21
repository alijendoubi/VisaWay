import type { Metadata } from "next";
import Image from "next/image";
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

const steps = ["Eligibility review", "Employer coordination", "Appointment prep", "Submission", "Follow-up"];

export default function WorkVisaPage() {
  return (
    <div>
      <section className="section-padding py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">Work Visa</p>
            <h1 className="text-4xl font-semibold text-ink md:text-5xl">Move your career abroad with clarity.</h1>
            <p className="text-sm text-ink/70">
              We coordinate with your employer to deliver a compliant, embassy-ready work visa file.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/eligibility" ariaLabel="Check eligibility">Check Eligibility</Button>
              <Button variant="secondary" href="/contact" ariaLabel="Book consultation">Book Free Consultation</Button>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-4 shadow-soft">
            <Image
              src="/images/destinations/germany.jpg"
              alt="Work visa"
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
            <h3 className="text-xl font-semibold text-ink">Core requirements</h3>
            <ul className="mt-4 space-y-2 text-sm text-ink/70">
              {requirements.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <aside className="space-y-6">
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-ink">Process steps</h3>
              <ol className="mt-4 space-y-2 text-sm text-ink/70">
                {steps.map((step, index) => (
                  <li key={step}>
                    <span className="mr-2 font-semibold text-ink">{index + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-3xl border border-ink/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase text-sky">Success story</p>
              <p className="mt-2 text-sm font-semibold text-ink">Omar · Germany</p>
              <p className="mt-2 text-sm text-ink/70">
                Relocated in 6 weeks after aligning employer compliance and contract documents.
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
              <p className="font-semibold text-ink">Do you liaise with employers?</p>
              <p>Yes. We coordinate with HR to keep documents compliant and on time.</p>
            </div>
            <div>
              <p className="font-semibold text-ink">Can you help with dependent visas?</p>
              <p>We provide guidance on family documentation and timelines.</p>
            </div>
            <div>
              <p className="font-semibold text-ink">Is approval guaranteed?</p>
              <p>No. We prepare an embassy-ready file, but decisions are made by consulates.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
