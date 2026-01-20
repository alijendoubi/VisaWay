"use client";

import { ArrowUpRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useModal } from "@/components/ModalContext";
import { FadeIn } from "@/components/ui/Motion";

export const Hero = () => {
  const { open } = useModal();

  return (
    <section className="relative overflow-hidden bg-sand pb-10 pt-16">
      <div className="section-padding relative">
        <div className="rounded-[32px] bg-white/80 p-6 shadow-soft backdrop-blur md:p-8">
          <div className="overflow-hidden rounded-[28px] bg-gradient-to-br from-sky/90 via-sky/70 to-teal/70 text-white">
            <div className="grid gap-10 px-6 py-12 md:px-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <FadeIn>
                <div className="space-y-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                    Visa clarity, worldwide
                  </p>
                  <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
                    Your clear path to global opportunities.
                  </h1>
                  <p className="text-base text-white/85 md:text-lg">
                    VisaWay helps students, professionals, and business travelers move abroad with a guided plan,
                    transparent timelines, and expert document review.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button onClick={open} ariaLabel="Book a free consultation" size="lg">
                      Book a Free Consultation
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                    <Button variant="secondary" href="/services" size="lg" ariaLabel="Check eligibility">
                      Check Eligibility
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-white/80">
                    {["96% approval-ready files", "24h response time", "300+ global partners"].map((item) => (
                      <span key={item} className="inline-flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-white" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="relative">
                  <svg viewBox="0 0 480 360" className="h-full w-full" aria-hidden="true">
                    <defs>
                      <radialGradient id="mapGlow" cx="50%" cy="50%" r="60%">
                        <stop offset="0%" stopColor="#F5F8FF" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#F5F8FF" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <rect width="480" height="360" rx="24" fill="rgba(255,255,255,0.12)" />
                    <circle cx="300" cy="140" r="110" fill="url(#mapGlow)" />
                    <path
                      d="M40 260 C140 220, 240 260, 340 210"
                      stroke="rgba(255,255,255,0.8)"
                      strokeWidth="3"
                      strokeDasharray="6 8"
                      fill="none"
                    />
                    <path
                      d="M120 90 C200 50, 320 60, 420 40"
                      stroke="rgba(255,255,255,0.7)"
                      strokeWidth="2"
                      strokeDasharray="5 6"
                      fill="none"
                    />
                    <circle cx="120" cy="90" r="6" fill="#ffffff" />
                    <circle cx="420" cy="40" r="8" fill="#ffffff" />
                    <circle cx="340" cy="210" r="8" fill="#ffffff" />
                    <circle cx="80" cy="250" r="6" fill="#ffffff" />
                    <path
                      d="M300 80 C310 70, 330 70, 340 80 C350 95, 325 115, 320 125 C315 115, 290 95, 300 80"
                      fill="#ffffff"
                      opacity="0.9"
                    />
                  </svg>
                  <div className="pointer-events-none absolute bottom-4 right-4 rounded-2xl bg-white/15 px-4 py-3 text-xs text-white/90">
                    68 destinations tracked live
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
