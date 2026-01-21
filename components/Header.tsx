"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useModal } from "@/components/ModalContext";
import { Button } from "@/components/ui/Button";
import { cn } from "@/components/ui/cn";

const navLinks = [
  { href: "/eligibility", label: "Eligibility" },
  { href: "/services", label: "Services" },
  { href: "/student-visa", label: "Student Visa" },
  { href: "/work-visa", label: "Work Visa" },
  { href: "/professional-visa", label: "Professional Visa" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { open: openModal } = useModal();

  return (
    <header className="sticky top-0 z-40 bg-sand/80 backdrop-blur">
      <div className="section-padding py-4">
        <div className="flex items-center justify-between rounded-[24px] border border-white/70 bg-white/90 px-4 py-3 shadow-soft md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="VisaWay logo" width={56} height={56} />
            <span className="text-lg font-semibold">VisaWay</span>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink/70 transition hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <span className="rounded-full border border-ink/10 px-3 py-1 text-xs font-semibold text-ink/60">
              EN · FR/AR soon
            </span>
            <Button variant="secondary" size="sm" onClick={openModal} ariaLabel="Book a free consultation">
              Book a Free Consultation
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
          <button
            className="rounded-full border border-ink/10 p-2 text-ink/70 lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <div
        className={cn(
          "lg:hidden transition-all",
          open ? "max-h-[420px] border-t border-white/60" : "max-h-0 overflow-hidden"
        )}
      >
        <div className="section-padding flex flex-col gap-4 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-ink/80"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3">
            <span className="rounded-full border border-ink/10 px-3 py-1 text-xs font-semibold text-ink/60">
              EN · FR/AR soon
            </span>
            <Button onClick={openModal} ariaLabel="Book a free consultation">
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
