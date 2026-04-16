"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Marquee } from "@/components/Marquee";
import { MagneticButton } from "@/components/MagneticButton";
import { RevealText } from "@/components/RevealText";
import { StatCounter } from "@/components/StatCounter";
import { TextLink } from "@/components/TextLink";
import { featuredServices } from "@/lib/data/services";
import { partners } from "@/lib/data/partners";

gsap.registerPlugin(ScrollTrigger);

/* ════════════════════════════════════════════════════════════
   1. HERO — Split-screen: left text, right image mosaic
   Asymmetric editorial layout with real image presence
   ════════════════════════════════════════════════════════════ */
function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Left content
      gsap.fromTo(
        ".hero-overline",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", delay: 0.4 }
      );

      gsap.utils.toArray<HTMLElement>(".hero-line-inner").forEach((span, i) => {
        gsap.fromTo(
          span,
          { y: "120%" },
          { y: "0%", duration: 1.4, ease: "power4.out", delay: 0.6 + i * 0.15 }
        );
      });

      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1.3 }
      );
      gsap.fromTo(
        ".hero-ctas",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1.6 }
      );
      gsap.fromTo(
        ".hero-credentials",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power3.out", delay: 1.9 }
      );

      // Right images — staggered clip-path reveals
      gsap.utils.toArray<HTMLElement>(".hero-img-reveal").forEach((img, i) => {
        gsap.fromTo(
          img,
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            duration: 1.4,
            ease: "power3.inOut",
            delay: 0.3 + i * 0.2,
          }
        );
      });

      // Parallax on scroll
      gsap.to(".hero-parallax-content", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-parallax-images", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "var(--color-ink)" }}
    >
      {/* Subtle ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 40% 50% at 30% 60%, rgba(201,168,76,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1440px] mx-auto relative z-10 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
          {/* ── Left: Text content (7 cols) ── */}
          <div className="lg:col-span-7 flex items-center px-5 md:px-10 lg:px-20 py-28 lg:py-0">
            <div className="hero-parallax-content max-w-[620px]">
              {/* Overline */}
              <div
                className="hero-overline font-[family-name:var(--font-body)] text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.3em] mb-10 opacity-0 flex items-center gap-4"
                style={{ color: "var(--color-champagne)" }}
              >
                <span
                  className="inline-block w-12 h-px"
                  style={{ backgroundColor: "var(--color-champagne)" }}
                />
                Chartered Accountants &mdash; Since 2002
              </div>

              {/* Headline — editorial serif, massive */}
              <h1>
                {[
                  { text: "Counsel", accent: false },
                  { text: "That", accent: false },
                  { text: "Compounds.", accent: true },
                ].map((line, i) => (
                  <div key={i} className="overflow-hidden">
                    <span
                      className="hero-line-inner block font-[family-name:var(--font-display)] font-semibold tracking-[-0.04em]"
                      style={{
                        fontSize: "clamp(52px, 9vw, 110px)",
                        lineHeight: 0.95,
                        color: line.accent
                          ? "var(--color-champagne)"
                          : "var(--color-ivory)",
                        transform: "translateY(120%)",
                      }}
                    >
                      {line.text}
                    </span>
                  </div>
                ))}
              </h1>

              {/* Subtitle */}
              <p
                className="hero-subtitle font-[family-name:var(--font-body)] text-[15px] md:text-[17px] mt-10 max-w-[440px] leading-[1.8] opacity-0"
                style={{ color: "var(--color-stone-300)" }}
              >
                For twenty-four years, we have been the quiet authority behind
                Jharkhand&apos;s most consequential financial decisions —
                advising businesses, banks, and families on what matters most.
              </p>

              {/* CTAs */}
              <div className="hero-ctas flex flex-wrap gap-4 mt-10 opacity-0">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center font-[family-name:var(--font-body)] text-[12px] font-semibold px-8 py-[14px] tracking-[0.15em] uppercase transition-all duration-400 hover:translate-y-[-1px] hover:shadow-[0_4px_20px_rgba(201,168,76,0.25)]"
                  style={{
                    backgroundColor: "var(--color-champagne)",
                    color: "var(--color-ink)",
                  }}
                >
                  Explore Our Practice
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-[family-name:var(--font-body)] text-[12px] font-semibold px-8 py-[14px] tracking-[0.15em] uppercase transition-all duration-400 border hover:border-[var(--color-champagne)] hover:text-[var(--color-champagne)]"
                  style={{
                    borderColor: "rgba(247,244,237,0.15)",
                    color: "var(--color-ivory)",
                  }}
                >
                  Begin a Conversation
                </Link>
              </div>

              {/* Credentials bar */}
              <div
                className="hero-credentials hidden lg:flex items-center gap-0 mt-16 opacity-0"
              >
                {[
                  { label: "Est.", value: "2002" },
                  { label: "Offices", value: "Ranchi · Ramgarh" },
                  { label: "Practice", value: "4 Partners · 16 Verticals" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex-1 py-4 ${i > 0 ? "border-l" : ""}`}
                    style={{ borderColor: "rgba(181,179,173,0.1)" }}
                  >
                    <span
                      className="font-[family-name:var(--font-body)] text-[10px] uppercase tracking-[0.2em] block mb-1"
                      style={{ color: "var(--color-stone-500)" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="font-[family-name:var(--font-mono)] text-[13px] font-medium block"
                      style={{ color: "var(--color-ivory)" }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Image mosaic (5 cols) ── */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="hero-parallax-images absolute inset-0 grid grid-cols-2 gap-3 p-3 pt-20 pb-8">
              {/* Tall left image */}
              <div className="hero-img-reveal relative overflow-hidden row-span-2">
                <Image
                  src="/images/about6.jpg"
                  alt="JPC professional workspace"
                  fill
                  className="object-cover"
                  sizes="25vw"
                  priority
                  style={{ filter: "contrast(1.05) brightness(0.95)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,22,40,0.5) 0%, transparent 40%)",
                  }}
                />
              </div>

              {/* Top right — smaller */}
              <div className="hero-img-reveal relative overflow-hidden">
                <Image
                  src="/images/about1.jpg"
                  alt="ICAI Recognition"
                  fill
                  className="object-cover"
                  sizes="25vw"
                  priority
                  style={{ filter: "contrast(1.05) brightness(0.9)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,22,40,0.4) 0%, transparent 40%)",
                  }}
                />
              </div>

              {/* Bottom right */}
              <div className="hero-img-reveal relative overflow-hidden">
                <Image
                  src="/images/about10.jpg"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                  sizes="25vw"
                  priority
                  style={{ filter: "contrast(1.05) brightness(0.9)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,22,40,0.4) 0%, transparent 40%)",
                  }}
                />
                {/* Floating stat overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <span
                    className="font-[family-name:var(--font-mono)] text-[32px] font-bold block leading-none"
                    style={{ color: "var(--color-champagne)" }}
                  >
                    500+
                  </span>
                  <span
                    className="font-[family-name:var(--font-body)] text-[11px] uppercase tracking-[0.15em] mt-1 block"
                    style={{ color: "rgba(247,244,237,0.6)" }}
                  >
                    Clients Served
                  </span>
                </div>
              </div>
            </div>

            {/* Vertical champagne accent line */}
            <div
              className="absolute top-0 left-0 w-px h-full z-20"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 10%, rgba(201,168,76,0.2) 50%, transparent 90%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 z-20"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span
          className="font-[family-name:var(--font-body)] text-[9px] uppercase tracking-[0.25em]"
          style={{ color: "var(--color-stone-500)" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-8"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-stone-500), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   2. PHILOSOPHY — Elegant editorial quote
   ════════════════════════════════════════════════════════════ */
function PhilosophySection() {
  return (
    <section
      className="py-20 md:py-28 lg:py-36 relative"
      style={{ backgroundColor: "var(--color-ivory)" }}
    >
      <div className="max-w-[900px] mx-auto px-5 md:px-10 lg:px-20 text-center">
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
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="font-[family-name:var(--font-display)] italic leading-[1.4] tracking-[-0.01em]"
              style={{
                fontSize: "clamp(22px, 3.2vw, 40px)",
                color: "var(--color-stone-900)",
              }}
            >
              We don&apos;t offer opinions. We offer positions — grounded in
              statute, tested against precedent, and built to withstand scrutiny.
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
              CA. Akhil Poddar
            </span>
            <span
              className="font-[family-name:var(--font-body)] text-[13px]"
              style={{ color: "var(--color-stone-500)" }}
            >
              &mdash; Senior Partner
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

/* ════════════════════════════════════════════════════════════
   3. ABOUT — Split screen: image + story
   ════════════════════════════════════════════════════════════ */
function AboutSection() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.4,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section style={{ backgroundColor: "var(--color-ink)" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div
            ref={imageRef}
            className="split-image-container relative aspect-square lg:aspect-auto lg:min-h-[80vh]"
          >
            <Image
              src="/images/about6.jpg"
              alt="Jain Poddar & Co. office workspace"
              fill
              className="object-cover img-editorial scale-110"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>

          <div className="flex items-center px-5 md:px-10 lg:px-16 xl:px-20 py-16 lg:py-24">
            <div className="max-w-[520px]">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.25em] flex items-center gap-3 mb-6"
                style={{ color: "var(--color-champagne)" }}
              >
                <span className="inline-block w-8 h-px bg-champagne" />
                The Firm
              </motion.span>

              <RevealText
                as="h2"
                className="font-[family-name:var(--font-display)] font-semibold leading-[1.05] tracking-[-0.03em]"
                style={{
                  fontSize: "clamp(32px, 4vw, 56px)",
                  color: "var(--color-ivory)",
                }}
              >
                Built on Conviction. Proven Over Two Decades.
              </RevealText>

              <div className="mt-8 space-y-5">
                {[
                  "Founded in 2002 by CA. Akhil Poddar and CA. Uttam Jain, Jain Poddar & Co. was built on a singular premise: Ranchi deserves a firm that matches the rigour and depth of any practice in a metro city.",
                  "Today, four partners and a dedicated team serve companies, banks, trusts, government bodies, and high-net-worth families across sixteen practice areas.",
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15, duration: 0.8 }}
                    className="font-[family-name:var(--font-body)] text-base leading-[1.75]"
                    style={{ color: "var(--color-stone-300)" }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t"
                style={{ borderColor: "rgba(181,179,173,0.15)" }}
              >
                {[
                  { number: "24+", label: "Years" },
                  { number: "4", label: "Partners" },
                  { number: "500+", label: "Clients" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <span
                      className="font-[family-name:var(--font-mono)] text-2xl md:text-3xl font-bold block"
                      style={{ color: "var(--color-champagne)" }}
                    >
                      {stat.number}
                    </span>
                    <span
                      className="font-[family-name:var(--font-body)] text-[12px] uppercase tracking-[0.1em] mt-1 block"
                      style={{ color: "var(--color-stone-500)" }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-8"
              >
                <TextLink href="/about">Our Full Story</TextLink>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   4. MARQUEE
   ════════════════════════════════════════════════════════════ */
function MarqueeStrip() {
  const items = [
    "Statutory Audit",
    "Direct Tax",
    "GST Advisory",
    "Corporate Law",
    "Due Diligence",
    "Loan Syndication",
    "Risk Advisory",
    "Project Finance",
  ];

  return (
    <div
      className="py-5 overflow-hidden border-y"
      style={{
        backgroundColor: "var(--color-ink)",
        borderColor: "rgba(201,168,76,0.12)",
      }}
    >
      <Marquee speed={35}>
        {items.map((item) => (
          <span key={item} className="flex items-center mx-8">
            <span
              className="font-[family-name:var(--font-body)] text-[13px] font-medium uppercase tracking-[0.2em]"
              style={{ color: "rgba(247,244,237,0.35)" }}
            >
              {item}
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full ml-8"
              style={{ backgroundColor: "var(--color-champagne)" }}
            />
          </span>
        ))}
      </Marquee>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   5. SERVICES — Editorial list with hover-reveal descriptions
   Clean ivory background, numbered list, elegant interactions
   ════════════════════════════════════════════════════════════ */
function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".svc-item").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
            delay: i * 0.05,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 lg:py-40 relative"
      style={{ backgroundColor: "var(--color-ivory)" }}
    >
      {/* Decorative background number */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(300px, 30vw, 500px)",
          fontWeight: 600,
          color: "rgba(201,168,76,0.03)",
          lineHeight: 0.8,
          letterSpacing: "-0.05em",
        }}
      >
        16
      </div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 relative z-10">
        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20">
          <div className="lg:col-span-7">
            <span
              className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.25em] flex items-center gap-3 mb-5"
              style={{ color: "var(--color-champagne)" }}
            >
              <span className="inline-block w-8 h-px bg-champagne" />
              Our Practice
            </span>
            <RevealText
              as="h2"
              className="font-[family-name:var(--font-display)] font-semibold leading-[1.05] tracking-[-0.03em] text-stone-900"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              Depth Across Every Discipline
            </RevealText>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p
              className="font-[family-name:var(--font-body)] text-base leading-[1.7] max-w-[400px]"
              style={{ color: "var(--color-stone-500)" }}
            >
              Six partner-led practice areas, each with the rigour of a
              specialist firm and the perspective of a full-service practice.
            </p>
          </div>
        </div>

        {/* Service list — editorial numbered rows */}
        <div>
          {featuredServices.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              className="svc-item group block border-t transition-colors duration-500"
              style={{ borderColor: "rgba(181,179,173,0.2)" }}
            >
              <div className="grid grid-cols-12 gap-4 py-7 lg:py-9 items-center">
                {/* Number */}
                <div className="col-span-2 lg:col-span-1">
                  <span
                    className="font-[family-name:var(--font-mono)] text-[13px] font-medium transition-colors duration-500 group-hover:text-champagne"
                    style={{ color: "var(--color-stone-300)" }}
                  >
                    {String(service.id).padStart(2, "0")}
                  </span>
                </div>

                {/* Name */}
                <div className="col-span-10 lg:col-span-4">
                  <h3
                    className="font-[family-name:var(--font-display)] text-[22px] md:text-[28px] font-semibold leading-tight tracking-[-0.02em] transition-colors duration-500 group-hover:text-champagne"
                    style={{ color: "var(--color-stone-900)" }}
                  >
                    {service.name}
                  </h3>
                </div>

                {/* Description — hidden on mobile, slides in */}
                <div className="hidden lg:block lg:col-span-5">
                  <p
                    className="font-[family-name:var(--font-body)] text-sm leading-[1.65] transition-all duration-500 translate-x-0 group-hover:translate-x-2"
                    style={{ color: "var(--color-stone-500)" }}
                  >
                    {service.shortDescription}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden lg:flex lg:col-span-2 justify-end">
                  <div
                    className="w-10 h-10 flex items-center justify-center transition-all duration-500 group-hover:translate-x-1"
                    style={{
                      border: "1px solid rgba(181,179,173,0.15)",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      className="transition-all duration-500 group-hover:stroke-[var(--color-champagne)]"
                      style={{ color: "var(--color-stone-300)" }}
                      aria-hidden="true"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom accent line on hover */}
              <div
                className="h-[2px] w-0 group-hover:w-full transition-all duration-700"
                style={{
                  backgroundColor: "var(--color-champagne)",
                  transitionTimingFunction: "cubic-bezier(0.77, 0, 0.175, 1)",
                }}
              />
            </Link>
          ))}

          {/* Last border */}
          <div
            className="border-t"
            style={{ borderColor: "rgba(181,179,173,0.2)" }}
          />
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <TextLink href="/services">View all 16 practice areas</TextLink>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   6. EDITORIAL IMAGES — Asymmetric grid
   ════════════════════════════════════════════════════════════ */
function EditorialSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".editorial-img").forEach((img, i) => {
        gsap.fromTo(
          img,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.2,
            ease: "power3.inOut",
            scrollTrigger: { trigger: img, start: "top 80%", once: true },
            delay: i * 0.15,
          }
        );
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="py-24 md:py-32 lg:py-40"
      style={{ backgroundColor: "var(--color-ink)" }}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <span
              className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.25em] flex items-center gap-3 mb-4"
              style={{ color: "var(--color-champagne)" }}
            >
              <span className="inline-block w-8 h-px bg-champagne" />
              Life at JPC
            </span>
            <h2
              className="font-[family-name:var(--font-display)] text-[28px] md:text-[36px] font-semibold leading-[1.1] tracking-[-0.02em]"
              style={{ color: "var(--color-ivory)" }}
            >
              More Than a Practice. A Community.
            </h2>
          </div>
          <p
            className="font-[family-name:var(--font-body)] text-sm mt-4 lg:mt-0 max-w-[320px] leading-relaxed"
            style={{ color: "var(--color-stone-500)" }}
          >
            From ICAI conferences to daily collaboration, our culture is built
            on shared purpose.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="editorial-img md:col-span-7 relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/about1.jpg"
              alt="ICAI Recognition Ceremony"
              fill
              className="object-cover img-editorial"
              sizes="(max-width: 768px) 100vw, 58vw"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,22,40,0.6) 0%, transparent 50%)",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <span
                className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.15em]"
                style={{ color: "var(--color-champagne)" }}
              >
                Professional Recognition
              </span>
              <p
                className="font-[family-name:var(--font-body)] text-sm mt-1"
                style={{ color: "rgba(247,244,237,0.7)" }}
              >
                Our partners receiving recognition at the ICAI 75th Anniversary
                ceremony
              </p>
            </div>
          </div>

          <div className="md:col-span-5 grid grid-rows-2 gap-4">
            <div className="editorial-img relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/about6.jpg"
                alt="JPC Workspace"
                fill
                className="object-cover img-editorial"
                sizes="(max-width: 768px) 100vw, 42vw"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,22,40,0.5) 0%, transparent 50%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <span
                  className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.15em]"
                  style={{ color: "var(--color-champagne)" }}
                >
                  Our Workspace
                </span>
              </div>
            </div>

            <div className="editorial-img relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/about8.jpg"
                alt="Capital Market Conference"
                fill
                className="object-cover img-editorial"
                sizes="(max-width: 768px) 100vw, 42vw"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,22,40,0.5) 0%, transparent 50%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <span
                  className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.15em]"
                  style={{ color: "var(--color-champagne)" }}
                >
                  Industry Leadership
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   7. STATS
   ════════════════════════════════════════════════════════════ */
function StatsSection() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-ink)" }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(200px, 30vw, 500px)",
          fontWeight: 300,
          color: "rgba(247,244,237,0.02)",
          lineHeight: 1,
        }}
      >
        24
      </div>
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {[
            {
              value: 24,
              suffix: "+",
              label: "Years in Practice",
              context: "Since 2002",
            },
            {
              value: 4,
              suffix: "",
              label: "Partners",
              context: "Each a distinct specialist",
            },
            {
              value: 16,
              suffix: "",
              label: "Service Verticals",
              context: "Every vertical partner-led",
            },
            {
              value: 500,
              suffix: "+",
              label: "Clients Served",
              context: "Banking, govt & private",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className={`text-center ${
                i < 3 ? "lg:border-r lg:border-stone-300/10" : ""
              }`}
            >
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                context={stat.context}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   8. TEAM
   ════════════════════════════════════════════════════════════ */
function TeamSection() {
  return (
    <section
      className="py-24 md:py-32 lg:py-40"
      style={{ backgroundColor: "var(--color-ivory)" }}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <span
              className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.25em] flex items-center gap-3 mb-4"
              style={{ color: "var(--color-champagne)" }}
            >
              <span className="inline-block w-8 h-px bg-champagne" />
              Leadership
            </span>
            <RevealText
              as="h2"
              className="font-[family-name:var(--font-display)] font-semibold leading-[1.05] tracking-[-0.03em] text-stone-900"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              The Names Behind the Numbers
            </RevealText>
          </div>
          <div className="mt-6 lg:mt-0">
            <TextLink href="/team">Meet the full team</TextLink>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.12,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={`/team#${partner.slug}`}
                className="partner-card-premium group block"
              >
                <div className="aspect-[3/4] overflow-hidden relative bg-stone-200">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover object-top transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] grayscale-[30%] group-hover:grayscale-0 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10,22,40,0.75) 0%, rgba(10,22,40,0.2) 40%, transparent 70%)",
                    }}
                  />
                  <div className="partner-info absolute bottom-0 left-0 right-0 p-5 z-10">
                    <h3
                      className="font-[family-name:var(--font-body)] text-[15px] font-semibold"
                      style={{ color: "var(--color-ivory)" }}
                    >
                      {partner.name}
                    </h3>
                    <p
                      className="font-[family-name:var(--font-body)] text-[12px] mt-1 font-medium uppercase tracking-wider"
                      style={{ color: "var(--color-champagne)" }}
                    >
                      {partner.title}
                    </p>
                  </div>
                </div>
                <p
                  className="font-[family-name:var(--font-body)] text-[13px] mt-3 leading-relaxed"
                  style={{ color: "var(--color-stone-500)" }}
                >
                  {partner.coreFocus}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   9. TESTIMONIAL
   ════════════════════════════════════════════════════════════ */
function TestimonialSection() {
  return (
    <section
      className="py-28 md:py-36 lg:py-44 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-ink)" }}
    >
      <div className="absolute inset-0">
        <Image
          src="/images/about1.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
          style={{ opacity: 0.06, filter: "grayscale(1)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 0%, var(--color-ink) 70%)",
          }}
        />
      </div>

      <div className="max-w-[900px] mx-auto px-5 md:px-10 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="font-[family-name:var(--font-display)] block mb-4 leading-none"
            style={{
              fontSize: "clamp(80px, 10vw, 140px)",
              color: "var(--color-champagne)",
              opacity: 0.2,
            }}
          >
            &ldquo;
          </span>

          <blockquote
            className="font-[family-name:var(--font-display)] italic leading-[1.4] tracking-[-0.01em]"
            style={{
              fontSize: "clamp(20px, 2.8vw, 34px)",
              color: "var(--color-ivory)",
            }}
          >
            The people you meet during onboarding are the people who sign off
            on your deliverables. There is no handoff to juniors, no dilution of
            accountability. That is not just our philosophy — it is our
            structure.
          </blockquote>

          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden relative shrink-0">
                <Image
                  src="/images/uttam.jpg"
                  alt="CA. Uttam Jain"
                  fill
                  className="object-cover"
                  sizes="48px"
                  loading="lazy"
                />
              </div>
              <div className="text-left">
                <span
                  className="font-[family-name:var(--font-body)] text-[13px] font-semibold block"
                  style={{ color: "var(--color-ivory)" }}
                >
                  CA. Uttam Jain
                </span>
                <span
                  className="font-[family-name:var(--font-body)] text-[12px] block"
                  style={{ color: "var(--color-stone-500)" }}
                >
                  Senior Partner &middot; AIR 30, CA Final
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   10. CTA
   ════════════════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section style={{ backgroundColor: "var(--color-ink)" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative hidden lg:block min-h-[70vh] overflow-hidden">
            <Image
              src="/images/about10.jpg"
              alt="Jain Poddar & Co. team at work"
              fill
              className="object-cover img-editorial"
              sizes="50vw"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, transparent 60%, var(--color-ink) 100%)",
              }}
            />
          </div>

          <div className="flex items-center px-5 md:px-10 lg:px-16 xl:px-20 py-24 lg:py-32">
            <div className="max-w-[500px]">
              <span
                className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.25em] flex items-center gap-3 mb-8"
                style={{ color: "var(--color-champagne)" }}
              >
                <span className="inline-block w-8 h-px bg-champagne" />
                Get in Touch
              </span>

              <RevealText
                as="h2"
                className="font-[family-name:var(--font-display)] font-semibold leading-[1.05] tracking-[-0.03em]"
                style={{
                  fontSize: "clamp(36px, 5vw, 64px)",
                  color: "var(--color-ivory)",
                }}
              >
                Your Next Decision Deserves Our Full Attention.
              </RevealText>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-[family-name:var(--font-body)] text-base mt-6 leading-[1.75]"
                style={{ color: "var(--color-stone-300)" }}
              >
                Whether you need a second opinion on a tax position, a fresh
                look at your audit process, or strategic guidance — every
                engagement begins with a conversation.
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

/* ════════════════════════════════════════════════════════════
   HOMEPAGE
   ════════════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <AboutSection />
      <MarqueeStrip />
      <ServicesSection />
      <EditorialSection />
      <StatsSection />
      <TeamSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
}
