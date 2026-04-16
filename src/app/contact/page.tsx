"use client";

import { useEffect, useRef, Suspense } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageHeader } from "@/components/PageHeader";
import { MagneticButton } from "@/components/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const inputClasses =
  "w-full h-12 px-0 font-[family-name:var(--font-body)] text-base bg-transparent border-0 border-b text-stone-900 transition-all duration-300 focus:border-champagne focus:outline-none placeholder:text-stone-300";

const inputStyle = { borderColor: "rgba(181,179,173,0.3)" };

function SuccessBanner() {
  const searchParams = useSearchParams();
  const submitted = searchParams.get("submitted") === "true";
  if (!submitted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 mt-4"
    >
      <div
        className="p-6 text-center"
        style={{ backgroundColor: "rgba(61,122,74,0.08)", border: "1px solid rgba(61,122,74,0.2)" }}
      >
        <p className="font-[family-name:var(--font-body)] text-base font-medium" style={{ color: "var(--color-success)" }}>
          Thank you for reaching out. We will respond within one business day.
        </p>
      </div>
    </motion.div>
  );
}

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current) {
      const fields = formRef.current.querySelectorAll(".form-field");
      gsap.fromTo(
        fields,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power3.out",
          scrollTrigger: { trigger: formRef.current, start: "top 80%", once: true },
        }
      );
    }
  }, []);

  return (
    <div className="px-5 md:px-10 lg:px-16 xl:px-20 py-20 lg:py-28">
      <span className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.25em] flex items-center gap-3 mb-10" style={{ color: "var(--color-champagne)" }}>
        <span className="inline-block w-8 h-px bg-champagne" />
        Send Us a Message
      </span>

      <form ref={formRef} action="https://formsubmit.co/jainpoddarco@gmail.com" method="POST" className="space-y-8">
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://jainpoddarco.com/contact?submitted=true" />

        <div className="form-field" style={{ opacity: 0 }}>
          <label htmlFor="name" className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.15em] block mb-3" style={{ color: "var(--color-stone-500)" }}>Full Name</label>
          <input type="text" id="name" name="name" required className={inputClasses} style={inputStyle} placeholder="Your full name" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="form-field" style={{ opacity: 0 }}>
            <label htmlFor="email" className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.15em] block mb-3" style={{ color: "var(--color-stone-500)" }}>Email Address</label>
            <input type="email" id="email" name="email" required className={inputClasses} style={inputStyle} placeholder="your@email.com" />
          </div>
          <div className="form-field" style={{ opacity: 0 }}>
            <label htmlFor="phone" className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.15em] block mb-3" style={{ color: "var(--color-stone-500)" }}>Phone Number</label>
            <input type="tel" id="phone" name="phone" className={inputClasses} style={inputStyle} placeholder="+91-XXXXX XXXXX" />
          </div>
        </div>

        <div className="form-field" style={{ opacity: 0 }}>
          <label htmlFor="inquiry_type" className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.15em] block mb-3" style={{ color: "var(--color-stone-500)" }}>Nature of Inquiry</label>
          <select id="inquiry_type" name="inquiry_type" required className={`${inputClasses} appearance-none`} style={inputStyle} defaultValue="">
            <option value="" disabled>Select an area</option>
            <option value="Audit & Assurance">Audit &amp; Assurance</option>
            <option value="Tax Advisory">Tax Advisory</option>
            <option value="GST Services">GST Services</option>
            <option value="Corporate Law">Corporate Law</option>
            <option value="Due Diligence">Due Diligence</option>
            <option value="Project Finance">Project Finance &amp; Loan Syndication</option>
            <option value="New Client Inquiry">New Client Inquiry</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-field" style={{ opacity: 0 }}>
          <label htmlFor="subject" className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.15em] block mb-3" style={{ color: "var(--color-stone-500)" }}>Subject</label>
          <input type="text" id="subject" name="subject" required className={inputClasses} style={inputStyle} placeholder="Brief description of your need" />
        </div>

        <div className="form-field" style={{ opacity: 0 }}>
          <label htmlFor="message" className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.15em] block mb-3" style={{ color: "var(--color-stone-500)" }}>Message</label>
          <textarea id="message" name="message" rows={4} required className="w-full px-0 py-3 font-[family-name:var(--font-body)] text-base bg-transparent border-0 border-b text-stone-900 transition-all duration-300 focus:border-champagne focus:outline-none resize-none placeholder:text-stone-300" style={inputStyle} placeholder="Tell us about your needs..." />
        </div>

        <div className="form-field pt-4" style={{ opacity: 0 }}>
          <MagneticButton as="button" className="w-full py-4 font-[family-name:var(--font-body)] text-[13px] font-semibold tracking-wider uppercase transition-all duration-300" style={{ backgroundColor: "var(--color-ink)", color: "var(--color-ivory)" }}>
            Send Message
          </MagneticButton>
        </div>
      </form>
    </div>
  );
}

function OfficeInfo() {
  return (
    <div className="relative" style={{ backgroundColor: "var(--color-ink)" }}>
      <div className="absolute inset-0">
        <Image
          src="/images/about9.jpg"
          alt="JPC Office"
          fill
          className="object-cover"
          sizes="50vw"
          style={{ opacity: 0.08, filter: "grayscale(1)" }}
        />
      </div>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 80% at 80% 20%, rgba(201,168,76,0.04) 0%, transparent 60%)" }} />

      <div className="relative z-10 px-5 md:px-10 lg:px-16 xl:px-20 py-20 lg:py-28 flex items-center">
        <div>
          <div>
            <span className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.2em] flex items-center gap-3" style={{ color: "var(--color-champagne)" }}>
              <span className="inline-block w-6 h-px bg-champagne" />
              Head Office
            </span>
            <p className="font-[family-name:var(--font-body)] text-base mt-3 leading-relaxed" style={{ color: "var(--color-stone-300)" }}>
              502-03-04, Mangal Tower, Old HB Road,<br />Kantatoli, Ranchi - 834001, Jharkhand
            </p>
          </div>

          <div className="mt-10">
            <span className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.2em] flex items-center gap-3" style={{ color: "var(--color-champagne)" }}>
              <span className="inline-block w-6 h-px bg-champagne" />
              Branch Office
            </span>
            <p className="font-[family-name:var(--font-body)] text-base mt-3 leading-relaxed" style={{ color: "var(--color-stone-300)" }}>
              Gurudwara Road, Near Gurudwara,<br />Ramgarh Cantt - 829122, Jharkhand
            </p>
          </div>

          <div className="my-10 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.2) 50%, transparent 100%)" }} />

          <div className="space-y-3">
            <a href="tel:+918102319400" className="font-[family-name:var(--font-mono)] text-base block hover:text-champagne transition-colors duration-300" style={{ color: "var(--color-stone-300)" }}>+91-81023 19400</a>
            <a href="tel:06512530318" className="font-[family-name:var(--font-mono)] text-base block hover:text-champagne transition-colors duration-300" style={{ color: "var(--color-stone-300)" }}>(0651) 253 0318</a>
          </div>
          <div className="mt-4">
            <a href="mailto:jainpoddarco@gmail.com" className="font-[family-name:var(--font-body)] text-base hover:text-champagne transition-colors duration-300" style={{ color: "var(--color-stone-300)" }}>jainpoddarco@gmail.com</a>
          </div>

          <div className="mt-10">
            <span className="font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.2em] flex items-center gap-3" style={{ color: "var(--color-champagne)" }}>
              <span className="inline-block w-6 h-px bg-champagne" />
              Office Hours
            </span>
            <p className="font-[family-name:var(--font-body)] text-sm mt-3 leading-relaxed" style={{ color: "var(--color-stone-500)" }}>
              Monday — Saturday: 10:00 AM — 6:00 PM<br />Sunday: Closed
            </p>
          </div>

          <div className="mt-10 aspect-video overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.541!2d85.3446201!3d23.3655929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e17975a9faa9%3A0xccdc72fd3a60e2e2!2sJain%20Poddar%20%26%20Co.!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" height="100%"
              style={{ border: 0, filter: "grayscale(0.6) contrast(1.1) brightness(0.8)" }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jain Poddar & Co. Office Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        overline="Contact"
        title="We Would Like to Hear from You."
        subtitle="Reach out. We respond within one business day."
      />

      <Suspense>
        <SuccessBanner />
      </Suspense>

      <section className="relative overflow-hidden" style={{ backgroundColor: "var(--color-ivory)" }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <ContactForm />
            <OfficeInfo />
          </div>
        </div>
      </section>
    </>
  );
}
