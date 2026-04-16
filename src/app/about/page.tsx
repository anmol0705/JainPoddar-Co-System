"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageHeader } from "@/components/PageHeader";
import { RevealText } from "@/components/RevealText";
import { StatCounter } from "@/components/StatCounter";
import { MagneticButton } from "@/components/MagneticButton";
import { partners } from "@/lib/data/partners";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: "2002", event: "Founded by CA. Akhil Poddar & CA. Uttam Jain in Ranchi", highlight: true },
  { year: "2007", event: "CA. Rahul Saraf joins — management audit & process consultancy", highlight: false },
  { year: "2012", event: "Expanded to branch office in Ramgarh Cantt", highlight: false },
  { year: "2016", event: "CA. Anish Agarwal joins — GST dispute resolution & compliance", highlight: false },
  { year: "2024", event: "Serving 500+ clients across 16 service verticals", highlight: true },
];

const values = [
  {
    number: "01",
    title: "Partner-Led Engagement",
    description:
      "Every client engagement is led directly by a partner. The people you meet during onboarding are the people who sign off on your deliverables.",
  },
  {
    number: "02",
    title: "Technical Depth",
    description:
      "Our partners hold qualifications across CA, CS, DISA, and IFRS, and bring two decades of applied experience grounded in statute and precedent.",
  },
  {
    number: "03",
    title: "Practical Solutions",
    description:
      "Every recommendation is tested against the reality of implementation — regulatory timelines, commercial constraints, and operational capacity.",
  },
];

const sectors = [
  { name: "Banking & Financial Institutions", detail: "Concurrent audit, statutory audit, and RBI compliance for scheduled banks and NBFCs." },
  { name: "Government & Public Sector", detail: "Financial audit and accountability reviews for state agencies and PSUs." },
  { name: "Manufacturing & Industrial", detail: "Tax planning, cost audit, and project finance for steel, mining, and industrial enterprises." },
  { name: "Education & Trusts", detail: "Statutory compliance, trust deed structuring, and financial oversight." },
  { name: "Charitable Societies", detail: "Registration, tax exemption advisory, and annual compliance." },
  { name: "High-Net-Worth Individuals", detail: "Personal tax planning, wealth structuring, and succession advisory." },
];

/* ═══════════════════════════════════════════════════
   1. FOUNDING STORY — Split layout
   ═══════════════════════════════════════════════════ */
function FoundingStory() {
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
          scrollTrigger: { trigger: imageRef.current, start: "top 75%", once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "var(--color-ivory)" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
          <div ref={imageRef} className="split-image-container relative min-h-[400px] lg:min-h-full">
            <Image
              src="/images/about4.jpg"
              alt="Jain Poddar & Co. team"
              fill
              className="object-cover img-editorial scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
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
                Our Story
              </motion.span>

              <RevealText
                as="h2"
                className="font-[family-name:var(--font-display)] font-semibold leading-[1.05] tracking-[-0.03em] text-stone-900"
                style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
              >
                From Two Partners to a Full-Spectrum Practice
              </RevealText>

              {[
                "Jain Poddar & Co. was founded in 2002 by CA. Akhil Poddar and CA. Uttam Jain, both of whom cleared the CA and CS examinations in the same year. Their conviction was clear: Ranchi deserved a firm that could match the technical depth of any metro practice.",
                "Over the years, CA. Rahul Saraf (2007) and CA. Anish Agarwal (2016) joined as partners, each bringing distinct expertise. The firm expanded to Ramgarh and built a practice spanning sixteen verticals.",
                "Today, our client relationships — many spanning over fifteen years — are built on accurate work, honest counsel, and consistent availability.",
              ].map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.8 }}
                  className="font-[family-name:var(--font-body)] text-base leading-[1.75] mt-5"
                  style={{ color: "var(--color-stone-700)" }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   2. TEAM PHOTO STRIP
   ═══════════════════════════════════════════════════ */
function TeamPhotoStrip() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "var(--color-ink)" }}>
      <div className="aspect-[21/6] md:aspect-[21/5] relative">
        <Image
          src="/images/about3.jpg"
          alt="The full JPC team"
          fill
          className="object-cover object-center img-editorial"
          sizes="100vw"
          style={{ opacity: 0.6 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, var(--color-ink) 0%, transparent 30%, transparent 70%, var(--color-ink) 100%)" }}
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            <span
              className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.25em] block mb-3"
              style={{ color: "var(--color-champagne)" }}
            >
              Our Team
            </span>
            <h3
              className="font-[family-name:var(--font-display)] text-[28px] md:text-[40px] font-semibold leading-tight"
              style={{ color: "var(--color-ivory)" }}
            >
              The People Behind the Practice
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   3. TIMELINE — Horizontal on desktop, vertical on mobile
   ═══════════════════════════════════════════════════ */
function TimelineSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: "var(--color-ink)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 relative z-10">
        <div className="mb-16">
          <span
            className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.25em] flex items-center gap-3 mb-4"
            style={{ color: "var(--color-champagne)" }}
          >
            <span className="inline-block w-8 h-px bg-champagne" />
            Milestones
          </span>
          <RevealText
            as="h2"
            className="font-[family-name:var(--font-display)] font-semibold leading-[1.05] tracking-[-0.03em]"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "var(--color-ivory)" }}
          >
            Twenty-Four Years of Growth
          </RevealText>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-[28px] left-0 right-0 h-px" style={{ backgroundColor: "rgba(201,168,76,0.2)" }} />
          <div className="grid grid-cols-5 gap-0">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative pt-14 pr-8"
              >
                {/* Dot on the line */}
                <div
                  className="absolute top-[22px] left-0 w-3 h-3 rounded-full border-2"
                  style={{
                    borderColor: "var(--color-champagne)",
                    backgroundColor: m.highlight ? "var(--color-champagne)" : "var(--color-ink)",
                  }}
                />
                <span
                  className="font-[family-name:var(--font-mono)] text-xl font-bold block"
                  style={{ color: "var(--color-champagne)" }}
                >
                  {m.year}
                </span>
                <p
                  className="font-[family-name:var(--font-body)] text-sm mt-2 leading-relaxed"
                  style={{ color: "var(--color-stone-300)" }}
                >
                  {m.event}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden relative">
          <div className="absolute left-[7px] top-0 bottom-0 w-px" style={{ backgroundColor: "rgba(201,168,76,0.15)" }} />
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-6"
              >
                <div className="relative shrink-0">
                  <div
                    className="w-[14px] h-[14px] rounded-full border-2"
                    style={{
                      borderColor: "var(--color-champagne)",
                      backgroundColor: m.highlight ? "var(--color-champagne)" : "transparent",
                    }}
                  />
                </div>
                <div>
                  <span className="font-[family-name:var(--font-mono)] text-lg font-bold block" style={{ color: "var(--color-champagne)" }}>
                    {m.year}
                  </span>
                  <p className="font-[family-name:var(--font-body)] text-base mt-1 leading-relaxed" style={{ color: "var(--color-stone-300)" }}>
                    {m.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   4. VALUES — Three principles
   ═══════════════════════════════════════════════════ */
function ValuesSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".value-card").forEach((card, i) => {
        gsap.fromTo(card, { opacity: 0, y: 60 }, {
          opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 88%", once: true },
          delay: i * 0.1,
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 lg:py-40 relative overflow-hidden" style={{ backgroundColor: "var(--color-ink)" }}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 relative z-10">
        <span className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.25em] flex items-center gap-3 mb-4" style={{ color: "var(--color-champagne)" }}>
          <span className="inline-block w-8 h-px bg-champagne" />
          Our Approach
        </span>
        <RevealText
          as="h2"
          className="font-[family-name:var(--font-display)] font-semibold leading-[1.05] tracking-[-0.03em] mb-16"
          style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "var(--color-ivory)" }}
        >
          Three Principles That Define Our Work
        </RevealText>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {values.map((value, i) => (
            <div
              key={value.number}
              className="value-card group relative p-8 lg:p-10 overflow-hidden transition-all duration-500 border-t lg:border-t-0 lg:border-l lg:first:border-l-0"
              style={{ borderColor: "rgba(201,168,76,0.1)" }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, transparent 60%)" }} />
              <span className="font-[family-name:var(--font-mono)] text-[56px] md:text-[72px] font-bold block leading-none mb-6 relative z-10" style={{ color: "rgba(201,168,76,0.12)" }}>
                {value.number}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-[24px] md:text-[28px] font-semibold relative z-10 leading-tight" style={{ color: "var(--color-ivory)" }}>{value.title}</h3>
              <p className="font-[family-name:var(--font-body)] text-sm mt-4 leading-[1.65] relative z-10" style={{ color: "var(--color-stone-300)" }}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   5. STATS
   ═══════════════════════════════════════════════════ */
function StatsSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: "var(--color-ink)" }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(200px, 30vw, 500px)", fontWeight: 300, color: "rgba(247,244,237,0.02)", lineHeight: 1 }}>24</div>
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {[
            { value: 24, suffix: "+", label: "Years in Practice", context: "Since 2002" },
            { value: 4, suffix: "", label: "Partners", context: "Each a distinct specialist" },
            { value: 16, suffix: "", label: "Service Verticals", context: "Every vertical partner-led" },
            { value: 500, suffix: "+", label: "Clients Served", context: "Banking, govt & private sector" },
          ].map((stat, i) => (
            <div key={i} className={`text-center ${i < 3 ? "lg:border-r lg:border-stone-300/10" : ""}`}>
              <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} context={stat.context} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   6. PARTNERS PREVIEW — Link to team page
   ═══════════════════════════════════════════════════ */
function PartnersPreview() {
  return (
    <section className="py-24 md:py-32 lg:py-40" style={{ backgroundColor: "var(--color-ivory)" }}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <span className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.25em] flex items-center gap-3 mb-4" style={{ color: "var(--color-champagne)" }}>
              <span className="inline-block w-8 h-px bg-champagne" />
              Leadership
            </span>
            <RevealText
              as="h2"
              className="font-[family-name:var(--font-display)] font-semibold leading-[1.05] tracking-[-0.03em] text-stone-900"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              Four Partners. Complementary Expertise.
            </RevealText>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 lg:mt-0"
          >
            <Link
              href="/team"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-body)] text-[13px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:gap-3"
              style={{ color: "var(--color-champagne)" }}
            >
              Full Team Profiles
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/team#${partner.slug}`} className="partner-card-premium group block">
                <div className="aspect-[3/4] overflow-hidden relative bg-stone-200">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover object-top transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] grayscale-[30%] group-hover:grayscale-0 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{ background: "linear-gradient(to top, rgba(10,22,40,0.75) 0%, rgba(10,22,40,0.2) 40%, transparent 70%)" }}
                  />
                  <div className="partner-info absolute bottom-0 left-0 right-0 p-5 z-10">
                    <h3 className="font-[family-name:var(--font-body)] text-[15px] font-semibold" style={{ color: "var(--color-ivory)" }}>
                      {partner.name}
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-[12px] mt-1 font-medium uppercase tracking-wider" style={{ color: "var(--color-champagne)" }}>
                      {partner.title}
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="font-[family-name:var(--font-body)] text-[13px] leading-relaxed" style={{ color: "var(--color-stone-500)" }}>
                    {partner.coreFocus}
                  </p>
                  <p className="font-[family-name:var(--font-mono)] text-[11px] mt-1" style={{ color: "var(--color-stone-300)" }}>
                    {partner.qualifications.split("|")[0].trim()}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   7. SECTORS
   ═══════════════════════════════════════════════════ */
function SectorsSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40" style={{ backgroundColor: "var(--color-ivory-warm)" }}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        <span className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.25em] flex items-center gap-3 mb-4" style={{ color: "var(--color-champagne)" }}>
          <span className="inline-block w-8 h-px bg-champagne" />
          Sectors We Serve
        </span>
        <RevealText
          as="h2"
          className="font-[family-name:var(--font-display)] font-semibold leading-[1.05] tracking-[-0.03em] text-stone-900 mb-12"
          style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
        >
          Across Industries. Across Scales.
        </RevealText>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          {sectors.map((sector, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="py-6 border-b group"
              style={{ borderColor: "rgba(181,179,173,0.2)" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-[family-name:var(--font-body)] text-lg font-medium text-stone-900 group-hover:text-champagne transition-colors duration-300">{sector.name}</h3>
                  <p className="font-[family-name:var(--font-body)] text-sm mt-1 leading-relaxed" style={{ color: "var(--color-stone-500)" }}>{sector.detail}</p>
                </div>
                <span className="font-[family-name:var(--font-mono)] text-[13px] font-medium shrink-0 mt-1" style={{ color: "var(--color-stone-300)" }}>{String(i + 1).padStart(2, "0")}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   8. CTA
   ═══════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "var(--color-ink)" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[50vh]">
          <div className="relative min-h-[250px] lg:min-h-full overflow-hidden hidden lg:block">
            <Image src="/images/about9.jpg" alt="JPC office" fill className="object-cover img-editorial" sizes="50vw" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, var(--color-ink) 100%)" }} />
          </div>
          <div className="flex items-center px-5 md:px-10 lg:px-16 xl:px-20 py-20 lg:py-24">
            <div className="max-w-[480px]">
              <span className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.25em] flex items-center gap-3 mb-6" style={{ color: "var(--color-champagne)" }}>
                <span className="inline-block w-8 h-px bg-champagne" />
                Work With Us
              </span>
              <RevealText as="h2" className="font-[family-name:var(--font-display)] font-semibold leading-[1.05] tracking-[-0.03em]" style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "var(--color-ivory)" }}>
                Ready to Start a Conversation?
              </RevealText>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-[family-name:var(--font-body)] text-base mt-6 leading-[1.75]"
                style={{ color: "var(--color-stone-300)" }}
              >
                Whether you need advisory on a complex matter or want to explore a long-term engagement, every relationship starts with understanding your needs.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.8 }} className="mt-10">
                <MagneticButton as="a" href="/contact" className="inline-block font-[family-name:var(--font-body)] text-[13px] font-semibold px-12 py-5 tracking-wider uppercase transition-all duration-300" style={{ backgroundColor: "var(--color-champagne)", color: "var(--color-ink)" }}>
                  Schedule a Consultation
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <>
      <PageHeader
        overline="About the Firm"
        title="Twenty-Four Years of Advisory Practice"
        subtitle="Established in 2002, Jain Poddar & Co. has grown from a two-partner practice in Ranchi to a four-partner firm serving clients across Jharkhand."
      />
      <FoundingStory />
      <TeamPhotoStrip />
      <TimelineSection />
      <ValuesSection />
      <StatsSection />
      <PartnersPreview />
      <SectorsSection />
      <CTASection />
    </>
  );
}
