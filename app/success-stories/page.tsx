import type { Metadata } from "next";
import Image from "next/image";
import { SuccessStoriesGrid } from "@/components/SuccessStoriesGrid";

export const metadata: Metadata = {
  title: "Success Stories",
  description: "VisaWay success stories from students and professionals."
};

export default function SuccessStoriesPage() {
  return (
    <div>
      <section className="section-padding py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">Success Stories</p>
            <h1 className="text-4xl font-semibold text-ink md:text-5xl">Journeys powered by VisaWay.</h1>
            <p className="text-sm text-ink/70">
              Explore real outcomes across student, work, and business visas. Results vary, and embassy decisions are final.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-4 shadow-soft">
            <Image
              src="/images/destinations/uk.jpg"
              alt="Success stories"
              width={640}
              height={480}
              className="h-64 w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>
      <section className="section-padding pb-20">
        <SuccessStoriesGrid />
      </section>
    </div>
  );
}
