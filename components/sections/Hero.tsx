"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useModal } from "@/components/ModalContext";

const destinations = [
  { name: "France", image: "/images/destinations/france.jpg" },
  { name: "Germany", image: "/images/destinations/germany.jpg" },
  { name: "Canada", image: "/images/destinations/canada.jpg" },
  { name: "UAE", image: "/images/destinations/uae.jpg" },
  { name: "USA", image: "/images/destinations/usa.jpg" }
];

export const Hero = () => {
  const { open } = useModal();

  return (
    <section className="section-padding relative overflow-hidden bg-white pb-16 pt-12">
      <div className="relative grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky">
            Visa clarity, worldwide
          </p>
          <h1 className="text-4xl font-semibold text-ink md:text-5xl lg:text-6xl">
            Ready to study, work, or travel abroad — but the visa process feels confusing?
          </h1>
          <p className="text-base text-ink/70 md:text-lg">
            VisaWay delivers A→Z support for Student, Work, and Professional visas with transparent steps, expert
            review, and fast response times.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/eligibility" ariaLabel="Check eligibility" size="lg">
              Check Eligibility
            </Button>
            <Button variant="secondary" onClick={open} ariaLabel="Book free consultation" size="lg">
              Book Free Consultation
            </Button>
          </div>
          <p className="text-xs text-ink/60">No spam, no commitment · We respond within 24 hours.</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            {destinations.slice(0, 4).map((destination) => (
              <motion.div
                key={destination.name}
                className="relative overflow-hidden rounded-2xl bg-white shadow-soft"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  width={520}
                  height={420}
                  className="h-40 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-3 text-sm font-semibold text-white">
                  {destination.name}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="absolute -left-8 bottom-6 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-soft"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <p className="text-xs font-semibold uppercase text-sky">Your roadmap</p>
            <p className="mt-2 text-sm font-semibold text-ink">Step-by-step timeline</p>
            <ul className="mt-3 space-y-2 text-xs text-ink/70">
              <li>1. Eligibility review</li>
              <li>2. Document checklist</li>
              <li>3. Appointment strategy</li>
              <li>4. Submission + follow-up</li>
            </ul>
          </motion.div>

          <motion.div
            className="absolute -right-6 top-10 hidden rounded-2xl bg-ink px-4 py-3 text-xs font-semibold text-white shadow-soft lg:block"
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Typical processing ranges: 4–10 weeks
          </motion.div>
        </div>
      </div>
    </section>
  );
};
