"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useMemo } from "react";
import type { Locale } from "@/lib/i18n";
import { defaultLocale } from "@/lib/i18n";

type LocaleContextValue = {
  locale: Locale;
  messages: Record<string, string>;
  t: (key: string) => string;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: defaultLocale,
  messages: {},
  t: (key) => key
});

export const LocaleProvider = ({
  locale,
  messages,
  children
}: {
  locale: Locale;
  messages: Record<string, string>;
  children: ReactNode;
}) => {
  const value = useMemo(() => {
    const t = (key: string) => messages[key] || key;
    return { locale, messages, t };
  }, [locale, messages]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useTranslations = () => {
  return useContext(LocaleContext);
};
