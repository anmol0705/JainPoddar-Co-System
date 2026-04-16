"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageHeader } from "@/components/PageHeader";
import { RevealText } from "@/components/RevealText";
import { MagneticButton } from "@/components/MagneticButton";
import { partners } from "@/lib/data/partners";

gsap.registerPlugin(ScrollTrigger);

export default function TeamPage() {
  const partnersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!partnersRef.current) return;

    const ctx = gsap.context(() => {
      const images = partnersRef.current!.querySelectorAll(".partner-image-wrap");
      images.forEach((img) => {
        gsap.fromTo(
          img,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.2,
            ease: "power3.inOut",
            scrollTrigger: { trigger: img, start: "top 80%", once: true },
          }
        );
      });
    }, partnersRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageHeader
        overline="Our Team"
        title="Led by Partners. Driven by Expertise."
        subtitle="Four partners with complementary expertise, each bringing decades of specialised practice."
      />

      {/* Full-width team photo */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "var(--color-ink)" }}>
        <div className="aspect-[21/6] md:aspect-[21/5] relative">
          <Image
            src="/images/about5.jpg"
            alt="The Jain Poddar & Co. team"
            fill
            className="object-cover object-center"
            sizes="100vw"
            style={{ opacity: 0.5, filter: "grayscale(0.3)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--color-ink) 0%, transparent 30%, transparent 70%, var(--color-ink) 100%)" }} />
        </div>
      </section>

      {/* Partner Detail Sections */}
      <div ref={partnersRef}>
        {partners.map((partner, i) => {
          const isEven = i % 2 === 0;
          const isDark = i % 2 !== 0;

          return (
            <section
              key={partner.slug}
              id={partner.slug}
              className="scroll-mt-20 relative overflow-hidden"
              style={{ backgroundColor: isDark ? "var(--color-ink)" : "var(--color-ivory)" }}
            >
              {/* Large decorative number */}
              <div
                className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(200px, 20vw, 360px)",
                  fontWeight: 700,
                  color: isDark ? "rgba(247,244,237,0.015)" : "rgba(26,26,26,0.02)",
                  lineHeight: 1,
                  ...(isEven ? { right: "-40px" } : { left: "-40px" }),
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="max-w-[1440px] mx-auto">
                <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]`}>
                  {/* Image */}
                  <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="partner-image-wrap relative min-h-[400px] lg:min-h-full overflow-hidden">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: isDark
                            ? "linear-gradient(to top, rgba(10,22,40,0.3) 0%, transparent 40%)"
                            : "linear-gradient(to top, rgba(0,0,0,0.1) 0%, transparent 30%)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Bio */}
                  <div className={`flex items-center px-5 md:px-10 lg:px-16 xl:px-20 py-16 lg:py-24 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="max-w-[520px]">
                      {partner.isSenior && (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
                          className="w-12 h-[2px] origin-left mb-6"
                          style={{ backgroundColor: "var(--color-champagne)" }}
                        />
                      )}

                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.25em] flex items-center gap-3 mb-3"
                        style={{ color: "var(--color-champagne)" }}
                      >
                        <span className="inline-block w-6 h-px bg-champagne" />
                        {partner.title}
                      </motion.span>

                      <RevealText
                        as="h2"
                        className="font-[family-name:var(--font-display)] font-semibold leading-[1.1] tracking-[-0.02em]"
                        style={{
                          fontSize: "clamp(32px, 4vw, 48px)",
                          color: isDark ? "var(--color-ivory)" : "var(--color-stone-900)",
                        }}
                      >
                        {partner.name}
                      </RevealText>

                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="font-[family-name:var(--font-mono)] text-sm mt-2"
                        style={{ color: "var(--color-stone-500)" }}
                      >
                        {partner.qualifications}
                      </motion.p>

                      <div className="mt-6 space-y-4">
                        {partner.bio.map((paragraph, j) => (
                          <motion.p
                            key={j}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: 0.2 + j * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="font-[family-name:var(--font-body)] text-base leading-[1.7]"
                            style={{ color: isDark ? "var(--color-stone-300)" : "var(--color-stone-700)" }}
                          >
                            {paragraph}
                          </motion.p>
                        ))}
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex flex-wrap gap-2 mt-8"
                      >
                        {partner.expertise.map((tag) => (
                          <span
                            key={tag}
                            className="font-[family-name:var(--font-body)] text-[12px] font-medium px-3.5 py-1.5"
                            style={{
                              backgroundColor: isDark ? "rgba(247,244,237,0.05)" : "var(--color-ivory-warm)",
                              color: isDark ? "var(--color-stone-300)" : "var(--color-stone-700)",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Philosophy */}
      <section className="py-28 md:py-36 lg:py-44 relative overflow-hidden" style={{ backgroundColor: "var(--color-ink)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 70%)" }} />
        <div className="max-w-[800px] mx-auto px-5 md:px-10 text-center relative z-10">
          <span className="font-[family-name:var(--font-display)] block mb-6 leading-none" style={{ fontSize: "clamp(80px, 10vw, 140px)", color: "var(--color-champagne)", opacity: 0.2 }}>&ldquo;</span>
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-display)] italic leading-[1.4] tracking-[-0.01em]"
            style={{ fontSize: "clamp(22px, 3vw, 36px)", color: "var(--color-ivory)" }}
          >
            The people you meet are the people who do the work. That is not just our philosophy — it is our structure.
          </motion.blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "var(--color-ivory)" }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[50vh]">
            <div className="relative min-h-[250px] lg:min-h-full overflow-hidden hidden lg:block">
              <Image src="/images/about9.jpg" alt="JPC office" fill className="object-cover img-editorial" sizes="50vw" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, var(--color-ivory) 100%)" }} />
            </div>
            <div className="flex items-center px-5 md:px-10 lg:px-16 xl:px-20 py-20 lg:py-24">
              <div className="max-w-[480px]">
                <span className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.25em] flex items-center gap-3 mb-6" style={{ color: "var(--color-champagne)" }}>
                  <span className="inline-block w-8 h-px bg-champagne" />
                  Work With Our Team
                </span>
                <RevealText as="h2" className="font-[family-name:var(--font-display)] font-semibold leading-[1.05] tracking-[-0.03em] text-stone-900" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
                  Let Us Know How We Can Help.
                </RevealText>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }} className="mt-8">
                  <MagneticButton as="a" href="/contact" className="inline-block font-[family-name:var(--font-body)] text-[13px] font-semibold px-12 py-5 tracking-wider uppercase transition-all duration-300" style={{ backgroundColor: "var(--color-champagne)", color: "var(--color-ink)" }}>
                    Schedule a Consultation
                  </MagneticButton>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
