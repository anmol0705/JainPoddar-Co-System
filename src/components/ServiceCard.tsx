"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cardItem } from "@/lib/animations";
import type { Service } from "@/lib/data/services";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div variants={cardItem}>
      <Link
        href={`/services#${service.slug}`}
        className="group relative block p-8 lg:p-10 transition-all duration-400"
        style={{
          backgroundColor: "var(--color-ink-light)",
          transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "var(--color-ink)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "var(--color-ink-light)";
        }}
      >
        {/* Number */}
        <span
          className="font-[family-name:var(--font-mono)] text-sm font-medium block transition-colors duration-400 group-hover:text-champagne"
          style={{ color: "var(--color-stone-500)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Service Name */}
        <h3
          className="font-[family-name:var(--font-body)] text-xl font-semibold mt-4"
          style={{ color: "var(--color-ivory)" }}
        >
          {service.name}
        </h3>

        {/* Description */}
        <p
          className="font-[family-name:var(--font-body)] text-sm mt-2 leading-relaxed line-clamp-2"
          style={{ color: "var(--color-stone-300)" }}
        >
          {service.shortDescription}
        </p>

        {/* Arrow */}
        <svg
          className="absolute top-8 right-8 w-4 h-4 transition-transform duration-400 group-hover:translate-x-1"
          style={{
            color: "var(--color-stone-500)",
            transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </motion.div>
  );
}
