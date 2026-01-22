"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Counter } from "@/components/ui/Counter";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "@/components/i18n/LocaleProvider";

const highlights = [
  "Fast, transparent timelines",
  "Expert document review",
  "Real advisors, real accountability"
];

export const About = () => {
  const { t } = useTranslations();
  return (
    <section className="section-padding py-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Image
            src="/images/destinations/italy.jpg"
            alt="VisaWay advisors"
            width={720}
            height={560}
            className="h-80 w-full rounded-3xl object-cover"
          />
          <div className="absolute -bottom-6 right-6 rounded-2xl bg-white px-4 py-3 text-xs text-ink/70 shadow-soft">
            Trusted by clients across Tunisia + EU
          </div>
        </motion.div>

        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">{t("about.eyebrow")}</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">
              {t("about.title")}
            </h2>
            <p className="mt-3 text-sm text-ink/70">
              {t("about.subtitle")}
            </p>
          </div>

          <div className="grid gap-4 rounded-2xl bg-white p-6 shadow-soft md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-ink">
                <Counter value={4200} />+
              </p>
              <p className="text-xs text-ink/60">{t("about.clients")}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">
                <Counter value={18} />+
              </p>
              <p className="text-xs text-ink/60">{t("about.countries")}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">
                <Counter value={24} suffix="h" />
              </p>
              <p className="text-xs text-ink/60">{t("about.response")}</p>
            </div>
          </div>

          <ul className="space-y-2 text-sm text-ink/70">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-sky" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
