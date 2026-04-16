"use client";

import { useRef, useState } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: "button" | "a";
  href?: string;
  onClick?: () => void;
}

export function MagneticButton({
  children,
  className = "",
  style: externalStyle,
  as = "button",
  href,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    setPos({ x: dx * 0.2, y: dy * 0.2 });
  };

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  const style = {
    ...externalStyle,
    transform: `translate(${pos.x}px, ${pos.y}px)`,
  };

  const Component = as as any;

  return (
    <Component
      ref={ref}
      href={href}
      onClick={onClick}
      className={`magnetic-btn ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </Component>
  );
}
