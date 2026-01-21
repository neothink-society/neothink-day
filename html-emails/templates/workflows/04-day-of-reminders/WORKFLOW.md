# Workflow 04: Day-Of Reminders

## Overview
Countdown and reminder emails sent on the day of the event, based on offsets from event start time (T=0).

---

## Trigger
- **Type:** Date-based (offset from event start)
- **Base Time:** T=0 = Event Day 1 start (e.g., 11:00 AM Eastern)

---

## Day 1 Schedule

| Offset | Time (ET) | Template | Subject Line |
|--------|-----------|----------|--------------|
| -4h | 7:00 AM | `day1-4hours.html` | ☀️ Good morning — 4 hours until transformation |
| -2h | 9:00 AM | `day1-2hours.html` | 2 hours to go — are you ready? |
| -1h | 10:00 AM | `day1-1hour.html` | 1 HOUR — Final preparations |
| -30m | 10:30 AM | `day1-30min.html` | 30 MINUTES — Get in position |
| -15m | 10:45 AM | `day1-15min.html` | 🔴 15 MINUTES — Open your Zoom |
| T=0 | 11:00 AM | `day1-live.html` | 🔴 WE ARE LIVE — Join now! |
| +15m | 11:15 AM | `day1-late-15min.html` | 🔴 We've started — join now! |
| +30m | 11:30 AM | `day1-late-30min.html` | 🔴 You're missing it — get in here! |

---

## Day 2 Schedule

**Base Time:** Day 2 start = T+25h (12:00 PM Eastern the next day)

| Offset from D2 | Time (ET) | Template | Subject Line |
|----------------|-----------|----------|--------------|
| -2h | 10:00 AM | `day2-2hours.html` | Day 2 starts in 2 hours |
| -1h | 11:00 AM | `day2-1hour.html` | 1 hour until Day 2 begins |
| -45m | 11:15 AM | `day2-45min.html` | 45 minutes — prepare for integration |
| -30m | 11:30 AM | `day2-30min.html` | 30 MINUTES — Get ready |
| -15m | 11:45 AM | `day2-15min.html` | 🔴 15 MINUTES — Open Zoom |
| T=D2 | 12:00 PM | `day2-live.html` | 🔴 DAY 2 IS LIVE — Join now! |
| +15m | 12:15 PM | `day2-late-15min.html` | 🔴 Day 2 has started — join now! |
| +30m | 12:30 PM | `day2-late-30min.html` | 🔴 Integration is happening — get in! |

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
2. Trigger: **Event start date at 7:00 AM ET** (-4h from start)
3. Chain with Wait actions:
   - Send 4-hour email
   - Wait 2 hours
   - Send 2-hour email
   - Wait 1 hour
   - Send 1-hour email
   - etc.

### Late Joiner Logic (Optional)

To avoid sending late-joiner emails to people who are already in:
1. Check if contact has clicked Zoom link
2. If clicked, skip late-joiner emails
3. Use workflow branches or tag checks

---

## SMS Messages

### Day 1 - 1 Hour Before
```
Neothink Society: 1 HOUR until Day of Enlightenment begins! {{custom_values.doe_day_1_start_time}}. Have Zoom ready. This is what you've been waiting for!
```

### Day 1 - Live
```
Neothink Society: 🔴 WE ARE LIVE! Day of Enlightenment has begun. Join immediately: {{custom_values.doe_zoom_link}}
```

### Day 2 - 1 Hour Before
```
Neothink Society: Day 2 starts in 1 hour! {{custom_values.doe_day_2_start_time}}. Yesterday was just the beginning. Today we integrate.
```

### Day 2 - Live
```
Neothink Society: 🔴 DAY 2 IS LIVE! Integration begins now. Join: {{custom_values.doe_zoom_link}}
```

---

## Offset Reference (from T=0)

| Event | Offset | Time (ET) |
|-------|--------|-----------|
| Day 1, 4h before | -4h | 7:00 AM |
| Day 1 start | T=0 | 11:00 AM |
| Day 1, 30m after | +30m | 11:30 AM |
| Day 2, 2h before | +23h | 10:00 AM next day |
| Day 2 start | +25h | 12:00 PM next day |
| Day 2, 30m after | +25h 30m | 12:30 PM next day |

---

## GHL Template Names

### Day 1 Reminders (Phase 04)

| File | GHL Template Name |
|------|-------------------|
| `day1-4hours.html` | `DOE 04 Day 1 Reminder 4h` |
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
| `day2-2hours.html` | `DOE 06 Day 2 Reminder 2h` |
| `day2-1hour.html` | `DOE 06 Day 2 Reminder 1h` |
| `day2-45min.html` | `DOE 06 Day 2 Reminder 45m` |
| `day2-30min.html` | `DOE 06 Day 2 Reminder 30m` |
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
