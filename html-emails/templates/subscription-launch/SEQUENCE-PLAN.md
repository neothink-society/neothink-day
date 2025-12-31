# Subscription Launch Email Sequence Plan

## Campaign Overview

**Product:** Online Community Subscription (name TBD - keep mysterious until launch)
**Audience:** Level 2 Buyers + OG Members
**Launch Date:** Saturday, January 11, 2026
**Offer Expiration:** TBD

---

## Phase 1: Pre-Launch (Jan 1–10)

Build anticipation through mysterious teasers. Don't reveal product name or details.

| # | Date | Day | Email | SMS | Status |
|---|------|-----|-------|-----|--------|
| 1 | Jan 1 | Thu | teaser-01-jan1.html | teaser-01-jan1-sms.md | ✅ Created |
| 2 | Jan 6 | Mon | teaser-02-jan6.html | teaser-02-jan6-sms.md | ⏳ Pending |
| 3 | Jan 8 | Wed | teaser-03-jan8.html | teaser-03-jan8-sms.md | ⏳ Pending |
| 4 | Jan 10 | Fri | teaser-04-jan10.html | teaser-04-jan10-sms.md | ⏳ Pending |

### Pre-Launch Content Strategy

| Email | Theme | Key Message |
|-------|-------|-------------|
| Jan 1 | New Year | Something big is coming. More details next week. |
| Jan 6 | What's Coming | Hint at transformation/community aspect |
| Jan 8 | Why Now | Build urgency around timing |
| Jan 10 | Tomorrow | Final teaser, "reveal coming tomorrow" |

---

## Phase 2: Launch Week (Jan 11–17)

Daily emails during launch week. Reveal product, explain value, create urgency.

| # | Date | Day | Email | SMS | Focus |
|---|------|-----|-------|-----|-------|
| 5 | Jan 11 | Sat | launch-01-reveal.html | launch-01-sms.md | Product Reveal |
| 6 | Jan 12 | Sun | launch-02-why.html | launch-02-sms.md | Why This Exists |
| 7 | Jan 13 | Mon | launch-03-features.html | launch-03-sms.md | Key Features |
| 8 | Jan 14 | Tue | launch-04-testimonial.html | launch-04-sms.md | Social Proof |
| 9 | Jan 15 | Wed | launch-05-founder.html | launch-05-sms.md | Founder Message |
| 10 | Jan 16 | Thu | launch-06-faq.html | launch-06-sms.md | FAQ / Objections |
| 11 | Jan 17 | Sat | launch-07-closing.html | launch-07-sms.md | Closing Arguments |

---

## Phase 3: Post-Launch (Jan 18+)

Daily emails until offer expires. Focus on urgency and final call.

| # | Date | Day | Email | SMS | Focus |
|---|------|-----|-------|-----|-------|
| 12 | Jan 18 | Sun | post-01-reminder.html | post-01-sms.md | Still Available |
| 13 | Jan 19 | Mon | post-02-stories.html | post-02-sms.md | Member Stories |
| 14 | Jan 20 | Tue | post-03-bonus.html | post-03-sms.md | Bonus Reminder |
| ... | ... | ... | ... | ... | ... |
| N | TBD | TBD | post-final-close.html | post-final-sms.md | Final Hours |

*Continue daily until offer expiration date (TBD)*

---

## Folder Structure

```
subscription-launch/
├── SEQUENCE-PLAN.md (this file)
│
├── 01-pre-launch/
│   ├── teaser-01-jan1.html ✅
│   ├── teaser-01-jan1-sms.md ✅
│   ├── teaser-02-jan6.html
│   ├── teaser-02-jan6-sms.md
│   ├── teaser-03-jan8.html
│   ├── teaser-03-jan8-sms.md
│   ├── teaser-04-jan10.html
│   └── teaser-04-jan10-sms.md
│
├── 02-launch-week/
│   ├── launch-01-reveal.html
│   ├── launch-01-sms.md
│   ├── launch-02-why.html
│   ├── launch-02-sms.md
│   ├── launch-03-features.html
│   ├── launch-03-sms.md
│   ├── launch-04-testimonial.html
│   ├── launch-04-sms.md
│   ├── launch-05-founder.html
│   ├── launch-05-sms.md
│   ├── launch-06-faq.html
│   ├── launch-06-sms.md
│   ├── launch-07-closing.html
│   └── launch-07-sms.md
│
└── 03-post-launch/
    ├── post-01-reminder.html
    ├── post-01-sms.md
    ├── post-02-stories.html
    ├── post-02-sms.md
    ├── post-03-bonus.html
    ├── post-03-sms.md
    └── ... (continue until offer expires)
```

---

## GHL Implementation

### Audience Segmentation
- **Tag Required:** `level-2-buyer` OR `og-member`
- **Exclude:** New members who haven't purchased

### Workflow Names
- `Subscription Launch - Pre-Launch Sequence`
- `Subscription Launch - Launch Week Sequence`
- `Subscription Launch - Post-Launch Sequence`

### Send Times
- **Emails:** 10:00 AM Eastern / 7:00 AM Pacific
- **SMS:** 10:30 AM Eastern / 7:30 AM Pacific (30 min after email)

---

## Design Guidelines

### Email Style
- Match existing DoE email template style
- Dark theme (#000000 background)
- Gold accents (#FFD700)
- Baskervville headings, Plus Jakarta Sans body
- 600px max width
- Mobile responsive

### SMS Style
- Start with "Neothink Society:"
- No trigger words (see rules/sms-messages.md)
- Full URLs only
- Under 160 chars when possible

---

## Content Requirements (TBD)

Before creating remaining emails, need:

1. **Product Name** - Can reveal after Jan 10
2. **Pricing** - For launch emails
3. **Features List** - For features email
4. **Testimonials** - For social proof email
5. **FAQ Content** - Common objections to address
6. **Founder Message** - Personal note from Wallace
7. **Offer Expiration Date** - For urgency messaging
8. **Bonuses** - Any launch bonuses to highlight

---

**Version:** 1.0
**Created:** December 31, 2025
**Last Updated:** December 31, 2025
