import { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with VisaWay advisors."
};

const faqs = [
  "How soon can I get a consultation?",
  "What documents should I prepare before the call?",
  "Do you offer in-person appointments?"
];

export default function ContactPage() {
  return (
    <div>
      <section className="section-padding py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">Contact</p>
            <h1 className="text-4xl font-semibold text-ink md:text-5xl">Let’s plan your visa journey.</h1>
            <p className="text-sm text-ink/70">
              Share your details and we’ll respond within 24 hours. No spam, no commitment.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-4 shadow-soft">
            <Image
              src="/images/destinations/spain.jpg"
              alt="Contact VisaWay"
              width={640}
              height={480}
              className="h-64 w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-padding pb-20">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <ContactForm />
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-ink">VisaWay contact</h3>
              <p className="mt-3 text-sm text-ink/70">Remote worldwide · Tunisia + EU</p>
              <p className="text-sm text-ink/70">+39 3514784570</p>
              <p className="text-sm text-ink/70">contact@visaway.live</p>
              <p className="text-sm text-ink/70">www.visaway.live</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-ink">FAQ</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink/70">
                {faqs.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-ink">Map</h3>
              <div className="mt-3 h-40 rounded-xl bg-ink/10"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
