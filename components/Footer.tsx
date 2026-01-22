"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { LocaleLink } from "@/components/i18n/LocaleLink";
import { useTranslations } from "@/components/i18n/LocaleProvider";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Visas",
    links: [
      { label: "Student Visa", href: "/student-visa" },
      { label: "Work Visa", href: "/work-visa" },
      { label: "Professional Visa", href: "/professional-visa" },
      { label: "Services", href: "/services" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Eligibility Check", href: "/services#eligibility" },
      { label: "Visa Wizard", href: "/#wizard" },
      { label: "FAQs", href: "/#faq" }
    ]
  }
];

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" }
];

export const Footer = () => {
  const { t } = useTranslations();
  return (
    <footer className="border-t border-white/60 bg-white">
      <div className="section-padding grid gap-10 py-16 lg:grid-cols-[1.4fr_2fr_1.2fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="VisaWay logo" width={56} height={56} />
            <span className="text-lg font-semibold">VisaWay</span>
          </div>
          <p className="text-sm text-ink/70">
            Premium yet accessible visa guidance for students, professionals, and global teams. Your path abroad,
            organized and transparent.
          </p>
          <div className="flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-sm font-semibold text-ink/70 transition hover:text-ink"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-3">
              <p className="text-sm font-semibold text-ink">
                {group.title === "Company" && t("footer.company")}
                {group.title === "Visas" && t("footer.visas")}
                {group.title === "Resources" && t("footer.resources")}
              </p>
              <div className="space-y-2 text-sm text-ink/70">
                {group.links.map((link) => (
                  <LocaleLink key={link.href} href={link.href} className="block transition hover:text-ink">
                    {link.label}
                  </LocaleLink>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <p className="text-sm font-semibold text-ink">{t("footer.newsletter")}</p>
          <p className="text-sm text-ink/70">{t("footer.newsletterCopy")}</p>
          <form className="flex flex-col gap-3">
            <input
              className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus-visible:focus-ring"
              placeholder="Email address"
              type="email"
              aria-label="Email address"
            />
            <Button variant="secondary" type="submit" ariaLabel="Subscribe to newsletter">
              {t("footer.subscribe")}
            </Button>
          </form>
        </div>
      </div>
      <div className="section-padding flex flex-wrap items-center justify-between gap-2 border-t border-white/60 py-6 text-xs text-ink/50">
        <p>© 2025 VisaWay. All rights reserved.</p>
        <p>Privacy · Terms · Accessibility</p>
      </div>
    </footer>
  );
};
