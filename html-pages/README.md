# Neothink HTML Pages

This directory contains all HTML pages for Neothink Society workshops and events, organized into two main folders.

## Folder Structure

```
html-pages/
├── original-pages/          # 13 original pages from previous events
│   ├── day-of-enlightenment.html
│   ├── day-of-enlightenment-pre-event.html
│   ├── day-of-enlightenment-recordings.html
│   ├── golden-life-sheet.html
│   ├── level-three-welcome-party.html
│   ├── stargazer-level-3-consultation.html
│   ├── stargazer-level-3.html
│   ├── vip-confirmation.html
│   ├── vip-session-recording.html
│   ├── vip-upgrade.html
│   ├── wealth-engine-bonus-session.html
│   ├── wealth-engine-calculator.html
│   ├── workshop-complete-hub.html
│   └── README.md
│
└── nov-2025-workshop/       # 4 new pages for Nov 22-23, 2025 event
    ├── register.html
    ├── thanks-vip-upsell.html
    ├── welcome-home.html
    ├── re-register.html
    └── README.md
```

---

## Quick Reference

### Original Pages (13 pages)
Contains existing workshop materials, VIP pages, implementation tools, and Stargazer Level 3 content.

**⚠️ Font Migration Needed:** 12 of 13 pages use old fonts (Crimson Text + Inter) and need updating to new standard (Baskervville + Plus Jakarta Sans + Courier Prime).

📄 See: `original-pages/README.md` for detailed page descriptions

---

### Nov 2025 Workshop Pages (4 pages)
New pages created for the November 22-23, 2025 Day of Enlightenment workshop.

**✅ Design System:** All pages use correct fonts and follow accessibility standards.

**User Flows:**
- **Flow A:** Direct Mail Purchasers → `register.html` → `thanks-vip-upsell.html` → `welcome-home.html`
- **Flow B:** Online Purchasers → `re-register.html` → `thanks-vip-upsell.html` → `welcome-home.html`

📄 See: `nov-2025-workshop/README.md` for detailed page descriptions and setup instructions

---

## Cross-References Between Folders

The new workshop pages link to some original pages:

- `nov-2025-workshop/welcome-home.html` → `original-pages/golden-life-sheet.html`
- `nov-2025-workshop/welcome-home.html` → `original-pages/wealth-engine-calculator.html`

All links use relative paths: `../original-pages/[filename].html`

---

## Design System

### Current Standard (Nov 2025 Workshop Pages)
- **Fonts:** Baskervville (serif) + Plus Jakarta Sans (sans-serif) + Courier Prime (monospace)
- **Colors:** Gold #FFD700 + Black #0a0a0a + Grays
- **Accessibility:** WCAG AA, keyboard navigation, ARIA labels, 44px touch targets
- **Responsive:** Mobile-first with fluid typography

### Legacy (Original Pages - Needs Migration)
- **Fonts:** Crimson Text (serif) + Inter (sans-serif)
- **Status:** 12 pages need font updates (see DESIGN-SYSTEM.md)

---

## Key Information

### Pricing
- **VIP Upgrade:** $297 (no discounts)
- **Level 3 (Stargazer):** $1,997 down + $3,003 after earning $50K+ (honor system)

### Support Contact
- **Email:** support@neothink.com (consistent across all pages)

### Upcoming Event
- **Date:** Saturday, November 22 - Sunday, November 23, 2025
- **Time:** 9:00 AM EST start (Day 1)
- **Format:** 2-day virtual workshop via Zoom

---

## Setup Requirements for New Pages

Before deploying Nov 2025 workshop pages:

1. **GHL Form IDs:**
   - `register.html` → Replace `YOUR-GHL-FORM-ID-HERE`
   - `re-register.html` → Replace `YOUR-GHL-REREGISTER-FORM-ID-HERE`

2. **Zoom Links:**
   - `welcome-home.html` → Replace `#zoom-link` with actual URL

3. **VIP Upgrade URLs:**
   - `thanks-vip-upsell.html` → Replace `#upgrade` link
   - `welcome-home.html` → Replace `#vip-upgrade` link

4. **GHL Form Configuration:**
   - Fields: First Name, Last Name, Email (required), Phone (required), Address
   - Post-submit redirect: `thanks-vip-upsell.html`

---

## Related Documentation

In project root directory:

- `/COMPONENT-LIBRARY.md` - 13 reusable HTML/CSS components
- `/RESEARCH-FINDINGS.md` - Deep-dive analysis of 5 key original pages
- `/DESIGN-SYSTEM.md` - Font standardization plan for original pages
- `/NOV-2025-EVENT-PLAN.md` - Event planning and technical requirements
- `/DESIGN-APPROACH.md` - Interface guidelines and accessibility standards

---

## File Organization History

**November 11, 2025:**
- Reorganized HTML pages into two folders for clarity
- Created README files for each folder
- Updated internal links to use relative paths
- All cross-references tested and functional

---

**Last Updated:** November 11, 2025
