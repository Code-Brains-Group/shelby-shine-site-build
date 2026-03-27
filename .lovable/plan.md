

# Shelby Shine Cleaning Company — Website Build Plan

## Overview
A complete single-page website for Shelby Shine Cleaning Company, a Kentucky-based professional cleaning and property management company. Brand color #40A153, Inter font, clean flat card design with no glassmorphism.

## Sections (in order)

### 1. Sticky Navigation
- Logo text "Shelby Shine" in green, nav links (Services, About, Reviews, Contact), "Book a Clean" pill CTA
- White bg + shadow on scroll, mobile hamburger with slide-in drawer

### 2. Hero Section
- Full-viewport background image (clean interior from Unsplash)
- Centered white card with eyebrow text, H1 "Your Space. Spotlessly Clean.", two CTA buttons (Book + Call), trust badges row

### 3. Services — 4-Tab Interface
- **Tab 1 — Standard Cleaning**: Checklist card with green left border, 7 items
- **Tab 2 — Deep Cleaning**: Two side-by-side cards (standard included + deep extras)
- **Tab 3 — Specialized**: 2×3 grid of CSS flip cards (6 services with front/back)
- **Tab 4 — Roof & Solar**: Before/after image comparison slider, two-column feature checklist, green callout card

### 4. Add-On Services
- 6 toggle cards in responsive grid (3/2/1 columns), each with icon, name, description, toggle switch
- Green border + tint when toggled on

### 5. Instant Quote Calculator
- Centered card with bedroom/bathroom steppers, service type radio pills, add-on checkboxes, specialized service checkboxes
- Live animated price display (72px green, pulse animation on change)
- Pricing formula as specified

### 6. Trust Bar & Social Proof
- Animated counters (500+ cleans, 200+ clients, 7+ years, 4.9★) with IntersectionObserver
- CSS marquee of client name tiles
- 3 review cards with star ratings

### 7. About Us
- Two-column: team photo placeholder + company story, mission blockquote, 5 values with icons

### 8. Contact & Booking
- Green background section, two-column: contact details with Call/WhatsApp buttons + white booking form card with all specified fields

### 9. Footer
- Dark (#1A1A1A) 4-column layout: Brand, Services, Add-Ons, Contact
- Bottom copyright bar

## Mobile Features
- Sticky bottom bar (Call Now + WhatsApp) visible only on mobile
- All layouts single-column on mobile, responsive breakpoints at 768px and 1280px

## Interactions & Animations
- Scroll-triggered fade-in-up animations via IntersectionObserver
- CSS flip cards with rotateY on hover/tap
- Live quote calculator with animated price pulse
- Animated stat counters
- Before/after image slider (range input based)
- Tab switching for services section
- Add-on toggle cards

## Tech Notes
- Built with React + Tailwind + TypeScript (project stack)
- Inter font from Google Fonts
- Lucide icons throughout
- No PWA service worker (would break Lovable preview); will add manifest.json only for installability
- Full Open Graph + Twitter Card meta tags

