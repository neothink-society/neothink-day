# November 2025 Day of Enlightenment Workshop Pages

**Event Date:** Saturday, November 22 - Sunday, November 23, 2025

## Pages in This Folder

This folder contains the 4 new pages created specifically for the November 2025 Day of Enlightenment workshop event.

### 1. register.html
**Purpose:** Registration page for direct mail purchasers
**Audience:** Customers who purchased the workshop via direct mail
**Features:**
- GHL form integration (email, phone, address capture)
- Countdown timer to Nov 22, 2025 at 9:00 AM EST
- "What to Expect After Registration" information cards
- Post-submit redirect to `thanks-vip-upsell.html`

**Required Setup:**
- Replace `YOUR-GHL-FORM-ID-HERE` with actual GHL form ID
- Configure GHL form fields: First Name, Last Name, Email (required), Phone (required), Address
- Set GHL post-submit redirect to: `thanks-vip-upsell.html`

---

### 2. thanks-vip-upsell.html
**Purpose:** Thank you page with VIP upgrade offer
**Audience:** Users who just completed registration
**Features:**
- Animated success checkmark
- "What Happens Next" 4-step cards
- Standard vs VIP comparison grid
- 6 VIP benefits at $297 pricing
- Links to `welcome-home.html` for standard attendees

**Required Setup:**
- Replace `#upgrade` link with actual VIP purchase/upgrade page URL

---

### 3. welcome-home.html
**Purpose:** Workshop hub - central resource page
**Audience:** All registered workshop attendees
**Features:**
- Quick access cards (Zoom, Golden Life Sheet, VIP upgrade, etc.)
- Countdown timer to workshop
- Links to original pages (Golden Life Sheet, Wealth Engine Calculator)
- Workshop preparation guidelines
- Status badge showing "Registered"

**Required Setup:**
- Replace `#zoom-link` with actual Zoom meeting URL
- Replace `#vip-upgrade` with actual VIP purchase page URL
- Replace `#recordings` with recordings page URL (after workshop)

---

### 4. re-register.html
**Purpose:** Re-registration page for previous online purchasers
**Audience:** Customers who previously purchased the workshop online
**Features:**
- "Welcome Back" messaging
- Alert box explaining why re-registration is needed
- GHL form integration (same as register.html)
- "What's Different This Time" section highlighting 2-day format
- Post-submit redirect to `thanks-vip-upsell.html`

**Required Setup:**
- Replace `YOUR-GHL-REREGISTER-FORM-ID-HERE` with actual GHL form ID
- Configure GHL form (may pre-populate email from previous purchase)
- Set GHL post-submit redirect to: `thanks-vip-upsell.html`

---

## Design System

All pages follow the standardized Neothink design system:

- **Fonts:**
  - Baskervville (serif) - Headlines and emphasis
  - Plus Jakarta Sans (sans-serif) - Body text
  - Courier Prime (monospace) - Labels and badges

- **Colors:**
  - Gold: #FFD700 (primary accent)
  - Black: #0a0a0a (background)
  - Grays: #1a1a1a to #e5e5e5 (surfaces and text)
  - White: #ffffff (text on dark backgrounds)

- **Accessibility:**
  - WCAG AA compliant
  - Keyboard navigation support
  - ARIA labels on all interactive elements
  - Focus states visible
  - 44px minimum touch targets
  - Reduced motion support

- **Responsive:**
  - Mobile-first approach
  - Breakpoints at 768px and 480px
  - Fluid typography using clamp()

---

## User Flows

### Flow A: Direct Mail Purchasers
1. **register.html** → User registers with email, phone, address
2. **thanks-vip-upsell.html** → User sees VIP upgrade offer
3. **welcome-home.html** → User accesses workshop hub and materials

### Flow B: Online Purchasers (Re-registration)
1. **re-register.html** → User re-registers/confirms attendance
2. **thanks-vip-upsell.html** → User sees VIP upgrade offer
3. **welcome-home.html** → User accesses workshop hub and materials

---

## Cross-References to Original Pages

The following links connect to pages in `../original-pages/`:

- **welcome-home.html** links to:
  - `../original-pages/golden-life-sheet.html`
  - `../original-pages/wealth-engine-calculator.html`

---

## VIP Benefits & Pricing

**VIP Price:** $297 (one-time upgrade)

**VIP Benefits:**
1. VIP Status Recognition (exclusive Zoom background)
2. Priority Workshop Assistance (Day 1)
3. GUARANTEED Personal Mentorship
4. Private Elite Session (Day 2)
5. Implementation Accelerator
6. Surprise Bonus Gift(s)

---

## Support Contact

All pages include support link: **support@neothink.com**

---

## Files Created

Created: November 11, 2025
For: November 22-23, 2025 Day of Enlightenment Workshop

---

## Related Documentation

- `/COMPONENT-LIBRARY.md` - Reusable HTML/CSS components
- `/RESEARCH-FINDINGS.md` - Analysis of existing pages and patterns
- `/DESIGN-SYSTEM.md` - Design standards and font migration plan
- `/NOV-2025-EVENT-PLAN.md` - Event planning and technical requirements
- `/DESIGN-APPROACH.md` - Interface guidelines and accessibility standards
