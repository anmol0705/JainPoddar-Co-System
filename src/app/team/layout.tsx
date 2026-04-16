import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Partners",
  description:
    "Meet the four partners of Jain Poddar & Co. — CA. Akhil Poddar, CA. Uttam Jain, CA. Rahul Saraf, and CA. Anish Agarwal. Partner-led expertise since 2002.",
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
