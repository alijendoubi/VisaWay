import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ModalProvider } from "@/components/ModalContext";
import { StickyActions } from "@/components/StickyActions";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import { getMessages, isRtl, locales, type Locale } from "@/lib/i18n";

export default function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = params;
  if (!locales.includes(locale)) {
    notFound();
  }
  const messages = getMessages(locale);
  const dir = isRtl(locale) ? "rtl" : "ltr";

  return (
    <LocaleProvider locale={locale} messages={messages}>
      <div dir={dir} className={dir === "rtl" ? "text-right" : "text-left"}>
        <a href="#main" className="sr-only focus:not-sr-only focus-ring">
          Skip to content
        </a>
        <ModalProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <StickyActions />
          <ConsultationModal />
          <CookieBanner />
        </ModalProvider>
      </div>
    </LocaleProvider>
  );
}
