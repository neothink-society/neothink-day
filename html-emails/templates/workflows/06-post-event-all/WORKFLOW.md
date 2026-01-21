# Workflow 06: Post-Event Value Sequence (All Attendees)

## Overview
Value-delivery sequence sent to ALL attendees after the workshop ends. Reinforces key concepts and provides implementation tools.

---

## Trigger
- **Type:** Tag added: `doe-attended`
- **Audience:** Everyone who attended (regardless of VIP or L3 status)

---

## Workflow Steps

| Step | Offset | Day | Template | Subject Line |
|------|--------|-----|----------|--------------|
| 1 | +10h | Sun 9pm | `sunday-night-anchor.html` | What you discovered today changes everything |
| 2 | +22h | Mon 9am | `monday-golden-life.html` | Your Golden Life Sheet is ready |
| 3 | +46h | Tue 9am | `tuesday-wealth-engine.html` | Calculate your Wealth Engine |
| 4 | +70h | Wed 9am | `wednesday-fne-workbook.html` | Your FNE Workbook awaits |
| 5 | +94h | Thu 9am | `thursday-ambassador.html` | Become an Ambassador |
| 6 | +118h | Fri 9am | `friday-infinite-vector.html` | The Infinite Vector |

*Offsets from event end (approximately 6pm ET Sunday)*

---

## GHL Setup Instructions

### Step 1: Create the Workflow
1. Go to **Automation > Workflows**
2. Click **Create Workflow**
3. Name: `DOE - Post-Event Value Sequence`
4. Trigger: **Tag Added** = `doe-attended`

### Step 2: Send Sunday Night Anchor
1. Add action: **Send Email**
2. Subject: `What you discovered today changes everything`
3. Copy HTML from `sunday-night-anchor.html`

### Step 3: Wait Until Monday 9am
1. Add action: **Wait**
2. Wait until: Next day at 9:00 AM

### Step 4: Continue Sequence
For each remaining day:
1. Send email
2. Wait until next day at 9:00 AM

### Step 5: No Stop Condition
This sequence runs for ALL attendees regardless of L3 purchase.

---

## Email Templates

### sunday-night-anchor.html
**Subject:** What you discovered today changes everything
**Purpose:** Anchor the transformation, celebrate completion

### monday-golden-life.html
**Subject:** Your Golden Life Sheet is ready
**Purpose:** Deliver the Golden Life Sheet tool
**CTA:** Download/access Golden Life Sheet

### tuesday-wealth-engine.html
**Subject:** Calculate your Wealth Engine
**Purpose:** Deliver the Wealth Engine Calculator
**CTA:** Access Wealth Engine Calculator

### wednesday-fne-workbook.html
**Subject:** Your FNE Workbook awaits
**Purpose:** Deliver the Friday Night Essence workbook
**CTA:** Download FNE Workbook

### thursday-ambassador.html
**Subject:** Become an Ambassador
**Purpose:** Introduce Ambassador program
**CTA:** Learn about Ambassador program

### friday-infinite-vector.html
**Subject:** The Infinite Vector
**Purpose:** Final integration, ongoing journey
**CTA:** Continue your transformation

---

## SMS Messages (Optional)

### Monday - Golden Life Sheet
```
Neothink Society: Your Golden Life Sheet is now available! This is where your transformation becomes actionable. Check your email to download.
```

### Tuesday - Wealth Engine
```
Neothink Society: Your Wealth Engine Calculator is ready. Calculate your path to financial freedom. Link in your email!
```

---

## Offset Reference

| Day | Time (ET) | Offset from Event End |
|-----|-----------|----------------------|
| Sunday 9pm | 9:00 PM | +3h (after 6pm end) |
| Monday 9am | 9:00 AM | +15h |
| Tuesday 9am | 9:00 AM | +39h |
| Wednesday 9am | 9:00 AM | +63h |
| Thursday 9am | 9:00 AM | +87h |
| Friday 9am | 9:00 AM | +111h |

---

## GHL Template Names

| File | GHL Template Name |
|------|-------------------|
| `sunday-night-anchor.html` | `DOE 08 Post-Event Sunday Night` |
| `monday-golden-life.html` | `DOE 08 Post-Event Monday Golden Life` |
| `tuesday-wealth-engine.html` | `DOE 08 Post-Event Tuesday Wealth Engine` |
| `wednesday-fne-workbook.html` | `DOE 08 Post-Event Wednesday FNE Workbook` |
| `thursday-ambassador.html` | `DOE 08 Post-Event Thursday Ambassador` |
| `friday-infinite-vector.html` | `DOE 08 Post-Event Friday Infinite Vector` |

---

## Testing Checklist

- [ ] Tag `doe-attended` triggers workflow
- [ ] Sunday night email sends same evening
- [ ] Daily emails send at 9am
- [ ] Resource links work correctly
- [ ] Custom values display correctly
