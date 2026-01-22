"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useModal } from "@/components/ModalContext";
import { Button } from "@/components/ui/Button";
import { cn } from "@/components/ui/cn";
import { LocaleLink } from "@/components/i18n/LocaleLink";
import { useTranslations } from "@/components/i18n/LocaleProvider";

const navLinks = [
  { href: "/eligibility", labelKey: "nav.eligibility" },
  { href: "/services", labelKey: "nav.services" },
  { href: "/student-visa", labelKey: "nav.studentVisa" },
  { href: "/work-visa", labelKey: "nav.workVisa" },
  { href: "/professional-visa", labelKey: "nav.professionalVisa" },
  { href: "/success-stories", labelKey: "nav.successStories" },
  { href: "/about", labelKey: "nav.about" },
  { href: "/blog", labelKey: "nav.blog" },
  { href: "/contact", labelKey: "nav.contact" }
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { open: openModal } = useModal();
  const { t, locale } = useTranslations();

  return (
    <header className="sticky top-0 z-40 bg-sand/80 backdrop-blur">
      <div className="section-padding py-4">
        <div className="flex items-center justify-between rounded-[24px] border border-white/70 bg-white/90 px-4 py-3 shadow-soft md:px-6">
          <LocaleLink href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="VisaWay logo" width={56} height={56} />
            <span className="text-lg font-semibold">VisaWay</span>
          </LocaleLink>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <LocaleLink
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink/70 transition hover:text-ink"
              >
                {t(link.labelKey)}
              </LocaleLink>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex items-center gap-2 rounded-full border border-ink/10 px-3 py-1 text-xs font-semibold text-ink/60">
              <LocaleLink href="/en" className={locale === "en" ? "text-ink" : "text-ink/60"}>
                EN
              </LocaleLink>
              <span>·</span>
              <LocaleLink href="/fr" className={locale === "fr" ? "text-ink" : "text-ink/60"}>
                FR
              </LocaleLink>
              <span>·</span>
              <LocaleLink href="/ar" className={locale === "ar" ? "text-ink" : "text-ink/60"}>
                AR
              </LocaleLink>
            </div>
            <Button variant="secondary" size="sm" onClick={openModal} ariaLabel="Book a free consultation">
              {t("cta.bookFreeShort")}
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
            <LocaleLink
              key={link.href}
              href={link.href}
              className="text-base font-medium text-ink/80"
              onClick={() => setOpen(false)}
            >
              {t(link.labelKey)}
            </LocaleLink>
          ))}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 rounded-full border border-ink/10 px-3 py-1 text-xs font-semibold text-ink/60">
              <LocaleLink href="/en" className={locale === "en" ? "text-ink" : "text-ink/60"}>
                EN
              </LocaleLink>
              <span>·</span>
              <LocaleLink href="/fr" className={locale === "fr" ? "text-ink" : "text-ink/60"}>
                FR
              </LocaleLink>
              <span>·</span>
              <LocaleLink href="/ar" className={locale === "ar" ? "text-ink" : "text-ink/60"}>
                AR
              </LocaleLink>
            </div>
            <Button onClick={openModal} ariaLabel="Book a free consultation">
              {t("cta.bookFreeShort")}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
