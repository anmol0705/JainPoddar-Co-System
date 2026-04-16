"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Our Team" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const showSolid = scrolled || !isHome || mobileOpen;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          backgroundColor: showSolid ? "var(--color-ink)" : "transparent",
          boxShadow: showSolid ? "0 1px 0 rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 shrink-0">
            <Image
              src="/images/logo1.png"
              alt="Jain Poddar & Co."
              width={160}
              height={48}
              className="h-10 lg:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative font-[family-name:var(--font-body)] text-[15px] font-medium tracking-[0.02em] transition-colors duration-300"
                  style={{
                    color: isActive
                      ? "var(--color-champagne)"
                      : "var(--color-ivory)",
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-2 left-0 right-0 h-[2px]"
                      style={{ backgroundColor: "var(--color-champagne)" }}
                    />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="font-[family-name:var(--font-body)] text-sm font-semibold px-6 py-2.5 transition-colors duration-300"
              style={{
                backgroundColor: "var(--color-champagne)",
                color: "var(--color-ink)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "var(--color-champagne-muted)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "var(--color-champagne)")
              }
            >
              Schedule a Consultation
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className="block w-6 h-[2px] transition-all duration-400 origin-center"
              style={{
                backgroundColor: "var(--color-ivory)",
                transform: mobileOpen
                  ? "rotate(45deg) translate(2px, 2px)"
                  : "none",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
            <span
              className="block w-6 h-[2px] transition-all duration-400"
              style={{
                backgroundColor: "var(--color-ivory)",
                opacity: mobileOpen ? 0 : 1,
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
            <span
              className="block w-6 h-[2px] transition-all duration-400 origin-center"
              style={{
                backgroundColor: "var(--color-ivory)",
                transform: mobileOpen
                  ? "rotate(-45deg) translate(2px, -2px)"
                  : "none",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ backgroundColor: "var(--color-ink)" }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: i * 0.08,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-[family-name:var(--font-display)] text-4xl font-medium transition-colors duration-300"
                      style={{
                        color: isActive
                          ? "var(--color-champagne)"
                          : "var(--color-ivory)",
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: navLinks.length * 0.08,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="font-[family-name:var(--font-body)] text-sm font-semibold px-8 py-3 mt-4 inline-block transition-colors duration-300"
                  style={{
                    backgroundColor: "var(--color-champagne)",
                    color: "var(--color-ink)",
                  }}
                >
                  Schedule a Consultation
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
