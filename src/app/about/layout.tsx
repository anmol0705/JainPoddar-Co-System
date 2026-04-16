import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Firm",
  description:
    "Learn about Jain Poddar & Co., a Chartered Accountancy firm established in 2002 in Ranchi, Jharkhand. Four partners, twenty-four years of rigorous advisory practice.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
