# GHL Email Template Naming Guide

**GHL Folder:** `DOE Event (with custom values)`
**Folder ID:** `6970eca22bd95529d2b9fc6c`

## Naming Convention

```
[Phase] - [Description]
```

**Phase Prefixes** (for sorting):
| Prefix | Phase | Count |
|--------|-------|-------|
| `01 Reg` | Registration | 2 |
| `02 VIP` | VIP Purchase | 2 |
| `03 Pre` | Pre-Event Countdown | 16 |
| `04 D1 Reminder` | Day 1 Reminders (before start) | 8 |
| `05 D1 Live` | Day 1 Live Broadcasts | 7 |
| `06 D2 Reminder` | Day 2 Reminders (before start) | 8 |
| `07 D2 Live` | Day 2 Live Broadcasts | 7 |
| `08 Post` | Post-Event (All Attendees) | 6 |
| `09 VIP Session` | VIP Session (Monday) | 4 |
| `10 L3` | Level 3 Purchase | 8 |
| `11 L3 Close` | L3 Offer Closing Sequence | 6 |

**Total Templates:** 74

---

## Complete Template List

### 01 - Registration (2 templates)

| File | GHL Template Name |
|------|-------------------|
| `registration-confirmation.html` | **01 Reg - Confirmation** |
| `welcome-followup.html` | **01 Reg - Welcome Followup** |

---

### 02 - VIP Purchase (2 templates)

| File | GHL Template Name |
|------|-------------------|
| `vip-confirmation.html` | **02 VIP - Confirmation** |
| `vip-zoom-background.html` | **02 VIP - Zoom Background** |

---

### 03 - Pre-Event Countdown (16 templates)

| File | GHL Template Name | Days Out |
|------|-------------------|----------|
| `countdown-30days.html` | **03 Pre - 30 Days** | -30 |
| `countdown-25days.html` | **03 Pre - 25 Days** | -25 |
| `countdown-20days.html` | **03 Pre - 20 Days** | -20 |
| `countdown-14days.html` | **03 Pre - 14 Days** | -14 |
| `countdown-10days.html` | **03 Pre - 10 Days** | -10 |
| `countdown-9days.html` | **03 Pre - 9 Days** | -9 |
| `countdown-7days.html` | **03 Pre - 7 Days** | -7 |
| `countdown-5days.html` | **03 Pre - 5 Days** | -5 |
| `countdown-4days.html` | **03 Pre - 4 Days** | -4 |
| `countdown-3days.html` | **03 Pre - 3 Days** | -3 |
| `countdown-3days-vip.html` | **03 Pre - 3 Days (VIP)** | -3 |
| `countdown-2days.html` | **03 Pre - 2 Days** | -2 |
| `countdown-1day-morning.html` | **03 Pre - 1 Day Morning** | -1 |
| `countdown-1day-evening.html` | **03 Pre - 1 Day Evening** | -1 |

---

### 04 - Day 1 Reminders (8 templates)

*Sent BEFORE Day 1 starts and to late joiners*

| File | GHL Template Name | Timing |
|------|-------------------|--------|
| `day1-4hours.html` | **04 D1 Reminder - 4 Hours** | -4h |
| `day1-2hours.html` | **04 D1 Reminder - 2 Hours** | -2h |
| `day1-1hour.html` | **04 D1 Reminder - 1 Hour** | -1h |
| `day1-30min.html` | **04 D1 Reminder - 30 Min** | -30m |
| `day1-15min.html` | **04 D1 Reminder - 15 Min** | -15m |
| `day1-live.html` | **04 D1 Reminder - We're Live** | T=0 |
| `day1-late-15min.html` | **04 D1 Reminder - Late Joiner 15 Min** | +15m |
| `day1-late-30min.html` | **04 D1 Reminder - Late Joiner 30 Min** | +30m |

---

### 05 - Day 1 Live Broadcasts (7 templates)

*Sent DURING Day 1 workshop*

| File | GHL Template Name | Content |
|------|-------------------|---------|
| `day1-opening.html` | **05 D1 Live - Opening** | Workshop begins |
| `day1-wh-live-now.html` | **05 D1 Live - Wallace Hamilton Now** | WH segment starting |
| `day1-wh-in-session.html` | **05 D1 Live - Wallace Hamilton Session** | WH in progress |
| `day1-wealth-segment.html` | **05 D1 Live - Wealth Segment** | Wealth content |
| `day1-lunch-break.html` | **05 D1 Live - Lunch Break** | Break announcement |
| `day1-back-from-lunch.html` | **05 D1 Live - Back From Lunch** | Resuming |
| `day1-end.html` | **05 D1 Live - Day 1 End** | Day 1 wrap-up |

---

### 06 - Day 2 Reminders (8 templates)

*Sent BEFORE Day 2 starts and to late joiners*

| File | GHL Template Name | Timing |
|------|-------------------|--------|
| `day2-2hours.html` | **06 D2 Reminder - 2 Hours** | -2h |
| `day2-1hour.html` | **06 D2 Reminder - 1 Hour** | -1h |
| `day2-45min.html` | **06 D2 Reminder - 45 Min** | -45m |
| `day2-30min.html` | **06 D2 Reminder - 30 Min** | -30m |
| `day2-15min.html` | **06 D2 Reminder - 15 Min** | -15m |
| `day2-live.html` | **06 D2 Reminder - We're Live** | T=0 |
| `day2-late-15min.html` | **06 D2 Reminder - Late Joiner 15 Min** | +15m |
| `day2-late-30min.html` | **06 D2 Reminder - Late Joiner 30 Min** | +30m |

---

### 07 - Day 2 Live Broadcasts (7 templates)

*Sent DURING Day 2 workshop*

| File | GHL Template Name | Content |
|------|-------------------|---------|
| `day2-opening.html` | **07 D2 Live - Opening** | Day 2 begins |
| `day2-mh-segment.html` | **07 D2 Live - Mark Hamilton Segment** | MH segment |
| `day2-lunch-break.html` | **07 D2 Live - Lunch Break** | Break announcement |
| `day2-back-from-lunch.html` | **07 D2 Live - Back From Lunch** | Resuming |
| `day2-integration.html` | **07 D2 Live - Integration Segment** | Final integration |
| `day2-l3-offer.html` | **07 D2 Live - L3 Offer** | Level 3 announcement |
| `day2-end.html` | **07 D2 Live - Day 2 End** | Workshop close |

---

### 08 - Post-Event All Attendees (6 templates)

*Sent to ALL attendees after event*

| File | GHL Template Name | Day | Content |
|------|-------------------|-----|---------|
| `sunday-night-anchor.html` | **08 Post - Sunday Let It Land** | Sun | Reflection/rest |
| `monday-golden-life.html` | **08 Post - Monday Golden Life** | Mon | Golden Life Sheet |
| `tuesday-wealth-engine.html` | **08 Post - Tuesday Wealth Engine** | Tue | Wealth Calculator |
| `wednesday-fne-workbook.html` | **08 Post - Wednesday FNE Workbook** | Wed | FNE Workbook |
| `thursday-ambassador.html` | **08 Post - Thursday Ambassador** | Thu | Ambassador Program |
| `friday-infinite-vector.html` | **08 Post - Friday Infinite Vector** | Fri | Transformation Map |

---

### 09 - VIP Session (4 templates)

*VIP-only session on Monday*

| File | GHL Template Name | Timing |
|------|-------------------|--------|
| `vip-session-90min.html` | **09 VIP Session - 90 Min Before** | -90m |
| `vip-session-1hour.html` | **09 VIP Session - 1 Hour Before** | -1h |
| `vip-session-live.html` | **09 VIP Session - We're Live** | T=0 |
| `vip-session-recording.html` | **09 VIP Session - Recording Available** | +1d |

---

### 10 - Level 3 Purchase (8 templates)

*Sent to L3 purchasers only*

| File | GHL Template Name | Content |
|------|-------------------|---------|
| `l3-confirmation.html` | **10 L3 - Confirmation** | Purchase confirmation |
| `l3-sunday-night.html` | **10 L3 - Sunday Night** | Welcome message |
| `l3-monday-morning.html` | **10 L3 - Monday Morning** | Getting started |
| `welcome-party-today.html` | **10 L3 - Welcome Party Today** | Party announcement |
| `welcome-party-reminder.html` | **10 L3 - Welcome Party Reminder** | Party reminder |
| `welcome-party-30min.html` | **10 L3 - Welcome Party 30 Min** | 30 min before |
| `welcome-party-live.html` | **10 L3 - Welcome Party Live** | Party starting |
| `welcome-party-recording.html` | **10 L3 - Welcome Party Recording** | Recording available |

---

### 11 - L3 Offer Close (6 templates)

*Sent to NON-L3 attendees during offer window*

| File | GHL Template Name | Day | Content |
|------|-------------------|-----|---------|
| `monday-afternoon.html` | **11 L3 Close - Monday Afternoon** | Mon | First follow-up |
| `qa-call-offer.html` | **11 L3 Close - QA Call Offer** | Tue | Schedule Q&A call |
| `tuesday-evening.html` | **11 L3 Close - Tuesday Evening** | Tue | Evening reminder |
| `wednesday-afternoon.html` | **11 L3 Close - Wednesday Afternoon** | Wed | Deadline reminder |
| `wednesday-6pm.html` | **11 L3 Close - Wednesday 6PM** | Wed | 6 hours left |
| `wednesday-gentle-reminder.html` | **11 L3 Close - Wednesday Final** | Wed | Final hours |

---

## Quick Reference by Audience

| Audience | Template Prefixes |
|----------|-------------------|
| **All Registrants** | 01-08 |
| **VIP Only** | 02, 03 (VIP variant), 09 |
| **L3 Purchasers** | 10 |
| **Non-L3 (Offer Sequence)** | 11 |

---

## GHL Workflow Mapping

| Workflow | Templates |
|----------|-----------|
| Registration Confirmation | 01 Reg |
| VIP Purchase | 02 VIP |
| Pre-Event Sequence | 03 Pre |
| Day 1 Reminders | 04 D1 Reminder |
| Day 1 Live Broadcasts | 05 D1 Live |
| Day 2 Reminders | 06 D2 Reminder |
| Day 2 Live Broadcasts | 07 D2 Live |
| Post-Event Value Series | 08 Post |
| VIP Session Reminders | 09 VIP Session |
| L3 Purchase Confirmation | 10 L3 |
| L3 Offer Close Sequence | 11 L3 Close |

---

*Generated: January 2026*
*Total Templates: 74*
