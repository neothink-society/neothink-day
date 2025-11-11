# Original Neothink Pages

This folder contains the 13 original HTML pages from previous workshops and events.

## Pages in This Folder

### Workshop & Event Pages

1. **day-of-enlightenment.html**
   - Main workshop landing/sales page
   - Features countdown timer, testimonials, and registration

2. **day-of-enlightenment-pre-event.html**
   - Pre-event information and preparation page
   - Accessed before workshop begins

3. **day-of-enlightenment-recordings.html**
   - Workshop recordings and resources page
   - Day 1: Live Experience Only (no recording)
   - Session 1: Day 2 Bonus with Vimeo embed
   - Session 2: VIP Exclusive (locked)

### VIP Pages

4. **vip-upgrade.html**
   - VIP upgrade sales page
   - Features comparison grid (Standard vs VIP)
   - $297 pricing
   - 6 VIP benefits listed

5. **vip-confirmation.html**
   - VIP purchase confirmation page
   - Success animation
   - "What Happens Next" 4-step pattern
   - Post-purchase messaging

6. **vip-session-recording.html**
   - VIP exclusive recording page
   - 2h 7m VIP session (Vimeo ID: 1128720924)
   - 14 detailed timestamps
   - 6 VIP success stories
   - Level 3 upgrade offer with $300 VIP discount

### Implementation Tools

7. **golden-life-sheet.html**
   - Implementation tool and template download
   - Modern accessible design with container queries
   - Safe areas for mobile (env())
   - 6 category breakdown:
     - Who I Am
     - Friday Night Essence (FNE)
     - My Dreams
     - Current Focuses
     - Celebrations (Value Reflection)
     - Health & Longevity

8. **wealth-engine-calculator.html**
   - Two-step calculator (expenses → targets → timeline)
   - Email results via Google Apps Script
   - Investment platform cards (Robinhood, Coinbase)
   - Timeline display pattern
   - 12% annual return formula

9. **wealth-engine-bonus-session.html**
   - Bonus session content related to wealth building
   - Additional workshop materials

### Stargazer Level 3 Pages

10. **stargazer-level-3.html**
    - Level 3 sales page with honor system offer
    - Countdown timer to October 24, 2025 deadline
    - $1,997 upfront + $3,003 after earning $50K+
    - 3-day event (Jan 10-12, 2026)
    - 8 FAQs

11. **stargazer-level-3-consultation.html**
    - Consultation/booking page for Level 3
    - Calendar booking modal
    - "Talk to a mentor" positioning
    - GoHighLevel calendar embed

12. **level-three-welcome-party.html**
    - Level 3 welcome recording for Stargazers
    - 1:47:51 recording with Wallace Hamilton
    - 6 core frameworks: Immortal Mentality, Matrix-Breaking, DTC Method, Value Creation, Wealth Mechanics, Self-Leadership
    - ✅ **Uses correct fonts:** Baskervville + Plus Jakarta Sans + Courier Prime

### Hub & Completion Pages

13. **workshop-complete-hub.html**
    - Post-workshop completion hub
    - Golden Life Sheet 6 categories
    - Stats grid pattern
    - Testimonials format
    - Resource links
    - Ambassador program details (50% commission = $250 per Level 2 invite)

---

## Font Standardization Status

⚠️ **Note:** 12 of these 13 pages use the old font stack (Crimson Text + Inter) and need to be updated to the new standard fonts (Baskervville + Plus Jakarta Sans + Courier Prime).

**Exception:** Only `level-three-welcome-party.html` uses the correct fonts.

See `/DESIGN-SYSTEM.md` for the font migration plan.

---

## Pricing Information

- **VIP Upgrade:** $297 (no discounts)
- **Level 3 (Stargazer):** $1,997 down + $3,003 after earning $50K+ (honor system)
- **Ambassador Commission:** 50% = $250 per Level 2 invite

---

## Key Contacts

- **Support:** support@neothink.com
- Consistent across all pages

---

## Technical Patterns Found

### Reusable Components (see COMPONENT-LIBRARY.md)
- Success animations (VIP confirmation)
- Comparison grids (Standard vs VIP)
- Numbered step cards ("What Happens Next")
- Stats grids
- Quote blocks
- Countdown timers
- GHL form integration
- Email capture sections
- Golden Life Sheet 6-category grid
- Wealth calculator two-step process

### Animation Patterns
- fadeInUp
- scaleIn
- pulse
- drawCheck (SVG checkmark animation)
- Scroll reveal with Intersection Observer

### Form Integration
- GoHighLevel (GHL) form injection
- Google Apps Script for email results
- Calendar booking embeds

---

## Links From New Workshop Pages

The following new workshop pages link to pages in this folder:

- **../nov-2025-workshop/welcome-home.html** links to:
  - `golden-life-sheet.html`
  - `wealth-engine-calculator.html`

---

## Related Documentation

- `/RESEARCH-FINDINGS.md` - Deep-dive analysis of 5 key pages (vip-upgrade, vip-confirmation, workshop-complete-hub, golden-life-sheet, wealth-engine-calculator)
- `/DESIGN-SYSTEM.md` - Font standardization plan for these pages
- `/COMPONENT-LIBRARY.md` - Extracted reusable components

---

**Last Updated:** November 11, 2025
