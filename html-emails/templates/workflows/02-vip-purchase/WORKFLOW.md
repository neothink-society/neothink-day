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

**Base Time (T=0):** VIP Session start (Monday 4pm PT / 7pm ET)

| Step | Offset | GHL Wait | Time (PT) | Time (ET) | Template | SMS |
|------|--------|----------|-----------|-----------|----------|-----|
| 3 | -7h | — | Mon 9am | Mon 12pm | vip-session-morning.html | Morning Reminder |
| 4 | -1h 30m | — | Mon 2:30pm | Mon 5:30pm | vip-session-90min.html | 90-Minute Reminder |
| 5 | -1h | — | Mon 3pm | Mon 6pm | vip-session-1hour.html | 1-Hour Reminder |
| 6 | -30m | — | Mon 3:30pm | Mon 6:30pm | — | 30-Minute Reminder |
| 7 | T=0 | — | Mon 4pm | Mon 7pm | vip-session-live.html | Session LIVE |
| 8 | +15m | 15 min | Mon 4:15pm | Mon 7:15pm | — | Late Joiner (optional) |
| 9 | +15h | 15 hours | Tue 7am | Tue 10am | vip-session-recording.html | Recording (optional) |

**Note:** Steps 3-7 use GHL "Date/Time" scheduling to specific times. Steps 8-9 use GHL "Wait" from previous step.

### Step 3: Morning Reminder
- **Schedule:** Monday 9am PT / 12pm ET (-7h from T=0)
- **Action:** Send Email
- **Template:** `vip-session-morning.html`
- **Subject:** Your VIP Session is Tonight
- **Action:** Send SMS
- **Message:** See `vip-session-sms.md` → Morning Reminder

### Step 4: 90-Minute Reminder
- **Schedule:** Monday 2:30pm PT / 5:30pm ET (-1h 30m from T=0)
- **Action:** Send Email
- **Template:** `vip-session-90min.html`
- **Subject:** VIP: Your exclusive session starts in 90 minutes
- **Action:** Send SMS
- **Message:** See `vip-session-sms.md` → 90-Minute Reminder

### Step 5: 1-Hour Reminder
- **Schedule:** Monday 3pm PT / 6pm ET (-1h from T=0)
- **Action:** Send Email
- **Template:** `vip-session-1hour.html`
- **Subject:** 1 HOUR: Your VIP session starts at 4pm PT
- **Action:** Send SMS
- **Message:** See `vip-session-sms.md` → 1-Hour Reminder

### Step 6: 30-Minute Reminder (SMS Only)
- **Schedule:** Monday 3:30pm PT / 6:30pm ET (-30m from T=0)
- **Action:** Send SMS
- **Message:** See `vip-session-sms.md` → 30-Minute Reminder

### Step 7: Session LIVE
- **Schedule:** Monday 4pm PT / 7pm ET (T=0)
- **Action:** Send Email
- **Template:** `vip-session-live.html`
- **Subject:** LIVE NOW: Your VIP session has started
- **Action:** Send SMS
- **Message:** See `vip-session-sms.md` → Session LIVE

### Step 8: Late Joiner (Optional)
- **Wait:** 15 minutes (+15m from T=0)
- **Action:** Send SMS (if not joined)
- **Message:** See `vip-session-sms.md` → Late Joiner

### Step 9: Recording Available
- **Wait:** 15 hours (+15h from T=0) → Tue 7am PT / 10am ET
- **Action:** Send Email
- **Template:** `vip-session-recording.html`
- **Subject:** Your VIP Session Recording: 3 Hours of Breakthrough
- **Optional:** Send SMS
- **Message:** See `vip-session-sms.md` → Recording Available

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
| vip-session-morning.html | Morning reminder (day of VIP session) | `DOE 02 VIP Session Morning` |
| vip-session-90min.html | 90-minute reminder | `DOE 02 VIP Session 90m` |
| vip-session-1hour.html | 1-hour reminder | `DOE 02 VIP Session 1h` |
| vip-session-live.html | LIVE notification | `DOE 02 VIP Session Live` |
| vip-session-recording.html | Recording available | `DOE 02 VIP Session Recording` |

---

## SMS Files

| File | Purpose |
|------|---------|
| vip-sms.md | Purchase confirmation SMS (2 messages) |
| vip-session-sms.md | VIP Session reminders (7 messages) |

> **See `vip-session-sms.md` for complete VIP Session SMS sequence with character counts.**

---

## Audience

This workflow is for:
- ✓ VIP ticket purchasers

Note: Level 3 members also receive VIP benefits and should be included in VIP Session reminders (check for `vip` OR `level-3` tag in Part B).

---

## Testing Checklist

- [ ] VIP confirmation sends immediately on purchase
- [ ] Zoom background sends 10 minutes after confirmation
- [ ] VIP Session reminders only send after `doe-attended` tag
- [ ] Zoom link is clickable in all email clients
- [ ] Custom values render correctly
- [ ] Test on mobile devices
