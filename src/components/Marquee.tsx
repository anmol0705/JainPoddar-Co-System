"use client";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function Marquee({ children, speed = 40, className = "" }: MarqueeProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="marquee-track inline-flex"
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="inline-flex items-center shrink-0">{children}</div>
        <div className="inline-flex items-center shrink-0">{children}</div>
      </div>
    </div>
  );
}
