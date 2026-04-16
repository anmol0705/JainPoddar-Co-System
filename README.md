# Jain Poddar & Co. — Official Website

A premium, editorial-grade website for **Jain Poddar & Co.**, a Chartered Accountancy firm established in 2003, headquartered in Ranchi, Jharkhand with a branch office in Ramgarh Cantt.

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, GSAP, and Framer Motion.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 (`@theme inline`) + CSS custom properties |
| Animations | GSAP 3 + ScrollTrigger, Framer Motion 12 |
| Smooth Scroll | Lenis |
| Typography | Cormorant Garamond (display), DM Sans (body), JetBrains Mono (mono) |
| Text Effects | SplitType |
| Deployment | Static export ready |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — fonts, navbar, footer, smooth scroll, custom cursor
│   ├── page.tsx            # Homepage — hero, services, philosophy, about, stats, team, CTA
│   ├── about/page.tsx      # Founding story, timeline, values, sectors, partner preview
│   ├── services/page.tsx   # Featured showcase, accordion by category, approach, CTA
│   ├── team/page.tsx       # Partner profiles and team information
│   ├── insights/page.tsx   # Articles and thought leadership
│   ├── contact/page.tsx    # Contact form (FormSubmit), office info, embedded map
│   └── globals.css         # Tailwind v4 theme, custom properties, keyframes
├── components/
│   ├── Navbar.tsx           # Responsive nav with scroll-aware styling
│   ├── Footer.tsx           # 4-column footer with practice areas, firm links, regulatory bodies
│   ├── PageHeader.tsx       # Reusable dark hero header with overline/title/subtitle
│   ├── CustomCursor.tsx     # GSAP-powered custom cursor
│   ├── SmoothScroll.tsx     # Lenis smooth scrolling wrapper
│   ├── MagneticButton.tsx   # Magnetic hover effect button
│   ├── RevealText.tsx       # SplitType text reveal animation
│   ├── StatCounter.tsx      # Animated number counter with ScrollTrigger
│   ├── TextLink.tsx         # Animated underline link
│   ├── ParallaxImage.tsx    # GSAP parallax image component
│   ├── Marquee.tsx          # Infinite scrolling marquee
│   ├── ServiceCard.tsx      # Service display card
│   └── KineticHero.tsx      # Kinetic hero variant
└── lib/
    ├── animations.ts        # Shared GSAP animation utilities
    └── data/
        ├── services.ts      # 16 services across 5 categories with slugs and descriptions
        ├── partners.ts      # Partner profiles — qualifications, specializations, bios
        └── insights.ts      # Article/insight entries
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — split-screen hero with image mosaic, editorial services list, philosophy, about preview, scrolling marquee, stats, team highlights, testimonial, CTA |
| `/about` | Founding story, horizontal timeline (1998-present), core values, sector expertise, partner preview |
| `/services` | Auto-rotating featured showcase, categorized accordion (5 groups, 16 services), approach methodology |
| `/team` | Partner and team member profiles |
| `/insights` | Articles and thought leadership content |
| `/contact` | Contact form via FormSubmit, office locations (Ranchi & Ramgarh), Google Maps embed, office hours |

## Design System

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-ivory` | `#FAF9F6` | Primary background |
| `--color-ink` | `#1A1A1A` | Primary text, dark sections |
| `--color-champagne` | `#C9A84C` | Accent, highlights, overlines |
| `--color-stone-*` | Warm grays | Secondary text, borders, muted elements |

### Typography

- **Display**: Cormorant Garamond — elegant serif for headlines and hero text
- **Body**: DM Sans — clean sans-serif for body copy and UI elements
- **Mono**: JetBrains Mono — used for phone numbers and technical details

### Animation Patterns

- **Scroll reveals**: GSAP ScrollTrigger with staggered fade-in and vertical movement
- **Text splitting**: SplitType character/word reveals on headlines
- **Parallax**: Multi-layer parallax on hero images and section backgrounds
- **Clip-path reveals**: CSS clip-path animations for image unveils
- **Hover interactions**: Magnetic buttons, underline wipes, color transitions
- **Page transitions**: Framer Motion AnimatePresence for component-level transitions

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Services Covered

The firm's 16 practice areas organized into 5 categories:

1. **Audit & Assurance** — Statutory Audit, Tax Audit, Bank Audit, Concurrent Audit
2. **Tax Advisory** — Direct Tax Consultancy, Transfer Pricing, NRI Taxation, Litigation Support
3. **GST & Indirect Tax** — GST Consultancy, GST Audit, Customs & Foreign Trade
4. **Corporate & Legal** — Corporate Law, Due Diligence, RERA Consultancy
5. **Finance & Advisory** — Risk Advisory, Project Finance & Loan Syndication

## Contact

**Jain Poddar & Co.**
Chartered Accountants

- **Head Office**: 502-03-04, Mangal Tower, Old HB Road, Kantatoli, Ranchi - 834001, Jharkhand
- **Branch Office**: Gurudwara Road, Near Gurudwara, Ramgarh Cantt - 829122, Jharkhand
- **Phone**: +91-81023 19400 | (0651) 253 0318
- **Email**: jainpoddarco@gmail.com

---

Built with precision by leveraging Next.js 16, GSAP, and Framer Motion for a premium editorial web experience.
