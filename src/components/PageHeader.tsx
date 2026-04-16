"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PageHeaderProps {
  overline: string;
  title: string;
  subtitle?: string;
}

export function PageHeader({ overline, title, subtitle }: PageHeaderProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Split title into natural lines at word boundaries (~4-5 words each)
  const words = title.split(" ");
  const lines: string[] = [];
  let current = "";
  words.forEach((w) => {
    if (current.split(" ").length >= 4) {
      lines.push(current.trim());
      current = w;
    } else {
      current += " " + w;
    }
  });
  if (current.trim()) lines.push(current.trim());

  useEffect(() => {
    if (!sectionRef.current) return;

    // Overline
    gsap.fromTo(
      ".page-header-overline",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 1, ease: "power4.out", delay: 0.2 }
    );

    // Title lines
    lineRefs.current.forEach((line, i) => {
      if (!line) return;
      gsap.fromTo(
        line.querySelector("span"),
        { y: "110%" },
        {
          y: "0%",
          duration: 1.2,
          ease: "power4.out",
          delay: 0.4 + i * 0.12,
        }
      );
    });

    // Subtitle
    gsap.fromTo(
      ".page-header-subtitle",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.8 }
    );

    // Decorative line
    gsap.fromTo(
      ".page-header-line",
      { scaleX: 0 },
      { scaleX: 1, duration: 1.2, ease: "power3.inOut", delay: 0.6 }
    );
  }, [title]);

  return (
    <section
      ref={sectionRef}
      className="pt-32 lg:pt-40 pb-20 lg:pb-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-ink)" }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 20% 80%, rgba(201,168,76,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 relative z-10">
        {/* Overline */}
        <div
          className="page-header-overline font-[family-name:var(--font-body)] text-[11px] md:text-[13px] font-semibold uppercase tracking-[0.2em] mb-8 opacity-0 flex items-center gap-4"
          style={{ color: "var(--color-champagne)" }}
        >
          <span
            className="inline-block w-8 h-px"
            style={{ backgroundColor: "var(--color-champagne)" }}
          />
          {overline}
        </div>

        {/* Title with line-by-line reveal */}
        <h1 className="max-w-[900px]">
          {lines.map((line, i) => (
            <div
              key={i}
              ref={(el) => { lineRefs.current[i] = el; }}
              className="overflow-hidden"
            >
              <span
                className="block font-[family-name:var(--font-display)] font-semibold leading-[1.05] tracking-[-0.03em]"
                style={{
                  fontSize: "clamp(36px, 6vw, 72px)",
                  color: "var(--color-ivory)",
                  transform: "translateY(110%)",
                }}
              >
                {line}
              </span>
            </div>
          ))}
        </h1>

        {subtitle && (
          <p
            className="page-header-subtitle font-[family-name:var(--font-body)] text-base md:text-lg mt-8 max-w-[560px] leading-[1.7] opacity-0"
            style={{ color: "var(--color-stone-300)" }}
          >
            {subtitle}
          </p>
        )}

        {/* Decorative line */}
        <div
          className="page-header-line mt-12 h-px w-full origin-left"
          style={{
            background:
              "linear-gradient(90deg, var(--color-champagne) 0%, transparent 60%)",
            opacity: 0.3,
            transform: "scaleX(0)",
          }}
        />
      </div>
    </section>
  );
}
