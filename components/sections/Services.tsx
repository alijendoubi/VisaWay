"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "@/components/i18n/LocaleProvider";

const services = [
  {
    titleKey: "services.student",
    description: "Education pathways with admission, funding, and embassy support.",
    image: "/images/services/student.png",
    bullets: ["University admission strategy", "Scholarship and funding guidance", "Visa file preparation"],
    href: "/student-visa"
  },
  {
    titleKey: "services.work",
    description: "Career-focused documentation and employer coordination.",
    image: "/images/services/work.png",
    bullets: ["Employer compliance support", "Contract and salary alignment", "Appointment scheduling"],
    href: "/work-visa"
  },
  {
    titleKey: "services.business",
    description: "Business travel support with a fast, embassy-ready pack.",
    image: "/images/services/business.png",
    bullets: ["Invitation letter review", "Business itinerary planning", "Company documentation"],
    href: "/professional-visa"
  }
];

export const Services = () => {
  const { t } = useTranslations();
  return (
    <section className="section-padding py-16">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">{t("services.eyebrow")}</p>
        <h2 className="text-3xl font-semibold text-ink md:text-4xl">{t("services.title")}</h2>
        <p className="text-sm text-ink/70">
          {t("services.subtitle")}
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.titleKey}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white shadow-soft"
          >
            <Image
              src={service.image}
              alt={t(service.titleKey)}
              width={640}
              height={480}
              className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-ink">{t(service.titleKey)}</h3>
              <p className="mt-2 text-sm text-ink/70">{service.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-ink/70">
                {service.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="secondary" href={service.href} ariaLabel={t("services.explore")}>
                  {t("services.explore")}
                </Button>
                <Button href="/eligibility" ariaLabel="Check eligibility">
                  {t("cta.checkEligibility")}
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
