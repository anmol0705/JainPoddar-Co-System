"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealTextProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  stagger?: number;
  scrub?: boolean;
}

export function RevealText({
  children,
  as: Tag = "h2",
  className = "",
  style,
  delay = 0,
  stagger = 0.02,
  scrub = false,
}: RevealTextProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;

    // Split into words, then characters
    const text = el.textContent || "";
    const words = text.split(" ");
    el.innerHTML = "";

    words.forEach((word, wi) => {
      const wordSpan = document.createElement("span");
      wordSpan.style.display = "inline-block";
      wordSpan.style.overflow = "hidden";
      wordSpan.style.verticalAlign = "top";
      wordSpan.style.whiteSpace = "nowrap";

      const chars = word.split("");
      chars.forEach((char) => {
        const charSpan = document.createElement("span");
        charSpan.textContent = char;
        charSpan.style.display = "inline-block";
        charSpan.style.transform = "translateY(110%)";
        charSpan.classList.add("char");
        wordSpan.appendChild(charSpan);
      });

      el.appendChild(wordSpan);

      // Add space between words
      if (wi < words.length - 1) {
        const space = document.createElement("span");
        space.innerHTML = "&nbsp;";
        space.style.display = "inline-block";
        el.appendChild(space);
      }
    });

    const charEls = el.querySelectorAll(".char");

    const ctx = gsap.context(() => {
      if (scrub) {
        gsap.to(charEls, {
          y: 0,
          stagger: stagger,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 30%",
            scrub: 1,
          },
        });
      } else {
        gsap.to(charEls, {
          y: 0,
          duration: 0.8,
          stagger: stagger,
          ease: "power4.out",
          delay: delay,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [children, delay, stagger, scrub]);

  const Component = Tag;

  return (
    <Component ref={containerRef as any} className={className} style={style}>
      {children}
    </Component>
  );
}
