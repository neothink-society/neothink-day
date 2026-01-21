# Workflow 01: Registration Confirmation

## Overview
Triggered immediately when someone registers for the Day of Enlightenment workshop.

---

## Trigger
- **Type:** Form Submission / Registration
- **Tags Added:** `doe-registered`

---

## Workflow Steps

| Step | Type | Timing | Template | Notes |
|------|------|--------|----------|-------|
| 1 | Email | Immediate | `registration-confirmation.html` | Confirmation + VIP upsell |
| 2 | SMS | Immediate | See SMS below | Short confirmation |
| 3 | Email | +10 min | `welcome-followup.html` | Deeper welcome message |
| 4 | Action | +10 min | Add to Workflow 03 | Pre-Event Sequence |

---

## GHL Setup Instructions

### Step 1: Create the Workflow
1. Go to **Automation > Workflows**
2. Click **Create Workflow**
3. Name: `DOE - Registration Confirmation`
4. Trigger: **Form Submitted** (select your registration form)

### Step 2: Add Tag
1. Add action: **Add Tag**
2. Tag: `doe-registered`

### Step 3: Send Confirmation Email
1. Add action: **Send Email**
2. Subject: `You're registered for the Day of Enlightenment!`
3. Copy HTML from `registration-confirmation.html`
4. Paste into GHL Email Builder (HTML mode)

### Step 4: Send Confirmation SMS
1. Add action: **Send SMS**
2. Copy text from SMS section below

### Step 5: Wait 10 Minutes
1. Add action: **Wait**
2. Wait for: 10 minutes

### Step 6: Send Welcome Follow-up Email
1. Add action: **Send Email**
2. Subject: `You're part of something rare`
3. Copy HTML from `welcome-followup.html`

### Step 7: Add to Pre-Event Sequence
1. Add action: **Add to Workflow**
2. Select: `DOE - Pre-Event Sequence` (Workflow 03)

---

## GHL Template Names

| File | GHL Template Name |
|------|-------------------|
| `registration-confirmation.html` | `DOE 01 Registration Confirmation` |
| `welcome-followup.html` | `DOE 01 Welcome Follow-Up` |

---

## Email Templates

### registration-confirmation.html
**GHL Name:** `DOE 01 Registration Confirmation`

**Subject Line Options:**
- You're registered for the Day of Enlightenment!
- Welcome to the Day of Enlightenment — {{custom_values.doe_event_dates}}
- Your transformation begins {{custom_values.doe_day_1_date_short}}
- Confirmed: Day of Enlightenment Workshop

**Preheader:** You're officially registered! Here's everything you need to know about your Day of Enlightenment workshop. Plus, a special VIP upgrade opportunity.

### welcome-followup.html
**GHL Name:** `DOE 01 Welcome Follow-Up`

**Subject Line Options:**
- You're part of something rare
- This isn't what you think it is
- What happens {{custom_values.doe_event_dates}} changes everything
- You're exactly where you need to be

**Preheader:** This isn't a webinar. It's not passive learning. This is a live transformation experience where your nervous system gets rewired.

---

## SMS Message

```
Neothink Society: You're confirmed for the Day of Enlightenment on {{custom_values.doe_event_dates}}! Check your email for details & your VIP upgrade offer. See you there!
```

**Character Count:** ~155/160 (varies with custom value length)

---

## Tags Reference

| Tag | When Added |
|-----|------------|
| `doe-registered` | On registration (this workflow) |

---

## Testing Checklist

- [ ] Registration form triggers workflow
- [ ] Tag `doe-registered` is added
- [ ] Confirmation email sends immediately
- [ ] SMS sends immediately
- [ ] Welcome email sends after 10 minutes
- [ ] Contact is added to Pre-Event Sequence workflow
- [ ] Custom values display correctly in emails
