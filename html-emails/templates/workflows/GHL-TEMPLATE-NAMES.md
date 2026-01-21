# GHL Email Template Naming Guide

**GHL Folder:** `DOE Event (with custom values)`
**Folder ID:** `6970eca22bd95529d2b9fc6c`
**Total Templates:** 72

---

## Naming Convention

```
DOE [##] [Phase] [Description] [AUDIENCE]
```

**Components:**
- `DOE` - Identifies as Day of Enlightenment template
- `##` - Two-digit phase number for sorting
- `Phase` - Short phase identifier
- `Description` - What the email is about
- `[AUDIENCE]` - Who receives it

**Audience Tags:**
| Tag | Meaning |
|-----|---------|
| `[ALL]` | All registrants |
| `[VIP]` | VIP ticket holders only |
| `[L3]` | Level 3 purchasers only |
| `[NON-L3]` | Attendees who haven't purchased L3 |

---

## Phase Reference

| # | Phase | Description | Count |
|---|-------|-------------|-------|
| 01 | `Reg` | Registration | 2 |
| 02 | `VIP-Buy` | VIP Purchase Confirmation | 2 |
| 03 | `Pre` | Pre-Event Countdown | 14 |
| 04 | `D1-Pre` | Day 1 Reminders (before start) | 8 |
| 05 | `D1-Live` | Day 1 Broadcasts (during) | 7 |
| 06 | `D2-Pre` | Day 2 Reminders (before start) | 8 |
| 07 | `D2-Live` | Day 2 Broadcasts (during) | 7 |
| 08 | `Post` | Post-Event Value Series | 6 |
| 09 | `VIP-Sess` | VIP Session (Monday) | 4 |
| 10 | `L3` | Level 3 Purchase | 8 |
| 11 | `L3-Close` | L3 Offer Closing Sequence | 6 |

---

## Complete Template List

### 01 - Registration (2)

| File | GHL Name |
|------|----------|
| `registration-confirmation.html` | `DOE 01 Reg Confirmation [ALL]` |
| `welcome-followup.html` | `DOE 01 Reg Welcome Followup [ALL]` |

---

### 02 - VIP Purchase (2)

| File | GHL Name |
|------|----------|
| `vip-confirmation.html` | `DOE 02 VIP-Buy Confirmation [VIP]` |
| `vip-zoom-background.html` | `DOE 02 VIP-Buy Zoom Background [VIP]` |

---

### 03 - Pre-Event Countdown (14)

| File | GHL Name |
|------|----------|
| `countdown-30days.html` | `DOE 03 Pre 30d [ALL]` |
| `countdown-25days.html` | `DOE 03 Pre 25d [ALL]` |
| `countdown-20days.html` | `DOE 03 Pre 20d [ALL]` |
| `countdown-14days.html` | `DOE 03 Pre 14d [ALL]` |
| `countdown-10days.html` | `DOE 03 Pre 10d [ALL]` |
| `countdown-9days.html` | `DOE 03 Pre 9d [ALL]` |
| `countdown-7days.html` | `DOE 03 Pre 7d [ALL]` |
| `countdown-5days.html` | `DOE 03 Pre 5d [ALL]` |
| `countdown-4days.html` | `DOE 03 Pre 4d [ALL]` |
| `countdown-3days.html` | `DOE 03 Pre 3d [ALL]` |
| `countdown-3days-vip.html` | `DOE 03 Pre 3d [VIP]` |
| `countdown-2days.html` | `DOE 03 Pre 2d [ALL]` |
| `countdown-1day-morning.html` | `DOE 03 Pre 1d AM [ALL]` |
| `countdown-1day-evening.html` | `DOE 03 Pre 1d PM [ALL]` |

---

### 04 - Day 1 Pre-Event Reminders (8)

| File | GHL Name | Offset |
|------|----------|--------|
| `day1-4hours.html` | `DOE 04 D1-Pre 4h [ALL]` | -4h |
| `day1-2hours.html` | `DOE 04 D1-Pre 2h [ALL]` | -2h |
| `day1-1hour.html` | `DOE 04 D1-Pre 1h [ALL]` | -1h |
| `day1-30min.html` | `DOE 04 D1-Pre 30m [ALL]` | -30m |
| `day1-15min.html` | `DOE 04 D1-Pre 15m [ALL]` | -15m |
| `day1-live.html` | `DOE 04 D1-Pre Live Now [ALL]` | T=0 |
| `day1-late-15min.html` | `DOE 04 D1-Pre Late +15m [ALL]` | +15m |
| `day1-late-30min.html` | `DOE 04 D1-Pre Late +30m [ALL]` | +30m |

---

### 05 - Day 1 Live Broadcasts (7)

| File | GHL Name | Content |
|------|----------|---------|
| `day1-opening.html` | `DOE 05 D1-Live Opening [ALL]` | Workshop begins |
| `day1-wh-live-now.html` | `DOE 05 D1-Live WH Starting [ALL]` | Wallace Hamilton starting |
| `day1-wh-in-session.html` | `DOE 05 D1-Live WH In Session [ALL]` | Wallace Hamilton ongoing |
| `day1-wealth-segment.html` | `DOE 05 D1-Live Wealth Segment [ALL]` | Wealth content |
| `day1-lunch-break.html` | `DOE 05 D1-Live Lunch Break [ALL]` | Break starts |
| `day1-back-from-lunch.html` | `DOE 05 D1-Live Back From Lunch [ALL]` | Resuming |
| `day1-end.html` | `DOE 05 D1-Live End [ALL]` | Day 1 wrap |

---

### 06 - Day 2 Pre-Event Reminders (8)

| File | GHL Name | Offset |
|------|----------|--------|
| `day2-2hours.html` | `DOE 06 D2-Pre 2h [ALL]` | -2h |
| `day2-1hour.html` | `DOE 06 D2-Pre 1h [ALL]` | -1h |
| `day2-45min.html` | `DOE 06 D2-Pre 45m [ALL]` | -45m |
| `day2-30min.html` | `DOE 06 D2-Pre 30m [ALL]` | -30m |
| `day2-15min.html` | `DOE 06 D2-Pre 15m [ALL]` | -15m |
| `day2-live.html` | `DOE 06 D2-Pre Live Now [ALL]` | T=0 |
| `day2-late-15min.html` | `DOE 06 D2-Pre Late +15m [ALL]` | +15m |
| `day2-late-30min.html` | `DOE 06 D2-Pre Late +30m [ALL]` | +30m |

---

### 07 - Day 2 Live Broadcasts (7)

| File | GHL Name | Content |
|------|----------|---------|
| `day2-opening.html` | `DOE 07 D2-Live Opening [ALL]` | Day 2 begins |
| `day2-mh-segment.html` | `DOE 07 D2-Live MH Segment [ALL]` | Mark Hamilton |
| `day2-lunch-break.html` | `DOE 07 D2-Live Lunch Break [ALL]` | Break starts |
| `day2-back-from-lunch.html` | `DOE 07 D2-Live Back From Lunch [ALL]` | Resuming |
| `day2-integration.html` | `DOE 07 D2-Live Integration [ALL]` | Final integration |
| `day2-l3-offer.html` | `DOE 07 D2-Live L3 Offer [ALL]` | Level 3 pitch |
| `day2-end.html` | `DOE 07 D2-Live End [ALL]` | Workshop close |

---

### 08 - Post-Event All Attendees (6)

| File | GHL Name | Day |
|------|----------|-----|
| `sunday-night-anchor.html` | `DOE 08 Post Sun - Let It Land [ALL]` | Sun night |
| `monday-golden-life.html` | `DOE 08 Post Mon - Golden Life [ALL]` | Monday |
| `tuesday-wealth-engine.html` | `DOE 08 Post Tue - Wealth Engine [ALL]` | Tuesday |
| `wednesday-fne-workbook.html` | `DOE 08 Post Wed - FNE Workbook [ALL]` | Wednesday |
| `thursday-ambassador.html` | `DOE 08 Post Thu - Ambassador [ALL]` | Thursday |
| `friday-infinite-vector.html` | `DOE 08 Post Fri - Infinite Vector [ALL]` | Friday |

---

### 09 - VIP Session Monday (4)

| File | GHL Name | Timing |
|------|----------|--------|
| `vip-session-90min.html` | `DOE 09 VIP-Sess 90m [VIP]` | -90m |
| `vip-session-1hour.html` | `DOE 09 VIP-Sess 1h [VIP]` | -1h |
| `vip-session-live.html` | `DOE 09 VIP-Sess Live Now [VIP]` | T=0 |
| `vip-session-recording.html` | `DOE 09 VIP-Sess Recording [VIP]` | +1d |

---

### 10 - Level 3 Purchase (8)

| File | GHL Name |
|------|----------|
| `l3-confirmation.html` | `DOE 10 L3 Confirmation [L3]` |
| `l3-sunday-night.html` | `DOE 10 L3 Sun Night [L3]` |
| `l3-monday-morning.html` | `DOE 10 L3 Mon Morning [L3]` |
| `welcome-party-today.html` | `DOE 10 L3 Party Today [L3]` |
| `welcome-party-reminder.html` | `DOE 10 L3 Party Reminder [L3]` |
| `welcome-party-30min.html` | `DOE 10 L3 Party 30m [L3]` |
| `welcome-party-live.html` | `DOE 10 L3 Party Live [L3]` |
| `welcome-party-recording.html` | `DOE 10 L3 Party Recording [L3]` |

---

### 11 - L3 Offer Closing (6)

| File | GHL Name | Timing |
|------|----------|--------|
| `monday-afternoon.html` | `DOE 11 L3-Close Mon PM [NON-L3]` | Mon afternoon |
| `qa-call-offer.html` | `DOE 11 L3-Close QA Call [NON-L3]` | Tue |
| `tuesday-evening.html` | `DOE 11 L3-Close Tue PM [NON-L3]` | Tue evening |
| `wednesday-afternoon.html` | `DOE 11 L3-Close Wed PM [NON-L3]` | Wed afternoon |
| `wednesday-6pm.html` | `DOE 11 L3-Close Wed 6h Left [NON-L3]` | Wed 6pm |
| `wednesday-gentle-reminder.html` | `DOE 11 L3-Close Wed Final [NON-L3]` | Wed final |

---

## Quick Filters

**By Audience:**
- `[ALL]` - 57 templates
- `[VIP]` - 7 templates
- `[L3]` - 8 templates
- `[NON-L3]` - 6 templates

**By Day:**
- Day 1: Phases 04, 05
- Day 2: Phases 06, 07
- Post-Event: Phases 08, 09, 10, 11

---

## Abbreviations Used

| Abbrev | Meaning |
|--------|---------|
| `DOE` | Day of Enlightenment |
| `Reg` | Registration |
| `Pre` | Pre-event countdown |
| `D1` | Day 1 (Saturday) |
| `D2` | Day 2 (Sunday) |
| `WH` | Wallace Hamilton |
| `MH` | Mark Hamilton |
| `FNE` | Friday Night Essence |
| `L3` | Level 3 |
| `VIP-Buy` | VIP ticket purchase |
| `VIP-Sess` | VIP Session (Monday event) |
| `d` | days |
| `h` | hours |
| `m` | minutes |
| `AM/PM` | morning/afternoon |

---

## GHL Workflow Mapping

| Workflow Name | Template Prefix |
|---------------|-----------------|
| DOE Registration | `DOE 01 Reg` |
| DOE VIP Purchase | `DOE 02 VIP-Buy` |
| DOE Pre-Event Sequence | `DOE 03 Pre` |
| DOE Day 1 Reminders | `DOE 04 D1-Pre` |
| DOE Day 1 Live | `DOE 05 D1-Live` |
| DOE Day 2 Reminders | `DOE 06 D2-Pre` |
| DOE Day 2 Live | `DOE 07 D2-Live` |
| DOE Post-Event | `DOE 08 Post` |
| DOE VIP Session | `DOE 09 VIP-Sess` |
| DOE L3 Purchase | `DOE 10 L3` |
| DOE L3 Offer Close | `DOE 11 L3-Close` |

---

*Updated: January 2026*
