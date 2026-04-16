"use client";

import Link from "next/link";
import Image from "next/image";

const practiceLinks = [
  { label: "Statutory Audit", href: "/services#statutory-audit" },
  { label: "Direct Tax", href: "/services#direct-tax-consultancy" },
  { label: "GST Services", href: "/services#gst-consultancy-services" },
  { label: "Corporate Law", href: "/services#corporate-law" },
  { label: "Due Diligence", href: "/services#due-diligence" },
  { label: "Risk Advisory", href: "/services#risk-advisory-services" },
];

const firmLinks = [
  { label: "About", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const regulatoryLinks = [
  { label: "ICAI", href: "https://icai.org/" },
  { label: "Income Tax Department", href: "https://www.incometax.gov.in/iec/foportal/" },
  { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in/" },
  { label: "GST Portal", href: "https://www.gst.gov.in/" },
  { label: "Reserve Bank of India", href: "https://rbi.org.in/" },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-ink)" }}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Image
              src="/images/logo3.jpg"
              alt="Jain Poddar & Co."
              width={320}
              height={96}
              className="h-20 w-auto object-contain mb-4"
              style={{ width: "auto" }}
            />
            <p
              className="font-[family-name:var(--font-body)] text-sm"
              style={{ color: "var(--color-stone-300)" }}
            >
              Chartered Accountants | Ranchi &amp; Ramgarh
            </p>
            <p
              className="font-[family-name:var(--font-body)] text-sm mt-4 leading-relaxed"
              style={{ color: "var(--color-stone-500)" }}
            >
              502-03-04, Mangal Tower, Old HB Road,
              <br />
              Kantatoli, Ranchi - 834001, Jharkhand
            </p>
            <div className="mt-4 space-y-1">
              <a
                href="tel:+918102319400"
                className="font-[family-name:var(--font-body)] text-sm block transition-colors duration-300 hover:text-ivory"
                style={{ color: "var(--color-stone-300)" }}
              >
                +91-81023 19400
              </a>
              <a
                href="mailto:jainpoddarco@gmail.com"
                className="font-[family-name:var(--font-body)] text-sm block transition-colors duration-300 hover:text-ivory"
                style={{ color: "var(--color-stone-300)" }}
              >
                jainpoddarco@gmail.com
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="lg:col-span-3">
            <h3
              className="font-[family-name:var(--font-body)] text-[13px] font-semibold uppercase tracking-[0.1em] mb-4"
              style={{ color: "var(--color-champagne)" }}
            >
              Practice Areas
            </h3>
            <ul className="space-y-2.5">
              {practiceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-[family-name:var(--font-body)] text-sm transition-colors duration-300 hover:underline"
                    style={{ color: "var(--color-stone-300)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--color-ivory)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--color-stone-300)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* The Firm */}
          <div className="lg:col-span-2">
            <h3
              className="font-[family-name:var(--font-body)] text-[13px] font-semibold uppercase tracking-[0.1em] mb-4"
              style={{ color: "var(--color-champagne)" }}
            >
              The Firm
            </h3>
            <ul className="space-y-2.5">
              {firmLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-[family-name:var(--font-body)] text-sm transition-colors duration-300 hover:underline"
                    style={{ color: "var(--color-stone-300)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--color-ivory)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--color-stone-300)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regulatory Bodies */}
          <div className="lg:col-span-2">
            <h3
              className="font-[family-name:var(--font-body)] text-[13px] font-semibold uppercase tracking-[0.1em] mb-4"
              style={{ color: "var(--color-champagne)" }}
            >
              Regulatory Bodies
            </h3>
            <ul className="space-y-2.5">
              {regulatoryLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[family-name:var(--font-body)] text-sm transition-colors duration-300 hover:underline"
                    style={{ color: "var(--color-stone-300)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--color-ivory)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--color-stone-300)")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-16 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(181, 179, 173, 0.15)" }}
        >
          <p
            className="font-[family-name:var(--font-body)] text-[13px]"
            style={{ color: "var(--color-stone-500)" }}
          >
            &copy; {new Date().getFullYear()} Jain Poddar &amp; Co. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-[family-name:var(--font-body)] text-[13px] transition-colors duration-300"
              style={{ color: "var(--color-stone-500)" }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-[family-name:var(--font-body)] text-[13px] transition-colors duration-300"
              style={{ color: "var(--color-stone-500)" }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
