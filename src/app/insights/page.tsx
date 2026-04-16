"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageHeader } from "@/components/PageHeader";
import { RevealText } from "@/components/RevealText";
import { MagneticButton } from "@/components/MagneticButton";
import { insights } from "@/lib/data/insights";

gsap.registerPlugin(ScrollTrigger);

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function InsightsPage() {
  const [featured, ...rest] = insights;
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gridRef.current!.querySelectorAll(".insight-card");
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
            delay: (i % 2) * 0.1,
          }
        );
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageHeader
        overline="Insights"
        title="Perspectives on Tax, Compliance & Business"
        subtitle="Our partners share analysis on the regulatory and financial developments that matter to your business."
      />

      {/* Featured Insight */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--color-ivory)" }}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden"
            style={{ backgroundColor: "var(--color-ink)" }}
          >
            {/* Hover gradient */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 80% 20%, rgba(201,168,76,0.06) 0%, transparent 60%)",
              }}
            />

            <div className="relative z-10 p-10 lg:p-14">
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.15em] px-3 py-1 border"
                  style={{
                    color: "var(--color-champagne)",
                    borderColor: "rgba(201,168,76,0.3)",
                  }}
                >
                  Coming Soon
                </span>
                <span
                  className="font-[family-name:var(--font-mono)] text-[13px]"
                  style={{ color: "var(--color-stone-500)" }}
                >
                  {formatDate(featured.date)}
                </span>
              </div>

              <span
                className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.2em] flex items-center gap-3"
                style={{ color: "var(--color-champagne)" }}
              >
                <span className="inline-block w-4 h-px bg-champagne" />
                {featured.category}
              </span>

              <h2
                className="font-[family-name:var(--font-display)] text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.1] tracking-[-0.02em] mt-4 max-w-[700px]"
                style={{ color: "var(--color-ivory)" }}
              >
                {featured.title}
              </h2>

              <p
                className="font-[family-name:var(--font-body)] text-base md:text-lg leading-[1.7] mt-5 max-w-[640px]"
                style={{ color: "var(--color-stone-300)" }}
              >
                {featured.excerpt}
              </p>
            </div>

            {/* Bottom accent line */}
            <div
              className="h-[2px] w-0 group-hover:w-full transition-all duration-700"
              style={{
                backgroundColor: "var(--color-champagne)",
                transitionTimingFunction: "cubic-bezier(0.77, 0, 0.175, 1)",
              }}
            />
          </motion.article>
        </div>
      </section>

      {/* Insight Grid */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--color-ivory-warm)" }}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rest.map((insight) => (
              <article
                key={insight.slug}
                className="insight-card group relative overflow-hidden p-8 lg:p-10 transition-all duration-500"
                style={{
                  backgroundColor: "var(--color-ivory)",
                  opacity: 0,
                }}
              >
                {/* Hover gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(201,168,76,0.04) 0%, transparent 60%)",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className="font-[family-name:var(--font-mono)] text-[13px]"
                      style={{ color: "var(--color-stone-500)" }}
                    >
                      {formatDate(insight.date)}
                    </span>
                    <span
                      className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1"
                      style={{
                        backgroundColor: "var(--color-ivory-warm)",
                        color: "var(--color-stone-700)",
                      }}
                    >
                      {insight.category}
                    </span>
                  </div>

                  <h3
                    className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-semibold leading-tight tracking-[-0.01em] group-hover:text-champagne transition-colors duration-300"
                    style={{ color: "var(--color-stone-900)" }}
                  >
                    {insight.title}
                  </h3>

                  <p
                    className="font-[family-name:var(--font-body)] text-sm leading-relaxed mt-3 line-clamp-2"
                    style={{ color: "var(--color-stone-700)" }}
                  >
                    {insight.excerpt}
                  </p>
                </div>

                {/* Bottom line */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700"
                  style={{
                    backgroundColor: "var(--color-champagne)",
                    transitionTimingFunction: "cubic-bezier(0.77, 0, 0.175, 1)",
                  }}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section
        className="py-32 md:py-40 lg:py-48 relative overflow-hidden"
        style={{ backgroundColor: "var(--color-ink)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-[600px] mx-auto px-5 md:px-10 text-center relative z-10">
          <span
            className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.2em] block mb-6"
            style={{ color: "var(--color-champagne)" }}
          >
            Stay Informed
          </span>

          <RevealText
            as="h2"
            className="font-[family-name:var(--font-display)] font-semibold leading-[1.05] tracking-[-0.03em]"
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              color: "var(--color-ivory)",
            }}
          >
            Receive Our Updates
          </RevealText>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-[family-name:var(--font-body)] text-base mt-4 leading-[1.65]"
            style={{ color: "var(--color-stone-300)" }}
          >
            Periodic insights on tax, compliance, and advisory — delivered to
            your inbox.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 mt-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 h-12 px-4 font-[family-name:var(--font-body)] text-base bg-transparent border transition-all duration-300 focus:border-champagne focus:outline-none"
              style={{
                borderColor: "rgba(181,179,173,0.2)",
                color: "var(--color-ivory)",
              }}
            />
            <MagneticButton
              as="button"
              className="h-12 px-6 font-[family-name:var(--font-body)] text-sm font-semibold transition-colors duration-300 shrink-0"
              style={{
                backgroundColor: "var(--color-champagne)",
                color: "var(--color-ink)",
              }}
            >
              Subscribe
            </MagneticButton>
          </motion.form>
        </div>
      </section>
    </>
  );
}
