import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Jain Poddar & Co. in Ranchi. Schedule a consultation for tax, audit, GST, or advisory services. We respond within one business day.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
