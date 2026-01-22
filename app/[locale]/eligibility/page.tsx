import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Suspense } from "react";
import { EligibilityClient } from "@/components/EligibilityClient";
import { getMessages, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Eligibility",
  description: "Check your visa eligibility and get a personalized roadmap."
};

export const dynamic = "force-dynamic";

export default function EligibilityPage({ params }: { params: { locale: Locale } }) {
  const messages = getMessages(params.locale);
  const t = (key: string) => messages[key] || key;
  return (
    <div>
      <PageHeader
        eyebrow={t("eligibility.eyebrow")}
        title={t("eligibility.title")}
        description={t("eligibility.subtitle")}
      />
      <section className="section-padding pb-20">
        <Suspense
          fallback={<div className="rounded-2xl bg-white p-6 shadow-soft">{t("eligibility.loading")}</div>}
        >
          <EligibilityClient />
        </Suspense>
      </section>
    </div>
  );
}
