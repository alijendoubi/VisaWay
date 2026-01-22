import en from "@/messages/en.json";
import fr from "@/messages/fr.json";
import ar from "@/messages/ar.json";

export const locales = ["en", "fr", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

const messageMap: Record<Locale, Record<string, string>> = {
  en,
  fr,
  ar
};

export const getMessages = (locale: string) => {
  const selected = locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;
  return messageMap[selected];
};

export const isRtl = (locale: string) => locale === "ar";
