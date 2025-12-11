# GoHighLevel Automation Timeline
## Day of Enlightenment — December 2025

**EVENT START:** Saturday, December 6, 2025 @ 8:00 AM Pacific / 11:00 AM Eastern
**This is the reference point (T=0) for all timing calculations**

---

## QUICK REFERENCE: KEY TIMESTAMPS

| Event | Date/Time (PT) | Date/Time (ET) | Offset from Event Start |
|-------|----------------|----------------|-------------------------|
| Event Start (Day 1) | Sat Dec 6, 8:00 AM | Sat Dec 6, 11:00 AM | **T = 0** |
| VIP Deadline | Sat Dec 6, 9:00 AM | Sat Dec 6, 12:00 PM | T + 1 hour |
| Day 1 Ends | Sat Dec 6, 5:00 PM | Sat Dec 6, 8:00 PM | T + 9 hours |
| Day 2 Starts | Sun Dec 7, 9:00 AM | Sun Dec 7, 12:00 PM | T + 25 hours |
| Day 2 Ends | Sun Dec 7, 5:00 PM | Sun Dec 7, 8:00 PM | T + 33 hours |
| VIP Session | Mon Dec 8, 3:00 PM | Mon Dec 8, 6:00 PM | T + 55 hours |
| Welcome Party | Wed Dec 10, 4:00 PM | Wed Dec 10, 7:00 PM | T + 104 hours |
| L3 Deadline | Wed Dec 10, 9:00 PM | Thu Dec 11, 12:00 AM | T + 109 hours |

---

## COMPLETE MESSAGE TIMELINE

### LEGEND
- **[E]** = Email
- **[S]** = SMS
- **Offset** = Hours before (-) or after (+) event start
- **Condition** = Audience segmentation logic

---

## PHASE 1: PRE-EVENT (Before T=0)

### Trigger-Based (On Registration/Purchase)
| Type | Message | Offset | Condition |
|------|---------|--------|-----------|
| [E] | registration-confirmation.html | On registration | All |
| [S] | Registration Confirmation | On registration | All |
| [E] | vip-confirmation.html | On VIP purchase | VIP only |
| [S] | VIP Confirmation | On VIP purchase | VIP only |
| [E] | welcome-confirmation.html | 10 min after reg | All |
| [E] | vip-zoom-background.html | After VIP confirm | VIP only |
| [S] | VIP Zoom Background | After VIP confirm | VIP only |

### Scheduled Pre-Event Sequence

| Type | Message | Send Date/Time (ET) | Offset | Condition |
|------|---------|---------------------|--------|-----------|
| [E] | preparation-14days.html | Sat Nov 22, 9:00 AM | **-336 hrs** (-14 days) | All |
| [E] | preparation-9days.html | Thu Nov 27, 9:00 AM | **-216 hrs** (-9 days) | All |
| [E] | preparation-7days.html | Sat Nov 29, 9:00 AM | **-168 hrs** (-7 days) | All |
| [E] | preparation-5days.html | Mon Dec 1, 9:00 AM | **-120 hrs** (-5 days) | All |
| [S] | 5 Days Out | Mon Dec 1, 9:00 AM | **-120 hrs** (-5 days) | All |
| [E] | preparation-4days.html | Tue Dec 2, 9:00 AM | **-96 hrs** (-4 days) | All |
| [S] | 4 Days Out | Tue Dec 2, 9:00 AM | **-96 hrs** (-4 days) | All |
| [E] | preparation-3days.html | Wed Dec 3, 9:00 AM | **-72 hrs** (-3 days) | Non-VIP |
| [E] | preparation-3days-vip.html | Wed Dec 3, 9:00 AM | **-72 hrs** (-3 days) | VIP only |
| [S] | 3 Days Out (Non-VIP) | Wed Dec 3, 9:00 AM | **-72 hrs** (-3 days) | Non-VIP |
| [S] | 3 Days Out (VIP) | Wed Dec 3, 9:00 AM | **-72 hrs** (-3 days) | VIP only |
| [E] | preparation-2days.html | Thu Dec 4, 9:00 AM | **-48 hrs** (-2 days) | All |
| [S] | 2 Days Out (Non-VIP) | Thu Dec 4, 9:00 AM | **-48 hrs** (-2 days) | Non-VIP |
| [S] | 2 Days Out (VIP) | Thu Dec 4, 9:00 AM | **-48 hrs** (-2 days) | VIP only |
| [E] | preparation-1day.html | Fri Dec 5, 7:00 PM | **-16 hrs** | All |
| [S] | 1 Day Out (Non-VIP) | Fri Dec 5, 7:00 PM | **-16 hrs** | Non-VIP |
| [S] | 1 Day Out (VIP) | Fri Dec 5, 7:00 PM | **-16 hrs** | VIP only |

---

## PHASE 2: DAY 1 COUNTDOWN (T-3 to T=0)

| Type | Message | Send Time (ET) | Offset | Condition |
|------|---------|----------------|--------|-----------|
| [E] | day1-countdown-2hr.html | Sat Dec 6, 9:00 AM | **-2 hrs** | All |
| [S] | 2 Hours Until Event | Sat Dec 6, 9:00 AM | **-2 hrs** | All |
| [E] | day-of.html | Sat Dec 6, 10:00 AM | **-1 hr** | All |
| [E] | day1-countdown-1hr.html | Sat Dec 6, 10:00 AM | **-1 hr** | All |
| [S] | Zoom Link Delivery | Sat Dec 6, 10:00 AM | **-1 hr** | All |
| [E] | day1-countdown-30min.html | Sat Dec 6, 10:30 AM | **-30 min** | All |
| [S] | Doors Are Open | Sat Dec 6, 10:30 AM | **-30 min** | All |
| [E] | day1-countdown-live.html | Sat Dec 6, 11:00 AM | **T = 0** | All |
| [S] | WE'RE LIVE | Sat Dec 6, 11:00 AM | **T = 0** | All |

---

## PHASE 3: DAY 1 WORKSHOP (Live Triggers)

These are **manual triggers** sent when specific moments happen during the live event.

| Type | Message | Trigger | Approx Time (ET) | Offset | Condition |
|------|---------|---------|------------------|--------|-----------|
| [E] | 01-day1-opening.html | WH takes stage | ~11:00 AM | **T + 0** | All |
| [S] | WH Takes Stage | WH takes stage | ~11:00 AM | **T + 0** | All |
| [E] | 01b-day1-wh-in-session.html | Mid-morning | ~11:30 AM | **T + 0.5 hrs** | All |
| [S] | WH In Session | Mid-morning | ~11:30 AM | **T + 0.5 hrs** | All |
| [E] | 02-day1-lunch-break.html | Lunch starts | ~1:00 PM | **T + 2 hrs** | All |
| [S] | Day 1 Lunch Break | Lunch starts | ~1:00 PM | **T + 2 hrs** | All |
| [E] | 03-day1-back-from-lunch.html | After lunch | ~2:00 PM | **T + 3 hrs** | All |
| [S] | Back from Lunch | After lunch | ~2:00 PM | **T + 3 hrs** | All |
| [E] | 04-day1-wealth-segment.html | Wealth segment | ~3:00 PM | **T + 4 hrs** | All |
| [S] | Wealth Segment Starting | Wealth segment | ~3:00 PM | **T + 4 hrs** | All |
| [E] | 05-day1-end.html | Day 1 ends | ~8:00 PM | **T + 9 hrs** | All |
| [S] | Day 1 Complete | Day 1 ends | ~8:00 PM | **T + 9 hrs** | All |

---

## PHASE 4: DAY 2 COUNTDOWN

| Type | Message | Send Time (ET) | Offset | Condition |
|------|---------|----------------|--------|-----------|
| [E] | day2-countdown-2hr.html | Sun Dec 7, 10:00 AM | **T + 23 hrs** | All |
| [S] | Day 2 - 2 Hours | Sun Dec 7, 10:00 AM | **T + 23 hrs** | All |
| [E] | day2-countdown-45min.html | Sun Dec 7, 11:15 AM | **T + 24.25 hrs** | All |
| [S] | Day 2 - 45 Minutes | Sun Dec 7, 11:15 AM | **T + 24.25 hrs** | All |
| [E] | day2-countdown-15min.html | Sun Dec 7, 11:45 AM | **T + 24.75 hrs** | All |
| [S] | Doors Open | Sun Dec 7, 11:45 AM | **T + 24.75 hrs** | All |
| [E] | day2-countdown-live.html | Sun Dec 7, 12:00 PM | **T + 25 hrs** | All |
| [S] | Day 2 Is LIVE | Sun Dec 7, 12:00 PM | **T + 25 hrs** | All |

---

## PHASE 5: DAY 2 WORKSHOP (Live Triggers)

| Type | Message | Trigger | Approx Time (ET) | Offset | Condition |
|------|---------|---------|------------------|--------|-----------|
| [E] | 06-day2-opening.html | Day 2 starts | ~12:00 PM | **T + 25 hrs** | All |
| [S] | Day 2 Opening | Day 2 starts | ~12:00 PM | **T + 25 hrs** | All |
| [E] | 07-day2-mh-segment.html | MH takes stage | ~1:00 PM | **T + 26 hrs** | All |
| [S] | Mark Hamilton on Stage | MH takes stage | ~1:00 PM | **T + 26 hrs** | All |
| [E] | 08-day2-lunch-break.html | Lunch starts | ~2:00 PM | **T + 27 hrs** | All |
| [S] | Day 2 Lunch Break | Lunch starts | ~2:00 PM | **T + 27 hrs** | All |
| [E] | 09-day2-back-from-lunch.html | After lunch | ~3:00 PM | **T + 28 hrs** | All |
| [S] | Final Session | After lunch | ~3:00 PM | **T + 28 hrs** | All |
| [E] | 10-day2-integration.html | Integration | ~4:00 PM | **T + 29 hrs** | All |
| [S] | Integration Segment | Integration | ~4:00 PM | **T + 29 hrs** | All |
| [E] | 11-day2-end.html | Workshop ends | ~8:00 PM | **T + 33 hrs** | All |
| [S] | Workshop Complete | Workshop ends | ~8:00 PM | **T + 33 hrs** | All |
| [E] | 12-level3-segment.html | L3 announced | ~6:00 PM | **T + 31 hrs** | All |
| [S] | L3 Enrollment Open | L3 announced | ~6:00 PM | **T + 31 hrs** | All |
| [E] | day2-complete-level3.html | Evening | ~8:00 PM | **T + 33 hrs** | Non-L3 |

---

## PHASE 6: MONDAY MORNING AFTER (T + 46 hrs)

| Type | Message | Send Time (ET) | Offset | Condition |
|------|---------|----------------|--------|-----------|
| [E] | 12-morning-after.html | Mon Dec 8, 9:00 AM | **T + 46 hrs** | All (segmented) |
| [S] | Morning After (L2) | Mon Dec 8, 9:00 AM | **T + 46 hrs** | L2 non-VIP, non-L3 |
| [S] | Morning After (VIP) | Mon Dec 8, 9:00 AM | **T + 46 hrs** | VIP only |
| [S] | Morning After (L3) | Mon Dec 8, 9:00 AM | **T + 46 hrs** | L3 only |
| [E] | level3-followup-morning.html | Mon Dec 8, 9:00 AM | **T + 46 hrs** | Non-L3 |
| [E] | level3-followup-midday.html | Mon Dec 8, 2:00 PM | **T + 51 hrs** | Non-L3 |
| [E] | level3-followup-afternoon.html | Mon Dec 8, 7:00 PM | **T + 56 hrs** | Non-L3 |

---

## PHASE 7: VIP SESSION (Monday T + 55 hrs)

| Type | Message | Send Time (ET) | Offset | Condition |
|------|---------|----------------|--------|-----------|
| [E] | vip-session-reminder.html | Mon Dec 8, 9:00 AM | **T + 46 hrs** | VIP + L3 |
| [S] | VIP Session Morning | Mon Dec 8, 9:00 AM | **T + 46 hrs** | VIP + L3 |
| [E] | vip-session-1hour.html | Mon Dec 8, 5:00 PM | **T + 54 hrs** | VIP + L3 |
| [S] | VIP Session 30 Min | Mon Dec 8, 5:30 PM | **T + 54.5 hrs** | VIP + L3 |
| [E] | vip-session-live.html | Mon Dec 8, 6:00 PM | **T + 55 hrs** | VIP + L3 |
| [S] | VIP Session LIVE | Mon Dec 8, 6:00 PM | **T + 55 hrs** | VIP + L3 |
| [E] | vip-session-recording.html | Tue Dec 9, 10:00 AM | **T + 71 hrs** | VIP + L3 |

---

## PHASE 8: LEVEL 3 DEADLINE SEQUENCE (Tue-Wed)

### Tuesday, December 9

| Type | Message | Send Time (ET) | Offset | Condition |
|------|---------|----------------|--------|-----------|
| [E] | 01-tuesday-morning.html | Tue Dec 9, 9:00 AM | **T + 70 hrs** | Non-L3 |
| [S] | L3 - 24 Hours | Tue Dec 9, 9:00 AM | **T + 70 hrs** | Non-L3 |
| [E] | 02-tuesday-afternoon.html | Tue Dec 9, 2:00 PM | **T + 75 hrs** | Non-L3 |
| [S] | L3 - What 3 Days Gives | Tue Dec 9, 2:00 PM | **T + 75 hrs** | Non-L3 |
| [E] | 03-tuesday-evening.html | Tue Dec 9, 8:00 PM | **T + 81 hrs** | Non-L3 |
| [S] | L3 - Last Night | Tue Dec 9, 8:00 PM | **T + 81 hrs** | Non-L3 |

### Wednesday, December 10

| Type | Message | Send Time (ET) | Offset | Condition |
|------|---------|----------------|--------|-----------|
| [E] | 04-wednesday-morning.html | Wed Dec 10, 9:00 AM | **T + 94 hrs** | Non-L3 |
| [S] | L3 - Today Is The Day | Wed Dec 10, 9:00 AM | **T + 94 hrs** | Non-L3 |
| [E] | 05-wednesday-afternoon.html | Wed Dec 10, 3:00 PM | **T + 100 hrs** | Non-L3 |
| [S] | L3 - Hours Left | Wed Dec 10, 3:00 PM | **T + 100 hrs** | Non-L3 |
| [E] | 06-wednesday-final.html | Wed Dec 10, 11:00 PM | **T + 108 hrs** | Non-L3 |
| [S] | L3 - Final Note | Wed Dec 10, 11:00 PM | **T + 108 hrs** | Non-L3 |
| **DEADLINE** | **L3 Honor System Expires** | Thu Dec 11, 12:00 AM | **T + 109 hrs** | — |

### Thursday, December 11 (Post-Deadline)

| Type | Message | Send Time (ET) | Offset | Condition |
|------|---------|----------------|--------|-----------|
| [E] | post-deadline-closed.html | Thu Dec 11, 10:00 AM | **T + 119 hrs** | Non-L3 |

---

## PHASE 9: LEVEL 3 WELCOME PARTY (Wed T + 104 hrs)

| Type | Message | Send Time (ET) | Offset | Condition |
|------|---------|----------------|--------|-----------|
| [E] | welcome-party-reminder.html | Tue Dec 9, evening | **T + 82 hrs** | L3 only |
| [E] | welcome-party-today.html | Wed Dec 10, 10:00 AM | **T + 95 hrs** | L3 only |
| [S] | Welcome Party Morning | Wed Dec 10, 10:00 AM | **T + 95 hrs** | L3 only |
| [E] | welcome-party-correction.html | Wed Dec 10, 6:00 PM | **T + 103 hrs** | L3 only |
| [E] | welcome-party-30min.html | Wed Dec 10, 6:30 PM | **T + 103.5 hrs** | L3 only |
| [S] | Welcome Party 30 Min | Wed Dec 10, 6:30 PM | **T + 103.5 hrs** | L3 only |
| [E] | welcome-party-live.html | Wed Dec 10, 7:00 PM | **T + 104 hrs** | L3 only |
| [S] | Welcome Party LIVE | Wed Dec 10, 7:00 PM | **T + 104 hrs** | L3 only |

---

## PHASE 10: POST-EVENT VALUE SERIES (Thu-Mon)

| Type | Message | Send Time (ET) | Offset | Condition |
|------|---------|----------------|--------|-----------|
| [E] | 01-golden-life-sheet.html | Thu Dec 11, 9:00 AM | **T + 118 hrs** | All |
| [S] | Golden Life Sheet | Thu Dec 11, 9:00 AM | **T + 118 hrs** | All |
| [E] | 02-wealth-engine-calculator.html | Fri Dec 12, 9:00 AM | **T + 142 hrs** | All |
| [S] | Wealth Engine Calculator | Fri Dec 12, 9:00 AM | **T + 142 hrs** | All |
| [E] | 03-fne-workbook.html | Sat Dec 13, 10:00 AM | **T + 167 hrs** | All |
| [S] | FNE Workbook | Sat Dec 13, 10:00 AM | **T + 167 hrs** | All |
| [E] | 04-how-it-all-fits-together.html | Mon Dec 15, 9:00 AM | **T + 214 hrs** | All |

---

## PHASE 11: AMBASSADOR PROGRAM

| Type | Message | Send Time (ET) | Offset | Condition |
|------|---------|----------------|--------|-----------|
| [E] | ambassador-program.html | Sat Dec 13, afternoon | **T + 172 hrs** | All L2 |
| [S] | Ambassador Program | Sat Dec 13, afternoon | **T + 172 hrs** | All L2 |

---

## GHL CONDITIONAL LOGIC SUMMARY

### Audience Segments (Tags/Custom Fields)

| Segment | Definition | Used For |
|---------|------------|----------|
| **All** | Everyone registered | Most pre-event, countdown, value series |
| **VIP** | VIP ticket holder | VIP-specific prep, VIP session access |
| **Non-VIP** | Has NOT purchased VIP | VIP upgrade prompts |
| **L3** | Enrolled in Level 3 | L3 confirmation, Welcome Party |
| **Non-L3** | Has NOT enrolled in L3 | L3 deadline sequence |
| **VIP + L3** | Either VIP OR L3 | VIP session access |
| **L2 non-VIP non-L3** | Basic attendee | Standard morning after |

### GHL Workflow Branch Logic

```
IF contact.tag CONTAINS "vip"
  → Send VIP version
ELSE
  → Send Non-VIP version

IF contact.tag CONTAINS "level-3"
  → Skip L3 deadline sequence
  → Send Welcome Party sequence
ELSE
  → Send L3 deadline sequence
  → Skip Welcome Party sequence

IF contact.tag CONTAINS "vip" OR contact.tag CONTAINS "level-3"
  → Send VIP Session reminders
```

---

## GHL CUSTOM VALUES REQUIRED

| Variable | Description | Example |
|----------|-------------|---------|
| `{{trigger_link.bw3pFLlMkAQiQOlYB674}}` | Main workshop Zoom link | Direct URL |
| `{{custom_values.doe_zoom_id}}` | Main workshop Meeting ID | 890 3406 5077 |
| `{{custom_values.doe_zoom_passcode}}` | Main workshop Passcode | [passcode] |
| `{{custom_values.doe_day_1_return_time}}` | Day 1 lunch return | "2:00 PM Eastern..." |
| `{{custom_values.doe_day_2_return_time}}` | Day 2 lunch return | "2:00 PM Eastern..." |
| `{{VIP_SESSION_ZOOM_LINK}}` | VIP session Zoom link | Direct URL |
| `{{VIP_MEETING_ID}}` | VIP session Meeting ID | [ID] |
| `{{VIP_PASSCODE}}` | VIP session Passcode | [passcode] |

---

## TOTAL MESSAGE COUNT

| Category | Emails | SMS |
|----------|--------|-----|
| Pre-Event (Trigger) | 4 | 3 |
| Pre-Event (Scheduled) | 9 | 10 |
| Day 1 Countdown | 5 | 5 |
| Day 1 Workshop | 7 | 7 |
| Day 2 Countdown | 4 | 4 |
| Day 2 Workshop | 8 | 8 |
| Monday Morning | 4 | 3 |
| VIP Session | 4 | 3 |
| L3 Deadline | 7 | 6 |
| Welcome Party | 5 | 3 |
| Value Series | 4 | 3 |
| Ambassador | 1 | 1 |
| **TOTAL** | **~62** | **~56** |

---

## WORKFLOW STRUCTURE RECOMMENDATION

### Option A: Single Automation with Date Math
- Use event start date as anchor
- Calculate all sends based on hours before/after
- Pros: Single workflow to manage
- Cons: Complex, harder to debug

### Option B: Multiple Workflows by Phase
1. **Registration Workflow** (trigger-based)
2. **Pre-Event Countdown** (date-based, T-14 days to T-1 day)
3. **Day 1 Countdown** (date-based, T-3 hours to T=0)
4. **Day 1 Live Triggers** (manual/webhook triggers)
5. **Day 2 Countdown** (date-based)
6. **Day 2 Live Triggers** (manual/webhook triggers)
7. **Post-Event Monday** (date-based)
8. **VIP Session** (date-based, VIP + L3 only)
9. **L3 Deadline** (date-based, Non-L3 only)
10. **Welcome Party** (date-based, L3 only)
11. **Value Series** (date-based, All)

### Option C: Hybrid
- Single automation for scheduled messages (using date math)
- Separate workflows for live triggers (manual/webhook)
- Best balance of maintainability and flexibility

---

**Version:** 1.0
**Created:** December 10, 2025
**Reference:** Event Start = Sat Dec 6, 2025 @ 8:00 AM PT / 11:00 AM ET
