# Neothink HTML Pages

This directory contains all HTML pages for Neothink Society workshops and events, organized into **3 main folders**: original pages + two active workshop campaigns.

**Note:** Email templates are in separate `/html-emails/` folder at repository root.

## Folder Structure

```
html-pages/
├── original-pages/          # 13 original pages from previous events (ARCHIVE)
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
├── nov-2025-workshop/       # 8 new pages for Nov 22-23, 2025 event (neothinkday.com)
│   ├── register.html
│   ├── re-register.html
│   ├── thanks-vip-upsell.html
│   ├── welcome-home.html
│   ├── vip-upgrade.html
│   ├── vip-upgrade-top.html
│   ├── vip-upgrade-footer.html
│   ├── vip-unlocked.html
│   ├── README.md
│   └── VIP-UPGRADE-GHL-SETUP-GUIDE.md
│
└── dec-2025-workshop/       # 6 new pages for Dec 6-7, 2025 event (neothinkevent.com)
    ├── register.html
    ├── thanks-vip-upsell.html
    ├── welcome-home.html
    ├── vip-upgrade-top.html
    ├── vip-upgrade-footer.html
    ├── vip-unlocked.html
    ├── README.md
    └── VIP-UPGRADE-GHL-SETUP-GUIDE.md
```

---

## Quick Reference

### Original Pages (13 pages - ARCHIVE)
Contains existing workshop materials, VIP pages, implementation tools, and Stargazer Level 3 content. **For reference only.**

**⚠️ Font Migration Needed:** 12 of 13 pages use old fonts (Crimson Text + Inter) and need updating to new standard (Baskervville + Plus Jakarta Sans + Courier Prime).

📄 See: `original-pages/README.md` for detailed page descriptions

---

### Nov 2025 Workshop Pages (8 pages - ACTIVE)
**Domain:** neothinkday.com
**Event Dates:** November 22-23, 2025
**Status:** Ready for deployment

**✅ Design System:** All pages use correct fonts and follow accessibility standards.

**User Flows:**
- **Flow A:** Direct Mail Purchasers → `register.html` → `thanks-vip-upsell.html` → VIP upgrade → `welcome-home.html`
- **Flow B:** Online Purchasers → `re-register.html` → `thanks-vip-upsell.html` → VIP upgrade → `welcome-home.html`

**Key Pages:**
- Registration flow: `register.html`, `re-register.html`
- Post-registration: `thanks-vip-upsell.html`, `welcome-home.html`
- VIP upgrade: `vip-upgrade.html` (3-section GHL setup), `vip-unlocked.html`

📄 See: `nov-2025-workshop/README.md` for detailed setup instructions

---

### Dec 2025 Workshop Pages (6 pages - ACTIVE)
**Domain:** neothinkevent.com
**Event Dates:** December 6-7, 2025
**Status:** Ready for deployment

**✅ Design System:** All pages use correct fonts and follow accessibility standards.

**User Flow:**
- **Direct Mail Only:** `register.html` → `thanks-vip-upsell.html` → VIP upgrade → `welcome-home.html`
- **Note:** No `re-register.html` or full `vip-upgrade.html` (Dec is new registrations only)

**Key Pages:**
- Registration: `register.html`
- Post-registration: `thanks-vip-upsell.html`, `welcome-home.html`
- VIP upgrade: `vip-upgrade-top.html` + `vip-upgrade-footer.html` (GHL 3-section), `vip-unlocked.html`

📄 See: `dec-2025-workshop/README.md` for detailed setup instructions

---

## Cross-References Between Folders

Both Nov and Dec workshop pages link to original implementation tools:

- `nov-2025-workshop/welcome-home.html` → `../original-pages/golden-life-sheet.html`
- `nov-2025-workshop/welcome-home.html` → `../original-pages/wealth-engine-calculator.html`
- `dec-2025-workshop/welcome-home.html` → `../original-pages/golden-life-sheet.html`
- `dec-2025-workshop/welcome-home.html` → `../original-pages/wealth-engine-calculator.html`

All links use relative paths for portability.

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

### Upcoming Events

**Event 1: November Workshop**
- **Domain:** neothinkday.com
- **Date:** Saturday, November 22 - Sunday, November 23, 2025
- **Time:** 11:00 AM ET / 10:00 AM CT / 9:00 AM MT / 8:00 AM PT (Day 1)
- **Format:** 2-day virtual workshop via Zoom

**Event 2: December Workshop**
- **Domain:** neothinkevent.com
- **Date:** Saturday, December 6 - Sunday, December 7, 2025
- **Time:** 11:00 AM ET / 10:00 AM CT / 9:00 AM MT / 8:00 AM PT (Day 1)
- **Format:** 2-day virtual workshop via Zoom

---

## Setup Requirements for Deployment

### Nov 2025 Workshop (neothinkday.com):

1. **GHL Form IDs:**
   - `register.html` → Replace `YOUR-GHL-FORM-ID-HERE`
   - `re-register.html` → Replace `YOUR-GHL-REREGISTER-FORM-ID-HERE`

2. **Zoom Links:**
   - `welcome-home.html` → Replace `#zoom-link` with actual URL

3. **VIP Upgrade URLs:**
   - `thanks-vip-upsell.html` → Replace `#upgrade` link
   - `welcome-home.html` → Replace `#vip-upgrade` link
   - Configure GHL order form per `VIP-UPGRADE-GHL-SETUP-GUIDE.md`

4. **GHL Form Configuration:**
   - Fields: First Name, Last Name, Email (required), Phone (required), Address
   - Post-submit redirect: `thanks-vip-upsell.html`

### Dec 2025 Workshop (neothinkevent.com):

1. **GHL Form IDs:**
   - `register.html` → Replace `YOUR-GHL-FORM-ID-HERE`

2. **Zoom Links:**
   - `welcome-home.html` → Replace `#zoom-link` with actual URL

3. **VIP Upgrade URLs:**
   - `thanks-vip-upsell.html` → Replace `#upgrade` link
   - `welcome-home.html` → Replace `#vip-upgrade` link
   - Configure GHL order form per `VIP-UPGRADE-GHL-SETUP-GUIDE.md`

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

**November 12, 2025:**
- Updated main README to reflect all 3 workshop folders
- Documented December 2025 workshop pages (neothinkevent.com)
- Added SEO meta tags for both Nov and Dec events
- Clarified email template status (awaiting all original emails before creating new campaigns)

**November 11, 2025:**
- Reorganized HTML pages into separate folders
- Created November 2025 workshop pages (neothinkday.com)
- Created README files for each folder
- Updated internal links to use relative paths
- All cross-references tested and functional

---

**Last Updated:** November 12, 2025
