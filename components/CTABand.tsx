"use client";

import { Button } from "@/components/ui/Button";
import { useModal } from "@/components/ModalContext";

export const CTABand = () => {
  const { open } = useModal();

  return (
    <section className="section-padding py-16">
      <div className="rounded-2xl bg-cta-gradient px-8 py-12 text-white shadow-soft">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h3 className="text-3xl font-semibold">Ready to plan your visa journey?</h3>
            <p className="mt-2 text-sm text-white/80">
              Book a free consultation and receive a personalized roadmap in 24 hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button variant="secondary" onClick={open} ariaLabel="Book a free consultation">
              Book a Free Consultation
            </Button>
            <Button variant="ghost" href="/student-visa" ariaLabel="Explore student path">
              Explore Student Path
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
