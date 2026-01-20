import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
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
      <PageHeader
        eyebrow="Contact"
        title="Let’s plan your visa journey"
        description="Send us your details and an advisor will get back within 24 hours."
      />
      <section className="section-padding pb-20">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <ContactForm />
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-ink">Office</h3>
              <p className="mt-3 text-sm text-ink/70">Lac 1, Tunis · Remote worldwide</p>
              <p className="text-sm text-ink/70">+216 00 000 000</p>
              <p className="text-sm text-ink/70">hello@visaway.com</p>
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
