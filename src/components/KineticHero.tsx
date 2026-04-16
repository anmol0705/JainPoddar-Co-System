"use client";

const words = [
  "AUDIT",
  "TAX",
  "COMPLIANCE",
  "FINANCE",
  "ADVISORY",
  "DUE DILIGENCE",
  "GST",
  "CORPORATE LAW",
  "RISK",
  "STRATEGY",
  "GOVERNANCE",
  "SYNDICATION",
];

// Duplicate for seamless loop
const allWords = [...words, ...words];

export function KineticHero() {
  return (
    <div className="hidden lg:block relative overflow-hidden h-full">
      <div className="kinetic-words flex flex-col items-end pr-8">
        {allWords.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="font-[family-name:var(--font-display)] text-[96px] xl:text-[120px] font-light leading-[1.1] whitespace-nowrap select-none"
            style={{
              color: "rgba(247, 244, 237, 0.07)",
            }}
          >
            {word}
          </span>
        ))}
      </div>
      {/* Center glow effect — the word passing through center is slightly brighter */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-ink) 0%, transparent 35%, transparent 65%, var(--color-ink) 100%)",
        }}
      />
    </div>
  );
}
