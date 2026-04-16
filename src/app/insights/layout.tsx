import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Updates",
  description:
    "Perspectives on tax, compliance, and business from the partners at Jain Poddar & Co. Stay informed on regulatory developments that matter.",
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
