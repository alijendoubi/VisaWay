"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useTranslations } from "@/components/i18n/LocaleProvider";
import { locales } from "@/lib/i18n";

export const LocaleLink = ({
  href,
  children,
  className,
  onClick,
  ariaLabel
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}) => {
  const { locale } = useTranslations();
  const isExternal = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");
  const hasLocale = locales.some((loc) => href === `/${loc}` || href.startsWith(`/${loc}/`));
  const finalHref = !isExternal && href.startsWith("/") && !hasLocale ? `/${locale}${href}` : href;

  return (
    <Link href={finalHref} className={className} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </Link>
  );
};
