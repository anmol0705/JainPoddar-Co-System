import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Practice Areas",
  description:
    "Sixteen specialised practice areas including statutory audit, tax consultancy, GST advisory, corporate law, due diligence, and risk advisory services.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
