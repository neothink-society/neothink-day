# Neothink Day Project - Organization & Status

**Repository:** neothink-society/neothink-day
**Last Updated:** November 12, 2025
**Current Branch:** claude/code-session-011cv2jz-011CV2oZH7o9TieCDEQAMWqA

---

## Project Overview

This repository contains HTML pages and email templates for Neothink Society's "Day of Enlightenment" workshop campaigns. The project supports **two separate event campaigns** running simultaneously:

1. **November 22-23, 2025** - neothinkday.com
2. **December 6-7, 2025** - neothinkevent.com

---

## Repository Structure

```
neothink-day/
│
├── 📋 Root Documentation (6 files)
│   ├── BRAND-GUIDELINES.md         # Brand voice, messaging, customer journey
│   ├── COMPONENT-LIBRARY.md        # 13 reusable HTML/CSS components
│   ├── DESIGN-APPROACH.md          # Interface guidelines & accessibility
│   ├── DESIGN-SYSTEM.md            # Typography, colors, spacing standards
│   ├── NOV-2025-EVENT-PLAN.md      # November event planning & requirements
│   └── RESEARCH-FINDINGS.md        # Analysis of 5 key original pages
│
└── 📁 html-pages/
    │
    ├── 📄 README.md                # Main navigation guide (UPDATED ✅)
    ├── 📄 SEO-META-TAGS.md         # SEO metadata for all workshop pages
    │
    ├── 📦 original-pages/          # 13 archived reference pages
    │   ├── README.md
    │   └── [13 .html files from previous events]
    │
    ├── 📦 nov-2025-workshop/       # 8 pages for November event
    │   ├── README.md
    │   ├── VIP-UPGRADE-GHL-SETUP-GUIDE.md
    │   └── [8 .html files for neothinkday.com]
    │
    ├── 📦 dec-2025-workshop/       # 6 pages for December event
    │   ├── README.md
    │   ├── VIP-UPGRADE-GHL-SETUP-GUIDE.md
    │   └── [6 .html files for neothinkevent.com]
    │
    └── 📦 email-templates/
        ├── README.md               # Email campaign overview (UPDATED ✅)
        ├── BRANDING-ISSUES.md      # Email branding inconsistencies
        └── original-templates/
            ├── README.md
            └── [8 .html email files - MIXED Oct 2024 + Nov/Dec 2025]
```

---

## Current Status by Component

### ✅ **COMPLETE - Ready for Use**

#### HTML Pages for Nov 2025 (neothinkday.com)
- **Status:** All 8 pages created and documented
- **Files:** register.html, re-register.html, thanks-vip-upsell.html, welcome-home.html, vip-upgrade.html, vip-upgrade-top.html, vip-upgrade-footer.html, vip-unlocked.html
- **Design:** ✅ Correct fonts (Baskervville + Plus Jakarta Sans)
- **Branding:** ✅ Follows design system
- **Next Steps:** Deploy to neothinkday.com with GHL form IDs and Zoom links

#### HTML Pages for Dec 2025 (neothinkevent.com)
- **Status:** All 6 pages created and documented
- **Files:** register.html, thanks-vip-upsell.html, welcome-home.html, vip-upgrade-top.html, vip-upgrade-footer.html, vip-unlocked.html
- **Design:** ✅ Correct fonts
- **Branding:** ✅ Follows design system
- **Note:** No re-register.html (Dec is new registrations only)
- **Next Steps:** Deploy to neothinkevent.com with GHL form IDs and Zoom links

#### Documentation
- **Status:** All core documentation complete
- **Files:** 6 root-level guides + READMEs in all subdirectories
- **Updated:** html-pages/README.md now reflects all 3 workshop folders ✅
- **Updated:** email-templates/README.md now documents mixed status ✅

---

### ⏳ **IN PROGRESS - Needs Work**

#### Email Templates Organization
- **Current:** 8 email files in `original-templates/` folder
  - 5 from October 2024 event (reference)
  - 3 from Nov/Dec 2025 events (already created)
- **Issue:** Mixed original + new emails in same folder
- **Missing:** Complete email sequences for Nov/Dec campaigns
- **Branding Issues:** Old emails use incorrect fonts (Crimson Text + Inter) and "The Society" branding

**Existing Nov/Dec Emails:**
- ✅ dec2025-registration-confirmation.html
- ✅ nov2025-vip-confirmation.html
- ✅ dec2025-vip-confirmation.html

**Missing Emails (need to create for both Nov & Dec):**
- ❌ Announcement emails
- ❌ Nov registration confirmation
- ❌ Preparation emails (11-day, 4-day)
- ❌ Post-workshop follow-up

**Waiting On:**
- Collection of remaining original email templates
- Then: Create complete email sequences for both campaigns
- Then: Update all emails to follow DESIGN-SYSTEM.md

---

### 📚 **REFERENCE ONLY - Archive**

#### Original HTML Pages
- **Status:** 13 archived pages from previous events
- **Purpose:** Reference for patterns, components, messaging
- **Font Status:** ⚠️ 12 of 13 use old fonts (need migration if reusing)
- **Usage:** Linked from Nov/Dec workshop pages (Golden Life Sheet, Wealth Engine Calculator)

---

## Two Active Campaigns

### Campaign 1: November 22-23, 2025

**Domain:** neothinkday.com
**Event Dates:** Saturday Nov 22 - Sunday Nov 23, 2025
**Time:** 11:00 AM ET / 10:00 AM CT / 9:00 AM MT / 8:00 AM PT

**HTML Pages:** ✅ 8 pages ready
- Registration flow: register.html, re-register.html
- Post-reg: thanks-vip-upsell.html, welcome-home.html
- VIP: vip-upgrade.html (+ top/footer components), vip-unlocked.html

**Email Campaign:** ⏳ Partial (only VIP confirmation exists)
- ✅ VIP confirmation
- ❌ Registration confirmation
- ❌ Announcement, preparation, follow-up

**User Flows:**
- Direct Mail Purchasers → register → thanks+VIP → welcome
- Online Re-purchasers → re-register → thanks+VIP → welcome

---

### Campaign 2: December 6-7, 2025

**Domain:** neothinkevent.com
**Event Dates:** Saturday Dec 6 - Sunday Dec 7, 2025
**Time:** 11:00 AM ET / 10:00 AM CT / 9:00 AM MT / 8:00 AM PT

**HTML Pages:** ✅ 6 pages ready
- Registration: register.html (no re-register needed)
- Post-reg: thanks-vip-upsell.html, welcome-home.html
- VIP: vip-upgrade-top.html, vip-upgrade-footer.html, vip-unlocked.html

**Email Campaign:** ⏳ Partial (registration + VIP confirmation exist)
- ✅ Registration confirmation
- ✅ VIP confirmation
- ❌ Announcement, preparation, follow-up

**User Flow:**
- Direct Mail Only → register → thanks+VIP → welcome

---

## Key Differences Between Campaigns

| Feature | November | December |
|---------|----------|----------|
| **Domain** | neothinkday.com | neothinkevent.com |
| **Dates** | Nov 22-23, 2025 | Dec 6-7, 2025 |
| **HTML Pages** | 8 pages | 6 pages |
| **Re-register page** | ✅ Yes | ❌ No (new only) |
| **VIP setup** | Full page + components | Components only |
| **Reg confirmation email** | ❌ Missing | ✅ Exists |
| **Target audience** | Direct mail + online | Direct mail only |

---

## Technical Standards

### Design System
- **Fonts:** Baskervville (serif) + Plus Jakarta Sans (sans-serif) + Courier Prime (monospace)
- **Colors:** Gold #FFD700, Black #0a0a0a, Grayscale
- **Accessibility:** WCAG AA compliant, keyboard nav, ARIA labels, 44px touch targets
- **Responsive:** Mobile-first, fluid typography with clamp()

### Branding
- **Brand Name:** "Neothink Society" (never "The Society")
- **Support Email:** support@neothink.com
- **Tagline:** "Prosper Happily Forever"
- **Voice:** Elite, transformational, direct, empowering

### Pricing
- **VIP Upgrade:** $297 (no discounts)
- **Level 3 Stargazer:** $1,997 down + $3,003 after $50K earnings (honor system)
- **Ambassador Commission:** $250 per Level 2 referral (50%)

---

## Deployment Checklist

### Before Going Live (Both Campaigns)

**Nov 2025 Workshop:**
- [ ] Replace GHL form IDs in register.html and re-register.html
- [ ] Add Zoom meeting links to welcome-home.html
- [ ] Configure VIP upgrade URLs (thanks page, welcome page)
- [ ] Set up GHL order form per VIP-UPGRADE-GHL-SETUP-GUIDE.md
- [ ] Test all forms and redirects
- [ ] Deploy to neothinkday.com

**Dec 2025 Workshop:**
- [ ] Replace GHL form ID in register.html
- [ ] Add Zoom meeting links to welcome-home.html
- [ ] Configure VIP upgrade URLs
- [ ] Set up GHL order form per VIP-UPGRADE-GHL-SETUP-GUIDE.md
- [ ] Test all forms and redirects
- [ ] Deploy to neothinkevent.com

---

## Priority Next Steps

### Immediate (This Week)
1. ✅ Update main documentation (DONE)
2. ⏳ **Collect remaining original email templates**
3. ⏳ Review/update existing Nov/Dec workshop pages if needed

### Short Term (Next 2 Weeks)
4. ⏳ Create complete email sequences for Nov campaign
5. ⏳ Create complete email sequences for Dec campaign
6. ⏳ Update all emails to follow design system
7. ⏳ Test email campaigns across clients

### Before Launch
8. ⏳ Deploy HTML pages with actual GHL/Zoom links
9. ⏳ Set up email automation workflows
10. ⏳ Final QA across all pages and emails

---

## Questions & Decisions Needed

1. **Email Templates:** Still waiting on all original email templates before creating new campaigns
2. **Page Updates:** Any refinements needed to existing Nov/Dec workshop pages?
3. **Email Sequence:** What's the complete email cadence for each campaign?
   - Pre-event: Announcement → Reminder → Preparation (11d) → Preparation (4d)?
   - Post-event: Follow-up → Level 3 offer → Ambassador program?
4. **Timeline:** Launch dates for Nov and Dec campaigns?

---

## File Counts

- **Total HTML files:** 34
  - Original pages: 13
  - Nov 2025 workshop: 8
  - Dec 2025 workshop: 6
  - Email templates: 8 (in separate folder)

- **Total Documentation:** 16 files
  - Root level: 6
  - html-pages/: 2
  - Subfolder READMEs: 5
  - Email docs: 2
  - VIP setup guides: 2
  - **New:** This project status doc

---

## Contact & Support

- **Repository:** neothink-society/neothink-day
- **GitHub:** Authenticated via PAT
- **Support Email:** support@neothink.com
- **Documentation Issues:** Create GitHub issue or update READMEs directly

---

**Status:** Project well-organized and documented. HTML pages ready for deployment. Email campaigns awaiting original template collection before creating new sequences.
