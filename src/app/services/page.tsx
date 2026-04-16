"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageHeader } from "@/components/PageHeader";
import { RevealText } from "@/components/RevealText";
import { MagneticButton } from "@/components/MagneticButton";
import {
  services,
  featuredServices,
  getServiceGroups,
} from "@/lib/data/services";

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════════
   Image map for featured services
   ═══════════════════════════════════════════════════ */
const serviceImages: Record<string, string> = {
  "statutory-audit": "/images/about7.jpg",
  "direct-tax-consultancy": "/images/about2.jpg",
  "gst-consultancy-services": "/images/about9.jpg",
  "due-diligence": "/images/about10.jpg",
  "loan-syndication": "/images/about8.jpg",
  "risk-advisory-services": "/images/about3.jpg",
};

/* ═══════════════════════════════════════════════════
   1. FEATURED SERVICES — Interactive split-screen showcase
   ═══════════════════════════════════════════════════ */
function FeaturedShowcase() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval>>(undefined);

  const service = featuredServices[active];
  const imageUrl = serviceImages[service.slug] || "/images/about4.jpg";

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % featuredServices.length);
    }, 5000);
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [startAutoplay]);

  const handleSelect = (index: number) => {
    setActive(index);
    startAutoplay();
  };

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".showcase-content",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--color-ink)" }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[75vh]">
          {/* Left — Transitioning image */}
          <div className="relative min-h-[400px] lg:min-h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={imageUrl}
                  alt={service.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  style={{ filter: "grayscale(0.3) contrast(1.05)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(10,22,40,0.7) 0%, rgba(10,22,40,0.3) 50%, rgba(10,22,40,0.5) 100%)",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Large decorative number */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <AnimatePresence mode="wait">
                <motion.span
                  key={active}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 0.07, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="font-[family-name:var(--font-display)] font-bold select-none"
                  style={{
                    fontSize: "clamp(180px, 25vw, 360px)",
                    color: "var(--color-ivory)",
                    lineHeight: 1,
                  }}
                >
                  {String(service.id).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Right — Service details */}
          <div className="showcase-content flex items-center px-5 md:px-10 lg:px-16 xl:px-20 py-16 lg:py-24 relative">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)",
              }}
            />

            <div className="max-w-[520px] relative z-10">
              <span
                className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.25em] flex items-center gap-3 mb-8"
                style={{ color: "var(--color-champagne)" }}
              >
                <span className="inline-block w-8 h-px bg-champagne" />
                Featured Practice Areas
              </span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span
                    className="font-[family-name:var(--font-mono)] text-sm block mb-3"
                    style={{ color: "var(--color-stone-500)" }}
                  >
                    {String(service.id).padStart(2, "0")} /{" "}
                    {String(services.length).padStart(2, "0")}
                  </span>

                  <h2
                    className="font-[family-name:var(--font-display)] font-semibold leading-[1.05] tracking-[-0.03em]"
                    style={{
                      fontSize: "clamp(32px, 4vw, 52px)",
                      color: "var(--color-ivory)",
                    }}
                  >
                    {service.name}
                  </h2>

                  <p
                    className="font-[family-name:var(--font-body)] text-base mt-5 leading-[1.75]"
                    style={{ color: "var(--color-stone-300)" }}
                  >
                    {service.description.length > 220
                      ? service.description.slice(0, 220) + "..."
                      : service.description}
                  </p>

                  <Link
                    href={`#${service.slug}`}
                    className="inline-flex items-center gap-2 mt-6 font-[family-name:var(--font-body)] text-[13px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:gap-4"
                    style={{ color: "var(--color-champagne)" }}
                  >
                    Full Details
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* Service selector tabs */}
              <div
                className="mt-12 pt-8 border-t"
                style={{ borderColor: "rgba(181,179,173,0.12)" }}
              >
                <div className="flex flex-wrap gap-2">
                  {featuredServices.map((s, i) => {
                    const shortName =
                      s.name.length > 18
                        ? s.name.split(" ").slice(0, 2).join(" ")
                        : s.name;
                    return (
                      <button
                        key={s.slug}
                        onClick={() => handleSelect(i)}
                        className="font-[family-name:var(--font-body)] text-[11px] font-medium px-4 py-2 transition-all duration-500 uppercase tracking-[0.08em]"
                        style={{
                          color:
                            i === active
                              ? "var(--color-ink)"
                              : "var(--color-stone-500)",
                          backgroundColor:
                            i === active
                              ? "var(--color-champagne)"
                              : "transparent",
                          border: `1px solid ${i === active
                              ? "var(--color-champagne)"
                              : "rgba(181,179,173,0.15)"
                            }`,
                        }}
                      >
                        {shortName}
                      </button>
                    );
                  })}
                </div>

                {/* Progress bar */}
                <div
                  className="mt-4 h-[2px] w-full"
                  style={{ backgroundColor: "rgba(181,179,173,0.08)" }}
                >
                  <motion.div
                    key={active}
                    className="h-full"
                    style={{ backgroundColor: "var(--color-champagne)" }}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   2. CATEGORY ACCORDION — All 16 services, grouped
   ═══════════════════════════════════════════════════ */
function ServiceAccordion() {
  const groups = getServiceGroups();
  const [openCategory, setOpenCategory] = useState<number | null>(0);
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
    setExpandedSlug(null);
  };

  const toggleService = (slug: string) => {
    setExpandedSlug(expandedSlug === slug ? null : slug);
  };

  // Handle hash navigation on mount
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const service = services.find((s) => s.slug === hash);
    if (!service) return;

    const categoryIndex = groups.findIndex(
      (g) => g.category === service.category
    );
    if (categoryIndex >= 0) {
      setOpenCategory(categoryIndex);
      setExpandedSlug(hash);

      // Scroll to the service after a short delay for accordion to open
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 600);
    }
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.utils
        .toArray<HTMLElement>(".accordion-group")
        .forEach((el, i) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 92%",
                once: true,
              },
              delay: i * 0.08,
            }
          );
        });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 lg:py-40"
      style={{ backgroundColor: "var(--color-ivory)" }}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <span
              className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.25em] flex items-center gap-3 mb-4"
              style={{ color: "var(--color-champagne)" }}
            >
              <span className="inline-block w-8 h-px bg-champagne" />
              All Practice Areas
            </span>
            <RevealText
              as="h2"
              className="font-[family-name:var(--font-display)] font-semibold leading-[1.05] tracking-[-0.03em] text-stone-900"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              Sixteen Verticals. One Standard.
            </RevealText>
          </div>
          <p
            className="font-[family-name:var(--font-body)] text-base mt-6 lg:mt-0 max-w-[380px] leading-[1.7]"
            style={{ color: "var(--color-stone-500)" }}
          >
            Every practice area is partner-led, with depth built over two
            decades of applied experience.
          </p>
        </div>

        {/* Accordion */}
        <div>
          {groups.map((group, gi) => (
            <div key={group.category} className="accordion-group">
              {/* Category header button */}
              <button
                onClick={() => toggleCategory(gi)}
                className="w-full flex items-center justify-between py-6 lg:py-8 border-t transition-colors duration-300 text-left"
                style={{ borderColor: "rgba(181,179,173,0.2)" }}
              >
                <div className="flex items-center gap-4 lg:gap-8">
                  <span
                    className="font-[family-name:var(--font-mono)] text-[13px] font-medium shrink-0 transition-colors duration-300"
                    style={{
                      color:
                        openCategory === gi
                          ? "var(--color-champagne)"
                          : "var(--color-stone-300)",
                    }}
                  >
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className="font-[family-name:var(--font-display)] text-[22px] md:text-[30px] font-semibold leading-tight tracking-[-0.02em] transition-colors duration-300"
                      style={{
                        color:
                          openCategory === gi
                            ? "var(--color-stone-900)"
                            : "var(--color-stone-700)",
                      }}
                    >
                      {group.category}
                    </h3>
                    <p
                      className="font-[family-name:var(--font-body)] text-sm mt-1 hidden md:block italic"
                      style={{ color: "var(--color-stone-500)" }}
                    >
                      {group.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <span
                    className="font-[family-name:var(--font-mono)] text-[12px] hidden sm:block"
                    style={{ color: "var(--color-stone-300)" }}
                  >
                    {group.services.length} services
                  </span>
                  <div
                    className="w-10 h-10 flex items-center justify-center transition-all duration-500"
                    style={{
                      border: `1px solid ${openCategory === gi
                          ? "var(--color-champagne)"
                          : "rgba(181,179,173,0.2)"
                        }`,
                    }}
                  >
                    <motion.svg
                      animate={{ rotate: openCategory === gi ? 45 : 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      aria-hidden="true"
                      style={{
                        color:
                          openCategory === gi
                            ? "var(--color-champagne)"
                            : "var(--color-stone-500)",
                      }}
                    >
                      <path d="M12 5v14M5 12h14" />
                    </motion.svg>
                  </div>
                </div>
              </button>

              {/* Expanded service list */}
              <AnimatePresence initial={false}>
                {openCategory === gi && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 lg:pb-12 pl-0 lg:pl-16">
                      {group.services.map((service, si) => {
                        const isExpanded = expandedSlug === service.slug;
                        const relatedServices = service.relatedSlugs
                          .map((slug) => services.find((s) => s.slug === slug))
                          .filter(Boolean);

                        return (
                          <motion.div
                            key={service.slug}
                            id={service.slug}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: si * 0.06,
                              duration: 0.5,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="scroll-mt-24"
                          >
                            <button
                              onClick={() => toggleService(service.slug)}
                              className="w-full flex items-start justify-between py-5 border-b transition-all duration-300 text-left group/item"
                              style={{
                                borderColor: isExpanded
                                  ? "rgba(201,168,76,0.2)"
                                  : "rgba(181,179,173,0.12)",
                              }}
                            >
                              <div className="flex-1 pr-4">
                                <div className="flex items-center gap-3 flex-wrap">
                                  <span
                                    className="font-[family-name:var(--font-mono)] text-[12px] shrink-0"
                                    style={{
                                      color: isExpanded
                                        ? "var(--color-champagne)"
                                        : "var(--color-stone-300)",
                                    }}
                                  >
                                    {String(service.id).padStart(2, "0")}
                                  </span>
                                  <h4
                                    className="font-[family-name:var(--font-body)] text-[16px] md:text-[18px] font-medium transition-colors duration-300 group-hover/item:text-champagne"
                                    style={{
                                      color: isExpanded
                                        ? "var(--color-champagne)"
                                        : "var(--color-stone-900)",
                                    }}
                                  >
                                    {service.name}
                                  </h4>
                                  {service.featured && (
                                    <span
                                      className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-wider px-2 py-0.5"
                                      style={{
                                        backgroundColor:
                                          "rgba(201,168,76,0.1)",
                                        color: "var(--color-champagne)",
                                      }}
                                    >
                                      Featured
                                    </span>
                                  )}
                                </div>
                                <p
                                  className="font-[family-name:var(--font-body)] text-sm mt-1.5 leading-relaxed"
                                  style={{ color: "var(--color-stone-500)" }}
                                >
                                  {service.shortDescription}
                                </p>
                              </div>

                              <motion.svg
                                animate={{
                                  rotate: isExpanded ? 180 : 0,
                                }}
                                transition={{
                                  duration: 0.3,
                                  ease: [0.16, 1, 0.3, 1],
                                }}
                                className="w-4 h-4 shrink-0 mt-1.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={1.5}
                                aria-hidden="true"
                                style={{
                                  color: isExpanded
                                    ? "var(--color-champagne)"
                                    : "var(--color-stone-300)",
                                }}
                              >
                                <path d="M19 9l-7 7-7-7" />
                              </motion.svg>
                            </button>

                            {/* Expanded service detail */}
                            <AnimatePresence initial={false}>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{
                                    duration: 0.4,
                                    ease: [0.16, 1, 0.3, 1],
                                  }}
                                  className="overflow-hidden"
                                >
                                  <div
                                    className="py-6 pl-0 md:pl-10 border-b"
                                    style={{
                                      borderColor:
                                        "rgba(201,168,76,0.15)",
                                    }}
                                  >
                                    <p
                                      className="font-[family-name:var(--font-body)] text-base leading-[1.75] max-w-[640px]"
                                      style={{
                                        color: "var(--color-stone-700)",
                                      }}
                                    >
                                      {service.description}
                                    </p>

                                    {relatedServices.length > 0 && (
                                      <div className="mt-5 flex items-center gap-2 flex-wrap">
                                        <span
                                          className="font-[family-name:var(--font-body)] text-[12px] font-medium uppercase tracking-wider"
                                          style={{
                                            color:
                                              "var(--color-stone-500)",
                                          }}
                                        >
                                          Related:
                                        </span>
                                        {relatedServices.map(
                                          (related, ri) => (
                                            <span
                                              key={related!.slug}
                                              className="flex items-center"
                                            >
                                              {ri > 0 && (
                                                <span
                                                  className="mx-1.5 text-[10px]"
                                                  style={{
                                                    color:
                                                      "var(--color-stone-300)",
                                                  }}
                                                >
                                                  /
                                                </span>
                                              )}
                                              <button
                                                onClick={(e) => {
                                                  e.stopPropagation();
                                                  // Find category and open it
                                                  const catIdx =
                                                    groups.findIndex(
                                                      (g) =>
                                                        g.category ===
                                                        related!.category
                                                    );
                                                  if (catIdx >= 0) {
                                                    setOpenCategory(
                                                      catIdx
                                                    );
                                                    setExpandedSlug(
                                                      related!.slug
                                                    );
                                                    setTimeout(() => {
                                                      document
                                                        .getElementById(
                                                          related!.slug
                                                        )
                                                        ?.scrollIntoView({
                                                          behavior:
                                                            "smooth",
                                                          block: "center",
                                                        });
                                                    }, 500);
                                                  }
                                                }}
                                                className="font-[family-name:var(--font-body)] text-[13px] font-medium hover:underline transition-colors duration-300"
                                                style={{
                                                  color:
                                                    "var(--color-champagne)",
                                                }}
                                              >
                                                {related!.name}
                                              </button>
                                            </span>
                                          )
                                        )}
                                      </div>
                                    )}

                                    <div className="mt-5">
                                      <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 font-[family-name:var(--font-body)] text-[12px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:gap-3"
                                        style={{
                                          color: "var(--color-champagne)",
                                        }}
                                      >
                                        Discuss This Service
                                        <svg
                                          width="14"
                                          height="14"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          aria-hidden="true"
                                        >
                                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                                        </svg>
                                      </Link>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          {/* Bottom border */}
          <div
            className="border-t"
            style={{ borderColor: "rgba(181,179,173,0.2)" }}
          />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   3. APPROACH — How We Work (3 steps)
   ═══════════════════════════════════════════════════ */
const approach = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin every engagement by listening — understanding your business, your risks, your constraints, and your objectives before we advise.",
  },
  {
    number: "02",
    title: "Advise",
    description:
      "Our counsel is grounded in statute, tested against precedent, and shaped by two decades of applied experience across industries and scales.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "Every deliverable is partner-reviewed. Every timeline is honoured. Every finding is actionable. No handoffs, no dilution.",
  },
];

function ApproachSection() {
  return (
    <section
      className="py-24 md:py-32 lg:py-40 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-ink)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 70% 30%, rgba(201,168,76,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 relative z-10">
        <div className="mb-16 lg:mb-20">
          <span
            className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.25em] flex items-center gap-3 mb-4"
            style={{ color: "var(--color-champagne)" }}
          >
            <span className="inline-block w-8 h-px bg-champagne" />
            Our Approach
          </span>
          <RevealText
            as="h2"
            className="font-[family-name:var(--font-display)] font-semibold leading-[1.05] tracking-[-0.03em]"
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              color: "var(--color-ivory)",
            }}
          >
            How We Work
          </RevealText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {approach.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.15,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative p-8 lg:p-10 border-t lg:border-l lg:first:border-l-0"
              style={{ borderColor: "rgba(201,168,76,0.1)" }}
            >
              <span
                className="font-[family-name:var(--font-mono)] text-[56px] md:text-[72px] font-bold block leading-none mb-6"
                style={{ color: "rgba(201,168,76,0.12)" }}
              >
                {step.number}
              </span>
              <h3
                className="font-[family-name:var(--font-display)] text-[28px] md:text-[32px] font-semibold leading-tight tracking-[-0.01em]"
                style={{ color: "var(--color-ivory)" }}
              >
                {step.title}
              </h3>
              <p
                className="font-[family-name:var(--font-body)] text-sm mt-4 leading-[1.7]"
                style={{ color: "var(--color-stone-300)" }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   4. QUOTE — Partner philosophy
   ═══════════════════════════════════════════════════ */
function QuoteSection() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-ivory)" }}
    >
      <div className="max-w-[900px] mx-auto px-5 md:px-10 text-center">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          className="w-16 h-px mx-auto mb-12 origin-center"
          style={{ backgroundColor: "var(--color-champagne)" }}
        />

        <div className="editorial-quote relative">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="font-[family-name:var(--font-display)] italic leading-[1.4] tracking-[-0.01em]"
              style={{
                fontSize: "clamp(22px, 3.2vw, 38px)",
                color: "var(--color-stone-900)",
              }}
            >
              An audit that only confirms what is already known is not an audit
              — it is a formality. We look for what the numbers are not yet
              saying.
            </p>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <span
              className="w-8 h-px"
              style={{ backgroundColor: "var(--color-champagne)" }}
            />
            <span
              className="font-[family-name:var(--font-body)] text-[13px] font-semibold uppercase tracking-[0.15em]"
              style={{ color: "var(--color-champagne)" }}
            >
              CA. Rahul Saraf
            </span>
            <span
              className="font-[family-name:var(--font-body)] text-[13px]"
              style={{ color: "var(--color-stone-500)" }}
            >
              &mdash; Senior Partner, Management Audit & Process Consultancy
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.77, 0, 0.175, 1],
            delay: 0.2,
          }}
          className="w-16 h-px mx-auto mt-12 origin-center"
          style={{ backgroundColor: "var(--color-champagne)" }}
        />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   5. CTA — Cinematic final section
   ═══════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--color-ink)" }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image side */}
          <div className="relative hidden lg:block min-h-[60vh] overflow-hidden">
            <Image
              src="/images/about9.jpg"
              alt="JPC office"
              fill
              className="object-cover img-editorial"
              sizes="50vw"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, transparent 50%, var(--color-ink) 100%)",
              }}
            />
          </div>

          {/* Content side */}
          <div className="flex items-center px-5 md:px-10 lg:px-16 xl:px-20 py-24 lg:py-32">
            <div className="max-w-[500px]">
              <span
                className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.25em] flex items-center gap-3 mb-8"
                style={{ color: "var(--color-champagne)" }}
              >
                <span className="inline-block w-8 h-px bg-champagne" />
                Engage With Us
              </span>

              <RevealText
                as="h2"
                className="font-[family-name:var(--font-display)] font-semibold leading-[1.05] tracking-[-0.03em]"
                style={{
                  fontSize: "clamp(36px, 5vw, 64px)",
                  color: "var(--color-ivory)",
                }}
              >
                Need Clarity on a Specific Challenge?
              </RevealText>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-[family-name:var(--font-body)] text-base mt-6 leading-[1.75]"
                style={{ color: "var(--color-stone-300)" }}
              >
                Whether it&apos;s a tax position, an audit engagement, or
                strategic counsel — every conversation begins with
                understanding your specific needs.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-10"
              >
                <MagneticButton
                  as="a"
                  href="/contact"
                  className="inline-flex items-center justify-center font-[family-name:var(--font-body)] text-[13px] font-semibold px-12 py-5 tracking-wider uppercase transition-all duration-300"
                  style={{
                    backgroundColor: "var(--color-champagne)",
                    color: "var(--color-ink)",
                  }}
                >
                  Schedule a Consultation
                </MagneticButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mt-10 pt-8 border-t space-y-2"
                style={{ borderColor: "rgba(181,179,173,0.15)" }}
              >
                <a
                  href="tel:+918102319400"
                  className="font-[family-name:var(--font-mono)] text-[14px] block hover:text-champagne transition-colors duration-300"
                  style={{ color: "var(--color-stone-300)" }}
                >
                  +91-81023 19400
                </a>
                <a
                  href="mailto:jainpoddarco@gmail.com"
                  className="font-[family-name:var(--font-body)] text-[14px] block hover:text-champagne transition-colors duration-300"
                  style={{ color: "var(--color-stone-300)" }}
                >
                  jainpoddarco@gmail.com
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   PAGE COMPOSITION
   ═══════════════════════════════════════════════════ */
export default function ServicesPage() {
  return (
    <>
      <PageHeader
        overline="Our Practice"
        title="Sixteen Verticals. One Standard of Excellence."
        subtitle="Every practice area is led by a partner with deep expertise."
      />

      <FeaturedShowcase />
      <ServiceAccordion />
      <ApproachSection />
      <QuoteSection />
      <CTASection />
    </>
  );
}
