"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Don't render on touch devices
    if ("ontouchstart" in window) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleHoverEnter = () => {
      ringRef.current?.classList.add("hovering");
    };

    const handleHoverLeave = () => {
      ringRef.current?.classList.remove("hovering");
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Watch for interactive elements
    const observer = new MutationObserver(() => {
      const interactives = document.querySelectorAll("a, button, [role='button'], input, textarea, select");
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverEnter);
        el.removeEventListener("mouseleave", handleHoverLeave);
        el.addEventListener("mouseenter", handleHoverEnter);
        el.addEventListener("mouseleave", handleHoverLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Initial bind
    const interactives = document.querySelectorAll("a, button, [role='button'], input, textarea, select");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverEnter);
      el.addEventListener("mouseleave", handleHoverLeave);
    });

    // Animation loop
    let animId: number;
    const animate = () => {
      // Dot follows immediately
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.35;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.35;

      // Ring follows with lag
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x - 4}px, ${dotPos.current.y - 4}px)`;
      }
      if (ringRef.current) {
        const ringSize = ringRef.current.classList.contains("hovering") ? 32 : 20;
        ringRef.current.style.transform = `translate(${ringPos.current.x - ringSize}px, ${ringPos.current.y - ringSize}px)`;
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden lg:block" />
      <div ref={ringRef} className="cursor-ring hidden lg:block" />
    </>
  );
}
