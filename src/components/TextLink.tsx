import Link from "next/link";

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
}

export function TextLink({ href, children }: TextLinkProps) {
  return (
    <Link
      href={href}
      className="text-link-arrow font-[family-name:var(--font-body)] text-sm font-semibold transition-colors duration-300 group"
      style={{ color: "var(--color-champagne)" }}
    >
      {children}
      <span className="arrow-line" />
      <svg
        className="arrow-chevron w-3 h-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
}
