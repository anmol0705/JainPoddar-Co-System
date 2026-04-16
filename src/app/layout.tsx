import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
// import { CustomCursor } from "@/components/CustomCursor";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jain Poddar & Co. | Chartered Accountants in Ranchi | Tax, Audit & Advisory",
    template: "%s | Jain Poddar & Co.",
  },
  description:
    "Jain Poddar & Co. is a Chartered Accountancy firm in Ranchi, Jharkhand, offering statutory audit, tax consultancy, GST advisory, corporate law, and financial planning services since 2002.",
  keywords: [
    "chartered accountant ranchi",
    "CA firm ranchi",
    "tax consultant jharkhand",
    "GST advisory ranchi",
    "statutory audit",
    "jain poddar",
  ],
  openGraph: {
    title: "Jain Poddar & Co. | Chartered Accountants in Ranchi",
    description: "24 years of rigorous tax, audit, and advisory practice in Jharkhand.",
    type: "website",
    locale: "en_IN",
    siteName: "Jain Poddar & Co.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        <SmoothScroll>
          {/* <CustomCursor /> */}
          <div className="grain-overlay" aria-hidden="true" />
          <a href="#main-content" className="skip-to-content">
            Skip to content
          </a>
          <Navbar />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
