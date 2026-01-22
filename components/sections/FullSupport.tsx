"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import { useTranslations } from "@/components/i18n/LocaleProvider";

const supportItems = [
  {
    title: "Document review + correction",
    description: "We validate every file and flag embassy-specific errors."
  },
  {
    title: "Appointment strategy",
    description: "We help secure and prepare for appointment windows."
  },
  {
    title: "Interview preparation",
    description: "Mock Q&A and clear messaging for embassy interviews."
  },
  {
    title: "Submission assistance",
    description: "Final checks and handoff so your file is complete."
  },
  {
    title: "Follow-up tracking",
    description: "We monitor status and guide you through updates."
  }
];

const testimonials = [
  {
    name: "Meriem H.",
    role: "Student Visa · France",
    quote: "VisaWay kept me calm and organized. I never felt lost in the process."
  },
  {
    name: "Ahmed B.",
    role: "Work Visa · Germany",
    quote: "Fast responses and clear checklists. The interview prep was spot on."
  },
  {
    name: "Salma R.",
    role: "Business Visa · UAE",
    quote: "Professional and quick. My business visa was approved on the first try."
  },
  {
    name: "Yassine N.",
    role: "Student Visa · Canada",
    quote: "They handled my documents with real care and kept me on timeline."
  }
];

export const FullSupport = () => {
  const { t } = useTranslations();
  return (
    <section className="section-padding py-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="relative">
          <Image
            src="/images/destinations/canada.jpg"
            alt="VisaWay full support"
            width={720}
            height={520}
            className="h-80 w-full rounded-3xl object-cover"
          />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-4 py-3 text-xs text-ink/70 shadow-soft">
            End-to-end support, no false guarantees.
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">{t("support.eyebrow")}</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">{t("support.title")}</h2>
            <p className="mt-3 text-sm text-ink/70">{t("support.subtitle")}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {supportItems.map((item) => (
              <div key={item.title} className="rounded-2xl border border-ink/10 bg-white px-4 py-4">
                <p className="text-sm font-semibold text-ink">{item.title}</p>
                <p className="mt-2 text-xs text-ink/60">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-ink/10 bg-white px-4 py-4 text-xs text-ink/60">
            {t("support.promise")}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Carousel title="Testimonials">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="min-w-[260px] snap-start rounded-2xl border border-ink/10 bg-white p-5 shadow-soft"
            >
              <p className="text-sm text-ink/70">“{testimonial.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-ink">{testimonial.name}</p>
              <p className="text-xs text-ink/60">{testimonial.role}</p>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="mt-10 rounded-3xl bg-cta-gradient px-8 py-10 text-white shadow-soft">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-2xl font-semibold">{t("support.ctaTitle")}</h3>
            <p className="mt-2 text-sm text-white/80">{t("support.ctaSubtitle")}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/eligibility" ariaLabel="Check eligibility">
              {t("cta.checkEligibility")}
            </Button>
            <Button variant="secondary" href="/contact" ariaLabel="Book consultation">
              {t("cta.bookFree")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
