"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  context?: string;
}

export function StatCounter({ value, suffix = "", label, context }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);
  const [showContext, setShowContext] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Show context line after counter completes
        setTimeout(() => setShowContext(true), 400);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <span
        className="font-[family-name:var(--font-mono)] text-[36px] md:text-[56px] font-bold tracking-[-0.02em] block"
        style={{ color: "var(--color-champagne)" }}
      >
        {isInView ? count : 0}
        {suffix}
      </span>
      <span
        className="font-[family-name:var(--font-body)] text-[13px] md:text-sm font-medium uppercase tracking-[0.08em] mt-2 block"
        style={{ color: "var(--color-stone-500)" }}
      >
        {label}
      </span>
      {context && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: showContext ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="font-[family-name:var(--font-body)] text-[13px] italic mt-2 block"
          style={{ color: "var(--color-stone-500)" }}
        >
          {context}
        </motion.span>
      )}
    </div>
  );
}
