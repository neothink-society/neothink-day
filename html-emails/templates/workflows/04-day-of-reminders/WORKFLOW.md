# Workflow 04: Day-Of Reminders

## Overview
Countdown and reminder emails sent on the day of the event, based on offsets from event start time (T=0).

---

## Trigger
- **Type:** Date-based (offset from event start)
- **Day 1 T=0:** 11:00 AM Eastern / 8:00 AM Pacific (Saturday)
- **Day 2 T=0:** 11:00 AM Eastern / 8:00 AM Pacific (Sunday — separate workflow)

---

## Day 1 Schedule

| Offset | Time (ET) | Template | Subject Line |
|--------|-----------|----------|--------------|
| -2h | 9:00 AM | `day1-2hours.html` | 2 hours to go — are you ready? |
| -1h | 10:00 AM | `day1-1hour.html` | 1 HOUR — Final preparations |
| -30m | 10:30 AM | `day1-30min.html` | 30 MINUTES — Get in position |
| -15m | 10:45 AM | `day1-15min.html` | 15 MINUTES — Open your Zoom |
| T=0 | 11:00 AM | `day1-live.html` | WE ARE LIVE — Join now! |
| +15m | 11:15 AM | `day1-late-15min.html` | We've started — join now! |
| +30m | 11:30 AM | `day1-late-30min.html` | You're missing it — get in here! |

---

## Day 2 Schedule

**Base Time:** Day 2 T=0 = 11:00 AM Eastern / 8:00 AM Pacific (separate workflow with own event start time)
**Doors Open:** 10:30 AM Eastern / 7:30 AM Pacific

| Offset | Time (ET) | Template | Subject Line |
|--------|-----------|----------|--------------|
| -2h | 9:00 AM | `day2-02hours.html` | Day 2 in 2 hours |
| -1h | 10:00 AM | `day2-01hour.html` | 1 hour until Day 2 begins |
| -30m | 10:30 AM | `day2-30min.html` | Doors open — Day 2 in 30 min |
| -15m | 10:45 AM | `day2-15min.html` | 15 minutes — join the room |
| T=0 | 11:00 AM | `day2-live.html` | DAY 2 IS LIVE — Join now! |
| +15m | 11:15 AM | `day2-late-15min.html` | Day 2 has started — join now! |
| +30m | 11:30 AM | `day2-late-30min.html` | Day 2 is underway — get in! |

---

## GHL Setup Instructions

### Option A: Separate Workflows per Day

**Day 1 Workflow:**
1. Create workflow: `DOE - Day 1 Reminders`
2. Trigger: **Date-based** using custom date field
3. Add email actions with specific time triggers

**Day 2 Workflow:**
1. Create workflow: `DOE - Day 2 Reminders`
2. Trigger: **Date-based** (day after event start)
3. Add email actions with specific time triggers

### Option B: Combined Workflow with Wait Actions

1. Create workflow: `DOE - Day-Of Reminders`
2. Trigger: **Event start date at 9:00 AM ET** (-2h from start)
3. Chain with Wait actions:
   - Send 2-hour email
   - Wait 1 hour
   - Send 1-hour email
   - Wait 30 min
   - Send 30-min email
   - etc.

### Late Joiner Logic (Optional)

To avoid sending late-joiner emails to people who are already in:
1. Check if contact has clicked Zoom link
2. If clicked, skip late-joiner emails
3. Use workflow branches or tag checks

---

## SMS Messages

> **See `day-of-sms.md` for complete SMS messages with character counts and alternatives.**

**Day 1 SMS Schedule:**
| Message | Offset | Time (PT) |
|---------|--------|-----------|
| 2 Hours Before | -2h | 6:00 AM |
| Zoom Link | -1h | 7:00 AM |
| Doors Open | -30m | 7:30 AM |
| Live | T=0 | 8:00 AM |
| Late 15min | +15m | 8:15 AM |
| Late 30min | +30m | 8:30 AM |
| End of Day | +9h | 5:00 PM |

**Day 2 SMS Schedule:**
| Message | Offset | Time (PT) |
|---------|--------|-----------|
| 2 Hours Before | -2h | 6:00 AM |
| 1 Hour Before | -1h | 7:00 AM |
| Day 2 Live | T=0 | 8:00 AM |
| Late 15min | +15m | 8:15 AM |
| Late 30min | +30m | 8:30 AM |
| Complete | +9h | 5:00 PM |

---

## Offset Reference

Each day has its own T=0 at 8:00 AM Pacific / 11:00 AM Eastern.

**Day 1 (Saturday):**

| Event | Offset | Time (ET) |
|-------|--------|-----------|
| 2h before | -2h | 9:00 AM |
| Day 1 start | T=0 | 11:00 AM |
| 30m after | +30m | 11:30 AM |

**Day 2 (Sunday):**

| Event | Offset | Time (ET) |
|-------|--------|-----------|
| 2h before | -2h | 9:00 AM |
| 1h before | -1h | 10:00 AM |
| Doors open | -30m | 10:30 AM |
| Day 2 start | T=0 | 11:00 AM |
| 15m after | +15m | 11:15 AM |
| 30m after | +30m | 11:30 AM |

---

## GHL Template Names

### Day 1 Reminders (Phase 04)

| File | GHL Template Name |
|------|-------------------|
| `day1-2hours.html` | `DOE 04 Day 1 Reminder 2h` |
| `day1-1hour.html` | `DOE 04 Day 1 Reminder 1h` |
| `day1-30min.html` | `DOE 04 Day 1 Reminder 30m` |
| `day1-15min.html` | `DOE 04 Day 1 Reminder 15m` |
| `day1-live.html` | `DOE 04 Day 1 Live Now` |
| `day1-late-15min.html` | `DOE 04 Day 1 Late 15m` |
| `day1-late-30min.html` | `DOE 04 Day 1 Late 30m` |

### Day 2 Reminders (Phase 06)

| File | GHL Template Name |
|------|-------------------|
| `day2-02hours.html` | `DOE 06 Day 2 Reminder 2h` |
| `day2-01hour.html` | `DOE 06 Day 2 Reminder 1h` |
| `day2-30min.html` | `DOE 06 Day 2 Doors Open 30m` |
| `day2-15min.html` | `DOE 06 Day 2 Reminder 15m` |
| `day2-live.html` | `DOE 06 Day 2 Live Now` |
| `day2-late-15min.html` | `DOE 06 Day 2 Late 15m` |
| `day2-late-30min.html` | `DOE 06 Day 2 Late 30m` |

---

## Testing Checklist

- [ ] Day 1 emails trigger at correct times
- [ ] Day 2 emails trigger at correct times
- [ ] Zoom link/ID custom values display correctly
- [ ] Late joiner emails don't go to people who already joined
- [ ] SMS sends with correct timing
