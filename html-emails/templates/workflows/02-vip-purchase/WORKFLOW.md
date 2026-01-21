# Workflow 02: VIP Purchase

## Overview

This workflow handles everything for VIP ticket purchasers:
1. **Immediate:** Purchase confirmation + Zoom background
2. **Post-Event:** VIP Session reminders (Monday after workshop)

## Trigger

**Entry Condition:** VIP product purchased

**How to Set Up in GHL:**
1. Create workflow with trigger: "Product Purchased" or "Tag Added"
2. Set product: VIP Ticket (or tag: `vip`)

---

## Part A: Purchase Confirmation (Immediate)

| Step | Timing | Template | Subject |
|------|--------|----------|---------|
| 1 | Immediate | vip-confirmation.html | You're VIP — Here's What Happens Next |
| 2 | +10 min | vip-zoom-background.html | Your Exclusive VIP Zoom Background |

### Step 1: VIP Confirmation
- **Wait:** None (immediate)
- **Action:** Send Email
- **Template:** `vip-confirmation.html`
- **Subject:** You're VIP — Here's What Happens Next
- **Also:** Add tag `vip` if not already present

### Step 2: Zoom Background
- **Wait:** 10 minutes
- **Action:** Send Email
- **Template:** `vip-zoom-background.html`
- **Subject:** Your Exclusive VIP Zoom Background

---

## Part B: VIP Session Reminders (Post-Event)

The VIP Session is an exclusive extended session on Monday after the workshop.

**VIP Session Time:** Monday 7pm ET / 4pm PT

### Conditional Entry

After the workshop ends, VIP members continue to the session reminder sequence:

**IF/ELSE Condition:**
- IF Contact has tag `doe-attended`
- THEN continue to VIP Session reminders
- ELSE wait for `doe-attended` tag

### Timing Reference

**Base Time (T=0):** Workshop Day 1 start (Saturday 11am ET / 8am PT)

| Step | Offset from T=0 | Actual Time | Template |
|------|-----------------|-------------|----------|
| 3 | +54h 30m | Mon 5:30pm ET | vip-session-90min.html |
| 4 | +55h | Mon 6:00pm ET | vip-session-1hour.html |
| 5 | +56h | Mon 7:00pm ET | vip-session-live.html |
| 6 | +71h | Tue 10:00am ET | vip-session-recording.html |

### Step 3: 90-Minute Reminder
- **Wait:** Until Monday 5:30pm ET
- **Action:** Send Email
- **Template:** `vip-session-90min.html`
- **Subject:** VIP: Your exclusive session starts in 90 minutes

### Step 4: 1-Hour Reminder
- **Wait:** 30 minutes
- **Action:** Send Email
- **Template:** `vip-session-1hour.html`
- **Subject:** 1 HOUR: Your VIP session starts at 4pm PT
- **Optional:** Send SMS

### Step 5: Session LIVE
- **Wait:** 1 hour
- **Action:** Send Email
- **Template:** `vip-session-live.html`
- **Subject:** LIVE NOW: Your VIP session has started
- **Action:** Send SMS

### Step 6: Recording Available
- **Wait:** Until Tuesday 10:00am ET
- **Action:** Send Email
- **Template:** `vip-session-recording.html`
- **Subject:** Your VIP Session Recording: 3 Hours of Breakthrough

---

## Custom Values Required

```
{{custom_values.doe_day_1_date}}           → Saturday, January 24
{{custom_values.doe_day_1_start_time}}     → 11:00 AM Eastern / 8:00 AM Pacific
{{custom_values.doe_vip_session_date}}     → Monday, January 26
{{custom_values.doe_vip_session_time}}     → 4:00 PM Pacific / 7:00 PM Eastern
{{custom_values.doe_vip_session_zoom}}     → https://neothink.zoom.us/j/xxx
{{custom_values.doe_vip_recording_url}}    → https://neothinkday.com/vip-session-recording
```

---

## Template Files

| File | Purpose | GHL Name |
|------|---------|----------|
| vip-confirmation.html | Purchase confirmation | `DOE 02 VIP Purchase Confirmation` |
| vip-zoom-background.html | Zoom background download | `DOE 02 VIP Zoom Background` |
| vip-session-90min.html | 90-minute reminder | `DOE 02 VIP Session 90m` |
| vip-session-1hour.html | 1-hour reminder | `DOE 02 VIP Session 1h` |
| vip-session-live.html | LIVE notification | `DOE 02 VIP Session Live` |
| vip-session-recording.html | Recording available | `DOE 02 VIP Session Recording` |

---

## SMS Files

| File | Purpose |
|------|---------|
| vip-sms.md | Purchase confirmation SMS |
| vip-session-sms.md | VIP Session reminder SMS |

---

## Audience

This workflow is for:
- ✅ VIP ticket purchasers

Note: Level 3 members also receive VIP benefits and should be included in VIP Session reminders (check for `vip` OR `level-3` tag in Part B).

---

## Testing Checklist

- [ ] VIP confirmation sends immediately on purchase
- [ ] Zoom background sends 10 minutes after confirmation
- [ ] VIP Session reminders only send after `doe-attended` tag
- [ ] Zoom link is clickable in all email clients
- [ ] Custom values render correctly
- [ ] Test on mobile devices
