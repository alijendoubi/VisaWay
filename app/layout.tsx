import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ModalProvider } from "@/components/ModalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://visaway.com"),
  title: {
    default: "VisaWay | Premium Visa Assistance",
    template: "%s | VisaWay"
  },
  description:
    "VisaWay is a premium yet accessible visa assistance agency guiding students and professionals through admission, documentation, and visa submission.",
  openGraph: {
    title: "VisaWay | Premium Visa Assistance",
    description:
      "VisaWay helps international clients secure student, work, and professional visas with clarity and speed.",
    url: "https://visaway.com",
    siteName: "VisaWay",
    images: [
      {
        url: "/opengraph.svg",
        width: 1200,
        height: 630,
        alt: "VisaWay"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus-ring">
          Skip to content
        </a>
        <ModalProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <ConsultationModal />
          <CookieBanner />
        </ModalProvider>
      </body>
    </html>
  );
}
